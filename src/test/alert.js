import Alert from './Alert.vue'
import Vue from 'vue'

const props = {}

const Instance = new Vue({
  render: h => h(Alert, {
    props
  })
})

const component = Instance.$mount()

export default component
