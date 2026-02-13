const CACHE_NAME = "pwa-ecommerce-v2";
const urlsToCache = [
  "/",
  "index.html",
  "style.css",
  "app.js",
  "images/mobile.jpg",
  "images/headphones.jpg",
  "images/laptop1.jpg"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
