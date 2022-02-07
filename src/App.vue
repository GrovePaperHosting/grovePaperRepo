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
            <a class="button shopping-cart-button">
              <img
                  src="../public/assets/images/Shopping Cart.png"
                  alt="Shopping Cart icon"
              >
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <div id="fd-form-616a1ccfce1180e9a55d5160" class="subForm"></div>
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

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
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
