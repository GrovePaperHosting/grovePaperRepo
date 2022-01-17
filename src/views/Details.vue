<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">DETAILS</h1>
        <!--<h4 class="has-text-text is-size-3 lamango-font">Choose which product you'd like to customize today.</h4>-->
        <div class="has-text-left">
          <h1 class="has-text-grey is-size-4">Our paper</h1>
          <h2 class="has-text-grey is-size-6 freight-big-pro-font">We know how important paper is, so we only use the best for you! We use high quality 80# paper that won’t bleed or shadow.</h2>
          <h1 class="has-text-black is-size-4 mt-2">Covers</h1>
          <h2 class="has-text-grey is-size-6 freight-big-pro-font">
            With your choice of a durable linen material or beautifully designed art, our covers will not disappoint. We live out our mission of women supporting women and all of our art covers are designed by incredibly talented women. If you are an artist and interested in partnering with us to design a cover, please send us an email to hello@grovepaper.ca and we would love to talk!
          </h2>
          <h1  class="has-text-black is-size-4 mt-2">Layout options</h1>
          <h2 class="has-text-grey is-size-6 freight-big-pro-font">
            Do you like to see your whole day laid out or do you prefer to plan weekly? Either way - we have you covered! With many options for daily pages, one or two page weekly spreads you are sure to find your perfect layout. Not sure where to start? Start with one of our pre-filled planners and customize from there.
          </h2>
          <h1  class="has-text-black is-size-4 mt-2">+ Add on pages</h1>
          <h2 class="has-text-grey is-size-6 freight-big-pro-font">Make your planner or notebook work for your life by adding extra pages to fit your needs. Try adding meal planning pages or a gifting page so you never forget a birthday gift again! You can add extra pages weekly, monthly or at the beginning or end of your planner/notebook. Looking for a page that we don’t have? We are always looking to expand our options, so send us an email at hello@grovepaper.ca with your ideas and we will try to make it happen.</h2>
          <h1  class="has-text-black is-size-4 mt-2">Coils</h1>
          <h2 class="has-text-grey is-size-6 freight-big-pro-font">Are all your accessories rose gold and you want to make sure your planner matches too? We can help! Our coils come in 3 colour options - gold, rose gold, and silver.</h2>
          <h1  class="has-text-black is-size-4 mt-2">Pocket insert page</h1>
          <h2 class="has-text-grey is-size-6 freight-big-pro-font">People who love paper always have so much of it! We’ve got just the place for you to put your sticky notes, receipts and other bits and bobs. Our double sided pocket insert will hold all of your extras for when you need them.</h2>
          <h1  class="has-text-black is-size-4 mt-2">Size of planner</h1>
          <h2 class="has-text-grey is-size-6 freight-big-pro-font">Size matters. Our planners and notebooks are 7.5 x 9.75 inches. They are big enough to plan your day, dream up items for your bucket list, plan your meals for the week and still fit in your purse for when you are on the go.</h2>
          <h1  class="has-text-black is-size-4 mt-2">Number of pages</h1>
          <h2 class="has-text-grey is-size-6 freight-big-pro-font">Our planners and notebooks can accommodate a minimum of 120 pages to a maximum of 242 pages.</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Build"
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