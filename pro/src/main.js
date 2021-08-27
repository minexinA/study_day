import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//导入axios
import axios from '@/utils/request'
Vue.prototype.$axios=axios

// 移动端适配
import 'lib-flexible/flexible'; 

import  './plugins/vant.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
