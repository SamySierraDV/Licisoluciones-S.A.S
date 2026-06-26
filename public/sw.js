importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  console.log('Workbox cargado correctamente.');

  // Pre-cache core files
  workbox.precaching.precacheAndRoute([]);

  // Cache JS, CSS and HTML documents with NetworkFirst strategy
  workbox.routing.registerRoute(
    ({ request }) => 
      request.destination === 'document' || 
      request.destination === 'script' || 
      request.destination === 'style',
    new workbox.strategies.NetworkFirst({
      cacheName: 'core-cache',
    })
  );

  // Cache images and fonts with CacheFirst strategy
  workbox.routing.registerRoute(
    ({ request }) => 
      request.destination === 'image' || 
      request.destination === 'font',
    new workbox.strategies.CacheFirst({
      cacheName: 'assets-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
        }),
      ],
    })
  );
} else {
  console.log('Fallo al cargar Workbox.');
}
