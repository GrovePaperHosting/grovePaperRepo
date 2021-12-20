import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '../views/Home.vue';
import Build from "../views/Build";
import Builder from "../views/Builder";
import PreDesing from "../views/PreDesing";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/build', component: Build },
    { path: '/builder', component: Builder },
    { path: '/pre-design', component: PreDesing },
  ]
});

export default router;
