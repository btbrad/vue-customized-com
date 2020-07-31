import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Alert from '@/components/alert/alert.js'
import Cart from '@/components/Cart/cart.js'
import create from '@/utils/create.js'
import MyAlert from '@/components/myAlert/index.js'

Vue.config.productionTip = false

// Vue.config.devtools = true

Vue.config.performance = true

Vue.prototype.$Alert = Alert

Vue.prototype.$MyAlert = MyAlert

Vue.prototype.$addToCart = Cart

Vue.prototype.$create = create

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
