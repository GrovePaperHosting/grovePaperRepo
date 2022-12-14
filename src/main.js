import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router';
import router from './router';
import store from './store'

//import store from './store';
Vue.use(VueRouter);
Vue.use(Buefy)

require('./assets/bulma.scss')

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
