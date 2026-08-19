# Como colocar os apps pra funcionar de verdade no celular
(Passo a passo 100% pelo celular, sem precisar de computador)

Você tem **dois aplicativos**:

- `loja-profissional.html` → **app da matriz** (você usa: estoque, vendas, cobranças, configurações)
- `loja-vendedor.html` → **app do vendedor** (só faz venda, conectado ao estoque da matriz, não pode mexer em preço)

Os dois já "conversam" entre si pelo mesmo servidor (Firebase) — o que o vendedor vender, aparece
na hora no seu app da matriz, e o estoque que você cadastrar aparece na hora pro vendedor vender.

## Por que não dá só para abrir o arquivo .html direto?

Pra instalar um app "de verdade" no celular (com ícone, abrindo em tela cheia, tipo WhatsApp),
ele precisa estar **hospedado num site (com link https)**. Vamos usar o **GitHub Pages**,
que é gratuito, é da Microsoft, e dá pra fazer inteiro pelo navegador do celular — sem
computador e sem instalar nada de programador.

## Passo 1 — Descompactar o arquivo

1. Abra o app **Arquivos** do seu celular.
2. Ache o arquivo `app-loja.zip`.
3. Toque nele → **"Extrair"** (Android) ou apenas toque nele (iPhone).
4. Confirme que virou uma pasta `app-loja` com os arquivos dentro (.html, .png, .json, .js).

## Passo 2 — Criar conta grátis no GitHub

1. No navegador do celular, acesse **github.com**
2. Toque em **"Sign up"** e crie a conta com seu e-mail.

## Passo 3 — Criar o espaço da loja

1. Toque no **"+"** no topo → **"New repository"**.
2. Nome: `loja-app`
3. Deixe como **Public**.
4. Toque em **"Create repository"**.

## Passo 4 — Subir os arquivos

1. Toque em **"Add file"** → **"Upload files"**.
2. Toque em **"choose your files"**.
3. Selecione TODOS os arquivos de dentro da pasta `app-loja` (pode marcar vários juntos).
4. Escreva uma mensagem tipo "primeira versão" e toque em **"Commit changes"**.

## Passo 5 — Ligar o site

1. Toque em **"Settings"** → **"Pages"** (no menu lateral).
2. Em "Branch", escolha **"main"** → toque em **"Save"**.
3. Espere 1–2 minutos. Vai aparecer o link:
   `https://SEUUSUARIO.github.io/loja-app/`

## Passo 6 — Seus links finais

- **App da matriz:** `https://SEUUSUARIO.github.io/loja-app/loja-profissional.html`
- **App do vendedor:** `https://SEUUSUARIO.github.io/loja-app/loja-vendedor.html`

## Passo 7 — Instalar no celular (igual WhatsApp)

1. Abra o link no **Chrome** (Android) ou **Safari** (iPhone).
2. **Android:** 3 pontinhos → **"Instalar aplicativo"** (ou "Adicionar à tela inicial").
3. **iPhone:** ícone de compartilhar → **"Adicionar à Tela de Início"**.
4. Aparece o ícone na tela — azul "LP" pra matriz, verde "V" pro vendedor — abrindo
   sozinho, sem barra de navegador.
5. Repita o passo 7 no celular de cada vendedor, usando o link do **app do vendedor**.

## O que o vendedor consegue fazer (e o que não consegue)

✅ Escolher o produto (vê o que tem disponível no estoque da matriz, em tempo real)
✅ Preencher os dados do cliente e o endereço
✅ Escolher à vista, a prazo, ou com entrada
✅ Concluir a venda (o estoque já baixa na hora, pra todo mundo ver)
✅ Ver as últimas vendas registradas, só pra conferência

🔒 **Não vê nem edita preço** — o valor vem sempre do que está cadastrado na matriz
🔒 Não entra no estoque, configurações, pagamentos recebidos ou notificações
🔒 Não consegue excluir nada

## Sobre vender ao mesmo tempo

Se dois vendedores tentarem vender a **última peça** do mesmo produto no mesmo segundo, o sistema
usa uma trava de segurança: só o primeiro consegue, o segundo recebe um aviso na hora — sem
duplicar venda nem furar o estoque.

## Um detalhe sincero

Alguns problemas que você viu antes (o "Excluir" não funcionando, os ícones quadrados) eram
porque você estava testando o arquivo **dentro do visualizador do Claude**, que bloqueia
algumas coisas por segurança. Uma vez hospedado de verdade (passo 1 a 6) e aberto no navegador
normal do celular, é bem provável que tudo funcione ainda melhor — mas deixei o app já preparado
pra funcionar direitinho dos dois jeitos, por garantia.
