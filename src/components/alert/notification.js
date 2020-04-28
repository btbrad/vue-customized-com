import Alert from './IAlert.vue'
import Vue from 'vue'

Alert.newInstance = properties => {
  const props = properties || {}

  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props: props
      })
    }
  })

  console.log('Instance', Instance)

  const component = Instance.$mount() // 如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。

  console.log('component', component.$el)
  document.body.appendChild(component.$el)

  const alert = Instance.$children[0] // 这里的alert就是render函数里的那个Alert实例，为了使用这个实例里定义的方法 所以要拿到它

  return {
    add (noticeProps) {
      alert.add(noticeProps)
    },
    remove (name) {
      alert.remove(name)
    }
  }
}

export default Alert
