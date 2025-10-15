const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const raiz = './';
const pastaImagens = './images';
const extensoes = ['.jpeg', '.jpg', '.png', '.webp', '.gif'];
let log = [];

function hashArquivo(caminho) {
  const buffer = fs.readFileSync(caminho);
  return crypto.createHash('md5').update(buffer).digest('hex');
}

// 1. Listar imagens fora da pasta /images
const imagensRaiz = fs.readdirSync(raiz).filter(f => {
  return extensoes.includes(path.extname(f).toLowerCase()) && !fs.statSync(path.join(raiz, f)).isDirectory();
});

// 2. Mover imagens e verificar duplicados
imagensRaiz.forEach(img => {
  const origem = path.join(raiz, img);
  const destino = path.join(pastaImagens, img);

  if (!fs.existsSync(destino)) {
    fs.renameSync(origem, destino);
    log.push(`✅ Movido: ${img}`);
  } else {
    const hashOrigem = hashArquivo(origem);
    const hashDestino = hashArquivo(destino);

    if (hashOrigem === hashDestino) {
      fs.unlinkSync(origem);
      log.push(`🗑️ Duplicado removido: ${img}`);
    } else {
      const novoNome = `duplicado_${Date.now()}${path.extname(img)}`;
      fs.renameSync(origem, path.join(pastaImagens, novoNome));
      log.push(`⚠️ Conteúdo diferente: ${img} → ${novoNome}`);
    }
  }
});

// 3. Atualizar caminhos em HTML e JSON
const ficheiros = fs.readdirSync(raiz).filter(f => f.endsWith('.html') || f.endsWith('.json'));
ficheiros.forEach(f => {
  let conteudo = fs.readFileSync(f, 'utf8');
  extensoes.forEach(ext => {
    const regex = new RegExp(`(["'])((?!images/)[^"']+${ext})\\1`, 'gi');
    conteudo = conteudo.replace(regex, `"images/$2"`);
  });
  fs.writeFileSync(f, conteudo);
  log.push(`🔗 Caminhos atualizados em: ${f}`);
});

// 4. Gerar log
fs.writeFileSync('log-diagnostico.txt', log.join('\n'));
console.log('✅ Diagnóstico concluído. Verifica log-diagnostico.txt');
