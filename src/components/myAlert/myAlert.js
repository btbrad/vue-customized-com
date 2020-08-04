import Vue from 'vue'
import Alert from './alert.vue'

class MyAlert {
  constructor (props) {
    const instance = new Vue({
      data () {
        return {
          props
        }
      },
      render: h => h(Alert, { props })
    })

    this.component = instance.$mount().$children[0]
  }
  show ({ duration, content }) {
    this.component.$data.content = content
    document.body.appendChild(this.component.$el)
    setTimeout(() => {
      document.body.removeChild(this.component.$el)
    }, duration)
  }
}

export default MyAlert
