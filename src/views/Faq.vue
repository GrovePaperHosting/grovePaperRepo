<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">FAQ</h1>
        <div class="is-flex is-flex-direction-column">
          <FAQElement class="my-3">
            <template v-slot:title>
              <h1>creating a planner/notebook</h1>
            </template>
            <div class="has-text-left p-5">
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1">1) Do you offer pre-made notebooks or planners'</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">Yes! We have standards templates that you can use as is or adjust for needs. You just need to pick your cover and coil. To find this templates <a class="link" href="/pre-design"> click here </a>.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">2) How do I create my own planner or notebook?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">We will walk you through each step to create your perfect planner or notebook. To find our tutorial <a class="link" href="/tutorial"> click here </a>.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">3) What is the difference between a planner and notebook?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">When creating a planner, you will have to select a daily or weekly layout along with a start month and duration for your planner. A notebook does not have the daily or weekly layout and is filled  with our + add on pages instead.</h1>
            </div>
          </FAQElement>
          <FAQElement class="my-3">
            <template v-slot:title>
              <h1>your order</h1>
            </template>
            <div class="has-text-left p-5">
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1">1) How long will it take for my order to be ready and ship?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">Our products are all custom printed just for you. Your order will ship out in approximately 10 business days after your order has been placed. Please choose your start date accordingly.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">2) Do you offer expedited shipping?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">Yes- we can't wait for you to get your planner/notebook either! Please select the expedited shipping option during checkout.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">3) Can I make changes to my order or cancel my order after it has been placed?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">We begin processing your order as soon as it is placed and are unfortunately unable to cancel or make any changes. You will have the opportunity to review your entire planner or notebook before you order to make sure it is the way you want it.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">3) Do you take returns?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">We want you to love your planner or notebook. Since our products are customized for you, we are unable to accept any returns unless there is an error or any damage on our part. As such, all sales are final. If there is an error or damage on our part, please contact us at <a class="link" target="_blank" href="mailto:support@grovepaper.ca"> support@grovepaper.ca</a> within 10 days of receiving your order.</h1>
            </div>
          </FAQElement>
          <FAQElement class="my-3">
            <template v-slot:title>
              <h1>Planners/notebooks</h1>
            </template>
            <div class="has-text-left p-5">
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1">1) What size are the planners and notebooks?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">Our planners notebooks are 7.5 x 9.5 inches.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">2) What type of paper do you use?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">We use high quality 80# paper in all of our products.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">3) Will you have more covers?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">Yes! We will release new covers periodically. We will post all updates on Instagram and Facebook. Follow us to keep in the loop. If there is a certain colour or design you are looking for - we would love to hear it! Send us an email at <a class="link" target="_blank" href="mailto:hello@grovepaper.ca"> hello@grovepaper.ca</a>. it is placed and are unfortunately unable to cancel or make any changes.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">4) Will you have additional layouts and add on pages?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">Yes! We will changing and expanding our options. if you have an idea - we would love to hear it! Send us an email at <a class="link" target="_blank" href="mailto:hello@grovepaper.ca"> hello@grovepaper.ca</a>.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">5) My planner/notebook is over the page limit -what can I do?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">Oh no! We get that it can be hard to decide to between having lots of +add on pages and a longer planning period. You can review how long you are making your planner and shorten the length, change the frequency or quality of +add on pages or create separate planners/notebooks to suit your needs.</h1>
              <h1 class="has-text-black is-size-4 has-text-weight-light has-text-weight-light m-1 mt-3">6) I'm an artist and I want to work with you - what do I need to do?</h1>
              <h1 class="has-text-grey is-size-5 freight-big-pro-font has-text-weight-light m-0">We are always on the lookout for amazingly talented women artist and can't wait to hear from you. Send us an email to <a class="link" target="_blank" href="mailto:hello@grovepaper.ca"> hello@grovepaper.ca</a> and tell us your ideas or just to say hello.</h1>

            </div>
          </FAQElement>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FAQElement from "../components/FAQElement";

export default {
  name: "Tutorial",
  components:{
    FAQElement
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