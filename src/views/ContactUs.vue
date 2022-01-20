<template >
  <div class="has-background-secondary build-container">
    <div class="is-flex is-flex-direction-column" style="width: 100%">
      <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
        <div class="build-container__options">
          <h1 class="build-container__title has-text-primary frunchySerif-font">CONTACT US</h1>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font">We’d love to hear from you! Send us an email to
            <span class="is-underlined">hello@grovepaper.ca</span> or fill out the form below.</h2>
        </div>
      </div>
      <div class="p-6" style="background: #FCF5F5">
        <div class="columns">
          <div class="column">
            <img style="max-width: 300px" src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/Contact%20Us.png?alt=media&token=2b253aaf-47f1-4cf7-aa2d-9afd4c27de3b">
          </div>
          <div class="column">
            <h1 class="is-size-6 freight-big-pro-font has-text-grey-dark has-text-weight-light">Name</h1>
            <b-field>
              <input class="input" type="email" v-model="formValue['name']">
            </b-field>
            <h1 class="is-size-6 freight-big-pro-font has-text-grey-dark has-text-weight-light">Email </h1>
            <b-field>
              <input class="input" type="email" v-model="formValue['email']">
            </b-field>
          </div>
          <div class="column">
            <h1 class="is-size-6 freight-big-pro-font has-text-grey-dark has-text-weight-light">Message</h1>
            <textarea class="textarea" type="textarea" row="3" v-model="formValue['message']"></textarea>
            <div class="mt-3 w100 is-flex is-justify-content-center">
              <button class="button has-background-primary has-text-white is-size-4 is-small" style="height: 36px">Send
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      formValue:[]
    }
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