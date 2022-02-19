<template>
  <div class="home-content">
    <div class="container">
      <section class="home-content-top is-flex is-flex-direction-column is-justify-content-center">
        <div class="home-content-top__logo-content is-flex is-justify-content-center my-6">
          <img
              src="../../public/assets/images/GrovePaperLogo.png"
              alt="Grove Paper Logo"
          >
        </div>
        <div class="home-content-top__content pb-6">
          <div class="columns is-vcentered p-4">
            <div class="column is-narrow is-flex justify-content-center"><img src="../../public/assets/images/main-image.png" alt="Main image"></div>
            <div class="column p-5">
              <h1 class="lamango-font is-size-3 is-size-4-touch"> Create a custom planner or notebook that fits your
                life! Choose from a variety of covers, coils, and layouts to make your perfect book. We’re a Canadian,
                female owned business with the goal of supporting and inspiring others.</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="home-content-middle"></section>
    <section class="home-content-bottom has-background-link">
      <div class="container">
        <div class="home-content-bottom-container">
          <div class="columns is-gapless">
            <div class="column" v-for="(buttonInformation, index) in buttonsInformation" :key="index">
              <home-button :buttonInformation="buttonInformation"></home-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="fd-form-616a1ccfce1180e9a55d5160" class="subForm"></div>
  </div>

</template>

<script>
import HomeButton from "../components/HomeButton";

export default {
  name: "Home.vue",
  components:{
    HomeButton
  },
  data() {
    return {
      buttonsInformation: [
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
      ]
    };
  },
}
</script>

<style scoped lang="scss">
.home-content {
  //padding-bottom: 115px;
  background-color: #FCF9F7 !important;

  &-top{
     height: fit-content;
    background-color: #FCF9F7 !important;

    &__logo-content{
    img{
      width: 380px;
    }
  }
  &__content{
     width: 100vw;
     max-width: 800px;
     margin: auto;
    img{
      width: 300px;
      height: 100%;
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
&-bottom{
   height: 360px;
  &-container{
    position: relative;
    .columns{
      position: relative;
      top: -25px;
      img{
        height: 250px !important;
      }
    }
  }
   //margin-bottom: 200px;
 }
}

</style>