<template>
  <div id="g-1_-Hourly-R-box" class="ai2html">
    <div id="g-1_-Hourly-R-Artboard_3" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-1_-Hourly-R-Artboard_3-img" class="g-aiImg" alt="" src="./1_-Hourly-R-Artboard_3.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.8024%;margin-top:-7.5px;right:4.4681%;width:163px;">
        <p class="g-pstyle0">{{data.day}} &bull;  {{data.month}}  &bull;  {{data.dayNumber}}</p>
      </div>
      <!--<div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.9497%;margin-top:-5.9px;left:19.2581%;width:64px;">
        <p class="g-pstyle1" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]">{{this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][0]}}</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.5579%;margin-top:-5.9px;left:19.2581%;width:64px;">
        <p class="g-pstyle1" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]">{{this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][1]}}</p>
      </div>-->
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]" style="top:10.9497%;margin-top:-5.9px;left:19.2581%;width:192px;">
        <p class="g-pstyle1" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
        <!--<p class="g-pstyle1" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]">{{this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][0]}}</p>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hourly2",
  props:{
    data:{
      type: Object,
    },
  }
}
</script>

<style media="screen,print" scoped>
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-1_-Hourly-R-box ,
#g-1_-Hourly-R-box .g-artboard {
  margin:0 auto;
}
#g-1_-Hourly-R-box p {
  margin:0;
}
#g-1_-Hourly-R-box .g-aiAbs {
  position:absolute;
}
#g-1_-Hourly-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-1_-Hourly-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-1_-Hourly-R-box .g-aiPointText p { white-space: nowrap; }
#g-1_-Hourly-R-Artboard_3 {
  position:relative;
  overflow:hidden;
}
#g-1_-Hourly-R-Artboard_3 p {
  font-weight:500;
  line-height:14px;
  height:auto;
  filter:alpha(opacity=100);
  -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity:1;
  letter-spacing:0em;
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
#g-1_-Hourly-R-Artboard_3 .g-pstyle0 {
  height:14px;
  text-align:right;
  text-transform:uppercase;
}
#g-1_-Hourly-R-Artboard_3 .g-pstyle1 {
  line-height:11px;
  height:11px;
  letter-spacing:0.025em;
  font-size:9px;
  text-transform:uppercase;
  color:rgb(129,130,133);
}
@media only screen and (min-width: 1200px) {
  #g-1_-Hourly-R-Artboard_3 .g-pstyle1 {
    font-size:8px;
  }
  #g-ai0-2{
    width: 150px !important;
  }
  /*#g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size:16px;
  }*/
}

@media only screen and (max-width: 1200px) {
  p {
    font-size:10px !important;
  }
}
</style>