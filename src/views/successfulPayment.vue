<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="has-text-primary has-text-weight-light" style="font-size: 4rem !important;">  Successful payment</h1>
        <h3 class="has-text-black is-size-4">The payment was successful!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {send} from "emailjs-com";

export default {
  name: "Tutorial",
  methods:{
    sendEmail(){
      const templateParams = {url: 'urlPrueba'}
      send('service_w81r30t', 'template_92dxr79', templateParams)
          .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function (error) {
            console.log('FAILED...', error);
          });
    }
  },
  created() {
    this.sentEmail();
  }
}
</script>

<style scoped lang="scss">
.giftCard{
  min-width: 150px;
}
.columns{
  max-width: 100%;
}
.build-container{
  min-height: calc(100vh - 2.8rem);
  height: fit-content;
  background-color: #FCF9F7 !important;
  padding-bottom: 144px;
  display: flex;
  vertical-align: center;
  &__title{
    font-size: 4rem;
  }
  &__options{
    max-width: 1000px;
    margin: auto;
    width: 100%;
    padding: 2%;
    .column{
      .planner {
        img {
          width: 230px;
          max-width: 100%;
          height: 180px;
        }
      }
      img{
        width: 180px;
        height: 180px;
        max-width: 100%;

      }
    }
  }
}
</style>