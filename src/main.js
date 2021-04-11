import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import './css/public_iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
