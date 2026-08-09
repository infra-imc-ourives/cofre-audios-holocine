/*
 * Configuração do Cofre de Áudios.
 *
 * Os 50 áudios estão hospedados no Google Drive (pasta "AUDIOS COFRE").
 * O campo "arquivo" usa o link de download direto do Drive:
 *   https://drive.google.com/uc?export=download&id=ID_DO_ARQUIVO
 *
 * Se algum áudio específico não tocar/baixar direto (o Google Drive às vezes
 * exibe uma página de confirmação para arquivos maiores), mova esse arquivo
 * para outro host (CDN, bucket público, etc.) e troque só o valor de
 * "arquivo" pela nova URL — o restante da página não precisa mudar.
 */

const CONFIG = {
  nomeCofre: "Cofre",
  tagline: "50 Técnicas de Autoterapia",
  introducao:
    "Um compilado exclusivo com 50 técnicas de autoterapia em áudio, liberado ao vivo na formatura para quem completou as 15 ativações da campanha. Ouça quando quiser ou baixe para levar com você.",
  metaTotal: 50,
};

function driveUrl(id) {
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

const AUDIOS = [
  { titulo: "Técnica Holográfica do Sonho Realizado", driveId: "1Z9Szx-0BHsjw-WAwQ42M4Hk7IDd0dc0k" },
  { titulo: "Técnica Holográfica da Imagem da sua Cocriação", driveId: "1IvaCKFWhsEJkyk08Vnac0epISB7puzaQ" },
  { titulo: "Técnica de Visualização Detalhada da Imagem do teu Sonho Realizado", driveId: "1CTiD8ROCwep9awP4Gq2ICtlvfQD_0b6r" },
  { titulo: "Técnica Especial de Visualização Holográfica da Materialização dos seus Sonhos", driveId: "1DbkpYuxJNKbPjIZtLoBZqAy7vEj3VWbC" },
  { titulo: "Mapeamento da Nova Consciência Neural", driveId: "1TR73zEAGlSf2X88xNKNJDQskE_kLoSTO" },
  { titulo: "Técnica Holográfica de Alinhamento Energético", driveId: "1QLn5v9CuxfjgBotLXnVL1EK7pUPuAOue" },
  { titulo: "Elevação Quântica de Frequência", driveId: "1_DKKChwOdw9rGqQWGwrZoLr2ryVCUPgo" },
  { titulo: "Criação Consciente do Relacionamento Perfeito", driveId: "1njVNBqct-YY3wTpJqhncxugai2hTRi7n" },
  { titulo: "Sintonização Cósmica da Alma Gêmea", driveId: "1jT-rElKY95LVTDy-AUoyDzigUyU-HAQm" },
  { titulo: "Reconexão Holográfica da Cura Integral", driveId: "1mGSqgla9vrO6_SgIl1027lrr15OBK6_t" },
  { titulo: "Código Quântico da Riqueza Infinita", driveId: "1sEpQHmF1GXEcSz88nN3zy9NBGPwbM4TX" },
  { titulo: "Coerência Mental Holográfica", driveId: "1nIwmqatHsQRBUSJvunb_1uYt4cj9V1yi" },
  { titulo: "Ativando a Ressonância das Emoções Elevadas, para a Holococriação dos teus Sonhos", driveId: "1WNZEeDAH2trNLhxW_YBE9_j75qVdjIge" },
  { titulo: "Manifestando a Cocriação da Realidade", driveId: "1VJBvTu3fkAiKTanj1W1gzldSrjMN4eNh" },
  { titulo: "Aferindo seus Sonhos e Visualizando Holograficamente suas Cocriações", driveId: "1oAdPi2wSrN9RcKte1CXeu0gQ-6cYNHSA" },
  { titulo: "Quanto Mais Energia, Mais Possibilidades Terá!", driveId: "1usbAc2iPUcY73B8RBkRGYrSpCcUwRUIU" },
  { titulo: "Você Cocria a Todo Momento!", driveId: "1tmZ9v7npDE6Swtp5cz8Vp4n7m6SlEd5q" },
  { titulo: "Reprogramação para Sintonizar o Seu Novo Eu e Cocriar nas Infinitas Possibilidades", driveId: "1m1jf_ett6FldKEPxRA3wuBxMHFzKorCN" },
  { titulo: "Manifestando a Riqueza em sua Vida", driveId: "1LdAijLppO5olSv69FjddSoiHGO4K5Qb4" },
  { titulo: "Colapsando a Materialização de Todos os seus Desejos", driveId: "1AlBAa5wV9HD_MDLthg9UXVMWCZkMUuvZ" },
  { titulo: "A Imagem do teu Próximo Nível", driveId: "1dt1UzBQbQkYlS_C-8zK8z2vSdgE73NH-" },
  { titulo: "Cocriando Riqueza, Sucesso, Fortuna e Prosperidade Ilimitada", driveId: "1T3dlGSbat8J-pFZ_nNty1984IKoNB1_c" },
  { titulo: "Emocentizando sua Cocriação", driveId: "1XGUS2AmmXM39b5uiGqhuSLWkEKzYkhzL" },
  { titulo: "Impressionando o seu Inconsciente", driveId: "1qIFRFYEqbMYN_wKB7DG-J5NFqYSi4qj3" },
  { titulo: "O Projeto 3D do teu Sonho", driveId: "1mt-bc-bj5XhnJzzC7tJQxjub8rz-FLdn" },
  { titulo: "Acalmando a Mente e suas Emoções e Visualizando o que Você Deseja", driveId: "1rQighdPm6lLx5gCy_ACCJexI2U8h6dTZ" },
  { titulo: "Comandos de Ativação para Aumento de Prosperidade, Abundância e Riqueza", driveId: "1qhD12nj21LMfiBNKT_kfLeDGBgD1W3JX" },
  { titulo: "Criando a Imagem da sua Vida Milionária", driveId: "1kotR9CMBGPkJ6OMb7kKbv4F5iBm076xE" },
  { titulo: "Criando a Imagem em Movimento do teu Sonho", driveId: "1yoXpNr9fOz-rUuFbe_yxItf-ArsaVPGk" },
  { titulo: "Decretos de Ativação de Ordem para Manifestar Todos os teus Sonhos", driveId: "1S7mbddMgHmkoieeVushI5LuGYsjpQ_TR" },
  { titulo: "Eu Sou Abundante, Eu Sou Próspero, Eu Sou Rico, 520!", driveId: "1XZqWfEdnBVXuzBU8DeeLLo2sGHqgn4-A" },
  { titulo: "Prática do Espelho para Visualizar o teu Eu do Futuro", driveId: "18uOS6Bj3coNqg9GJYqeBwxSV4EE6Ngun" },
  { titulo: "Qual é o Holograma do teu Sonho", driveId: "19P8x794rHDgbAiXGkZat4vGLe6LZmzLP" },
  { titulo: "Expandindo 10 Vezes Mais sua Holococriação", driveId: "1PEFrP52tb7u-GSC4xfe17qYLhkniLO-4" },
  { titulo: "Cocriando Cura & Saúde em sua Vida", driveId: "1oZZXeWGVyay7r3E15C-f5UxpQZq3Gphl" },
  { titulo: "Ativação do DNA Milionário", driveId: "1kGzCezh669DCT0tutTKOAigV5oL_W2Li" },
  { titulo: "Cocriando Mais Prosperidade & Riqueza em Todas as Áreas da sua Vida", driveId: "1iiKPT8tK_A7j_5tBfchQL9Fc08dnmbSm" },
  { titulo: "Entrando no Fluxo da Cocriação + Acelerando a Manifestação dos teus Sonhos", driveId: "13HWl26DjfAUp8_xJOS8xGKD4SKfvYTrn" },
  { titulo: "Eu Sou o Eu Sou Milionário", driveId: "1r3tDB5EGoosfERiGDw3UODXyBoCSgqhs" },
  { titulo: "O Segredo para Fazer o Dinheiro Fluir em sua Vida e Ser Atraído por Ele", driveId: "1JW_donv6ICmBRELNo5m9QF1Jfzx1TFmE" },
  { titulo: "Restabelecendo a Ordem Divina para Cocriar o teu Sonho", driveId: "1s9BNq0xO-sjoMUDtw0YgG7F1j9tzch_n" },
  { titulo: "Técnica Infalível para Cocriação dos teus Sonhos", driveId: "1kTgfdK9qbHBQolRIdFzq-ZASrJpTiDP4" },
  { titulo: "Poderosa Técnica Holográfica do Perdão e Autoperdão", driveId: "1MljWsBQvILlj510oruL0_42n2QRLqYOs" },
  { titulo: "Técnica de Reconexão com sua Essência Cocriadora", driveId: "15gRGwwNH7JkbeJayZv7HkyodQySnb-tR" },
  { titulo: "Técnica de Sintonização Harmônica com o Dinheiro", driveId: "1qgjvpqio1tNbNmfFIKs6crNl9TFCqJfa" },
  { titulo: "Técnica Holográfica da Cocriação Suprema", driveId: "1MvHAkGUdAZeOceCdzWpUZ6h6pk_AiM-l" },
  { titulo: "Técnica Holográfica de Ativação do seu DNA das Emoções", driveId: "1HJRWrVfafJoKkJzRHqFqyyMTepOwPnxl" },
  { titulo: "Códigos para Manifestação da Prosperidade, Dinheiro & Abundância", driveId: "1igjf_joy4Ea86ZtyNDMLPmKt5DSABGMA" },
  { titulo: "Códigos para o Relacionamento Perfeito", driveId: "1628OTuNjiex3qfxKebF5lCmemxak2W4J" },
  { titulo: "Visualizando a Imagem da sua Mudança, do seu Eu Ideal e Perfeito!", driveId: "1lMzktljtzL2a6YEQshgT0clIpGErS8eQ" },
].map((item, i) => {
  const numero = String(i + 1).padStart(2, "0");
  return {
    id: `audio-${numero}`,
    numero,
    titulo: item.titulo,
    descricao: "",
    duracao: "",
    arquivo: driveUrl(item.driveId),
  };
});
