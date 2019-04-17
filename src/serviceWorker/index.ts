export const register = () => {
  if ('serviceWorker' in navigator) {
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