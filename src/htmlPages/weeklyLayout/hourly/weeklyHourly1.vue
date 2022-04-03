<template>
  <div id="g-2_-Hourly-L-box" class="ai2html">
    <div id="g-2_-Hourly-L-Artboard_4" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-2_-Hourly-L-Artboard_4-img" class="g-aiImg" alt="" src="./2_-Hourly-L-Artboard_4.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.5485%;margin-top:-11.8px;left:5.4333%;width:105px;">
        <p class="g-pstyle0">{{data[0].month}}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.7497%;margin-top:-7.5px;left:18.9591%;margin-left:-47px;width:94px;">
        <p class="g-pstyle1">{{data[0].day}} {{data[0].dayNumber}}</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.7497%;margin-top:-7.5px;left:47.4102%;margin-left:-47.5px;width:95px;">
        <p class="g-pstyle1">{{data[1].day}} {{data[1].dayNumber}}</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.7497%;margin-top:-7.5px;left:75.8495%;margin-left:-58px;width:116px;">
        <p class="g-pstyle1">{{data[2].day}} {{data[2].dayNumber}}</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7041%;margin-top:-5.9px;left:19.0041%;margin-left:-32px;width:64px;">
        <p class="g-pstyle2" style=" white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`][data[0].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`][data[0].dayNumber][0]}}</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.3123%;margin-top:-5.9px;left:19.0041%;margin-left:-32px;width:64px;">
        <p class="g-pstyle2" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`][data[0].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`][data[0].dayNumber][1]}}</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7041%;margin-top:-5.9px;left:47.4446%;margin-left:-32px;width:64px;">
        <p class="g-pstyle2" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`][data[1].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`][data[1].dayNumber][0]}}</p>
      </div>
      <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.3123%;margin-top:-5.9px;left:47.4446%;margin-left:-32px;width:64px;">
        <p class="g-pstyle2" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`][data[1].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`][data[1].dayNumber][1]}}</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7041%;margin-top:-5.9px;left:75.885%;margin-left:-32px;width:64px;">
        <p class="g-pstyle2" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`][data[2].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`][data[2].dayNumber][0]}}</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.3123%;margin-top:-5.9px;left:75.885%;margin-left:-32px;width:64px;">
        <p class="g-pstyle2" style="white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`][data[2].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`][data[2].dayNumber][1]}}</p>
      </div>
      <div id="g-ai0-37" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:93.9906%;margin-top:-5.9px;padding-left:26.9px; padding-right: 31.9px; width: 100%; height: 24px">
        <p class="g-pstyle2 has-text-centered" style="margin: auto; font-size: 7px; white-space: normal;">{{ extra }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weeklyHourly1",
  props:{
    data:{
      required: true
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
#g-2_-Hourly-L-Artboard_4 .g-pstyle0 {
  line-height:22px;
  height:22px;
  font-size:18px;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-2_-Hourly-L-Artboard_4 .g-pstyle1 {
  line-height:14px;
  height:14px;
  font-size:12px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-2_-Hourly-L-Artboard_4 .g-pstyle2 {
  height:11px;
  text-align:center;
  text-transform:uppercase;
}
</style>

