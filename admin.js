fetch("praias.json")
  .then(res => res.json())
  .then(praias => {
    const modelo = {
      provincia: "Zambézia",
      localizacao: "Distrito de Quelimane",
      distancia: "15 km",
      clima: "Tropical úmido",
      classificacao: "Tranquila e extensa",
      publico: "Famílias, caminhantes, fotógrafos",
      idioma: "Português, Chuabo",
      descricao: "Praia extensa e tranquila, ideal para caminhadas e contemplação.",
      epoca: "Durante todo o ano",
      atividades: "Caminhadas, Fotografia, Descanso",
      infraestrutura: "Infraestrutura de apoio, alojamentos simples",
      curiosidades: "Local tradicional de festas populares e pesca artesanal.",
      seguranca: "Evite nadar em mar agitado e respeite áreas sinalizadas.",
      servicos: "Barracas locais, transporte informal, guias comunitários"
    };

    const atualizadas = praias.map(praia => {
      const nomeFormatado = praia.nome.replace(/\s+/g, "+").toLowerCase();
      return {
        id: praia.id,
        nome: praia.nome,
        ...modelo,
        fonte: `https://beachsearcher.com/pt/beach/508201026/${nomeFormatado}`,
        mapa: `https://maps.google.com/?q=${nomeFormatado}`
      };
    });

    // Exibe no painel (se existir)
    const painel = document.getElementById("praia-json");
    if (painel) {
      painel.textContent = JSON.stringify(atualizadas, null, 2);
    }

    // Copia para área de transferência
    navigator.clipboard.writeText(JSON.stringify(atualizadas, null, 2))
      .then(() => alert("✅ Todas as praias foram atualizadas com o modelo da Praia de Santa Maria"))
      .catch(err => console.warn("Erro ao copiar:", err));
  });
document.getElementById("btn-aplicar-santa-maria").addEventListener("click", () => {
  // (insere aqui o script acima)
});
