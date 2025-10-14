const container = document.getElementById("favoritas-lista");
const favoritas = JSON.parse(localStorage.getItem("praiasFavoritas")) || [];

if (favoritas.length === 0) {
  container.innerHTML = "<p>Nenhuma praia foi favoritada ainda.</p>";
} else {
  favoritas.forEach(id => {
    fetch("praias.json")
      .then(res => res.json())
      .then(data => {
        const praia = data.find(p => p.id === id);
        if (praia) {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <h3>${praia.nome}</h3>
            <p><b>📍 Localização:</b> ${praia.localizacao}</p>
            <p><b>📄 Descrição:</b> ${praia.descricao}</p>
            <button onclick="removerFavorita('${praia.id}')">❌ Remover</button>
          `;
          container.appendChild(card);
        }
      });
  });
}

function removerFavorita(id) {
  let favoritas = JSON.parse(localStorage.getItem("praiasFavoritas")) || [];
  favoritas = favoritas.filter(p => p !== id);
  localStorage.setItem("praiasFavoritas", JSON.stringify(favoritas));
  location.reload();
}
