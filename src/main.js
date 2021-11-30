import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router';
import router from './router';
import VueHtml2Canvas from 'vue-html2canvas';

//import store from './store';
Vue.use(VueHtml2Canvas);
Vue.use(VueRouter);
Vue.use(Buefy)

require('./assets/bulma.scss')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
