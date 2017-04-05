const outsideCallback = function () {
  console.log('in outsideCallback')
}

const takesCallback = function (callback) {
  callback()
}

takesCallback(outsideCallback)

takesCallback(function () {
  console.log('in anonymous function')
})

takesCallback(function () {
  console.log('in a different anonymous function')
})
