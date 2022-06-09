<template>
  <div id="g-1_-Month-_-Memories-L-box" class="ai2html">

    <!-- Artboard: Artboard_1 -->
    <div id="g-1_-Month-_-Memories-L-Artboard_1" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-1_-Month-_-Memories-L-Artboard_1-img" class="g-aiImg" alt="" src="./1_-Month-_-Memories-L-Artboard_1.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:94.283%;margin-top:-5.9px; width: 100%">
        <p v-if="this.$store.state.extraSelection === 'Motivational quotes' || this.$store.state.extraSelection === 'self-care challenges'" class="g-pstyle0" style="margin: auto">{{ extra }}</p>
        <img v-else :src="extra" style="bottom: 0px; left: 0px">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "monthMemories1",
  data(){
    return{
      extra: ''
    }
  },
  props: {
    index: {
      type: Number
    }
  },
  computed: {
    selection () {
      return this.$store.state.extraSelection
    }
  },
  watch: {
    selection (newCount) {
      if (newCount === 'Motivational quotes') this.extra = this.$store.state.motivational[this.index];
      else if (newCount === 'self-care challenges') this.extra = this.$store.state.challenges[this.index];
      else this.extra = this.$store.state.personalCheckIns[newCount];
    }
  },
}
</script>

<style media="screen,print" scoped>
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-1_-Month-_-Memories-L-box ,
#g-1_-Month-_-Memories-L-box .g-artboard {
  margin:0 auto;
}
#g-1_-Month-_-Memories-L-box p {
  margin:0;
}
#g-1_-Month-_-Memories-L-box .g-aiAbs {
  position:absolute;
}
#g-1_-Month-_-Memories-L-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-1_-Month-_-Memories-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-1_-Month-_-Memories-L-box .g-aiPointText p { white-space: nowrap; }
#g-1_-Month-_-Memories-L-Artboard_1 {
  position:relative;
  overflow:hidden;
}
#g-1_-Month-_-Memories-L-Artboard_1 p {
  font-weight:500;
  line-height:11px;
  height:auto;
  filter:alpha(opacity=100);
  -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity:1;
  letter-spacing:0.025em;
  font-size:9px;
  text-align:left;
  text-transform:none;
  color:rgb(129,132,133);
  padding-bottom:0;
  padding-top:0;
  mix-blend-mode:normal;
  font-style:normal;
  position:static;
}
#g-1_-Month-_-Memories-L-Artboard_1 .g-pstyle0 {
  height:11px;
  text-align:center;
  text-transform:uppercase;
}

</style>

