<template>
  <div class="home-content">
    <div class="pb-6" style="position: relative">
      <!--<div style="position: absolute; top: 150px; height: 200px; width: 100%; background-color: #FCF5F5;"></div>-->
      <div class="container p-6">
        <template>
          <b-carousel :indicator-inside="false" :indicator="false" :pause-hover="false">
            <b-carousel-item>
              <div @click="$router.push({ path: '/details'})" class="p-6">
                <b-image class="image"
                         :src="'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/HomeBanner%2F1.png?alt=media&token=729fa616-f696-4600-9b86-3018749d7f48'">
                  <span>Holiiiii</span>
                </b-image>
              </div>
            </b-carousel-item>
            <b-carousel-item>
              <div @click="$router.push({ path: '/builder'})" class="p-6">
                <b-image class="image"
                         src="https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/HomeBanner%2F2.png?alt=media&token=44faf3de-425a-48f0-bdd9-3170b0cd0877"></b-image>
              </div>
            </b-carousel-item>
            <b-carousel-item>
              <div @click="$router.push({ path: '/shop'})" class="p-6">
                <b-image class="image"
                         src="https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/HomeBanner%2F3.png?alt=media&token=005925c9-d21a-42fc-afda-d4bdb291b9dd"></b-image>
              </div>
            </b-carousel-item>
          </b-carousel>
        </template>
      </div>
      <!--<div class="is-flex is-justify-content-center my-6">
        <img @click="$router.push({ path: '/details'})" class="mx-4" width="380" style="height: 270px; position: relative; z-index: 2"
             src="../../public/assets/images/home-image1.png"
             alt="Grove Paper Logo"
        >
        <img @click="$router.push({ path: '/builder'})" class="mx-4" width="380" style="height: 270px; position: relative; z-index: 2"
             src="../../public/assets/images/home-image2.png"
             alt="Grove Paper Logo"
        >
        <img @click="$router.push({ path: '/shop'})" class="mx-4" width="380" style="height: 270px; position: relative; z-index: 2"
             src="../../public/assets/images/home-image3.png"
             alt="Grove Paper Logo"
        >
      </div>-->
    </div>
    <div>
      <div class="container">
        <section class="home-content-top is-flex is-flex-direction-column is-justify-content-center">
          <div class="home-content-top__content pb-6 px-6">
            <div class="px-6">
              <h1 class="champagne-limousines-font is-size-4 my-6 is-uppercase has-text-centered"> Create a custom
                planner or notebook that fits your
                life! Choose from a variety of covers, coils, and layouts to make your perfect book. <br> <br> We’re a
                Canadian,
                female owned business with the goal of supporting and inspiring others.</h1>
              <div class="is-flex is-justify-content-center">
                <router-link to="/shop">
                  <img
                      src="../../public/assets/images/shopNow.png"
                      alt="Grove Paper Logo"
                  >
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="has-background-link">
        <div class="container has-text-centered py-6">
          <h1 class="is-size-1 lamango-font"> three simple steps</h1>
          <div class="is-flex is-justify-content-center">
            <div class="p-5">
              <h1 class="is-size-1 lamango-font">01</h1>
              <h1 class="is-size-4 champagne-limousines-font">SELECT IF YOU’D LIKE TO BUILD A PLANNER OR A
                NOTEBOOK</h1>
            </div>

            <div class="vl"></div>
            <div class="p-5">
              <h1 class="is-size-1 lamango-font">02</h1>
              <h1 class="is-size-4 champagne-limousines-font">CHOOSE A COVER, A COIL, AND INPUT YOUR CUSTOM DETAILS</h1>
            </div>

            <div class="vl"></div>
            <div class="p-5">
              <h1 class="is-size-1 lamango-font">03</h1>
              <h1 class="is-size-4 champagne-limousines-font">BROWSE AND ADD YOUR FAVOURITE TYPES OF PAGES</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="home-content-middle"></section>
    <section class="home-content-bottom has-background-white">
      <div class="container">
        <div class="home-content-bottom-container">
          <div class="columns is-gapless">
            <!--<div class="column" v-for="(buttonInformation, index) in buttonsInformation" :key="index">
              <home-button :buttonInformation="buttonInformation"></home-button>
            </div>-->
            <div class="column">
              <router-link to="/shop">
                <img src="../assets/images/Shop.png" width="100%">
              </router-link>
            </div>
            <div class="column">
              <router-link to="/build">
                <img src="../assets/images/Build.png" width="100%">
              </router-link>
            </div>
            <div class="column">
              <router-link to="/pre-design">
                <img src="../assets/images/Pre-Designed.png" width="100%">
              </router-link>
            </div>
            <div class="column">
              <router-link to="/Blog">
                <img src="../assets/images/Blog.png" width="100%">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="fd-form-616a1ccfce1180e9a55d5160" class="subForm"></div>
  </div>

</template>

<script>

export default {
  name: "Home.vue",
  data() {
    return {
      /*buttonsInformation: [
        {
          name: 'Shop',
          urlImg: '../assets/images/Shop.png',
          pathName: 'shop'
        },
        {
          name: 'Build',
          urlImg: '../assets/images/Build.png',
          pathName: 'build'
        },
        {
          name: 'Pre-designed',
          urlImg: '../assets/images/Pre-Designed.png',
          pathName: 'pre-design'
        },
        {
          name: 'Blog',
          urlImg: '../assets/images/Blog.png',
          pathName: 'Blog'
        }
      ]*/
    };
  },
}
</script>

<style scoped lang="scss">
.home-content {
  //padding-bottom: 115px;
  background-color: #FFFFFF !important;
  .vl {
    border-left: 2px solid #E6A89F;
    //height: 500px;
  }
  &-top {
    height: fit-content;
    background-color: #FFFFFF !important;

    &__logo-content {
      img {
        height: 420px;
        width: 280px;
      }
    }

    &__content {
      width: 100vw;
      max-width: 800px;
      margin: auto;

      img {
        width: 180px;
        height: 60px;
        margin: auto;
      }
    }
  }

  &-middle {
    height: 500px;
    width: 100%;
    background-image: url(../../public/assets/images/Fixed.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  &-bottom {
    //height: 360px;

    &-container {
      position: relative;
      background-color: white;
      .columns {
        position: relative;
        top: -25px;

        img {
          height: 250px !important;
          max-width: 250px;
        }
      }
    }

    //margin-bottom: 200px;
  }
}

</style>