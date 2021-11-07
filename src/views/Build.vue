<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <h1 class="build-container__title has-text-primary frunchySerif-font">BUILD</h1>
      <h4 class="has-text-text is-size-4 lamango-font">Choose which product you'd like to customize today.</h4>
      <div class="build-container__options">
        <div class="columns is-vcentered p-6 is-8">
          <div class="column mx-6">
            <router-link to="/builder"><img src="../../public/assets/images/Planner.png" alt="Planner"></router-link>
            <h2 class="is-size-4 kontuor-font has-text-weight-light"> PLANNER</h2>
          </div>
          <div class="column mx-6">
            <router-link to="/"><img src="../../public/assets/images/Notebook.png" alt="Notebook"></router-link>
            <h2 class="is-size-4 kontuor-font has-text-weight-light"> NOTEBOOK</h2>
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
.build-container{
  min-height: 95vh;
  height: fit-content;
  background-color: #FCF9F7 !important;
  padding-bottom: 144px;
  &__title{
    font-size: 4rem;
  }
  &__options{
    max-width: 800px;
    margin: auto;
    .column{
      img{
        width: 130px;
        height: 150px;
      }
    }
  }
}
</style>