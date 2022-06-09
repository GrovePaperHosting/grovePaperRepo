<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">TUTORIAL</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tutorial"
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