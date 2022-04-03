<template>
  <div id="g-5_-Checklist-L-box" class="ai2html">
    <div id="g-5_-Checklist-L-Artboard_9" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-5_-Checklist-L-Artboard_9-img" class="g-aiImg" alt="" src="./5_-Checklist-L-Artboard_9.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.5485%;margin-top:-11.8px;left:50.3065%;margin-left:-72.5px;width:145px;">
        <p class="g-pstyle0">{{data[0].month}} {{data[0].dayNumber}} - {{data[6].dayNumber}}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.5328%;margin-top:-10.2px;left:50.297%;margin-left:-28.5px;width:57px;">
        <p class="g-pstyle1">{{data[0].year}}</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.276%;margin-top:-7.5px;left:5.4416%;width:94px;">
        <p class="g-pstyle2">{{data[0].dayNumber}} {{data[0].day}}</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.3298%;margin-top:-5.9px;left:20.1011%;width:64px;">
        <p class="g-pstyle3" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]">{{this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][0]}}</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.2526%;margin-top:-7.5px;left:5.4416%;width:95px;">
        <p class="g-pstyle2">{{data[1].dayNumber}} {{data[1].day}}</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.4526%;margin-top:-5.9px;left:20.2509%;width:64px;">
        <p class="g-pstyle1" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][1]">{{this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][1]}}</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:69.3754%;margin-top:-7.5px;left:5.4416%;width:116px;">
        <p class="g-pstyle2">{{data[2].dayNumber}} {{data[2].day}}</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:69.4292%;margin-top:-5.9px;left:24.2535%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-37" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:93.9906%;margin-top:-5.9px;padding-left:26.9px; padding-right: 31.9px; width: 100%; height: 24px">
        <p class="g-pstyle2 has-text-centered" style="margin: auto; font-size: 7px; white-space: normal;">{{ extra }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weeklyChecklist1",
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
#g-5_-Checklist-L-box ,
#g-5_-Checklist-L-box .g-artboard {
  margin:0 auto;
}
#g-5_-Checklist-L-box p {
  margin:0;
}
#g-5_-Checklist-L-box .g-aiAbs {
  position:absolute;
}
#g-5_-Checklist-L-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-5_-Checklist-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-5_-Checklist-L-box .g-aiPointText p { white-space: nowrap; }
#g-5_-Checklist-L-Artboard_9 {
  position:relative;
  overflow:hidden;
}
#g-5_-Checklist-L-Artboard_9 p {
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
#g-5_-Checklist-L-Artboard_9 .g-pstyle0 {
  line-height:22px;
  height:22px;
  font-size:18px;
  text-align:center;
  text-transform:uppercase;
}
#g-5_-Checklist-L-Artboard_9 .g-pstyle1 {
  line-height:19px;
  height:19px;
  font-size:16px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(167,169,172);
}
#g-5_-Checklist-L-Artboard_9 .g-pstyle2 {
  height:14px;
  text-transform:uppercase;
}
#g-5_-Checklist-L-Artboard_9 .g-pstyle3 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
#g-5_-Checklist-L-Artboard_9 .g-pstyle4 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
</style>