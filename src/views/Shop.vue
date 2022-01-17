<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">SHOP</h1>
        <!--<h4 class="has-text-text is-size-3 lamango-font">Choose which product you'd like to customize today.</h4>-->
        <div class="columns is-vcentered is-8 mt-6 p-3">
          <div class="column">
            <div style="height: 214px">
            <router-link class="planner" to="/builder"><img src="../../public/assets/images/customizablePlanner.png" alt="Planner"></router-link>
            </div>
            <h2 class="is-size-4 kontuor-font has-text-weight-light">CUSTOMIZABLE PLANNER</h2>
          </div>
          <div class="column">
            <div style="height: 214px">
              <router-link to="/"><img src="../../public/assets/images/customizableNotebook.png" alt="Notebook"></router-link>
            </div>
            <h2 class="is-size-4 kontuor-font has-text-weight-light"> CUSTOMIZABLE NOTEBOOK</h2>
          </div>
          <div class="column">
            <div style="height: 214px">
              <router-link to="/pre-design"><img src="../../public/assets/images/predesingPlanner.png" alt="Notebook"></router-link>
            </div>
            <h2 class="is-size-4 kontuor-font has-text-weight-light"> PRE-DESIGNED PLANNER</h2>
          </div>
          <div class="column" style="position: relative; height: 300px">
            <div style="height: 214px; width: 322px">
              <router-link to="/"><img src="../../public/assets/images/GiftCardShop.png" alt="Notebook"
                                       class="giftCard"></router-link>
            </div>
            <h2 class="is-size-4 kontuor-font has-text-weight-light"> GIFT CARDS</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop"
}
</script>

<style scoped lang="scss">
.giftCard{
  min-width: 150px;
  //position: absolute;
  top: 15px;
  left: 10px;
  height: 100% !important;
  width: 100% !important;
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
    max-width: 1200px;
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
        width: 214px;
        height: 214px;
        //max-width: 100%;

      }
    }
  }
}
</style>