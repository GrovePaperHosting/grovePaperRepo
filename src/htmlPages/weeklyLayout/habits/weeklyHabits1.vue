<template>
  <div id="g-7_-Habits-L-box" class="ai2html">
    <div id="g-7_-Habits-L-Artboard_1" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-7_-Habits-L-Artboard_1-img" class="g-aiImg" alt="" src="./7_-Habits-L-Artboard_1.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.5485%;margin-top:-11.8px;left:5.4006%;width:145px;">
        <p class="g-pstyle0">{{(data[0].month)}} {{(data[0].dayNumber)}} - {{(data[6].dayNumber)}}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.4807%;margin-top:-7.5px;left:18.8978%;margin-left:-47px;width:94px;">
        <p class="g-pstyle1">{{(data[0].day)}} {{(data[0].dayNumber)}}</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.6647%;margin-top:-8.8px;left:47.349%;margin-left:-47.5px;width:95px;">
        <p class="g-pstyle2">{{(data[1].day)}} {{(data[1].dayNumber)}}</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.6636%;margin-top:-8.8px;left:75.7882%;margin-left:-58px;width:116px;">
        <p class="g-pstyle2">{{(data[2].day)}} {{(data[2].dayNumber)}}</p>
      </div>
      <div id="g-ai0-62" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:51.5392%;margin-top:-7.5px;left:18.9265%;margin-left:-53px;width:106px;">
        <p class="g-pstyle1">{{(data[3].day)}} {{(data[3].dayNumber)}}</p>
      </div>
      <div id="g-ai0-63" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:51.5392%;margin-top:-7.5px;left:47.3382%;margin-left:-41px;width:82px;">
        <p class="g-pstyle1">{{(data[4].day)}} {{(data[4].dayNumber)}}</p>
      </div>
      <div id="g-ai0-64" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:51.5392%;margin-top:-7.5px;left:75.7809%;margin-left:-51.5px;width:103px;">
        <p class="g-pstyle1">{{(data[5].day)}} {{(data[5].dayNumber)}}</p>
      </div>
      <div id="g-ai0-91" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:70.9836%;margin-top:-7.5px;left:75.831%;margin-left:-45px;width:90px;">
        <p class="g-pstyle1">{{(data[6].day)}} {{(data[6].dayNumber)}}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:15.0433%;margin-top:-5.9px;left:6.3881%;width:128px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`][data[0].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:15.0433%;margin-top:-5.9px;left:34.8287%;width:128px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`][data[1].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:15.0433%;margin-top:-5.9px;left:63.2691%;width:128px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`][data[2].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:55.248%;margin-top:-5.9px;left:6.44%;width:128px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`][data[3].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:55.248%;margin-top:-5.9px;left:34.8804%;width:128px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`][data[4].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:55.248%;margin-top:-5.9px;left:63.3208%;width:128px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:74.5462%;margin-top:-5.9px;left:63.3207%;width:128px;">
        <p class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-65" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:55.248%;margin-top:-5.9px;left:6.44%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-66" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:55.248%;margin-top:-5.9px;left:34.8804%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-67" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:55.248%;margin-top:-5.9px;left:63.3208%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>-->
      <!--<div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.0433%;margin-top:-5.9px;left:6.3881%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.0433%;margin-top:-5.9px;left:34.8287%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.0433%;margin-top:-5.9px;left:63.2691%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.7977%;margin-top:-5.9px;left:6.3882%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.7977%;margin-top:-5.9px;left:34.8288%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.7977%;margin-top:-5.9px;left:63.2692%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.552%;margin-top:-5.9px;left:6.3882%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.552%;margin-top:-5.9px;left:34.8288%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-13" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.552%;margin-top:-5.9px;left:63.2692%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-14" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:20.3064%;margin-top:-5.9px;left:6.3882%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-15" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:20.3064%;margin-top:-5.9px;left:34.8288%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-16" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:20.3064%;margin-top:-5.9px;left:63.2692%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-17" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:22.0608%;margin-top:-5.9px;left:6.3882%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-18" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:22.0608%;margin-top:-5.9px;left:34.8288%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-19" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:22.0608%;margin-top:-5.9px;left:63.2692%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-20" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.8152%;margin-top:-5.9px;left:6.3882%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-21" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.8152%;margin-top:-5.9px;left:34.8288%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-22" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.8152%;margin-top:-5.9px;left:63.2692%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-23" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5696%;margin-top:-5.9px;left:6.3882%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-24" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5696%;margin-top:-5.9px;left:34.8288%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-25" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5696%;margin-top:-5.9px;left:63.2692%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-26" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.324%;margin-top:-5.9px;left:6.3882%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-27" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.324%;margin-top:-5.9px;left:34.8288%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-28" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.324%;margin-top:-5.9px;left:63.2692%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-29" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.0784%;margin-top:-5.9px;left:6.3881%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-30" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.0784%;margin-top:-5.9px;left:34.8287%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-31" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.0784%;margin-top:-5.9px;left:63.2691%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-32" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:30.8327%;margin-top:-5.9px;left:6.3881%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-33" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:30.8327%;margin-top:-5.9px;left:34.8287%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-34" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:30.8327%;margin-top:-5.9px;left:63.2691%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-35" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:32.5871%;margin-top:-5.9px;left:6.3881%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-36" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:32.5871%;margin-top:-5.9px;left:34.8287%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-37" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:32.5871%;margin-top:-5.9px;left:63.2691%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-38" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:34.3415%;margin-top:-5.9px;left:6.3882%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-39" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:34.3415%;margin-top:-5.9px;left:34.8288%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-40" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:34.3415%;margin-top:-5.9px;left:63.2691%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-41" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:36.0959%;margin-top:-5.9px;left:6.3881%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-42" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:36.0959%;margin-top:-5.9px;left:34.8287%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-43" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:36.0959%;margin-top:-5.9px;left:63.2691%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-44" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:37.8503%;margin-top:-5.9px;left:6.3881%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-45" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:37.8503%;margin-top:-5.9px;left:34.8287%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-46" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:37.8503%;margin-top:-5.9px;left:63.2691%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-47" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:39.6047%;margin-top:-5.9px;left:6.388%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-48" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:39.6047%;margin-top:-5.9px;left:34.8286%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-49" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:39.6047%;margin-top:-5.9px;left:63.269%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-50" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:41.3591%;margin-top:-5.9px;left:6.388%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-51" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:41.3591%;margin-top:-5.9px;left:34.8286%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-52" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:41.3591%;margin-top:-5.9px;left:63.269%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-53" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.1134%;margin-top:-5.9px;left:6.388%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-54" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.1134%;margin-top:-5.9px;left:34.8286%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-55" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.1134%;margin-top:-5.9px;left:63.269%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-56" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:44.8678%;margin-top:-5.9px;left:6.3879%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-57" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:44.8678%;margin-top:-5.9px;left:34.8285%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-58" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:44.8678%;margin-top:-5.9px;left:63.2689%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-59" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:46.6222%;margin-top:-5.9px;left:6.388%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-60" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:46.6222%;margin-top:-5.9px;left:34.8286%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-61" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:46.6222%;margin-top:-5.9px;left:63.269%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-62" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:51.5392%;margin-top:-7.5px;left:18.9265%;margin-left:-53px;width:106px;">
        <p class="g-pstyle1">{{(data[3].day)}} {{(data[3].dayNumber)}}</p>
      </div>
      <div id="g-ai0-63" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:51.5392%;margin-top:-7.5px;left:47.3382%;margin-left:-41px;width:82px;">
        <p class="g-pstyle1">{{(data[4].day)}} {{(data[4].dayNumber)}}</p>
      </div>
      <div id="g-ai0-64" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:51.5392%;margin-top:-7.5px;left:75.7809%;margin-left:-51.5px;width:103px;">
        <p class="g-pstyle1">{{(data[5].day)}} {{(data[5].dayNumber)}}</p>
      </div>
      <div id="g-ai0-65" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:55.248%;margin-top:-5.9px;left:6.44%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-66" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:55.248%;margin-top:-5.9px;left:34.8804%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-67" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:55.248%;margin-top:-5.9px;left:63.3208%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-68" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:57.0023%;margin-top:-5.9px;left:6.4401%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-69" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:57.0023%;margin-top:-5.9px;left:34.8805%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-70" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:57.0023%;margin-top:-5.9px;left:63.3209%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-71" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:58.7567%;margin-top:-5.9px;left:6.4401%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-72" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:58.7567%;margin-top:-5.9px;left:34.8805%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-73" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:58.7567%;margin-top:-5.9px;left:63.3209%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-74" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:60.5111%;margin-top:-5.9px;left:6.4401%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-75" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:60.5111%;margin-top:-5.9px;left:34.8805%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-76" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:60.5111%;margin-top:-5.9px;left:63.3209%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-77" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:62.2655%;margin-top:-5.9px;left:6.4401%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-78" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:62.2655%;margin-top:-5.9px;left:34.8805%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-79" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:62.2655%;margin-top:-5.9px;left:63.3209%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-80" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:64.0199%;margin-top:-5.9px;left:6.4401%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-81" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:64.0199%;margin-top:-5.9px;left:34.8805%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-82" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:64.0199%;margin-top:-5.9px;left:63.3209%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-83" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:65.7743%;margin-top:-5.9px;left:6.4401%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-84" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:65.7743%;margin-top:-5.9px;left:34.8805%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-85" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:65.7743%;margin-top:-5.9px;left:63.3209%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-86" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:67.5287%;margin-top:-5.9px;left:6.4401%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-87" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:67.5287%;margin-top:-5.9px;left:34.8805%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-88" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:67.5287%;margin-top:-5.9px;left:63.3209%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-89" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:69.283%;margin-top:-5.9px;left:6.44%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-90" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:69.283%;margin-top:-5.9px;left:34.8804%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-91" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:70.9836%;margin-top:-7.5px;left:75.831%;margin-left:-45px;width:90px;">
        <p class="g-pstyle1">{{(data[6].day)}} {{(data[6].dayNumber)}}</p>
      </div>
      <div id="g-ai0-92" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:71.0374%;margin-top:-5.9px;left:6.44%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-93" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:71.0374%;margin-top:-5.9px;left:34.8804%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-94" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:72.7918%;margin-top:-5.9px;left:6.44%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-95" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:72.7918%;margin-top:-5.9px;left:34.8804%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-96" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:74.5462%;margin-top:-5.9px;left:6.4401%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-97" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:74.5462%;margin-top:-5.9px;left:34.8805%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-98" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:74.5462%;margin-top:-5.9px;left:63.3206%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-99" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:76.1544%;margin-top:-5.9px;left:6.44%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-100" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:76.1544%;margin-top:-5.9px;left:34.8804%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-101" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:76.3006%;margin-top:-5.9px;left:63.3207%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-102" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:77.9088%;margin-top:-5.9px;left:6.44%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-103" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:77.9088%;margin-top:-5.9px;left:34.8804%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-104" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:78.055%;margin-top:-5.9px;left:63.3207%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-105" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:79.6632%;margin-top:-5.9px;left:6.4399%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-106" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:79.6632%;margin-top:-5.9px;left:34.8803%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-107" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:79.8094%;margin-top:-5.9px;left:63.3207%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-108" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:81.4175%;margin-top:-5.9px;left:6.4399%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-109" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:81.4175%;margin-top:-5.9px;left:34.8803%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-110" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:81.5637%;margin-top:-5.9px;left:63.3207%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-111" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:83.1719%;margin-top:-5.9px;left:6.4399%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-112" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:83.1719%;margin-top:-5.9px;left:34.8803%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-113" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:83.3181%;margin-top:-5.9px;left:63.3207%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-114" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:84.9263%;margin-top:-5.9px;left:6.4398%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-115" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:84.9263%;margin-top:-5.9px;left:34.8802%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-116" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:85.0725%;margin-top:-5.9px;left:63.3207%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-117" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:86.6807%;margin-top:-5.9px;left:6.4399%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-118" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:86.6807%;margin-top:-5.9px;left:34.8803%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-119" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:86.8269%;margin-top:-5.9px;left:63.3207%;width:64px;">
        <p class="g-pstyle3">holiday</p>
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
  name: "weeklyHabits1",
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
#g-7_-Habits-L-box ,
#g-7_-Habits-L-box .g-artboard {
  margin:0 auto;
}
#g-7_-Habits-L-box p {
  margin:0;
}
#g-7_-Habits-L-box .g-aiAbs {
  position:absolute;
}
#g-7_-Habits-L-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-7_-Habits-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-7_-Habits-L-box .g-aiPointText p { white-space: nowrap; }
#g-7_-Habits-L-Artboard_1 {
  position:relative;
  overflow:hidden;
}
#g-7_-Habits-L-Artboard_1 p {
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
#g-7_-Habits-L-Artboard_1 .g-pstyle0 {
  line-height:22px;
  height:22px;
  font-size:18px;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-7_-Habits-L-Artboard_1 .g-pstyle1 {
  line-height:14px;
  height:14px;
  font-size:12px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-7_-Habits-L-Artboard_1 .g-pstyle2 {
  line-height:16px;
  height:16px;
  font-size:13px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-7_-Habits-L-Artboard_1 .g-pstyle3 {
  height:11px;
  text-transform:uppercase;
}
#g-7_-Habits-L-Artboard_1 .g-pstyle4 {
  height:11px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
@media only screen and (min-width: 1200px) {
  #g-7_-Habits-L-Artboard_1 p {
    font-size:8px;
  }
  .g-ai0{
    width: 90px !important;
  }
  /*#g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size:16px;
  }*/
}
</style>