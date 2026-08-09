/*
 * Configuração do Cofre de Áudios.
 *
 * COMO ADICIONAR OS ÁUDIOS REAIS:
 * 1. Coloque os arquivos .mp3 dentro da pasta /audios (ex: audios/01-respiracao-consciente.mp3)
 *    OU use uma URL completa (ex: "https://minha-cdn.com/audios/01.mp3") no campo "arquivo".
 * 2. Preencha "titulo" e, se quiser, "descricao" e "duracao" de cada técnica.
 * 3. Enquanto "arquivo" estiver vazio (""), o card mostra "Em breve" e os botões ficam desativados.
 *
 * Para editar textos gerais da página (título, subtítulo, introdução), altere o objeto CONFIG abaixo.
 */

const CONFIG = {
  nomeCofre: "Cofre",
  tagline: "50 Técnicas de Autoterapia",
  introducao:
    "Um compilado exclusivo com 50 técnicas de autoterapia em áudio, liberado ao vivo na formatura para quem completou as 15 ativações da campanha. Ouça quando quiser ou baixe para levar com você.",
  metaTotal: 50,
};

const AUDIOS = Array.from({ length: 50 }, (_, i) => {
  const numero = String(i + 1).padStart(2, "0");
  return {
    id: `audio-${numero}`,
    numero,
    titulo: `Técnica ${numero}`,
    descricao: "",
    duracao: "",
    arquivo: "", // ex: `audios/${numero}-nome-da-tecnica.mp3`
  };
});
