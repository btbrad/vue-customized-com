import Dot from '@/components/Cart/dot.vue'
import Vue from 'vue'

Dot.newInstance = properties => {
  let props = properties || {}
  let instance = new Vue({
    data: props,
    render: (h) => {
      return h(Dot, {
        props
      })
    }
  })
  let component = instance.$mount()
  document.body.appendChild(component.$el)
  console.log('dot实例', instance)

  const dot = instance.$children[0]

  return {
    show (position) {
      dot.show(position)
    }
  }
}

export default Dot
