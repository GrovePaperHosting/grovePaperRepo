<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">BUILD</h1>
        <!--<h4 class="has-text-text is-size-3 lamango-font">Choose which product you'd like to customize today.</h4>-->
        <div class="columns is-vcentered is-8 mt-6 p-3">
          <div class="column">
            <router-link class="planner" to="/builder"><img src="../../public/assets/images/Planner.png" alt="Planner"></router-link>
            <h2 class="is-size-4 freight-big-pro-font has-text-weight-light">PLANNER</h2>
          </div>
          <div class="column">
            <router-link to="/builder-notebook"><img src="../../public/assets/images/Notebook.png" alt="Notebook"></router-link>
            <h2 class="is-size-4 freight-big-pro-font has-text-weight-light"> NOTEBOOK</h2>
          </div>
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
    max-width: 700px;
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