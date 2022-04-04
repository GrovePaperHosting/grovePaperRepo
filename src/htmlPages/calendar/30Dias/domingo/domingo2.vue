<template>
  <div id="g-30---Sunday-R-box" class="ai2html">
    <div id="g-30---Sunday-R-Artboard_2" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-30---Sunday-R-Artboard_2-img" class="g-aiImg" alt="" src="./30---Sunday-R-Artboard_2.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:6.7254%;margin-top:-5px;left:83.2824%;margin-left:-31.5px;width:63px;">
        <p class="g-pstyle0">{{ data.monthBefore }}</p>
      </div>
      <div v-for="(item1, index1) in monthBeforeData " :key="index1">
        <div v-for="(item, index) in item1 " :key="index" id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText"
             :style="`top:${1.41*index1+10.2342}%;margin-top:-5px;left:${2.8*index+74.8314}%;margin-left:-12px;width:24px;`">
          <p class="g-pstyle0">{{item}}</p>
        </div>
      </div>
      <div id="g-ai0-46" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:20.6143%;margin-top:-5px;left:83.3341%;margin-left:-30.5px;width:61px;">
        <p class="g-pstyle0">{{ data.monthAfter }}</p>
      </div>
      <div v-for="(item1, index1) in monthAfterData " :key="index1">
        <div v-for="(item, index) in item1 " :key="index" id="g-ai0-54" class="g-Layer_1 g-aiAbs g-aiPointText"
             :style="`top:${1.41*index1+24.1231}%;margin-top:-5px;left:${2.8*index+74.8314}%;margin-left:-12px;width:24px;`">
          <p class="g-pstyle0">{{item}}</p>
        </div>
      </div>
      <div class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:17.2363%;margin-top:-5.9px;left:11.2316%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[5]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-79" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:11.2316%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[12]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-108" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:11.2316%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[19]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-123" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:53.786%;margin-top:-5.9px;left:11.2316%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[26]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:17.2363%;margin-top:-5.9px;left:30.7236%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[6]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-78" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:30.7236%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[13]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-107" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:30.7236%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[20]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-122" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:53.786%;margin-top:-5.9px;left:30.7236%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[27]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-37" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:17.2363%;margin-top:-5.9px;left:49.8958%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[7]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-106" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:49.8956%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[14]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-109" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:49.8958%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[21]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-124" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:53.786%;margin-top:-5.9px;left:49.8956%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[28]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "domingo2",
  props:{
    data:{
      type: Object,
    }
  },
  data() {
    return {
      monthBeforeData: [],
      monthAfterData: [],
    }
  },
  methods: {
    calcMonthBeforeData() {
      if(this.data.layoutType === 'daily'){
        const monthBeforeNumber = this.data.monthNumber == 1? 12: this.data.monthNumber-1;
        const monthBeforeYear = this.data.monthNumber == 1? this.data.year-1: this.data.year;
        const totalDaysMonth = new Date(monthBeforeYear, monthBeforeNumber, 0).getDate();
        const monthStart = new Date(`${monthBeforeYear}-${monthBeforeNumber}-1`).getDay();
        console.log('monthStart',monthBeforeNumber,this.data.monthNumber, monthStart);
        let monthDates=[];
        this.$set(monthDates, monthStart+1, 1);
        for (let i = 2; i <= totalDaysMonth; i++) {
          monthDates.push(i);
        }
        for (let i = 0; i <= 5; i++) {
          this.monthBeforeData.push(monthDates.slice(i*7+1,(i*7)+8));
        }
        console.log('monthBeforeData', this.monthBeforeData);
      }else{
        const monthBeforeNumber = this.data[6].monthNumber == 1? 12: this.data[6].monthNumber-1;
        const monthBeforeYear = this.data[6].monthNumber == 1? this.data[6].year-1: this.data[6].year;
        const totalDaysMonth = new Date(monthBeforeYear, monthBeforeNumber, 0).getDate();
        const monthStart = new Date(`${monthBeforeYear}-${monthBeforeNumber}-1`).getDay();
        console.log('monthStart',monthBeforeNumber,this.data[0].monthNumber, monthStart);
        let monthDates=[];
        this.$set(monthDates, monthStart+1, 1);
        for (let i = 2; i <= totalDaysMonth; i++) {
          monthDates.push(i);
        }
        for (let i = 0; i <= 5; i++) {
          this.monthBeforeData.push(monthDates.slice(i*7+1,(i*7)+8));
        }
        console.log('monthBeforeData', this.monthBeforeData);
      }
    },
    calcMonthAfterData() {
      if (this.data.layoutType === 'daily') {
        const monthAfterNumber = this.data.monthNumber === 12? 1: this.data.monthNumber+1;
        const monthAfterYear = this.data.monthNumber === 12? this.data.year+1: this.data.year;
        const totalDaysMonth = new Date(monthAfterYear, monthAfterNumber, 0).getDate();
        const monthStart = new Date(`${monthAfterYear}-${monthAfterNumber}-1`).getDay();
        console.log('monthStart',monthAfterNumber, monthStart);

        let monthDates=[];
        this.$set(monthDates, monthStart+1, 1);
        for (let i = 2; i <= totalDaysMonth; i++) {
          monthDates.push(i);
        }
        for (let i = 0; i <= 4; i++) {
          this.monthAfterData.push(monthDates.slice(i*7+1,(i*7)+8));
        }
        console.log('monthAfterData', this.monthAfterData);
      }else{
        const monthAfterNumber = this.data[6].monthNumber === 12? 1: this.data[6].monthNumber+1;
        const monthAfterYear = this.data[6].monthNumber === 12? this.data[6].year+1: this.data[6].year;
        const totalDaysMonth = new Date(monthAfterYear, monthAfterNumber, 0).getDate();
        const monthStart = new Date(`${monthAfterYear}-${monthAfterNumber}-1`).getDay();
        console.log('monthStart',monthAfterNumber, monthStart);

        let monthDates=[];
        this.$set(monthDates, monthStart+1, 1);
        for (let i = 2; i <= totalDaysMonth; i++) {
          monthDates.push(i);
        }
        for (let i = 0; i <= 4; i++) {
          this.monthAfterData.push(monthDates.slice(i*7+1,(i*7)+8));
        }
        console.log('monthAfterData', this.monthAfterData);
      }
    }
  },
  mounted() {
    this.calcMonthBeforeData();
    this.calcMonthAfterData();
  }
}
</script>

