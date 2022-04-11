<template>
  <div id="g-1_-Hourly-L-box" class="ai2html">
    <div id="g-1_-Hourly-L-Artboard_1" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-1_-Hourly-L-Artboard_1-img" class="g-aiImg" alt="" src="./1_-Hourly-L-Artboard_1.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.8024%;margin-top:-7.5px;left:5.6634%;width:175px;">
        <p class="g-pstyle0">{{data.day}} &bull;  {{data.month}}  &bull;  {{data.dayNumber}}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]" style="top:10.9497%;margin-top:-5.9px;left:13.9068%;width:192px;">
        <p class="g-pstyle1" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>

        <!--<p class="g-pstyle1" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]">{{this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][0]}}</p>-->
      </div>
      <!--<div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.5579%;margin-top:-5.9px;left:13.9067%;width:192px;">
        <p class="g-pstyle1" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]">{{this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][1]}}</p>
      </div>-->
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:93.9906%;margin-top:-5.9px;padding-left:26.9px; padding-right: 31.9px; width: 100%; height: 24px">
        <img v-if="this.$store.state.extraSelection ==='personal check ins'" :src="extra" style="bottom: 0px; left: 0px">
        <p v-else class="g-pstyle2" style="margin: auto; font-size: 7px; white-space: normal;">{{ extra }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hourly1",
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
#g-1_-Hourly-L-box ,
#g-1_-Hourly-L-box .g-artboard {
  margin:0 auto;
}
#g-1_-Hourly-L-box p {
  margin:0;
}
#g-1_-Hourly-L-box .g-aiAbs {
  position:absolute;
}
#g-1_-Hourly-L-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-1_-Hourly-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-1_-Hourly-L-box .g-aiPointText p { white-space: nowrap; }
#g-1_-Hourly-L-Artboard_1 {
  position:relative;
  overflow:hidden;
}
#g-1_-Hourly-L-Artboard_1 p {
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
#g-1_-Hourly-L-Artboard_1 .g-pstyle0 {
  height:14px;
  text-transform:uppercase;
}
#g-1_-Hourly-L-Artboard_1 .g-pstyle1 {
  line-height:11px;
  height:11px;
  letter-spacing:0.025em;
  font-size:9px;
  text-transform:uppercase;
  color:rgb(129,130,133);
}
@media only screen and (min-width: 1200px) {
  #g-1_-Hourly-L-Artboard_1 .g-pstyle1 {
    font-size:8px;
  }
  #g-ai0-2{
    width: 150px !important;
  }
  /*#g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size:16px;
  }*/
}
#g-1_-Hourly-L-Artboard_1 .g-pstyle2 {
  line-height:11px;
  height:11px;
  letter-spacing:0.025em;
  font-size:9px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(129,130,133);
}
/*@media only screen and (max-width: 1200px) {
  p {
    font-size:10px !important;
  }
}*/
</style>