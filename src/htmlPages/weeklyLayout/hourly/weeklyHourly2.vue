<template>
  <div id="g-2_-Hourly-R-box" class="ai2html">
    <div id="g-2_-Hourly-R-Artboard_5" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-2_-Hourly-R-Artboard_5-img" class="g-aiImg" alt="" src="./2_-Hourly-R-Artboard_5.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.7497%;margin-top:-7.5px;left:24.3093%;margin-left:-53px;width:106px;">
        <p class="g-pstyle0">{{data[3].day}} {{data[3].dayNumber}}</p>
      </div>
      <div class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.7497%;margin-top:-7.5px;left:54.5524%;margin-left:-41px;width:82px;">
        <p class="g-pstyle0">{{data[4].day}} {{data[4].dayNumber}}</p>
      </div>
      <div class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.7497%;margin-top:-7.5px;left:82.9745%;margin-left:-51.5px;width:103px;">
        <p class="g-pstyle0">{{data[5].day}} {{data[5].dayNumber}}</p>
      </div>
      <div class="g-Layer_1 g-aiAbs g-aiPointText" style="top:44.814%;margin-top:-7.5px;left:82.9745%;margin-left:-51.5px;width:103px;">
        <p class="g-pstyle0">{{data[6].day}} {{data[6].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:12.7041%;margin-top:-5.9px;left:24.3093%;margin-left:-51px;width:127px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`][data[3].dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:12.7041%;margin-top:-5.9px;left:54.5524%;margin-left:-51px;width:127px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`][data[4].dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:12.7041%;left:82.9745%;margin-left:-51.5px; width:127px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:46.9146%;left:82.9745%;margin-left:-51.5px;width:127px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7041%;margin-top:-5.9px;left:24.3256%;margin-left:-32px;width:64px;">
        <p class="g-pstyle1" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`][data[3].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`][data[3].dayNumber][0]}}</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.3123%;margin-top:-5.9px;left:24.3258%;margin-left:-32px;width:64px;">
        <p class="g-pstyle1" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`][data[3].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`][data[3].dayNumber][1]}}</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7041%;margin-top:-5.9px;left:54.5975%;margin-left:-32px;width:64px;">
        <p class="g-pstyle1" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`][data[4].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`][data[4].dayNumber][0]}}</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.3123%;margin-top:-5.9px;left:54.5975%;margin-left:-32px;width:64px;">
        <p class="g-pstyle1" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`][data[4].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`][data[4].dayNumber][1]}}</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7041%;margin-top:-5.9px;left:78.9944%;width:64px;">
        <p class="g-pstyle2" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber][0]}}</p>
      </div>
      <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.3123%;margin-top:-5.9px;left:78.9944%;width:64px;">
        <p class="g-pstyle2" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber][1]}}</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:44.814%;margin-top:-7.5px;left:82.9745%;margin-left:-51.5px;width:103px;">
        <p class="g-pstyle0">{{data[6].day}} {{data[6].dayNumber}}</p>
      </div>
      <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:46.9146%;margin-top:-5.9px;left:78.9944%;width:64px;">
        <p class="g-pstyle2" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber][0]}}</p>
      </div>
      <div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:48.5228%;margin-top:-5.9px;left:78.9944%;width:64px;">
        <p class="g-pstyle2" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber][1]}}</p>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "weeklyHourly2",
  props:{
    data:{
      required: true
    },
  }
}
</script>

<style media="screen,print">
p {
  font-family: 'Kontour Type - Kopius-Light';
}
#g-2_-Hourly-R-box ,
#g-2_-Hourly-R-box .g-artboard {
  margin:0 auto;
}
#g-2_-Hourly-R-box p {
  margin:0;
}
#g-2_-Hourly-R-box .g-aiAbs {
  position:absolute;
}
#g-2_-Hourly-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-2_-Hourly-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-2_-Hourly-R-box .g-aiPointText p { white-space: nowrap; }
#g-2_-Hourly-R-Artboard_5 {
  position:relative;
  overflow:hidden;
}
#g-2_-Hourly-R-Artboard_5 p {
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
#g-2_-Hourly-R-Artboard_5 .g-pstyle0 {
  height:14px;
  text-align:center;
  text-transform:uppercase;
}
#g-2_-Hourly-R-Artboard_5 .g-pstyle1 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
@media only screen and (min-width: 1200px) {
  #g-2_-Hourly-R-Artboard_5 .g-pstyle3 {
    font-size:7.5px !important;
  }
  .g-ai0{
    width: 100px !important;
  }
  /*#g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size:16px;
  }*/
}
#g-2_-Hourly-R-Artboard_5 .g-pstyle3 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
#g-2_-Hourly-R-Artboard_5 .g-pstyle3 {
  height:11px;
  text-align:center;
  text-transform:uppercase;
}
</style>

