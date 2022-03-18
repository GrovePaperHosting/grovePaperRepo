<template>
  <div id="g-6_-Sectional-L-box" class="ai2html">
    <div id="g-6_-Sectional-L-Artboard_11" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-6_-Sectional-L-Artboard_11-img" class="g-aiImg" alt="" src="./6_-Sectional-L-Artboard_11.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:8.0931%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">3</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:11.6652%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">4</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:15.3488%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">5</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:18.9196%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">6</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:22.539%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle0">7</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4047%;margin-top:-7.5px;left:19.4362%;margin-left:-47px;width:94px;">
        <p class="g-pstyle1">Monday {{data[0].dayNumber}}</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4047%;margin-top:-7.5px;left:47.5208%;margin-left:-47.5px;width:95px;">
        <p class="g-pstyle1">Tuesday {{data[1].dayNumber}}</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4047%;margin-top:-7.5px;left:75.5934%;margin-left:-58px;width:116px;">
        <p class="g-pstyle1">Wednesday {{data[2].dayNumber}}</p>
      </div>
      <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.1134%;margin-top:-5.9px;left:6.5727%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.1134%;margin-top:-5.9px;left:34.6465%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.1134%;margin-top:-5.9px;left:62.7204%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:94.283%;margin-top:-5.9px;left:47.3689%;margin-left:-28.5px;width:57px;">
        <p class="g-pstyle3">extras</p>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "weeklySectional1",
  props:{
    data:{
      type: Object,
    },
    index: {
      type: Number
    }
  },
  data(){
    return{
      extra: ''
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
      else if (newCount === 'personal check ins') this.extra = '';
    }
  },
}
</script>

<style media="screen,print">
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-6_-Sectional-L-box ,
#g-6_-Sectional-L-box .g-artboard {
  margin:0 auto;
}
#g-6_-Sectional-L-box p {
  margin:0;
}
#g-6_-Sectional-L-box .g-aiAbs {
  position:absolute;
}
#g-6_-Sectional-L-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-6_-Sectional-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-6_-Sectional-L-box .g-aiPointText p { white-space: nowrap; }
#g-6_-Sectional-L-Artboard_11 {
  position:relative;
  overflow:hidden;
}
#g-6_-Sectional-L-Artboard_11 p {
  font-weight:500;
  line-height:14px;
  height:auto;
  filter:alpha(opacity=100);
  -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity:1;
  letter-spacing:0.025em;
  font-size:12px;
  text-align:left;
  text-transform:none;
  color:rgb(0,0,0);
  padding-bottom:0;
  padding-top:0;
  mix-blend-mode:normal;
  font-style:normal;
  position:static;
}
#g-6_-Sectional-L-Artboard_11 .g-pstyle0 {
  line-height:13px;
  height:13px;
  font-size:11px;
  text-align:center;
  text-transform:uppercase;
}
#g-6_-Sectional-L-Artboard_11 .g-pstyle1 {
  height:14px;
  text-align:center;
  text-transform:uppercase;
}
#g-6_-Sectional-L-Artboard_11 .g-pstyle2 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
#g-6_-Sectional-L-Artboard_11 .g-pstyle3 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
</style>