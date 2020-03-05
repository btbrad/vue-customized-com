import Vue from 'vue'

export default function (component, props) {
  const instance = new Vue({
    render: h => h(component, { props })
  }).$mount()

  document.body.appendChild(instance.$el)

  const com = instance.$children[0]

  com.remove = () => {
    document.body.removeChild(instance.$el)
    instance.$destroy()
  }

  return com
}
