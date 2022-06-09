<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">ABOUT US</h1>
        <div class="columns build-container__options__images">
          <div class="column">
            <img class="first-img" src="../../public/assets/images/briana-tozour-hkkQbPa49UA-unsplash.png">
            <img class="second-img" src="../../public/assets/images/about-us-img1.png">
            <img class="hover" src="../../public/assets/images/AboutUs.png">
          </div>
          <div class="column">
            <div class="has-text-left">
              <h2 class="has-text-grey is-size-5 freight-big-pro-font">Welcome! We’re Megan and Danielle, founders of Grove Paper. We’ve been
                best friends since elementary school and have always shared an appreciation for all things pretty and
                organized. After talking through our frustrations with finding a perfect planner that encompasses
                everything we need to organize our crazy lives, we quickly realized that a perfect planner didn’t exist.
                We knew we were not the only ones to feel this pain, so along came the idea for Grove Paper.</h2>
              <h2 class="has-text-grey is-size-5 freight-big-pro-font">Grove Paper was set out to give people the ability to completely
                customize their planners and notebooks and not sacrifice quality or aesthetics to do so. Our products
                offer quality and a multitude of options to create your own unique notebook. We are passionate about
                supporting other women entrepreneurs and small businesses. That’s why we try as hard as we can to
                support
                local, Canadian, women owned small businesses as much as possible. If you’re a female small business
                owner, or just have a really cool idea? We’d love to work with you! Feel free to contact us at
                <a class="link" target="_blank" href="mailto:hello@grovepaper.ca">hello@grovepaper.ca.</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
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
  overflow-y: auto;
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
    &__images{
      position: relative;
      .first-img{
        max-width: 350px;
      }
      .second-img{
        max-width: 350px;
        margin-top: -100px;
      }
      .hover{
        position: fixed;
        top: 200px;
        left: 14%;
        width: 180px;
      }
    }

  }
}
</style>