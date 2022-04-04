<template>
  <div id="g-1_-Standard-R-box" class="ai2html">
    <div id="g-1_-Standard-R-Artboard_3" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-1_-Standard-R-Artboard_3-img" class="g-aiImg" alt="" src="./1_-Standard-R-Artboard_3.png"/>

      <div v-for="(item1, index1) in monthData " :key="index1">
        <div v-for="(item, index) in item1 " :key="index" id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText"
             :style="`top:${2.2*index1+8.1181}%;margin-top:-5px;left:${4.5*index+66.7939}%;margin-left:-12px;width:24px;`">
          <p class="g-pstyle0" style="font-size: 8.5px" :class="`${arrayDates.includes(item)? 'has-text-weight-bold': ''}`">{{item}}</p>
        </div>
      </div>
      <div id="g-ai0-22" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:14.8433%;margin-top:-7.5px;left:11.1874%;width:103px;">
        <p class="g-pstyle2">{{data[5].day}} {{data[5].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:16.9053%;margin-top:-5.9px;left:11.3783%;width:428px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-30" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.5053%;margin-top:-5.9px;left:11.3783%;width:64px;">
        <p class="g-pstyle3" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber][0]}} <span v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber][1]">&bull;</span> {{this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber][1]}}</p>
      </div>-->
      <!--<div id="g-ai0-38" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.4058%;margin-top:-5.9px;left:11.3781%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-42" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:20.1602%;margin-top:-5.9px;left:11.3783%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-43" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:22.0608%;margin-top:-5.9px;left:11.3781%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-44" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.8152%;margin-top:-5.9px;left:11.3781%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-45" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.7158%;margin-top:-5.9px;left:11.3781%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>-->
      <div id="g-ai0-46" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.6094%;margin-top:-7.5px;left:11.1874%;width:90px;">
        <p class="g-pstyle2">{{data[6].day}} {{data[6].dayNumber}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:31.7099%;margin-top:-5.9px;left:11.3783%;width:428px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-47" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.7099%;margin-top:-5.9px;left:11.4162%;width:64px;">
        <p class="g-pstyle3" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber]">{{this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber][0]}} <span v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber][1]">&bull;</span> {{this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber][1]}}</p>
      </div>-->
      <!--<div id="g-ai0-48" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:33.6105%;margin-top:-5.9px;left:11.4161%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-49" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:35.3649%;margin-top:-5.9px;left:11.4162%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-50" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:37.2655%;margin-top:-5.9px;left:11.4162%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-51" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:39.0199%;margin-top:-5.9px;left:11.4161%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-52" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:40.9205%;margin-top:-5.9px;left:11.4162%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Standard2",
  props:{
    data: Array
  },
  data() {
    return {
      monthData: [],
    }
  },
  methods: {
    calcMonthData() {
      const monthNumber = this.data[0].monthNumber;
      const monthYear = this.data[0].year;
      const totalDaysMonth = new Date(monthYear, monthNumber, 0).getDate();
      const monthStart = new Date(`${monthYear}-${monthNumber}-1`).getDay();
      console.log('monthStart', monthNumber, monthStart);
      let monthDates = [];
      this.$set(monthDates, monthStart + 1, 1);
      for (let i = 2; i <= totalDaysMonth; i++) {
        monthDates.push(i);
      }
      for (let i = 0; i <= 5; i++) {
        this.monthData.push(monthDates.slice(i * 7 + 1, (i * 7) + 8));
      }
      console.log('monthData', this.monthData);
    },
  },
  mounted() {
    this.calcMonthData();
  },
  computed:{
    arrayDates(){
      const arrayDates = this.data.map(element=>{
        return element.dayNumber;
      })
    return arrayDates;
    }
  }
}
</script>

<style media="screen,print">
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-1_-Standard-R-box ,
#g-1_-Standard-R-box .g-artboard {
  margin:0 auto;
}
#g-1_-Standard-R-box p {
  margin:0;
}
#g-1_-Standard-R-box .g-aiAbs {
  position:absolute;
}
#g-1_-Standard-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-1_-Standard-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-1_-Standard-R-box .g-aiPointText p { white-space: nowrap; }
#g-1_-Standard-R-Artboard_3 {
  position:relative;
  overflow:hidden;
}
#g-1_-Standard-R-Artboard_3 p {
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
@media only screen and (min-width: 1200px) {
  #g-1_-Standard-R-Artboard_3 .g-pstyle1 {
    font-size:8px;
  }
  .g-ai0{
    width: 300px !important;
  }
  /*#g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size:16px;
  }*/
}
#g-1_-Standard-R-Artboard_3 .g-pstyle0 {
  line-height:14px;
  height:14px;
  font-size:12px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(175,177,180);
}
#g-1_-Standard-R-Artboard_3 .g-pstyle1 {
  line-height:14px;
  height:14px;
  font-size:12px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-1_-Standard-R-Artboard_3 .g-pstyle2 {
  line-height:14px;
  height:14px;
  font-size:12px;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-1_-Standard-R-Artboard_3 .g-pstyle3 {
  height:11px;
  text-transform:uppercase;
}
</style>
