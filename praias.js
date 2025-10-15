const container = document.getElementById('praias-selecionadas');

function normalizar(texto) {
  return texto.toLowerCase().replace(/\s+/g, '-');
}

function gerarPraiasSelecionadas() {
  const provinciasAlvo = ["maputo", "gaza", "inhambane", "zambezia", "nampula", "cabo delgado"];
  const agrupadas = {};

  PRAIAS.forEach(praia => {
    const prov = normalizar(praia.provincia);
    if (provinciasAlvo.includes(prov)) {
      if (!agrupadas[prov]) agrupadas[prov] = [];
      agrupadas[prov].push(praia);
    }
  });

  let html = '';
  for (const prov in agrupadas) {
    html += `<h4 class="text-uppercase text-info mt-4">${prov.replace('-', ' ')}</h4><div class="row">`;
    agrupadas[prov].forEach(praia => {
      html += `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100 shadow-sm bg-dark text-white">
            <img src="${praia.imagem}" class="card-img-top" alt="${praia.nome}" onerror="this.src='images/fallback.jpeg'">
            <div class="card-body">
              <h5 class="card-title">${praia.nome}</h5>
              <p class="card-text">${praia.descricao}</p>
              <p><strong>Atividades:</strong> ${Array.isArray(praia.atividades) ? praia.atividades.join(', ') : praia.atividades}</p>
              <p><strong>Infraestrutura:</strong> ${praia.infraestrutura}</p>
              <a href="${praia.mapa}" target="_blank" class="btn btn-outline-light btn-sm">Ver no mapa</a>
              ${praia.link ? `<a href="${praia.link}" target="_blank" class="btn btn-sm btn-info ms-2">Mais detalhes</a>` : ''}
            </div>
          </div>
        </div>
      `;
    });
    html += '</div>';
  }

  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', gerarPraiasSelecionadas);

if (filtradas.length === 0) {
  container.innerHTML = `
    <div class="alert alert-warning text-center">
      Nenhuma praia cadastrada para esta província no momento.
    </div>
  `;
  return;
}

const PRAIAS = [
  {
    id: "p1",
    nome: "Praia do Bilene",
    imagem: "img/bilene.jpg",
    provincia: "gaza",
    descricao: "Águas calmas e cristalinas, ideal para famílias e esportes náuticos.",
    epoca: "Setembro a Março",
    atividades: "Caiaque, Jet-ski, Passeios de barco",
    infraestrutura: "Hotéis, Restaurantes, Estacionamento",
    curiosidades: "A lagoa Uembje conecta-se ao mar durante marés altas.",
    seguranca: "Área vigiada com salva-vidas",
    mapa: "https://maps.google.com/?q=Praia+do+Bilene",
    imagens: "img/bilene.jpg,img/bilene2.jpg,img/bilene3.jpg"
  },
  {
    id: "p2",
    nome: "Praia de Ponta do Ouro",
    imagem: "img/ponta.jpg",
    provincia: "maputo",
    descricao: "Destino popular para mergulho com golfinhos e recifes vibrantes.",
    epoca: "Outubro a Abril",
    atividades: "Mergulho, Snorkeling, Surf",
    infraestrutura: "Lodges, Camping, Restaurantes",
    curiosidades: "Famosa por encontros com golfinhos selvagens.",
    seguranca: "Posto de turismo e patrulha costeira",
    mapa: "https://maps.google.com/?q=Ponta+do+Ouro",
    imagens: "img/ponta.jpg,img/ponta2.jpg,img/ponta3.jpg"
  },
  {
    id: "p3",
    nome: "Praia de Macaneta",
    imagem: "img/macaneta.jpg",
    provincia: "maputo",
    descricao: "Praia selvagem próxima à capital, com acesso por ponte.",
    epoca: "Setembro a Dezembro",
    atividades: "Surf, Camping, Passeios de quadriciclo",
    infraestrutura: "Eco-resorts, Restaurantes",
    curiosidades: "Acesso por estrada e ponte moderna sobre o rio.",
    seguranca: "Vigilância privada em resorts",
    mapa: "https://maps.google.com/?q=Praia+da+Macaneta",
    imagens: "img/macaneta.jpg,img/macaneta2.jpg"
  },
  {
    id: "p4",
    nome: "Praia de Tofo",
    imagem: "img/tofo.jpg",
    provincia: "inhambane",
    descricao: "Destino internacional para mergulho com tubarões-baleia.",
    epoca: "Agosto a Janeiro",
    atividades: "Mergulho, Surf, Vida noturna",
    infraestrutura: "Hostels, Restaurantes, Escolas de mergulho",
    curiosidades: "Um dos melhores locais do mundo para ver tubarões-baleia.",
    seguranca: "Guarda costeira e apoio turístico",
    mapa: "https://maps.google.com/?q=Praia+do+Tofo",
    imagens: "img/tofo.jpg,img/tofo2.jpg"
  },
  {
    id: "p5",
    nome: "Praia de Zalala",
    imagem: "img/zalala.jpg",
    provincia: "zambezia",
    descricao: "Praia ampla e tranquila, ideal para caminhadas e relaxamento.",
    epoca: "Outubro a Março",
    atividades: "Caminhadas, Fotografia, Piqueniques",
    infraestrutura: "Pousadas simples, Mercado local",
    curiosidades: "Popular entre moradores locais nos fins de semana.",
    seguranca: "Ambiente seguro e familiar",
    mapa: "https://maps.google.com/?q=Praia+de+Zalala",
    imagens: "img/zalala.jpg"
  },
  {
    id: "p6",
    nome: "Praia de Pemba",
    imagem: "img/praia-de-pemba.jpg",
    provincia: "cabo-delgado",
    descricao: "Praia urbana com cultura local vibrante e artesanato.",
    epoca: "Outubro a Março",
    atividades: "Mergulho, Cultura, Gastronomia",
    infraestrutura: "Hotéis, Mercado de artesanato",
    curiosidades: "Conhecida pelo artesanato Makonde e culinária local.",
    seguranca: "Presença policial e turística",
    mapa: "https://maps.google.com/?q=Praia+de+Pemba",
    imagens: "img/pemba.jpg,img/pemba2.jpg"
  },
  {
    id: "p7",
    nome: "Praia de Xai-Xai",
    imagem: "img/xai-xai.jpg",
    provincia: "gaza",
    descricao: "Praia extensa com recifes visíveis na maré baixa.",
    epoca: "Setembro a Março",
    atividades: "Pesca, Mergulho, Caminhadas",
    infraestrutura: "Hotéis, Mercado, Restaurantes",
    curiosidades: "Recifes formam piscinas naturais durante maré baixa.",
    seguranca: "Posto turístico e patrulha local",
    mapa: "https://maps.google.com/?q=Praia+de+Xai-Xai",
    imagens: "img/xai-xai.jpg,img/xai-xai2.jpg"
  },
  {
    id: "p8",
    nome: "Praia de Nacala",
    imagem: "img/nacala.jpg",
    provincia: "nampula",
    descricao: "Águas profundas e cristalinas, ideal para mergulho técnico.",
    epoca: "Outubro a Fevereiro",
    atividades: "Mergulho, Barco, Observação marinha",
    infraestrutura: "Resorts, Marina, Restaurantes",
    curiosidades: "Porto natural profundo, usado desde época colonial.",
    seguranca: "Vigilância costeira e apoio náutico",
    mapa: "https://maps.google.com/?q=Praia+de+Nacala",
    imagens: "img/nacala.jpg,img/nacala2.jpg"
  },
  {
    id: "p9",
    nome: "Praia de Fernão Veloso",
    imagem: "img/fernao.jpg",
    provincia: "nampula",
    descricao: "Praia paradisíaca com areia branca e águas calmas.",
    epoca: "Setembro a Janeiro",
    atividades: "Relaxamento, Fotografia, Passeios de barco",
    infraestrutura: "Resorts, Restaurantes",
    curiosidades: "Nome herdado de navegador português.",
    seguranca: "Área tranquila e segura",
    mapa: "https://maps.google.com/?q=Praia+de+Fernão+Veloso",
    imagens: "img/fernao.jpg,img/fernao2.jpg"
  },
  {
    id: "p10",
    nome: "Praia de Inhassoro",
    imagem: "img/inhassoro.jpg",
    provincia: "inhambane",
    descricao: "Praia calma com vista para as ilhas Bazaruto.",
    epoca: "Outubro a Março",
    atividades: "Passeios de barco, Observação de aves, Pesca",
    infraestrutura: "Lodges, Restaurantes",
    curiosidades: "Porta de entrada para o arquipélago de Bazaruto.",
    seguranca: "Turismo organizado e seguro",
    mapa: "https://maps.google.com/?q=Praia+de+Inhassoro",
    imagens: "img/inhassoro.jpg,img/inhassoro2.jpg"
  },
  {
    id: "p11",
    nome: "Praia de Chocas Mar",
    imagem: "img/chocas.jpg",
    provincia: "nampula",
    descricao: "Praia isolada com areia fina e vegetação costeira.",
    epoca: "Setembro a Dezembro",
    atividades: "Camping, Caminhadas, Observação da natureza",
    infraestrutura: "Eco-lodges, Trilhas",
    curiosidades: "Acesso por barco ou estrada rural.",
    seguranca: "Ambiente natural e seguro",
    mapa: "https://maps.google.com/?q=Praia+de+Chocas+Mar",
    imagens: "img/chocas.jpg,img/chocas2.jpg"
  },
  {
    id: "p12",
    nome: "Praia de Santa Maria",
    imagem: "img/santa-maria.jpg",
    provincia: "maputo",
    descricao: "Praia remota no extremo sul, com biodiversidade marinha.",
    epoca: "Outubro a Abril",
    atividades: "Snorkeling, Mergulho, Observação de corais",
    infraestrutura: "Lodges ecológicos, Guias locais",
    curiosidades: "Parte do Parque Nacional de Maputo.",
    seguranca: "Proteção ambiental e patrulha do parque",
    mapa: "https://maps.google.com/?q=Praia+de+Santa+Maria",
    imagens: "img/santa-maria.jpg,img/santa-maria2.jpg"
  },
  {
  "id": "praia-do-wimbe",
  "nome": "Praia do Wimbe",
  "provincia": "Cabo Delgado",
  "localizacao": "Cidade de Pemba",
  "distancia": "5 km do centro de Pemba",
  "clima": "Tropical seco, 28°C média",
  "classificacao": "4.6 / 5",
  "publico": "Turistas culturais e fotógrafos",
  "idioma": "Português, Maconde",
  "descricao": "Praia urbana com águas azul-turquesa e areia branca, ideal para relaxamento e fotografia.",
  "epoca": "Maio a Outubro",
  "atividades": "Fotografia, Caminhadas, Vida noturna",
  "infraestrutura": "Hotéis, bares, aeroporto próximo",
  "curiosidades": "Famosa por pores do sol vibrantes e vida noturna à beira-mar.",
  "seguranca": "Nade apenas em áreas sinalizadas",
  "servicos": "Hospedagem, Restaurantes, Transporte local",
  "fonte": "https://beachsearcher.com/pt/beach/508201026/praia-do-wimbe",
  "mapa": "https://maps.google.com/?q=Praia+do+Wimbe",
  "compartilhar": "https://wa.me/?text=Veja+esta+praia:+Praia+do+Wimbe"
},
 // Exemplo de entrada para novas praias
  {
    id: "p13",
    nome: "Praia de Barra",
    imagem: "img/barra.jpg",
    provincia: "inhambane",
    descricao: "Praia com águas rasas e recifes, ideal para famílias.",
    atividades: "Mergulho, Passeios de barco, Relaxamento",
    infraestrutura: "Resorts, Restaurantes, Escolas de mergulho",
    mapa: "https://maps.google.com/?q=Praia+de+Barra"
  },
  {
    id: "p14",
    nome: "Praia de Bazaruto",
    imagem: "img/bazaruto.jpg",
    provincia: "inhambane",
    descricao: "Arquipélago paradisíaco com dunas e águas cristalinas.",
    atividades: "Snorkeling, Observação marinha, Passeios de barco",
    infraestrutura: "Lodges de luxo, Guias locais",
    mapa: "https://maps.google.com/?q=Praia+de+Bazaruto"
  },
  {
    id: "p15",
    nome: "Praia de Inhaca",
    imagem: "img/inhaca.jpg",
    provincia: "maputo",
    descricao: "Ilha com biodiversidade marinha e praias tranquilas.",
    atividades: "Snorkeling, Observação de corais, Relaxamento",
    infraestrutura: "Lodges ecológicos, Guias locais",
    mapa: "https://maps.google.com/?q=Praia+de+Inhaca"
  },
  {
    id: "p16",
    nome: "Praia de Jangamo",
    imagem: "img/jangamo.jpg",
    provincia: "inhambane",
    descricao: "Praia selvagem com ondas fortes e paisagem natural.",
    atividades: "Surf, Camping, Fotografia",
    infraestrutura: "Eco-lodges, Trilhas",
    mapa: "https://maps.google.com/?q=Praia+de+Jangamo"
  },
  {
    id: "p17",
    nome: "Praia de Malongane",
    imagem: "img/malongane.jpg",
    provincia: "maputo",
    descricao: "Praia isolada com dunas e vegetação costeira.",
    atividades: "Camping, Mergulho, Caminhadas",
    infraestrutura: "Lodges, Trilhas",
    mapa: "https://maps.google.com/?q=Praia+de+Malongane"
  },
  {
    id: "p18",
    nome: "Praia de Pomene",
    imagem: "img/pomene.jpg",
    provincia: "inhambane",
    descricao: "Praia remota com manguezais e biodiversidade.",
    atividades: "Observação da natureza, Passeios de barco",
    infraestrutura: "Eco-resorts, Guias locais",
    mapa: "https://maps.google.com/?q=Praia+de+Pomene"
  },
  {
    id: "p19",
    nome: "Praia de Vamizi",
    imagem: "img/vamizi.jpeg",
    provincia: "cabo-delgado",
    descricao: "Ilha exclusiva com recifes e águas azul-turquesa.",
    atividades: "Mergulho, Relaxamento, Fotografia",
    infraestrutura: "Resorts de luxo, Transporte marítimo",
    mapa: "https://maps.google.com/?q=Praia+de+Vamizi"
  },
  {
   
  }
];
