<template>
  <div id="g-8_-Goals-_-Errands-L-box" class="ai2html">
    <div id="g-8_-Goals-_-Errands-L-Artboard_4" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-8_-Goals-_-Errands-L-Artboard_4-img" class="g-aiImg" alt="" src="./8_-Goals-_-Errands-L-Artboard_4.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.5485%;margin-top:-11.8px;left:5.1775%;width:105px;">
        <p class="g-pstyle0">{{(data[0].month)}} </p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.8433%;margin-top:-7.5px;left:5.6259%;width:94px;">
        <p class="g-pstyle1"> {{data[0].day}}  {{data[0].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0 is-justify-content-flex-start" style="top:16.9%;margin-top:-5.9px;left:5.6259%;width:428px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`][data[0].dayNumber]" :key="index" style="white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.3591%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.1134%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:19.8678%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.6222%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>-->
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5158%;margin-top:-7.5px;left:5.6259%;width:95px;">
        <p class="g-pstyle1">{{data[1].day}}  {{data[1].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:27.4%;margin-top:-5.9px;left:5.626%;width:428px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`][data[1].dayNumber]" :key="index" style="white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.1778%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.9322%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:30.6865%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:32.4409%;margin-top:-5.9px;left:5.6261%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>-->
      <div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:36.3345%;margin-top:-7.5px;left:5.6259%;width:116px;">
        <p class="g-pstyle1">{{data[2].day}}  {{data[2].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:38.2%;margin-top:-5.9px;left:5.6259%;width:428px; height: auto">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`][data[2].dayNumber]" :key="index" style="white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-13" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:37.9965%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-14" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:39.7509%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-15" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:41.5053%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-16" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.2596%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>-->
      <div id="g-ai0-17" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:47.007%;margin-top:-7.5px;left:5.6259%;width:106px;">
        <p class="g-pstyle1">{{data[3].day}}  {{data[3].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:48.8152%;margin-top:-5.9px;left:5.6259%;width:428px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`][data[3].dayNumber]" :key="index" style="white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-18" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:48.8152%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-19" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:50.5696%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-20" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:52.324%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-21" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:54.0784%;margin-top:-5.9px;left:5.6261%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>-->
      <div id="g-ai0-22" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:57.8258%;margin-top:-7.5px;left:5.6259%;width:82px;">
        <p class="g-pstyle1">{{data[4].day}}  {{data[4].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:59.78%;margin-top:-5.9px;left:5.6259%;width:428px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`][data[4].dayNumber]" :key="index" style="white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-23" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:59.78%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-24" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:61.5345%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-25" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:63.1427%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-26" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:64.8971%;margin-top:-5.9px;left:5.6259%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>-->
      <div id="g-ai0-27" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:68.6444%;margin-top:-7.5px;left:5.6259%;width:103px;">
        <p class="g-pstyle1">{{data[5].day}}  {{data[5].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:70.5988%;margin-top:-5.9px;left:5.626%;width:428px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber]" :key="index" style="white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-28" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:70.5988%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-29" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:72.3532%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-30" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:74.1076%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-31" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:75.862%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>-->
      <div id="g-ai0-32" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:79.3169%;margin-top:-7.5px;left:5.6259%;width:90px;">
        <p class="g-pstyle1">{{data[6].day}}  {{data[6].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:81.4175%;margin-top:-5.9px;left:5.626%;width:428px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber]" :key="index" style="white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-33" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:81.4175%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-34" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:83.1719%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-35" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:84.7801%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-36" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:86.5344%;margin-top:-5.9px;left:5.626%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>-->
      <div id="g-ai0-120" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:93.9906%;margin-top:-5.9px;padding-left:26.9px; padding-right: 31.9px; width: 100%; height: 24px">
        <img v-if="this.$store.state.extraSelection ==='personal check ins'" :src="extra" style="bottom: 0px; left: 0px">
        <p v-else class="g-pstyle2 has-text-centered" style="margin: auto; font-size: 7px; white-space: normal;">{{ extra }}</p>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "weeklyGoalserrands1",
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
      else if (newCount === 'personal check ins') this.extra = this.$store.state.personalCheckIns[Math.floor((Math.random() * (4-0))+0)];
    }
  },
}
</script>

<style media="screen,print" scoped>
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-8_-Goals-_-Errands-L-box ,
#g-8_-Goals-_-Errands-L-box .g-artboard {
  margin:0 auto;
}
#g-8_-Goals-_-Errands-L-box p {
  margin:0;
}
#g-8_-Goals-_-Errands-L-box .g-aiAbs {
  position:absolute;
}
#g-8_-Goals-_-Errands-L-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-8_-Goals-_-Errands-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-8_-Goals-_-Errands-L-box .g-aiPointText p { white-space: nowrap; }
#g-8_-Goals-_-Errands-L-Artboard_4 {
  position:relative;
  overflow:hidden;
}
#g-8_-Goals-_-Errands-L-Artboard_4 p {
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
#g-8_-Goals-_-Errands-L-Artboard_4 .g-pstyle0 {
  line-height:22px;
  height:22px;
  font-size:18px;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-8_-Goals-_-Errands-L-Artboard_4 .g-pstyle1 {
  line-height:14px;
  height:14px;
  font-size:12px;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-8_-Goals-_-Errands-L-Artboard_4 .g-pstyle2 {
  height:11px;
  text-transform:uppercase;
}
#g-8_-Goals-_-Errands-L-Artboard_4 .g-pstyle3 {
  height:11px;
  text-transform:uppercase;
}
@media only screen and (min-width: 1200px) {
  #g-8_-Goals-_-Errands-L-Artboard_4 p {
    font-size:8px;
  }
  .g-ai0{
    width: 320px !important;
  }
  /*#g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size:16px;
  }*/
}
</style>

