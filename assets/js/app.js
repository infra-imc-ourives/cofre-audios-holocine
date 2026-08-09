(() => {
  const STORAGE_KEY = "cofre:ouvidos";

  const ICONS = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 19h16"/></svg>',
  };

  const grid = document.getElementById("grid");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("search-input");
  const progressFill = document.getElementById("progress-fill");
  const progressCount = document.getElementById("progress-count");
  const progressPercent = document.getElementById("progress-percent");
  const playerBar = document.getElementById("player-bar");
  const playerAudio = document.getElementById("player-audio");
  const playerBarTitle = document.getElementById("player-bar-title");

  document.getElementById("hero-title").textContent = CONFIG.nomeCofre;
  document.getElementById("hero-tagline").textContent = CONFIG.tagline;
  document.getElementById("hero-intro").textContent = CONFIG.introducao;

  function getOuvidos() {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
    } catch {
      return new Set();
    }
  }

  function saveOuvidos(set) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  }

  function marcarComoOuvido(id) {
    const ouvidos = getOuvidos();
    if (ouvidos.has(id)) return;
    ouvidos.add(id);
    saveOuvidos(ouvidos);
    atualizarProgresso();
    const card = grid.querySelector(`[data-id="${id}"]`);
    if (card) card.classList.add("card--played");
  }

  function atualizarProgresso() {
    const ouvidos = getOuvidos();
    const total = CONFIG.metaTotal || AUDIOS.length;
    const feitos = [...ouvidos].filter((id) => AUDIOS.some((a) => a.id === id)).length;
    const pct = total ? Math.round((feitos / total) * 100) : 0;
    progressFill.style.width = `${pct}%`;
    progressCount.textContent = `${feitos} de ${total} ouvidos`;
    progressPercent.textContent = `${pct}%`;
  }

  function pararPlayer() {
    playerAudio.pause();
    playerAudio.removeAttribute("src");
    playerBar.classList.remove("is-active");
    grid.querySelectorAll(".icon-btn--play.is-playing").forEach((btn) => {
      btn.classList.remove("is-playing");
      btn.innerHTML = ICONS.play;
    });
  }

  function tocar(audioItem, btn) {
    const jaTocando = playerAudio.dataset.currentId === audioItem.id && !playerAudio.paused;
    if (jaTocando) {
      pararPlayer();
      return;
    }

    pararPlayer();
    playerAudio.src = audioItem.arquivo;
    playerAudio.dataset.currentId = audioItem.id;
    playerBarTitle.textContent = audioItem.titulo;
    playerBar.classList.add("is-active");
    playerAudio.play().catch(() => {});
    btn.classList.add("is-playing");
    btn.innerHTML = ICONS.pause;

    playerAudio.onended = () => {
      marcarComoOuvido(audioItem.id);
      pararPlayer();
    };
    playerAudio.ontimeupdate = () => {
      if (playerAudio.currentTime > 5) marcarComoOuvido(audioItem.id);
    };
  }

  function criarCard(audioItem) {
    const temArquivo = Boolean(audioItem.arquivo);
    const ouvidos = getOuvidos();
    const jaOuvido = ouvidos.has(audioItem.id);

    const card = document.createElement("article");
    card.className = "card" + (jaOuvido ? " card--played" : "");
    card.dataset.id = audioItem.id;
    card.dataset.titulo = audioItem.titulo.toLowerCase();

    const meta = [audioItem.duracao, !temArquivo ? "Em breve" : ""].filter(Boolean).join(" · ");

    card.innerHTML = `
      <div class="card__number">${audioItem.numero}</div>
      <div class="card__body">
        <p class="card__title" title="${audioItem.titulo}">${audioItem.titulo}</p>
        <p class="card__meta">${meta || "&nbsp;"}</p>
      </div>
      <div class="card__actions">
        <button class="icon-btn icon-btn--play" type="button" aria-label="Ouvir ${audioItem.titulo}" ${temArquivo ? "" : "disabled"}>${ICONS.play}</button>
        <a class="icon-btn icon-btn--download" href="${temArquivo ? audioItem.arquivo : "#"}" download aria-label="Baixar ${audioItem.titulo}" ${temArquivo ? "" : 'aria-disabled="true" tabindex="-1" style="pointer-events:none;opacity:.35"'}>${ICONS.download}</a>
      </div>
    `;

    const playBtn = card.querySelector(".icon-btn--play");
    if (temArquivo) {
      playBtn.addEventListener("click", () => tocar(audioItem, playBtn));
    }

    return card;
  }

  function render() {
    grid.innerHTML = "";
    AUDIOS.forEach((audioItem) => grid.appendChild(criarCard(audioItem)));
    atualizarProgresso();
  }

  function filtrar(termo) {
    const termoNormalizado = termo.trim().toLowerCase();
    let visiveis = 0;
    grid.querySelectorAll(".card").forEach((card) => {
      const corresponde = card.dataset.titulo.includes(termoNormalizado);
      card.style.display = corresponde ? "" : "none";
      if (corresponde) visiveis += 1;
    });
    emptyState.classList.toggle("is-visible", visiveis === 0);
  }

  searchInput.addEventListener("input", (e) => filtrar(e.target.value));

  render();
})();
