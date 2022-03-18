<template>
  <div id="g-2_-Hourly-L-box" class="ai2html">
    <div id="g-2_-Hourly-L-Artboard_4" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-2_-Hourly-L-Artboard_4-img" class="g-aiImg" alt="" src="./2_-Hourly-L-Artboard_4.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.5485%;margin-top:-11.8px;left:5.4333%;width:105px;">
        <p class="g-pstyle0">{{data[0].month}}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.3883%;margin-top:-5.9px;left:5.7139%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.3883%;margin-top:-5.9px;left:34.1544%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.3883%;margin-top:-5.9px;left:62.5948%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.1123%;margin-top:-7.5px;left:18.9304%;margin-left:-47px;width:94px;">
        <p class="g-pstyle2">Monday {{data[0].dayNumber}}</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.1123%;margin-top:-7.5px;left:47.3816%;margin-left:-47.5px;width:95px;">
        <p class="g-pstyle2">Tuesday {{data[1].dayNumber}}</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.1123%;margin-top:-7.5px;left:75.8209%;margin-left:-58px;width:116px;">
        <p class="g-pstyle2">Wednesday {{data[2].dayNumber}}</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:94.283%;margin-top:-5.9px;left:47.3689%;margin-left:-28.5px;width:57px;">
        <p class="g-pstyle3">extras</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weeklyHourly1",
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
#g-2_-Hourly-L-box ,
#g-2_-Hourly-L-box .g-artboard {
  margin:0 auto;
}
#g-2_-Hourly-L-box p {
  margin:0;
}
#g-2_-Hourly-L-box .g-aiAbs {
  position:absolute;
}
#g-2_-Hourly-L-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-2_-Hourly-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-2_-Hourly-L-box .g-aiPointText p { white-space: nowrap; }
#g-2_-Hourly-L-Artboard_4 {
  position:relative;
  overflow:hidden;
}
#g-2_-Hourly-L-Artboard_4 p {
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
#g-2_-Hourly-L-Artboard_4 .g-pstyle0 {
  line-height:22px;
  height:22px;
  font-size:18px;
  text-transform:uppercase;
}
#g-2_-Hourly-L-Artboard_4 .g-pstyle1 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
#g-2_-Hourly-L-Artboard_4 .g-pstyle2 {
  height:14px;
  text-align:center;
  text-transform:uppercase;
}
#g-2_-Hourly-L-Artboard_4 .g-pstyle3 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(129,132,133);
}

</style>

