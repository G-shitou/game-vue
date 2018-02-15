import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import VueResource from 'vue-resource'


Vue.config.productionTip = false
Vue.use(VueResource)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
