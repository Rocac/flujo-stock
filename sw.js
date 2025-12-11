self.addEventListener('install', event => {
  // Se instala y queda listo
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Toma control de las pestañas abiertas
  clients.claim();
});
