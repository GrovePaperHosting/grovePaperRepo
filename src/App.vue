<template>
  <div id="app">
    <b-navbar centered class="champagne-limousines-font">
      <template #brand>
        <b-navbar-item class="navbar-logo py-0" tag="router-link" :to="{ path: '/' }">
          <img
              src="../public/assets/images/grovePaperIcon-Pink.png"
              alt="Grove paper icon"
          >
          <h1 class="has-text-primary is-size-1 lamango-font">GROVE PAPER</h1>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item class="has-text-primary is-size-3 is-size-4-touch has-text-weight-bold px-4" href="/build">
          BUILD
        </b-navbar-item>
        <b-navbar-item class="has-text-primary is-size-3 is-size-5-touch has-text-weight-bold px-4" href="/details  ">
          DETAILS
        </b-navbar-item>
        <b-navbar-item class="has-text-primary is-size-3 is-size-5-touch has-text-weight-bold px-4" href="/tutorial">
          TUTORIAL
        </b-navbar-item>
        <b-navbar-item class="has-text-primary is-size-3 is-size-5-touch has-text-weight-bold px-4" href="/blog">
          BLOG
        </b-navbar-item>
        <b-navbar-item class="has-text-primary is-size-3 is-size-5-touch has-text-weight-bold px-4" href="/about-us">
          ABOUT US
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button shopping-cart-button" @click="showCar=true">
              <img
                  src="../public/assets/images/Shopping Cart.png"
                  alt="Shopping Cart icon"
              >
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="side-menu" v-show="showCar" :class="showCar? 'active':'non-active'">
      <div class="is-flex is-justify-content-space-between">
        <h1 class="freight-big-pro-font has-text-primary is-size-2">My Cart</h1>
        <button v-show="showCar" class="button__transparent" style="height: 36px; width: 36px; margin-top: -10px; margin-right: -10px" @click="showCar=false"><img src="../public/assets/images/CloseBtn.svg"></button>
      </div>
      <hr/>
      <div>
        <cart-element v-for="(element, index) in this.$store.getters.getCartItems" :key="index" :index="index" :cart-element-info="element"></cart-element>
      </div>
      <div style="position: absolute; bottom: 0px; width: 300px">
        <hr/>
        <div class="is-flex is-justify-content-space-between">
          <h1 class="freight-big-pro-font has-text-grey is-size-4">SUBTOTAL</h1> <h1 class="freight-big-pro-font has-text-grey is-size-4">$xxx</h1>
        </div>
        <button class="button button__transparent add-button frunchySerif-font is-size-4 mt-3 w100" @click="initialize" style="background-color: #F2D2CD; height: 40px; border-radius: 0">
          CHECKOUT
        </button>
        <div class="has-text-centered"><a class=" has-text-grey is-size-4 is-underlined" href="/my-cart">Review Order</a></div>
      </div>
    </div>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <footer class="footer">
      <div class="columns">
        <div class="column has-text-centered">
          <router-link to="/shipping-and-returns"><h1 class="has-text-weight-semibold champagne-limousines-font champagne-limousines-font__spacing1">SHIPPING AND RETURNS</h1></router-link>
        </div>
        <div class="column has-text-centered">
          <router-link to="/faq"><h1 class="has-text-weight-semibold champagne-limousines-font champagne-limousines-font__spacing1">FAQ</h1></router-link>
        </div>
        <div class="column has-text-centered">
          <router-link to="/contact-us"><h1 class="has-text-weight-semibold champagne-limousines-font champagne-limousines-font__spacing1">CONTACT US</h1></router-link>
        </div>
        <div class="column has-text-centered">
          <router-link to="/privacy-policy"><h1 class="has-text-weight-semibold champagne-limousines-font champagne-limousines-font__spacing1">PRIVACY POLICY</h1></router-link>
        </div>
        <div class="column has-text-centered">
          <router-link to="/terms-of-service"><h1 class="has-text-weight-semibold champagne-limousines-font champagne-limousines-font__spacing1">TERMS OF SERVICE</h1></router-link>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-left">
          <h1 class="has-text-weight-normal is-size-6 champagne-limousines-font"> © 2022 Grove Paper. All Rights Reserved. Website made with love by Ana Steinberg Designs </h1>
        </div>
        <div class="column is-narrow has-text-centered">
          <a target="_blank" href="https://www.instagram.com/grove.paper/"><img class="icons-social-media mx-2" src="../public/assets/images/Instagram.png"></a>
          <a target="_blank" href="https://www.facebook.com/grovepaper"><img class="icons-social-media mx-2" src="../public/assets/images/Facebook.png"></a>
          <a target="_blank" href="https://www.pinterest.ca/grovepaper  "><img class="icons-social-media mx-2" src="../public/assets/images/Pinterest.png"></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import CartElement from "./components/CartElement";
import axios from 'axios';
export default {
  name: 'App',
  components: {
    CartElement,
  },
  data(){
    return{
      showCar: false,
      items:
      [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 2,
        },
      ],
    }
  },
  methods:{
    async initialize() {
       const  response = await axios.post('http://localhost:4242/create-checkout-session',
          {params: {items: this.items}},
          {
            headers: {"Content-Type": "application/json"}
          });
        console.log('response', response);
        window.location.href = response.data.url
/*      const response = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(this.items),
      });
      const { clientSecret } = await response.json();
      console.log('clientSecret', clientSecret);*/
    }
  }
}
</script>

<style lang="scss">
.side-menu{
  height: 100vh;
  width: 0;
  //min-width: 320px;
  top: 0px;
  right: 0px;
  z-index: 99 !important;
  background-color: white;
  transition: width 0.5s;
  hr{
    margin: 0;
    height: 4px;
    background-color: #FCF5F5;
  }
}
.side-menu.active{
  height: 100vh;
  width: 350px;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 99 !important;
  background-color: white;
  padding: 20px;
  transition: width 0.5s;
  border-right: 5px solid #FCF5F5 ;
  border-left: 5px solid #FCF5F5 ;
}
.subForm{
  padding-bottom: 115px !important;
}
#app{
  position: relative;
}
.navbar.has-navbar-centered .navbar-start{
  margin-left: 5% !important;
}
.navbar-logo{
  img{
    width: 50px;
    height: 50px;
    max-height: 100% !important;
  }
}
.shopping-cart-button{
  border: none !important;
  background: none !important;
}
.footer {
  height: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fcf5f5 !important;
  padding: 1rem !important;
  h1{
    color: #E5A49A;
  }
  .rights{
    width: 80%;
    max-width: 500px;
  }
  .icons-social-media{
    width: 26px;
    height: 26px;
  }
}
</style>
