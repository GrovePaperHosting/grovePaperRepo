<template>
  <div id="g-5_-Checklist-R-box" class="ai2html">
    <div id="g-5_-Checklist-R-Artboard_10" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-5_-Checklist-R-Artboard_10-img" class="g-aiImg" alt="" src="./5_-Checklist-R-Artboard_10.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.1589%;margin-top:-5.1px;left:56.3117%;margin-left:-30.5px;width:61px;">
        <p class="g-pstyle0">{{ data[0].month }}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.1589%;margin-top:-5.1px;left:83.6297%;margin-left:-33.5px;width:67px;">
        <p class="g-pstyle1">{{monthAfter.key}}</p>
      </div>
      <div v-for="(item1, index1) in monthData " :key="index1">
        <div v-for="(item, index) in item1 " :key="index" id="g-ai0-4" class="g-Layer_1 g-aiAbs aiPointText"
             :style="`top:${1.9*index1+10.525}%;margin-top:-5.9px;left:${3.3*index+48.5351}%;margin-left:-12px;width:24px;`">
          <p class="g-pstyle12" style="font-size: 8.5px" :class="`${arrayDates.includes(item)? 'has-text-weight-bold': ''}`" ><span v-if="item<10">&nbsp;</span>{{item}}</p>
        </div>
      </div>
      <div v-for="(item1, index1) in monthAfterData" :key="index1">
        <div v-for="(item, index) in item1 " :key="index" id="g-ai0-5" class="g-Layer_1 g-aiAbs aiPointText"
             :style="`top:${1.9*index1+10.525}%;margin-top:-5.9px;left:${3.3*index+75.5351}%;margin-left:-12px;width:24px;`">
          <p class="g-pstyle12" style="font-size: 8.5px" > <span v-if="item<10">&nbsp;</span>{{item}}</p>
        </div>
      </div>
      <!--<div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:46.5351%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:49.8148%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:53.1871%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:56.6401%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:60.0943%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:63.1931%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:66.1715%;margin-left:-13px;width:26px;">
        <p class="g-pstyle2">1</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:73.8135%;margin-left:-13px;width:26px;">
        <p class="g-pstyle2">1</p>
      </div>
      <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:77.1002%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle2">2</p>
      </div>
      <div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:80.4665%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle2">3</p>
      </div>
      <div id="g-ai0-13" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:83.8734%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle2">4</p>
      </div>
      <div id="g-ai0-14" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:87.3737%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle2">5</p>
      </div>
      <div id="g-ai0-15" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:90.4256%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle2">6</p>
      </div>
      <div id="g-ai0-16" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.225%;margin-top:-5.9px;left:93.3452%;margin-left:-13px;width:26px;">
        <p class="g-pstyle2">7</p>
      </div>
      <div id="g-ai0-17" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:46.5772%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle2">2</p>
      </div>
      <div id="g-ai0-18" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:49.8507%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle3">3</p>
      </div>
      <div id="g-ai0-19" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:53.177%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle3">4</p>
      </div>
      <div id="g-ai0-20" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:56.6762%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle3">5</p>
      </div>
      <div id="g-ai0-21" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:60.0835%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle3">6</p>
      </div>
      <div id="g-ai0-22" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:63.1587%;margin-left:-13px;width:26px;">
        <p class="g-pstyle3">7</p>
      </div>
      <div id="g-ai0-23" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:66.1367%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle3">8</p>
      </div>
      <div id="g-ai0-24" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:73.7787%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle2">8</p>
      </div>
      <div id="g-ai0-25" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:77.0558%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle2">9</p>
      </div>
      <div id="g-ai0-26" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:80.4813%;margin-left:-16px;width:32px;">
        <p class="g-pstyle2">10</p>
      </div>
      <div id="g-ai0-27" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:83.9417%;margin-left:-15px;width:30px;">
        <p class="g-pstyle2">11</p>
      </div>
      <div id="g-ai0-28" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:87.3073%;margin-left:-15px;width:30px;">
        <p class="g-pstyle2">12</p>
      </div>
      <div id="g-ai0-29" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:90.4957%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">13</p>
      </div>
      <div id="g-ai0-30" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.9794%;margin-top:-5.9px;left:93.3929%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">14</p>
      </div>
      <div id="g-ai0-31" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:46.5326%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle3">9</p>
      </div>
      <div id="g-ai0-32" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:73.8375%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">15</p>
      </div>
      <div id="g-ai0-33" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:66.1956%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">15</p>
      </div>
      <div id="g-ai0-34" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:93.3493%;margin-left:-15px;width:30px;">
        <p class="g-pstyle2">21</p>
      </div>
      <div id="g-ai0-35" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:49.8653%;margin-left:-16px;width:32px;">
        <p class="g-pstyle2">10</p>
      </div>
      <div id="g-ai0-36" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:53.2453%;margin-left:-15px;width:30px;">
        <p class="g-pstyle2">11</p>
      </div>
      <div id="g-ai0-37" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:56.6096%;margin-left:-15px;width:30px;">
        <p class="g-pstyle2">12</p>
      </div>
      <div id="g-ai0-38" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:60.1534%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">13</p>
      </div>
      <div id="g-ai0-39" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:63.2062%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">14</p>
      </div>
      <div id="g-ai0-40" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:77.0702%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">16</p>
      </div>
      <div id="g-ai0-41" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:80.4321%;margin-left:-15px;width:30px;">
        <p class="g-pstyle2">17</p>
      </div>
      <div id="g-ai0-42" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:83.9071%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">18</p>
      </div>
      <div id="g-ai0-43" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:87.3588%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">19</p>
      </div>
      <div id="g-ai0-44" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.5876%;margin-top:-5.9px;left:90.4942%;margin-left:-16.5px;width:33px;">
        <p class="g-pstyle2">20</p>
      </div>
      <div id="g-ai0-45" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:46.5472%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">16</p>
      </div>
      <div id="g-ai0-46" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:73.755%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">22</p>
      </div>
      <div id="g-ai0-47" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:49.8163%;margin-left:-15px;width:30px;">
        <p class="g-pstyle2">17</p>
      </div>
      <div id="g-ai0-48" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:53.2107%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">18</p>
      </div>
      <div id="g-ai0-49" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:56.661%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">19</p>
      </div>
      <div id="g-ai0-50" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:60.1519%;margin-left:-16.5px;width:33px;">
        <p class="g-pstyle2">20</p>
      </div>
      <div id="g-ai0-51" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:63.1626%;margin-left:-15px;width:30px;">
        <p class="g-pstyle2">21</p>
      </div>
      <div id="g-ai0-52" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:66.1129%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">22</p>
      </div>
      <div id="g-ai0-53" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:77.0285%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">23</p>
      </div>
      <div id="g-ai0-54" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:80.4508%;margin-left:-16px;width:32px;">
        <p class="g-pstyle2">24</p>
      </div>
      <div id="g-ai0-55" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:83.854%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">25</p>
      </div>
      <div id="g-ai0-56" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:87.3571%;margin-left:-16px;width:32px;">
        <p class="g-pstyle2">26</p>
      </div>
      <div id="g-ai0-57" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:90.4323%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">27</p>
      </div>
      <div id="g-ai0-58" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:15.342%;margin-top:-5.9px;left:93.4104%;margin-left:-16px;width:32px;">
        <p class="g-pstyle2">28</p>
      </div>
      <div id="g-ai0-59" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:46.5053%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">23</p>
      </div>
      <div id="g-ai0-60" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:73.7784%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-61" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:49.8348%;margin-left:-16px;width:32px;">
        <p class="g-pstyle2">24</p>
      </div>
      <div id="g-ai0-62" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:53.1576%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">25</p>
      </div>
      <div id="g-ai0-63" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:56.6593%;margin-left:-16px;width:32px;">
        <p class="g-pstyle2">26</p>
      </div>
      <div id="g-ai0-64" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:60.09%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">27</p>
      </div>
      <div id="g-ai0-65" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:63.2238%;margin-left:-16px;width:32px;">
        <p class="g-pstyle2">28</p>
      </div>
      <div id="g-ai0-66" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:66.1644%;margin-left:-16px;width:32px;">
        <p class="g-pstyle2">29</p>
      </div>
      <div id="g-ai0-67" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:77.0581%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-68" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:80.4306%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-69" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:83.8835%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-70" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:87.3378%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-71" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:90.4366%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-72" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.0963%;margin-top:-5.9px;left:93.3798%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-73" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.8507%;margin-top:-5.9px;left:46.5865%;margin-left:-16.5px;width:33px;">
        <p class="g-pstyle2">30</p>
      </div>
      <div id="g-ai0-74" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.8507%;margin-top:-5.9px;left:49.8739%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle2">31</p>
      </div>
      <div id="g-ai0-75" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.8507%;margin-top:-5.9px;left:73.7784%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>
      <div id="g-ai0-76" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.8507%;margin-top:-5.9px;left:77.0581%;margin-left:-12px;width:24px;">
        <p class="g-pstyle2">.</p>
      </div>-->
      <div id="g-ai0-77" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.276%;margin-top:-7.5px;left:10.4197%;width:106px;">
        <p class="g-pstyle4">{{data[3].dayNumber}} {{data[3].day}}</p>
      </div>
      <!--<div id="g-ai0-78" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.3298%;margin-top:-5.9px;left:27.3471%;width:64px;">
        <p class="g-pstyle3" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber]">{{this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][0]}}</p>
      </div>-->
      <!--<div v-if="this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:21.3298%;margin-top:-5.9px;left:27.3471%;width:93px;">
        <p class="g-pstyle6" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`][data[3].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>-->
      <p v-if="this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai is-justify-content-flex-start" style="top:21.3298%;margin-top:-5.9px;left:32.3471%;width:360px; white-space: normal;">
        <span class="g-pstyle5" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[3].month}${data[3].year}`][data[3].dayNumber]" :key="index" style=" height: auto">
          <span>
            {{ item }}
          </span>
          <span > &bull; </span>
        </span>
      </p>
      <div id="g-ai0-79" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.2526%;margin-top:-7.5px;left:10.4197%;width:82px;">
        <p class="g-pstyle4">{{data[4].dayNumber}} {{data[4].day}}</p>
      </div>
      <p v-if="this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai is-justify-content-flex-start" style="top:45.4526%;margin-top:-5.9px;left:24.7827%;width:360px; white-space: normal;">
        <span class="g-pstyle5" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`][data[4].dayNumber]" :key="index" style=" height: auto">
          <span>
            {{ item }}
          </span>
          <span > &bull; </span>
        </span>
      </p>
      <!--<div v-if="this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:45.4526%;margin-top:-5.9px;left:22.7827%;width:93px;">
        <p class="g-pstyle5" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[4].month}${data[4].year}`][data[4].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>-->
      <!--<div id="g-ai0-80" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.4526%;margin-top:-5.9px;left:22.7827%;width:64px;">
        <p class="g-pstyle1" style="margin: auto; white-space: normal;" v-if="this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][1]">{{this.$store.state.holidayStructureFinal[`${data.month}${data.year}`][data.dayNumber][1]}}</p>
      </div>-->
      <div id="g-ai0-81" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:69.3754%;margin-top:-7.5px;left:10.4197%;width:103px;">
        <p class="g-pstyle4">{{data[5].dayNumber}} {{data[5].day}}</p>
      </div>
      <!--<div v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:69.4292%;margin-top:-5.9px;left:26.784%;width:64px;width:93px;">
        <p class="g-pstyle6" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>-->
      <p v-if="this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai is-justify-content-flex-start" style="top:69.0292%;margin-top:-5.9px;left:30.5%;width:360px; white-space: normal;">
        <span class="g-pstyle5" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[5].month}${data[5].year}`][data[5].dayNumber]" :key="index" style=" height: auto">
          <span>
            {{ item }}
          </span>
          <span > &bull; </span>
        </span>
      </p>
      <div id="g-ai0-85" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:69.3754%;margin-top:-7.5px;left:54.0256%;width:90px;">
        <p class="g-pstyle4">{{data[6].dayNumber}} {{data[6].day}}</p>
      </div>
      <p v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai is-justify-content-flex-start" style="top:69.0292%;margin-top:-5.9px;left:71.8241%;width:360px; white-space: normal;">
        <span class="g-pstyle3" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber]" :key="index" style=" height: auto">
          <span>
            {{ item }}
          </span>
          <span > &bull; </span>
        </span>
      </p>
      <!--<div v-if="this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`]" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0" style="top:69.4292%;margin-top:-5.9px;left:67.8241%;width:64px;width:93px;">
        <p class="g-pstyle6" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[6].month}${data[6].year}`][data[6].dayNumber]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>-->
      <!--<div id="g-ai0-83" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:69.4292%;margin-top:-5.9px;left:26.784%;width:64px;">
        <p class="g-pstyle5">holiday</p>
      </div>
      <div id="g-ai0-84" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:69.4292%;margin-top:-5.9px;left:67.8241%;width:64px;">
        <p class="g-pstyle5">holiday</p>
      </div>-->
    </div>

  </div>
</template>

<script>
export default {
  name: "weeklyChecklist2",
  props: {
    data:{
      required: true
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      extra: '',
      monthData: [],
      monthAfterData: [],
      months: [
        {
          key: 'January',
          value: '01'
        },
        {
          key: 'February',
          value: '02'
        },
        {
          key: 'March',
          value: '03'
        },
        {
          key: 'April',
          value: '04'
        },
        {
          key: 'May',
          value: '05'
        },
        {
          key: 'June',
          value: '06'
        },
        {
          key: 'July',
          value: '07'
        },
        {
          key: 'August',
          value: '08'
        },
        {
          key: 'September',
          value: '09'
        },
        {
          key: 'October',
          value: '10'
        },
        {
          key: 'November',
          value: '11'
        },
        {
          key: 'December',
          value: '12'
        },
      ],
      monthAfter: '',
    }
  },
  computed: {
    selection() {
      return this.$store.state.extraSelection
    },
    arrayDates(){
      const arrayDates = this.data.map(element=>{
        return element.dayNumber;
      })
      return arrayDates;
    },
    currentWeek(){
      const currentdate = new Date(`${this.data[6].year}-${this.data[6].monthNumber}-${this.data[6].dayNumber}`);
      const oneJan = new Date(currentdate.getFullYear(), 0, 1);
      const numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
      const result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
      return result
    }
  },
  watch: {
    selection(newCount) {
      if (newCount === 'Motivational quotes') this.extra = this.$store.state.motivational[this.index];
      else if (newCount === 'self-care challenges') this.extra = this.$store.state.challenges[this.index];
      else if (newCount === 'personal check ins') this.extra = this.$store.state.personalCheckIns[Math.floor((Math.random() * (4-0))+0)];
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
        //if((monthDates.slice(i * 7 + 1, (i * 7) + 8)).includes(this.data[0].dayNumber)) this.currentWeek=i;
      }
      console.log('monthData', this.monthData);
    },
    calcMonthAfterData() {
      const monthAfterNumber = this.data[0].monthNumber === 12? 1: this.data[0].monthNumber+1;
      this.monthAfter = this.months[monthAfterNumber-1];
      const monthAfterYear = this.data[0].monthNumber === 12? this.data[0].year+1: this.data[0].year;
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

  },
  mounted() {
    this.calcMonthData();
    this.calcMonthAfterData();
  }
}
</script>

<style media="screen,print" scoped>
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-5_-Checklist-R-box ,
#g-5_-Checklist-R-box .g-artboard {
  margin:0 auto;
}
#g-5_-Checklist-R-box p {
  margin:0;
}
#g-5_-Checklist-R-box .g-aiAbs {
  position:absolute;
}
#g-5_-Checklist-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-5_-Checklist-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-5_-Checklist-R-box .g-aiPointText p { white-space: nowrap; }
#g-5_-Checklist-R-Artboard_10 {
  position:relative;
  overflow:hidden;
}
#g-5_-Checklist-R-Artboard_10 p {
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
  color:rgb(175,177,180);
  padding-bottom:0;
  padding-top:0;
  mix-blend-mode:normal;
  font-style:normal;
  position:static;
}

@media only screen and (min-width: 1200px) {
  #g-5_-Checklist-R-Artboard_10 .g-pstyle3 {
    font-size:8px !important;
  }
  .g-ai{
    width: 240px !important;
  }
  /*#g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size:16px;
  }*/
  /*#g-5_-Checklist-L-Artboard_9 .g-pstyle2 {

    font-size: 10px !important;
  }*/
}
@media only screen and (min-width: 1200px) {
  #g-5_-Checklist-R-Artboard_10 .g-pstyle5 {
    font-size:8px !important;
  }
  .g-ai0{
    width: 70px !important;
  }
  /*#g-31---Saturday-L-Artboard_1 .g-pstyle0 {;
    font-size:16px;
  }*/
  /*#g-5_-Checklist-L-Artboard_9 .g-pstyle2 {

    font-size: 10px !important;
  }*/
}
#g-5_-Checklist-R-Artboard_10 .g-pstyle0 {
  line-height:10px;
  height:10px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-5_-Checklist-R-Artboard_10 .g-pstyle1 {
  line-height:10px;
  height:10px;
  text-align:center;
  text-transform:uppercase;
}
#g-5_-Checklist-R-Artboard_10 .g-pstyle2 {
  height:11px;
  text-align:center;
  text-transform:uppercase;
}
#g-5_-Checklist-R-Artboard_10 .g-pstyle3 {
  height:11px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-5_-Checklist-R-Artboard_10 .g-pstyle4 {
  line-height:14px;
  height:14px;
  font-size:12px;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-5_-Checklist-R-Artboard_10 .g-pstyle5 {
  height:11px;
  text-transform:uppercase;
  color:rgb(129,132,133);
}

</style>