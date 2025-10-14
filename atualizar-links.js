fetch("praias.json")
  .then(res => res.json())
  .then(praias => {
    const atualizadas = praias.map(praia => {
      const nomeFormatado = praia.nome.replace(/\s+/g, "+").toLowerCase();

      return {
        ...praia,
        fonte: `https://beachsearcher.com/pt/beach/508201026/${nomeFormatado}`,
        mapa: `https://maps.google.com/?q=${nomeFormatado}`,
        compartilhar: `https://wa.me/?text=Veja+esta+praia:+${praia.nome}`
      };
    });

    // Exibe resultado no console
    console.log("Praias atualizadas:", atualizadas);

    // Exibe JSON no painel (se quiser)
    const painel = document.getElementById("praia-json");
    if (painel) {
      painel.textContent = JSON.stringify(atualizadas, null, 2);
    }

    // Copia para área de transferência
    navigator.clipboard.writeText(JSON.stringify(atualizadas, null, 2))
      .then(() => console.log("JSON atualizado copiado"))
      .catch(err => console.warn("Erro ao copiar:", err));
  });
