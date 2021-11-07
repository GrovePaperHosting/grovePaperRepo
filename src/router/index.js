import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '../views/Home.vue';
import Build from "../views/Build";
import Builder from "../views/Builder";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/build', component: Build },
    { path: '/builder', component: Builder },
  ]
});

export default router;
