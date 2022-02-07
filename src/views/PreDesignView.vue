<template>
  <div class="has-background-secondary build-container">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">

        </div>
        <div class="column">
          <img src="">
        </div>
        <div class="column">
          <h1><span>{{this.$route.params.preDesignInfo.name}}</span> <span></span></h1>
          <h1></h1>
          <div class="columns">
            <div class="column">
              <h1 class="is-size-4">COVER</h1>
            </div>
            <div class="column">
              <h1 class="is-size-4">COIL</h1>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h1 class="is-size-4">COVER</h1>
            </div>
            <div class="column">
              <button> ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreDesign-view",
  props:{
    preDesignInfo:{
      type: Object
    }
  }
}
</script>

<style scoped>

</style>