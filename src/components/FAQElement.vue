<template>
  <div class="w100">
    <div class="button-container is-flex is-justify-content-space-between">
      <h1 class="has-text-primary is-uppercase"> <slot name="title"></slot></h1>
      <button class="button button__transparent" @click="showContent = !showContent">
        <img class="crossRotate" :class="showContent? 'active':'nonActive'" src="../assets/images/ChevronDown.svg">
      </button>
    </div>
    <div :class="showContent? 'active':'nonActive'" class= "content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQElement",
  data() {
    return {
      showContent: false,
    }
  }
}
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.button-container {
  border: 1.5px solid #F4D7D2;
  background-color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20pt;
  padding: 8px 16px;
  width: 100%;
  box-sizing: border-box;
  img{
    width: 30px;
  }
  .crossRotate.active {
    transform: rotate(180deg);
    transition: transform 0.5s;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
  }
  .crossRotate.nonActive{
    transition: transform 0.5s;
  }
}

.content {
  width: 100%;
  height: 0px;
  /*transition: all 0.3s ease-in-out;*/
  font-size: 18pt;
  border: 0px solid white;
  overflow: hidden;
  box-sizing: border-box;
  transition: height 1.5s;
  background-color: #FFF;
  border-radius: 20px;
}

.content.active {
  border: 3px solid #FCF5F5;
  background-color: #FFFFFF;
  border-radius: 20px;
  height: fit-content;
}
/*.content.nonActive{
  transition: transform 0.5s;
}*/
</style>