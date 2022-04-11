<template>
  <div id="g-31---Saturday-L-box" class="ai2html">
    <div id="g-31---Saturday-L-Artboard_1" class="g-artboard" style="max-width: 522px;max-height: 684px"
         data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-31---Saturday-L-Artboard_1-img" class="g-aiImg" alt="" src="./31---Saturday-L-Artboard_1.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:6.1099%;margin-top:-11.8px;left:5.2494%;width:149px;">
        <p v-if="data.hasOwnProperty('month')" class="g-pstyle0">{{ data.month }} {{ data.year }}</p>
        <p v-else class="g-pstyle0">{{ data[6].month }} {{ data[6].year }}</p>
      </div>
      <div class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:6.1246%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[2]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-24" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:6.1246%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[9]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-46" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:55.8327%;margin-top:-5.9px;left:6.1245%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[16]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-62" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:65.9205%;margin-top:-5.9px;left:6.1245%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[23]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-82" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:78.2012%;margin-top:-5.9px;left:6.1245%;width:98px;">
        <p class="g-pstyle1" style="margin: auto; white-space: normal; height: auto" v-for="(item, index) in data.holidays[30]"
           :key="index">{{ item }}</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:27.2569%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[3]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-25" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:27.257%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[10]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-45" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:53.786%;margin-top:-5.9px;left:27.2569%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[17]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-65" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:66.0667%;margin-top:-5.9px;left:27.2569%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[24]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-83" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:78.2012%;margin-top:-5.9px;left:27.2569%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[31]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:48.3893%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[4]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-22" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:48.3893%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[11]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-43" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:53.786%;margin-top:-5.9px;left:48.3892%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[18]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-63" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:65.9205%;margin-top:-5.9px;left:48.3892%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[25]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:69.5215%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[5]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-23" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:69.5217%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[12]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-44" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:53.786%;margin-top:-5.9px;left:69.5215%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[19]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-64" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:65.9205%;margin-top:-5.9px;left:69.5215%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[26]" :key="index"
           style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-92" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:93.9906%;margin-top:-5.9px;padding-left:26.9px; padding-right: 31.9px; width: 100%; height: 24px">
        <img v-if="this.$store.state.extraSelection ==='personal check ins'" :src="extra" style="bottom: 0px; left: 0px">
        <p v-else class="g-pstyle2" style="margin: auto; font-size: 7px; white-space: normal">{{ extra }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sabado1",
  props: {
    data: {
      required: true
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      extra: ''
    }
  },
  computed: {
    selection() {
      return this.$store.state.extraSelection
    }
  },
  watch: {
    selection(newCount) {
      if (newCount === 'Motivational quotes') this.extra = this.$store.state.motivational[this.index];
      else if (newCount === 'self-care challenges') this.extra = this.$store.state.challenges[this.index];
      else if (newCount === 'personal check ins') this.extra = this.$store.state.personalCheckIns[Math.floor((Math.random() * (4-0))+0)];
    }
  },
}
</script>

<style scoped>
p {
  font-family: 'Kontour Type - Kopius-Light';
}

#g-31---Saturday-L-box,
#g-31---Saturday-L-box .g-artboard {
  margin: 0 auto;
}

#g-31---Saturday-L-box p {
  margin: 0;
}

#g-31---Saturday-L-box .g-aiAbs {
  position: absolute;
}

#g-31---Saturday-L-box .g-aiImg {
  position: absolute;
  top: 0;
  display: block;
  width: 100% !important;
}

#g-31---Saturday-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}

#g-31---Saturday-L-box .g-aiPointText p {
  white-space: nowrap;
}

#g-31---Saturday-L-Artboard_1 {
  position: relative;
  overflow: hidden;
}

#g-31---Saturday-L-Artboard_1 p {
  font-weight: 500;
  line-height: 11px;
  height: auto;
  filter: alpha(opacity=100);
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
  letter-spacing: 0.025em;
  font-size: 9px;
  text-align: left;
  text-transform: none;
  color: rgb(128, 130, 133);
  padding-bottom: 0;
  padding-top: 0;
  mix-blend-mode: normal;
  font-style: normal;
  position: static;
}

@media only screen and (min-width: 1200px) {
  #g-31---Saturday-L-Artboard_1 p {
    font-size: 7.5px;
  }

  #g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size: 16px;
  }

  .g-Layer_1.g-aiAbs.g-aiPointText.g-ai0-2 {
    width: 74px !important;
  }
}

#g-31---Saturday-L-Artboard_1 .g-pstyle0 {
  line-height: 22px;
  height: 22px;
  font-size: 18px;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
}

#g-31---Saturday-L-Artboard_1 .g-pstyle1 {
  height: 11px;
  text-transform: uppercase;
}

#g-31---Saturday-L-Artboard_1 .g-pstyle2 {
  height: 11px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(129, 130, 133);
}

</style>