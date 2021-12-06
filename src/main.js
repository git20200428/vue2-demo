import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
// import less from 'less'
// Vue.use(less)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
