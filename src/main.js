import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import myBread from './component/myBread.vue'

import axios from './utiles/index'

Vue.prototype.$http = axios
Vue.component('myBread', myBread)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
