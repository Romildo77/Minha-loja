const CACHE = 'loja-matriz-v1';
const ARQUIVOS = ['./loja-profissional.html', './manifest.json', './icon-matriz-192.png', './icon-matriz-512.png'];

self.addEventListener('install', (evento) => {
    evento.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ARQUIVOS)));
    self.skipWaiting();
});

self.addEventListener('activate', (evento) => {
    evento.waitUntil(
        caches.keys().then(chaves => Promise.all(chaves.filter(k => k !== CACHE).map(k => caches.delete(k))))
    );
    self.clients.claim();
});

// Tenta buscar na internet primeiro (pra sempre pegar dados atualizados);
// se não tiver conexão, usa a última versão salva - assim o app abre mesmo sem internet.
self.addEventListener('fetch', (evento) => {
    if (evento.request.method !== 'GET') return;
    evento.respondWith(
        fetch(evento.request).then(resposta => {
            const copia = resposta.clone();
            caches.open(CACHE).then(cache => cache.put(evento.request, copia));
            return resposta;
        }).catch(() => caches.match(evento.request))
    );
});
