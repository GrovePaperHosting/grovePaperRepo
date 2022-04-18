<template>
  <div :class="`modal ${showModal? 'is-active':'' }`">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="content is-flex is-justify-content-center">
        <div class="content-container p-2 " style="max-width: 40%; width: 350px">
          <div class="has-text-right"><button class="button__transparent p-0 px-3" @click="$emit('closeModal')"><img src="../../src/assets/images/close.png" width="20px" height="20px"></button></div>
          <div class="has-text-centered w100"><h3 class="has-text-weight-light is-size-4 freight-big-pro-font mb-6 mx-6 mt-3 is-size-6"> {{message}}</h3></div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props:{
    message:{
      type: String,
      required: true
    },
    showModal:{
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.content-container{
  border: 2px solid #EDC5BF;
  background-color: #F9F1EC;
}
.come-back-button{
  border-radius: 25px;
  background-color: #F3D7D3;
  height: 30px;
  //background-color: #E5A49A;
}
</style>