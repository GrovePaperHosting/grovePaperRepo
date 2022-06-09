<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">SHIPPING & RETURNS</h1>
        <!--<h4 class="has-text-text is-size-3 lamango-font">Choose which product you'd like to customize today.</h4>-->
        <div class="has-text-left">
          <h1 class="has-text-black is-size-4">Shipping</h1>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font">Your planner/notebook will be shipped throughout Canada using Canada Post shipping. For the US, your planner/notebook will be shipped to you using xxx shipping. Shipping is calculated at checkout based on your shipping address.</h2>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font">When you place an order, you will receive email updates throughout the process. We provide a tracking number when your order is shipped. Your order will be shipped out approximately 10 business days after you place your order. As our products are printed on demand, if there is a delay with the printer there will be a notification on the home page.</h2>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font"> If you are outside of Canada or the US, send us an email to <a class="link" target="_blank" href="mailto:hello@grovepaper.ca"> hello@grovepaper.ca </a> and we will calculate your shipping for you.</h2>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font"> If you are located outside of Canada, you will be responsible for your country’s customs/duties/delivery fees and any associated delays.</h2>
          <h1 class="has-text-black is-size-4 mt-5">Returns</h1>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font">
            We want you to love your planner or notebook. Since our products are customized for you, we are unable to accept any returns unless there is an error or any damage on our part. As such, all sales are final. If there is an error or damage on our part, please contact us at <a class="link" target="_blank" href="mailto:support@grovepaper.ca"> support@grovepaper.ca</a> within 10 days of receiving your order.
          </h2>
          <h1  class="has-text-grey is-size-5 mt-3 is-italic">Errors</h1>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font">
            Prior to purchasing your planner or notebook, you will have the opportunity to review each page of your product before being asked to confirm the previewed product. By confirming you have reviewed your product, you understand that your product will be printed as shown. We will compare your printed product to your order to determine if there is an error.
          </h2>
          <h1  class="has-text-grey is-size-5 mt-3 is-italic">Damage</h1>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font">If you receive your product and it is damaged, please contact document the damage and send us an email to <a class="link" target="_blank" href="mailto:hello@grovepaper.ca"> hello@grovepaper.ca </a> so we can make it right.</h2>
          <h1  class="has-text-black is-size-4 mt-5">Cancellations</h1>
          <h2 class="has-text-grey is-size-5 freight-big-pro-font">
            We want you to get your product as quickly as possible, so as soon as your order is placed it is sent to the printer. We are unable to cancel an order once it has been placed. If there is an error in your shipping information, please contact us as soon as possible at <a class="link" target="_blank" href="mailto:support@grovepaper.ca">support@grovepaper.ca.</a>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingAndReturns"
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