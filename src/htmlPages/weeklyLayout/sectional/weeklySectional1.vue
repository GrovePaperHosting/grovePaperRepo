<template>
  <div id="g-6_-Sectional-L-box" class="ai2html">
    <div id="g-6_-Sectional-L-Artboard_11" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-6_-Sectional-L-Artboard_11-img" class="g-aiImg" alt="" src="./6_-Sectional-L-Artboard_11.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:8.0931%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">{{data[0].dayNumber}}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:11.6652%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">{{data[1].dayNumber}}</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:15.3488%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">{{data[2].dayNumber}}</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:18.9196%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">{{data[3].dayNumber}}</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.3537%;margin-top:-7px;left:22.539%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle0">{{data[4].dayNumber}}</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4047%;margin-top:-7.5px;left:19.4362%;margin-left:-47px;width:94px;">
        <p class="g-pstyle1">{{(data[0].day)}} {{data[0].dayNumber}}</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4047%;margin-top:-7.5px;left:47.5208%;margin-left:-47.5px;width:95px;">
        <p class="g-pstyle1">{{(data[1].day)}} {{data[1].dayNumber}}</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4047%;margin-top:-7.5px;left:75.5934%;margin-left:-58px;width:116px;">
        <p class="g-pstyle1">{{(data[2].day)}} {{data[2].dayNumber}}</p>
      </div>
      <!-- <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.1134%;margin-top:-5.9px;left:6.5727%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.1134%;margin-top:-5.9px;left:34.6465%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.1134%;margin-top:-5.9px;left:62.7204%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>-->
      <div v-if="this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:18.1134%;margin-top:-5.9px;left:6.5727%;width:132px;">
        <p class="g-pstyle2" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`][data[0].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:18.1134%;margin-top:-5.9px;left:34.6465%;width:132px;">
        <p class="g-pstyle2" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`][data[1].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:18.1134%;margin-top:-5.9px;left:62.7204%;width:132px;">
        <p class="g-pstyle2" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`][data[2].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:19.8678%;margin-top:-5.9px;left:6.5729%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-13" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:19.8678%;margin-top:-5.9px;left:34.6467%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-14" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:19.8678%;margin-top:-5.9px;left:62.7206%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-15" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.6222%;margin-top:-5.9px;left:6.5728%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-16" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.6222%;margin-top:-5.9px;left:34.6466%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-17" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.6222%;margin-top:-5.9px;left:62.7205%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-18" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.3766%;margin-top:-5.9px;left:6.5729%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-19" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.3766%;margin-top:-5.9px;left:34.6467%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-20" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.3766%;margin-top:-5.9px;left:62.7206%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-21" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.131%;margin-top:-5.9px;left:6.5729%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-22" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.131%;margin-top:-5.9px;left:34.6466%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-23" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.131%;margin-top:-5.9px;left:62.7206%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-24" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:26.8854%;margin-top:-5.9px;left:6.5728%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-25" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:26.8854%;margin-top:-5.9px;left:34.6466%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-26" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:26.8854%;margin-top:-5.9px;left:62.7205%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-27" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.6398%;margin-top:-5.9px;left:6.5729%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-28" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.6398%;margin-top:-5.9px;left:34.6467%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-29" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.6398%;margin-top:-5.9px;left:62.7206%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-30" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:30.3941%;margin-top:-5.9px;left:6.5729%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-31" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:30.3941%;margin-top:-5.9px;left:34.6467%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-32" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:30.3941%;margin-top:-5.9px;left:62.7206%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-33" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:32.1485%;margin-top:-5.9px;left:6.5728%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-34" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:32.1485%;margin-top:-5.9px;left:34.6466%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-35" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:32.1485%;margin-top:-5.9px;left:62.7205%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>-->
      <div id="g-ai0-89" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:93.9906%;margin-top:-5.9px;padding-left:26.9px; padding-right: 31.9px; width: 100%; height: 24px">
        <p class="g-pstyle2 has-text-centered" style="margin: auto; font-size: 7px; white-space: normal;">{{ extra }}</p>
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

<style media="screen,print" scoped>
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
  line-height:11px;
  height:auto;
  filter:alpha(opacity=100);
  -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity:1;
  letter-spacing:0.025em;
  font-size:9px;
  text-align:left;
  text-transform:none;
  color:rgb(129,131,133);
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
  color:rgb(0,0,0);
}
#g-6_-Sectional-L-Artboard_11 .g-pstyle1 {
  line-height:14px;
  height:14px;
  font-size:12px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-6_-Sectional-L-Artboard_11 .g-pstyle2 {
  height:11px;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
#g-6_-Sectional-L-Artboard_11 .g-pstyle3 {
  height:11px;
  text-transform:uppercase;
}
#g-6_-Sectional-L-Artboard_11 .g-pstyle4 {
  height:11px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
@media only screen and (min-width: 1200px) {
  #g-6_-Sectional-L-Artboard_11 p {
    font-size:8px;
  }
  .g-ai0{
    width: 90px !important;
  }
  #g-6_-Sectional-L-Artboard_11 .g-pstyle0 {
    font-size:8px;
  }
  /*#g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size:16px;
  }*/
}
</style>