<template>
  <div class="home-button has-background-link is-flex is-justify-content-center">
    <div class="home-button__title has-background-primary has-text-centered">
      <h1 class="has-text-white is-size-1 is-size-2-touch lamango-font">{{buttonInformation.name}}</h1>
    </div>
    <router-link to="/build">
      <img :src="buttonInformation.urlImg">
    </router-link>
<!--    <img :src=`../../public/assets/images/${buttonInformation.urlImg}`>-->
  </div>
</template>

<script>
export default {
  name: "HomeButton",
  props:{
    buttonInformation:{
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.home-button{
  position: relative;
  border: lightgray 2px solid;
  padding: 30px;
  &__title{
    width: 88%;
    border-radius: 40px;
    opacity: .8;
    position: absolute;
    top: -30px;
    right: 0;
    margin: 0 6%;
  }
  img{
    width: 200px;
    height: 200px;
    margin: auto;
  }
}
</style>