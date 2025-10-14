const CACHE_NAME = 'praias-v1';
const urlsToCache = [
  '/website/praias-de-mocambique/index.html',
  '/website/praias-de-mocambique/style.css',
  '/website/praias-de-mocambique/script.js',
  '/website/praias-de-mocambique/praias.json',
  '/website/praias-de-mocambique/detalhes.html',
  '/website/praias-de-mocambique/icons/praias-192.png',
  '/website/praias-de-mocambique/icons/praias-512.png'
];

// Instala o service worker e faz cache dos arquivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativa e limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Intercepta requisições e serve do cache se possível
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => caches.match('/website/praias-de-mocambique/index.html'))
  );
});
