import Vue from 'vue'
import Alert from './alert.vue'

class MyAlert {
  constructor () {
    const instance = new Vue({
      render: h => h(Alert)
    })

    this.component = instance.$mount().$children[0]
  }
  show () {
    document.body.appendChild(this.component.$el)
    setTimeout(() => {
      document.body.removeChild(this.component.$el)
    }, 3000)
  }
}

export default MyAlert
