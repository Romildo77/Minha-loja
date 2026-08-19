const CACHE = 'loja-vendedor-v1';
const ARQUIVOS = ['./loja-vendedor.html', './manifest-vendedor.json', './icon-vendedor-192.png', './icon-vendedor-512.png'];

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
