const imagemPadrao = "img/default.jpg";

praias.forEach(praia => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = praia.imagem || imagemPadrao;
  img.alt = praia.nome;
  img.onerror = () => img.src = imagemPadrao;
  card.appendChild(img);

  const titulo = document.createElement("h3");
  titulo.textContent = praia.nome;
  card.appendChild(titulo);

  const provincia = document.createElement("p");
  provincia.textContent = praia.provincia;
  card.appendChild(provincia);

  const link = document.createElement("a");
  link.href = `detalhes.html?id=${praia.id}`;
  link.textContent = "Ver detalhes";
  card.appendChild(link);

  document.querySelector(".praias-grid").appendChild(card);
});