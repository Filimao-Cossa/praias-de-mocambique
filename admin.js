document.getElementById("imagem").addEventListener("input", e => {
  document.getElementById("preview-principal").src = e.target.value;
});

document.getElementById("form-praia").addEventListener("submit", e => {
  e.preventDefault();

  const praia = {
    id: document.getElementById("id").value.trim(),
    nome: document.getElementById("nome").value.trim(),
    provincia: document.getElementById("provincia").value,
    localizacao: document.getElementById("localizacao").value.trim(),
    descricao: document.getElementById("descricao").value.trim(),
    epoca: document.getElementById("epoca").value.trim(),
    atividades: document.getElementById("atividades").value.split(",").map(a => a.trim()).filter(Boolean),
    infraestrutura: document.getElementById("infraestrutura").value.trim(),
    imagem: document.getElementById("imagem").value.trim(),
    imagensAdicionais: document.getElementById("imagensAdicionais").value.split(",").map(i => i.trim()).filter(Boolean),
    link: document.getElementById("link").value.trim(),
    mapa: document.getElementById("mapa").value.trim(),
    curiosidades: document.getElementById("curiosidades").value.trim(),
    seguranca: document.getElementById("seguranca").value.trim()
  };

  document.getElementById("json-display").textContent = JSON.stringify(praia, null, 2);
});
