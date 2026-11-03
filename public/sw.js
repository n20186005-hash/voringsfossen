/* Vøringsfossen - keep pages fresh and provide a basic offline fallback. */
const CACHE_NAME = 'voringsfossen-v2';
const OFFLINE_URL = '/en';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.add(OFFLINE_URL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith('voringsfossen-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (
    request.method !== 'GET' ||
    request.mode !== 'navigate' ||
    new URL(request.url).origin !== self.location.origin
  ) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok && response.type === 'basic') {
          const copy = response.clone();
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then((cache) => cache.put(request, copy))
              .catch(() => {})
          );
        }
        return response;
      })
      .catch(async () =>
        (await caches.match(request)) ||
        (await caches.match(OFFLINE_URL)) ||
        Response.error()
      )
  );
});
