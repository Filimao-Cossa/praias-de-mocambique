document.addEventListener("DOMContentLoaded", () => {
  const praias = [
    { nome: "Ponta do Ouro", provincia: "Maputo", descricao: "Mergulho com golfinhos.", imagem: "images/ponta.jpeg" },
    { nome: "Praia do Tofo", provincia: "Inhambane", descricao: "Surf e pôr do sol.", imagem: "images/tofo.jpeg" },
    { nome: "Praia do Wimbe", provincia: "Cabo Delgado", descricao: "Águas azul-turquesa.", imagem: "images/wimbe.jpeg" },
    { nome: "Praia de Zalala", provincia: "Zambézia", descricao: "Extensa e tranquila.", imagem: "images/zalala.jpeg" },
    { nome: "Praia do Bilene", provincia: "Gaza", descricao: "Lagoa Uembje.", imagem: "images/bilene.jpeg" },
    { nome: "Praia de Macaneta", provincia: "Maputo", descricao: "Entre rio e oceano.", imagem: "images/macaneta.jpeg" },
    { nome: "Praia da Barra", provincia: "Inhambane", descricao: "Turismo ecológico.", imagem: "images/barra.jpeg" },
    { nome: "Ilha da Inhaca", provincia: "Maputo", descricao: "Biodiversidade marinha.", imagem: "images/inhaca.jpeg" },
    { nome: "Praia de Xai-Xai", provincia: "Gaza", descricao: "Piscinas naturais.", imagem: "images/xaixai.jpeg" },
    { nome: "Praia de Chocas-Mar", provincia: "Nampula", descricao: "Areia fina e paz.", imagem: "images/chocas-mar.jpeg" },
    { nome: "Praia de Bazaruto", provincia: "Inhambane", descricao: "Dunas e corais.", imagem: "images/bazaruto.jpeg" },
    { nome: "Praia de Santa Maria", provincia: "Maputo", descricao: "Snorkeling e vista.", imagem: "images/santamaria.jpeg" }
  ];

  const container = document.getElementById("praias-container");
  const filtro = document.getElementById("filtro");
  const toggleBtn = document.getElementById("toggle-theme");
  const themeIcon = document.getElementById("theme-icon");
  const themeLabel = document.getElementById("theme-label");

  function exibirPraias(lista) {
    container.innerHTML = "";
    lista.forEach(praia => {
      const card = document.createElement("div");
      card.className = "card";
      if (document.body.classList.contains("dark-mode")) {
        card.classList.add("dark-mode");
      }
      card.innerHTML = `
        <img src="${praia.imagem}" alt="${praia.nome}">
        <div class="card-content">
          <h3>${praia.nome}</h3>
          <p><strong>Província:</strong> ${praia.provincia}</p>
          <p>${praia.descricao}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function atualizarBotaoTema() {
    const isDark = document.body.classList.contains("dark-mode");
    themeIcon.textContent = isDark ? "☀️" : "🌙";
    themeLabel.textContent = isDark ? "Modo Claro" : "Modo Escuro";
  }

  filtro.addEventListener("change", () => {
    const valor = filtro.value;
    const filtradas = valor === "todas" ? praias : praias.filter(p => p.provincia === valor);
    exibirPraias(filtradas);
  });

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
    document.querySelectorAll(".card").forEach(card => card.classList.toggle("dark-mode"));
    atualizarBotaoTema();
  });

  exibirPraias(praias);
  atualizarBotaoTema();
});










