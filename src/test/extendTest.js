import Vue from 'vue'

const AlertComponent = Vue.extend({
  template: '<div>{{ message }}</div>',
  data () {
    return {
      message: 'Hello World'
    }
  }
})

const component = new AlertComponent().$mount()

export default component
