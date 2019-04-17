const cacheName = 'kg-cache';
const filesToCache = [
  'index.html',
  '/bundle.js',
];

self.addEventListener('install', event => {
  console.log('installed')
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      console.log(cache)
      return cache.addAll(filesToCache);
    })
  )
})

self.addEventListener('activate', event => {
  console.log('now activated')
})

self.addEventListener('fetch', event => {
  console.log('fetch')
  console.log(event)
  console.log(caches)
  // urlがcacheにマッチすればキャッシュから返す
})