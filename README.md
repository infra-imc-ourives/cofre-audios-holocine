# Cofre — 30 Técnicas de Autoterapia

Interface web estática para os alunos ouvirem ou baixarem o compilado de 30 áudios de autoterapia, liberado ao vivo na formatura para quem completou as 15 ativações da campanha.

Sem login: o acesso é feito por link privado/não listado (compartilhado com os alunos elegíveis).

## Estrutura

```
index.html                    página principal
assets/css/style.css          estilos
assets/js/audios-data.js      configuração e lista dos 30 áudios (EDITAR AQUI)
assets/js/app.js              lógica do player, progresso e busca
audios/                       pasta opcional, caso algum áudio seja hospedado localmente no futuro
```

## Áudios

Os 30 áudios reais já estão configurados em `assets/js/audios-data.js`, apontando para a pasta "AUDIOS COFRE" no Google Drive, no formato de link de download direto:

```
https://drive.google.com/uc?export=download&id=ID_DO_ARQUIVO
```

> **Importante:** esse formato de link do Drive funciona bem para a maioria dos arquivos, mas o Google pode exibir uma página de confirmação ("não foi possível verificar vírus") em vez do áudio direto — principalmente em arquivos maiores ou após muitos downloads do mesmo arquivo. **Teste os 30 links num navegador comum (fora deste ambiente) antes de divulgar o link aos alunos.** Se algum link específico não tocar/baixar direto, a solução mais robusta é mover esse arquivo (ou todos) para um serviço pensado para hospedar arquivos públicos grandes (ex: Cloudflare R2, Backblaze B2, Bunny.net) e trocar apenas o valor de `arquivo` correspondente — o resto da página não precisa mudar.

Para editar título, descrição, duração ou arquivo de qualquer técnica, ou adicionar/remover itens, edite o array `AUDIOS` em `assets/js/audios-data.js`. Enquanto `arquivo` estiver vazio (`""`), o card aparece com a marcação "Em breve" e os botões de ouvir/baixar ficam desativados.

## Funcionalidades

- Player único (ao tocar um áudio, qualquer outro em reprodução é pausado).
- Download direto de cada áudio.
- Progresso "X de 30 ouvidos" salvo no navegador do próprio aluno (localStorage) — não é sincronizado entre dispositivos nem enviado a nenhum servidor.
- Busca por nome da técnica.
- Layout responsivo (funciona bem em celular, onde a maioria dos alunos vai acessar via WhatsApp).

## Publicar (deploy)

Como é um site 100% estático (HTML/CSS/JS, sem backend), pode ser publicado em qualquer serviço de hospedagem estática:

- **Vercel**: importe o repositório, sem configuração de build necessária (é só HTML puro).
- **Netlify**: arraste a pasta do projeto ou conecte o repositório; "Build command" pode ficar vazio e "Publish directory" como `.`.
- **Hospedagem própria**: copie os arquivos para o servidor/CDN.

Depois de publicado, o link gerado é o que deve ser compartilhado com os alunos elegíveis.
