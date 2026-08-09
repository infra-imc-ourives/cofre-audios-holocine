# Cofre — 50 Técnicas de Autoterapia

Interface web estática para os alunos ouvirem ou baixarem o compilado de 50 áudios de autoterapia, liberado ao vivo na formatura para quem completou as 15 ativações da campanha.

Sem login: o acesso é feito por link privado/não listado (compartilhado com os alunos elegíveis).

## Estrutura

```
index.html                    página principal
assets/css/style.css          estilos
assets/js/audios-data.js      configuração e lista dos 50 áudios (EDITAR AQUI)
assets/js/app.js              lógica do player, progresso e busca
audios/                       pasta sugerida para os arquivos .mp3
```

## Como adicionar os áudios reais

Abra `assets/js/audios-data.js`:

1. Em `CONFIG`, ajuste os textos gerais (nome do cofre, tagline, introdução) se quiser.
2. Em cada item de `AUDIOS`, preencha:
   - `titulo`: nome da técnica (ex: "Respiração Consciente")
   - `descricao`: opcional
   - `duracao`: opcional (ex: "08:32")
   - `arquivo`: caminho do arquivo ou URL completa. Duas opções:
     - Arquivo local: coloque o `.mp3` dentro de `audios/` e use `audios/01-respiracao-consciente.mp3`
     - URL externa (S3, CDN, Google Drive com link direto, etc.): use a URL completa, ex. `https://minha-cdn.com/01.mp3`

Enquanto `arquivo` estiver vazio (`""`), o card aparece com a marcação "Em breve" e os botões de ouvir/baixar ficam desativados — não precisa remover nem comentar nada.

> Atenção com links do Google Drive: o link de compartilhamento padrão (`.../file/d/ID/view`) não funciona direto em `<audio>`/download. É necessário um link de download direto ou hospedar os arquivos em outro serviço (CDN, bucket público, etc.).

## Funcionalidades

- Player único (ao tocar um áudio, qualquer outro em reprodução é pausado).
- Download direto de cada áudio.
- Progresso "X de 50 ouvidos" salvo no navegador do próprio aluno (localStorage) — não é sincronizado entre dispositivos nem enviado a nenhum servidor.
- Busca por nome da técnica.
- Layout responsivo (funciona bem em celular, onde a maioria dos alunos vai acessar via WhatsApp).

## Publicar (deploy)

Como é um site 100% estático (HTML/CSS/JS, sem backend), pode ser publicado em qualquer serviço de hospedagem estática:

- **Vercel**: importe o repositório, sem configuração de build necessária (é só HTML puro).
- **Netlify**: arraste a pasta do projeto ou conecte o repositório; "Build command" pode ficar vazio e "Publish directory" como `.`.
- **Hospedagem própria**: copie os arquivos para o servidor/CDN.

Depois de publicado, o link gerado é o que deve ser compartilhado com os alunos elegíveis.
