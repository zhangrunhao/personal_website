import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false
import './lib/autoSize'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
