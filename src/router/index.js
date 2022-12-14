import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '../views/Home.vue';
import Build from "../views/Build";
import Builder from "../views/Builder";
import BuilderNotebook from "../views/BuilderNotebook";
import PreDesing from "../views/PreDesing";
import Details from "../views/Details";
import AboutUs from "../views/AboutUs";
import Blog from "../views/Blog";
import Tutorial from "../views/Tutorial";
import ShippingAndReturns from "../views/ShippingAndReturns";
import Faq from "../views/Faq";
import Shop from "../views/Shop";
import PrivacyPolicy from "../views/PrivacyPolicy";
import PreDesignView from "../views/PreDesignView"
import PreView from "../views/PreView";
import ContactUs from "../views/ContactUs";
import TermsOfService from "../views/TermsOfServices";
import MyCart from "../views/MyCart";
import successfulPayment from "../views/successfulPayment";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/build', component: Build },
    { path: '/shop', component: Shop },
    { path: '/builder', component: Builder },
    { path: '/builder-notebook', component: BuilderNotebook },
    { path: '/pre-design', component: PreDesing },
    { path: '/details', component: Details },
    { path: '/about-us', component: AboutUs },
    { path: '/contact-us', component: ContactUs },
    { path: '/blog', component: Blog },
    { path: '/tutorial', component: Tutorial },
    { path: '/shipping-and-returns', component: ShippingAndReturns },
    { path: '/terms-of-service', component: TermsOfService },
    { path: '/faq', component: Faq },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/pre-design-view', component: PreDesignView},
    { path: '/my-cart', component: MyCart},
    { path: '/PreView',name: "PreView" ,component: PreView, props:true},
    { path: '/successful-payment', component: successfulPayment},

  ]
});

export default router;
