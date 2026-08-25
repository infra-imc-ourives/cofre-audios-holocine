/*
 * Configuração do Cofre de Áudios.
 *
 * A maioria dos 30 áudios está hospedada no Google Drive (pasta "AUDIOS
 * COFRE"): basta preencher "driveId" com o ID do arquivo no Drive.
 *   - "arquivo" usa o link de download direto do Drive.
 *   - "streamUrl" usa o preview de áudio embutido do Drive (iframe), usado
 *     pelo botão "ouvir" para tocar dentro da própria página.
 *
 * Um item pode, alternativamente, usar "localFile" (caminho de um .mp3
 * dentro da pasta audios/, versionado neste repositório) em vez de
 * "driveId" — nesse caso o áudio toca com o player nativo do navegador
 * (mais simples e sem depender do Drive). É o caso da técnica 02.
 *
 * Se algum áudio hospedado no Drive não tocar/baixar direto (o Google
 * pode exibir uma página de confirmação para arquivos maiores), mova esse
 * arquivo para audios/ (usando "localFile") ou outro host (CDN, bucket
 * público, etc.) e troque só esse item — o restante da página não precisa
 * mudar.
 */

const CONFIG = {
  nomeCofre: "Cofre",
  tagline: "30 Técnicas de Autoterapia",
  introducao:
    "Um compilado exclusivo com 30 técnicas de autoterapia em áudio, liberado ao vivo na formatura para quem completou as 15 ativações da campanha. Ouça quando quiser ou baixe para levar com você.",
  metaTotal: 30,
};

function driveUrl(id) {
  return id ? `https://drive.google.com/uc?export=download&id=${id}` : "";
}

function drivePreviewUrl(id) {
  return id ? `https://drive.google.com/file/d/${id}/preview` : "";
}

const AUDIOS = [
  { titulo: "Técnica Holográfica do Sonho Realizado", driveId: "1Z9Szx-0BHsjw-WAwQ42M4Hk7IDd0dc0k" },
  { titulo: "Técnica Holográfica da Imagem da sua Cocriação", localFile: "audios/02-tecnica-holografica-da-imagem-da-sua-cocriacao.mp3" },
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
].map((item, i) => {
  const numero = String(i + 1).padStart(2, "0");
  const local = Boolean(item.localFile);
  return {
    id: `audio-${numero}`,
    numero,
    titulo: item.titulo,
    descricao: "",
    duracao: "",
    arquivo: local ? item.localFile : driveUrl(item.driveId),
    streamUrl: local ? item.localFile : drivePreviewUrl(item.driveId),
    nativo: local,
  };
});
