import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '../views/Home.vue';
import Build from "../views/Build";
import Builder from "../views/Builder";
import PreDesing from "../views/PreDesing";
import Details from "../views/Details";
import AboutUs from "../views/AboutUs";
import Blog from "../views/Blog";
import Tutorial from "../views/Tutorial";
import ShippingAndReturns from "../views/ShippingAndReturns";
import Faq from "../views/Faq";
import PrivacyPolicy from "../views/PrivacyPolicy";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/build', component: Build },
    { path: '/builder', component: Builder },
    { path: '/pre-design', component: PreDesing },
    { path: '/details', component: Details },
    { path: '/about-us', component: AboutUs },
    { path: '/blog', component: Blog },
    { path: '/tutorial', component: Tutorial },
    { path: '/shipping-and-returns', component: ShippingAndReturns },
    { path: '/faq', component: Faq },
    { path: '/privacy-policy', component: PrivacyPolicy },
  ]
});

export default router;
