export const register = () => {
  if ('serviceWorker' in navigator) {
    console.log('you can use service worker')
    navigator.serviceWorker.register('sw.js')
    .then(reg => {
      console.log(reg)
      if (reg.active) {
        console.log('active')
      }
    })
    .catch(err => console.log(err))
  }
}