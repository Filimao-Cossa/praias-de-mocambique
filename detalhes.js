document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch("praias.json")
    .then(res => res.json())
    .then(praias => {
      const praia = praias.find(p => p.id === id);
      if (!praia) return;

      const set = (id, valor) => {
        const el = document.getElementById(id);
        if (el) el.textContent = valor || "—";
      };

      set("praia-nome", praia.nome);
      set("praia-provincia", praia.provincia);
      set("praia-localizacao", praia.localizacao);
      set("praia-distancia", praia.distancia);
      set("praia-clima", praia.clima);
      set("praia-classificacao", praia.classificacao);
      set("praia-publico", praia.publico);
      set("praia-idioma", praia.idioma);
      set("praia-descricao", praia.descricao);
      set("praia-epoca", praia.epoca);
      set("praia-atividades", praia.atividades);
      set("praia-infraestrutura", praia.infraestrutura);
      set("praia-curiosidades", praia.curiosidades);
      set("praia-seguranca", praia.seguranca);
      set("praia-servicos", praia.servicos);

      // Link do mapa
      document.getElementById("btn-mapa").href = praia.mapa || "#";

      // Fonte oficial
      if (praia.fonte) {
        const fonteLink = document.createElement("a");
        fonteLink.href = praia.fonte;
        fonteLink.target = "_blank";
        fonteLink.className = "btn-link";
        fonteLink.textContent = "🌐 Ver fonte oficial";
        const fonteContainer = document.getElementById("praia-fonte");
        fonteContainer.textContent = "";
        fonteContainer.appendChild(fonteLink);
      }
    });
});
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("toggle-theme");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});
