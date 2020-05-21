import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios=axios
if (process.env.NODE_ENV == 'development') {    
  axios.defaults.baseURL = 'http://192.168.199.111:8080/';
}else if (process.env.NODE_ENV == 'production') {    
  axios.defaults.baseURL = '线上地址';
}
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
