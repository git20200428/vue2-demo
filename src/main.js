import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
// import less from 'less'
// Vue.use(less)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
