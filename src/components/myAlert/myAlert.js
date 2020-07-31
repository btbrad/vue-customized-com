import Alert from './alert.vue'
import Vue from 'vue'

class MyAlert {
  constructor (props) {
    this.instance = new Vue({
      data: props,
      render: h => h(Alert, { props })
    })
    this.component = this.instance
    console.log('组件为', this.component)
  }

  show () {
    console.log('组件为', this.component)
    this.component.show()
  }
}

export default MyAlert
