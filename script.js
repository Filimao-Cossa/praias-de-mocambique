document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("praias-lista");
  const filtro = document.getElementById("provincia");
  const toggleBtn = document.getElementById("toggle-theme");
  const themeIcon = document.getElementById("theme-icon");
  const themeLabel = document.getElementById("theme-label");

  let praias = [];

  // Modo escuro
  function atualizarBotaoTema() {
    const isDark = document.body.classList.contains("dark-mode");
    themeIcon.textContent = isDark ? "☀️" : "🌙";
    themeLabel.textContent = isDark ? "Modo Claro" : "Modo Escuro";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      document.querySelector("header").classList.toggle("dark-mode");
      document.querySelector("footer").classList.toggle("dark-mode");
      document.querySelectorAll(".card").forEach(card => card.classList.toggle("dark-mode"));
      atualizarBotaoTema();
    });
  }

  // Filtro por província
  if (filtro) {
    filtro.addEventListener("change", () => {
      const valor = filtro.value;
      const filtradas = valor === "todas" ? praias : praias.filter(p => p.provincia === valor);
      exibirPraias(filtradas);
    });
  }

  // Exibir cards
  function exibirPraias(lista) {
    container.innerHTML = "";
    lista.forEach((praia, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("data-id", praia.id);

      card.innerHTML = `
        <img src="${praia.imagem}" alt="${praia.nome}" class="card-img" data-id="${praia.id}" onerror="this.src='images/fallback.jpeg'">
        <h3>${praia.nome}</h3>
      `;

      container.appendChild(card);
    });

    // Redirecionamento ao clicar
    document.querySelectorAll(".card-img").forEach(img => {
      img.addEventListener("click", () => {
        const id = img.dataset.id;
        if (id) {
          window.location.href = `detalhes.html?id=${encodeURIComponent(id)}`;
        } else {
          alert("Erro: imagem sem ID.");
        }
      });
    });
  }

  // Carregar JSON
  fetch("praias.json")
    .then(res => res.json())
    .then(data => {
      praias = data;
      exibirPraias(praias);
      atualizarBotaoTema();
    })
    .catch(err => {
      container.innerHTML = "<p>Erro ao carregar praias.</p>";
      console.error("Erro ao carregar JSON:", err);
    });
});
