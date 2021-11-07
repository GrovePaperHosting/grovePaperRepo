<template>
  <div id="app">
    <b-navbar>
      <template #brand>
        <b-navbar-item class="navbar-logo py-0" tag="router-link" :to="{ path: '/' }">
          <img
              src="../public/assets/images/grovePaperIcon-Pink.png"
              alt="Grove paper icon"
          >
          <h1 class="has-text-primary is-size-2 is-size-3-touch lamango-font">GROVE PAPER</h1>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item class="has-text-primary is-size-4 is-size-5-touch has-text-weight-bold" href="#">
          BUILD
        </b-navbar-item>
        <b-navbar-item class="has-text-primary is-size-4 is-size-5-touch has-text-weight-bold" href="#">
          DETAILS
        </b-navbar-item>
        <b-navbar-item class="has-text-primary is-size-4 is-size-5-touch has-text-weight-bold" href="#">
          TUTORIAL
        </b-navbar-item>
        <b-navbar-item class="has-text-primary is-size-4 is-size-5-touch has-text-weight-bold" href="#">
          BLOG
        </b-navbar-item>
        <b-navbar-item class="has-text-primary is-size-4 is-size-5-touch has-text-weight-bold" href="#">
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
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
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
#app{
  position: relative;
}
.navbar-logo{
  img{
    width: 50px;
  }
}
.shopping-cart-button{
  border: none !important;
  background: none !important;
}
.footer {
  height: 140px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fcf5f5 !important;
}
</style>
