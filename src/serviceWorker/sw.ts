self.addEventListener('install', event => {
  console.log('installed')
})

self.addEventListener('activate', event => {
  console.log('now activated')
})

self.addEventListener('fetch', event => {
  console.log('fetch')
})