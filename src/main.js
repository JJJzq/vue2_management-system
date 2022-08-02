import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'



import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);



new Vue({
  store,
  router: router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