<style scoped>
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-30---Sunday-R-box ,
#g-30---Sunday-R-box .g-artboard {
  margin:0 auto;
}
#g-30---Sunday-R-box p {
  margin:0;
}
#g-30---Sunday-R-box .g-aiAbs {
  position:absolute;
}
#g-30---Sunday-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-30---Sunday-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-30---Sunday-R-box .g-aiPointText p { white-space: nowrap; }
#g-30---Sunday-R-Artboard_2 {
  position:relative;
  overflow:hidden;
}
#g-30---Sunday-R-Artboard_2 p {
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
  color:rgb(128,130,133);
  padding-bottom:0;
  padding-top:0;
  mix-blend-mode:normal;
  font-style:normal;
  position:static;
}
#g-30---Sunday-R-Artboard_2 .g-pstyle0 {
  line-height:9px;
  height:9px;
  font-size:7px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(175,177,180);
}
#g-30---Sunday-R-Artboard_2 .g-pstyle1 {
  height:11px;
  text-transform:uppercase;
}
@media only screen and (min-width: 1200px) {
  #g-30---Sunday-R-Artboard_2 p {
    font-size: 7.5px;
  }
  .g-Layer_1.g-aiAbs.g-aiPointText.g-ai0-2 {
    width: 70px !important;
  }
}
</style>