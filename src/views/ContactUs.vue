<template >
  <div class="has-background-secondary build-container">
    <div class="is-flex is-flex-direction-column" style="width: 100%">
      <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
        <div class="build-container__options">
          <h1 class="build-container__title has-text-primary frunchySerif-font">CONTACT US</h1>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font">We’d love to hear from you! Send us an email to
            <a class="link" target="_blank" href="mailto:hello@grovepaper.ca"> hello@grovepaper.ca </a> or fill out the form below.</h2>
        </div>
      </div>
      <div class="p-6" style="background: #FCF5F5">
        <div class="columns">
          <div class="column">
            <img style="max-width: 300px; position: fixed; bottom: 180px;" src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/Contact%20Us.png?alt=media&token=2b253aaf-47f1-4cf7-aa2d-9afd4c27de3b">
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
              <button v-if="!messageSent" :class="`button has-background-primary has-text-white is-size-4 is-small ${loading? 'is-loading':''}`" style="height: 36px" @click="sentEmail()">Send
                Message
              </button>
              <h1 v-else :class="`has-text-primary has-text-weight-semibold is-size-4 ${loading? '':'is-loading'}` "> Thank you for your message!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {init, send} from 'emailjs-com';

/*init(process.env.VUE_APP_EMAIL_ID);*/
init("user_rVFW3uNdwPo3aLyWfIMyo");


export default {
  name: "ContactUs",
  data() {
    return {
      formValue:[],
      messageSent: false,
      loading: false,

    }
  },
  methods:{
    sentEmail(){
      this.loading = true;
      const templateParams = {from_name: this.formValue['name'], reply_to: this.formValue['email'], message:this.formValue['message']}
      const self = this;
      send('service_w81r30t', 'template_aenwm4r', templateParams)
          .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            self.messageSent = true;
            self.loading = false;
          }, function (error) {
            console.log('FAILED...', error);
            self.messageSent = false;
            self.loading = false;
          });
    }
  },
}
</script>

<style scoped lang="scss">
.textarea{
  font-size: 1.5rem;
}
.giftCard{
  min-width: 150px;
}
.columns{
  max-width: 100%;
}
.build-container{
  min-height: calc(100vh - 2.8rem);
  height: fit-content;
  background-color: #FFFFFF !important;
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