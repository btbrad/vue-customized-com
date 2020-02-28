import Dot from './dot'

let cartInstance

function getCartInstance () {
  // cartInstance = cartInstance || Dot.newInstance()
  cartInstance = cartInstance || Dot.newInstance()
  return cartInstance
}
function show (pos = { x: 0, y: 0 }) {
  let dot = getCartInstance()
  dot.show(pos)
}

export default {
  show (options) {
    return show(options)
  }
}
