const container = document.getElementById('painel-provincias');

function gerarPainelPorProvincia() {
  const todasProvincias = [
    "Maputo", "Gaza", "Inhambane", "Zambézia", "Nampula", "Cabo Delgado"
  ];

  const contagem = {};
  todasProvincias.forEach(prov => contagem[prov] = 0);

  PRAIAS.forEach(praia => {
    const prov = praia.provincia.trim();
    if (contagem.hasOwnProperty(prov)) {
      contagem[prov]++;
    }
  });

  let html = '<div class="row">';
  todasProvincias.forEach(prov => {
    const total = contagem[prov];
    html += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm ${total === 0 ? 'bg-secondary text-white' : 'bg-dark text-light'}">
          <div class="card-body text-center">
            <h5 class="card-title">${prov}</h5>
            <p class="card-text">
              ${total > 0 
                ? `${total} praia${total > 1 ? 's' : ''} cadastrada${total > 1 ? 's' : ''}.`
                : 'Nenhuma praia cadastrada.'}
            </p>
            ${total === 0 
              ? `<button class="btn btn-outline-light btn-sm" onclick="adicionarPraia('${prov}')">Adicionar praia</button>` 
              : `<a href="#${prov.toLowerCase()}" class="btn btn-outline-info btn-sm">Ver praias</a>`}
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

function adicionarPraia(provincia) {
  alert(`Abrir formulário para adicionar praia em ${provincia}`);
}

document.addEventListener('DOMContentLoaded', gerarPainelPorProvincia);

