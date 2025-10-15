const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const raiz = './';
const pastaImagens = './images';
const extensoes = ['.jpeg', '.jpg', '.png', '.webp', '.gif'];
let log = [];

function hashArquivo(caminho) {
  const buffer = fs.readFileSync(caminho);
  return crypto.createHash('md5').update(buffer).digest('hex');
}

// 1. Criar pasta /images se não existir
if (!fs.existsSync(pastaImagens)) {
  fs.mkdirSync(pastaImagens);
  log.push('📁 Pasta /images criada');
}

// 2. Mover imagens da raiz para /images e remover duplicados
const imagensRaiz = fs.readdirSync(raiz).filter(f =>
  extensoes.includes(path.extname(f).toLowerCase()) &&
  !fs.statSync(path.join(raiz, f)).isDirectory()
);

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

// 4. Commit e push via Git
try {
  execSync('git add .');
  execSync('git commit -m "Atualização automática de imagens e caminhos"');
  execSync('git push origin main');
  log.push('🚀 Alterações enviadas para o GitHub');
} catch (err) {
  log.push('⚠️ Erro ao fazer push: ' + err.message);
}

// 5. Gerar log
fs.writeFileSync('log-atualizacao.txt', log.join('\n'));
console.log('✅ Atualização concluída. Verifica log-atualizacao.txt');
