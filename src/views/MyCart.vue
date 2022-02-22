<template>
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">MY CART</h1>
        <div class="columns">
          <div class="column is-8">
            <hr class="hr"/>
          </div>
          <div class="column is-4" style="position: relative">
            <div class="resume-total">
              <hr class="hr"/>
              <div class="has-text-left my-4">
                <h1 class="freight-big-pro-font has-text-grey is-size-4">TOTAL</h1>
                <div class="is-flex is-justify-content-space-between">
                  <h1 class="freight-big-pro-font has-text-grey is-size-6">SUBTOTAL</h1>
                  <h1 class="freight-big-pro-font has-text-grey is-size-5">$xxx</h1>
                </div>
                <div class="is-flex is-justify-content-space-between">
                  <h1 class="freight-big-pro-font has-text-grey is-size-6">SHIPPING</h1>
                  <h1 class="freight-big-pro-font has-text-grey is-size-5">$xxx</h1>
                </div>
                <div class="is-flex is-justify-content-space-between">
                  <h1 class="freight-big-pro-font has-text-grey is-size-6">TAXES</h1>
                  <h1 class="freight-big-pro-font has-text-grey is-size-5">$xxx</h1>
                </div>
                <hr class="hr--2"/>
              </div>
              <div class="has-text-right">
                <h1 class="freight-big-pro-font has-text-grey is-size-4">$XXX</h1>
              </div>
              <button class="button button__transparent add-button frunchySerif-font is-size-4 mt-3 w100" style="background-color: #F2D2CD; height: 30px; border-radius: 0">
                CHECKOUT
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
  name: "MyCart"
}
</script>

<style scoped lang="scss">
.resume-total{
  position: sticky;
  top: 180px;
  width: 100%;
}
.giftCard {
  min-width: 150px;
}

.columns {
  max-width: 100%;
}

.build-container {
  min-height: calc(100vh - 2.8rem);
  height: fit-content;
  background-color: #FCF9F7 !important;
  padding-bottom: 144px;
  display: flex;
  vertical-align: center;

  .hr {
    margin: 0;
    height: 4px;
    background-color: #F9EAE6;
    &--2{
      margin: 0;
      height: 2px !important;
      background-color: #F9EAE6;
    }
  }

  &__title {
    font-size: 4rem;
  }

  &__options {
    max-width: 1000px;
    //margin: auto;
    width: 100%;
    padding: 2%;

    .column {
      .planner {
        img {
          width: 230px;
          max-width: 100%;
          height: 180px;
        }
      }

      img {
        width: 180px;
        height: 180px;
        max-width: 100%;

      }
    }
  }
}
</style>