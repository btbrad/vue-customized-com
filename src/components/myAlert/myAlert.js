import Vue from 'vue'
import Alert from './alert.vue'

const instance = new Vue({
  render: h => h(Alert)
})

const component = instance.$mount().$children[0]

export const show = () => {
  document.body.appendChild(component.$el)
}
