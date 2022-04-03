<template>
  <div id="g-3_-Kids-_-Meals-L-box" class="ai2html">
    <div id="g-3_-Kids-_-Meals-L-Artboard_6" class="g-artboard" style="max-width: 522px;max-height: 684px"
         data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-3_-Kids-_-Meals-L-Artboard_6-img" class="g-aiImg" alt="" src="./3_-Kids-_-Meals-L-Artboard_6.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:5.2817%;margin-top:-5.1px;left:78.3103%;margin-left:-30.5px;width:61px;">
        <p class="g-pstyle0">{{ data[0].month }}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:8.0105%;margin-top:-11.8px;left:7.3887%;width:145px;">
        <p class="g-pstyle1">{{ data[0].month }} {{ data[0].dayNumber }} - {{ data[6].dayNumber }}</p>
      </div>
      <div v-for="(item1, index1) in monthData " :key="index1">
        <div v-for="(item, index) in item1 " :key="index" id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText"
             :style="`top:${1.9*index1+9.2016}%;margin-top:-5.9px;left:${3.4*index+68.5336}%;margin-left:-12px;width:24px;`">
          <p class="g-pstyle2" style="font-size: 8.5px" :class="`${arrayDates.includes(item)? 'has-text-weight-bold': ''}`">{{item}}</p>
        </div>
      </div>
      <!--<div>
        <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:9.2016%;margin-top:-5.9px;left:68.5336%;margin-left:-12px;width:24px;">
          <p class="g-pstyle2">.</p>
        </div>
        <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:9.2016%;margin-top:-5.9px;left:71.8134%;margin-left:-12px;width:24px;">
          <p class="g-pstyle2">.</p>
        </div>
        <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:9.2016%;margin-top:-5.9px;left:75.1857%;margin-left:-12px;width:24px;">
          <p class="g-pstyle2">.</p>
        </div>
        <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:9.2016%;margin-top:-5.9px;left:78.6386%;margin-left:-12px;width:24px;">
          <p class="g-pstyle2">.</p>
        </div>
        <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:9.2016%;margin-top:-5.9px;left:82.0929%;margin-left:-12px;width:24px;">
          <p class="g-pstyle2">.</p>
        </div>
        <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:9.2016%;margin-top:-5.9px;left:85.1918%;margin-left:-12px;width:24px;">
          <p class="g-pstyle2">.</p>
        </div>
        <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:9.2016%;margin-top:-5.9px;left:88.17%;margin-left:-13px;width:26px;">
          <p class="g-pstyle2">1</p>
        </div>
      </div>-->
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:10.6895%;margin-top:-9.1px;left:7.3887%;width:74px;">
        <p class="g-pstyle3">week {{currentWeek}}</p>
      </div>
      <!--<div>


        <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:10.956%;margin-top:-5.9px;left:68.5757%;margin-left:-13.5px;width:27px;">
          <p class="g-pstyle2">2</p>
        </div>
        <div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:10.956%;margin-top:-5.9px;left:71.8494%;margin-left:-13.5px;width:27px;">
          <p class="g-pstyle4">3</p>
        </div>
        <div id="g-ai0-13" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:10.956%;margin-top:-5.9px;left:75.1757%;margin-left:-13.5px;width:27px;">
          <p class="g-pstyle4">4</p>
        </div>
        <div id="g-ai0-14" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:10.956%;margin-top:-5.9px;left:78.6747%;margin-left:-13.5px;width:27px;">
          <p class="g-pstyle4">5</p>
        </div>
        <div id="g-ai0-15" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:10.956%;margin-top:-5.9px;left:82.082%;margin-left:-13.5px;width:27px;">
          <p class="g-pstyle4">6</p>
        </div>
        <div id="g-ai0-16" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:10.956%;margin-top:-5.9px;left:85.1573%;margin-left:-13px;width:26px;">
          <p class="g-pstyle4">7</p>
        </div>
        <div id="g-ai0-17" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:10.956%;margin-top:-5.9px;left:88.1353%;margin-left:-13.5px;width:27px;">
          <p class="g-pstyle4">8</p>
        </div>
      </div>
      <div>
        <div id="g-ai0-18" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:12.7104%;margin-top:-5.9px;left:68.5313%;margin-left:-13.5px;width:27px;">
          <p class="g-pstyle4">9</p>
        </div>
        <div id="g-ai0-19" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:12.7104%;margin-top:-5.9px;left:88.1942%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">15</p>
        </div>
        <div id="g-ai0-20" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:12.7104%;margin-top:-5.9px;left:71.8639%;margin-left:-16px;width:32px;">
          <p class="g-pstyle2">10</p>
        </div>
        <div id="g-ai0-21" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:12.7104%;margin-top:-5.9px;left:75.244%;margin-left:-15px;width:30px;">
          <p class="g-pstyle2">11</p>
        </div>
        <div id="g-ai0-22" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:12.7104%;margin-top:-5.9px;left:78.6081%;margin-left:-15px;width:30px;">
          <p class="g-pstyle2">12</p>
        </div>
        <div id="g-ai0-23" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:12.7104%;margin-top:-5.9px;left:82.1521%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">13</p>
        </div>
        <div id="g-ai0-24" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:12.7104%;margin-top:-5.9px;left:85.2049%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">14</p>
        </div>
      </div>
      <div>
        <div id="g-ai0-25" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:14.4648%;margin-top:-5.9px;left:68.5458%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">16</p>
        </div>
        <div id="g-ai0-26" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:14.4648%;margin-top:-5.9px;left:71.8149%;margin-left:-15px;width:30px;">
          <p class="g-pstyle2">17</p>
        </div>
        <div id="g-ai0-27" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:14.4648%;margin-top:-5.9px;left:75.2093%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">18</p>
        </div>
        <div id="g-ai0-28" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:14.4648%;margin-top:-5.9px;left:78.6596%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">19</p>
        </div>
        <div id="g-ai0-29" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:14.4648%;margin-top:-5.9px;left:82.1506%;margin-left:-16.5px;width:33px;">
          <p class="g-pstyle2">20</p>
        </div>
        <div id="g-ai0-30" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:14.4648%;margin-top:-5.9px;left:85.1613%;margin-left:-15px;width:30px;">
          <p class="g-pstyle2">21</p>
        </div>
        <div id="g-ai0-31" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:14.4648%;margin-top:-5.9px;left:88.1115%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">22</p>
        </div>
      </div>
      <div>
        <div id="g-ai0-32" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:16.2191%;margin-top:-5.9px;left:68.504%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">23</p>
        </div>
        <div id="g-ai0-33" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:16.2191%;margin-top:-5.9px;left:71.8335%;margin-left:-16px;width:32px;">
          <p class="g-pstyle2">24</p>
        </div>
        <div id="g-ai0-34" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:16.2191%;margin-top:-5.9px;left:75.1562%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">25</p>
        </div>
        <div id="g-ai0-35" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:16.2191%;margin-top:-5.9px;left:78.658%;margin-left:-16px;width:32px;">
          <p class="g-pstyle2">26</p>
        </div>
        <div id="g-ai0-36" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:16.2191%;margin-top:-5.9px;left:82.0887%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">27</p>
        </div>
        <div id="g-ai0-37" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:16.2191%;margin-top:-5.9px;left:85.2224%;margin-left:-16px;width:32px;">
          <p class="g-pstyle2">28</p>
        </div>
        <div id="g-ai0-38" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:16.2191%;margin-top:-5.9px;left:88.1629%;margin-left:-16px;width:32px;">
          <p class="g-pstyle2">29</p>
        </div>
      </div>
      <div>
        <div id="g-ai0-39" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:17.8273%;margin-top:-5.9px;left:68.5852%;margin-left:-16.5px;width:33px;">
          <p class="g-pstyle2">30</p>
        </div>
        <div id="g-ai0-40" class="g-Layer_1 g-aiAbs g-aiPointText"
             style="top:17.8273%;margin-top:-5.9px;left:71.8725%;margin-left:-15.5px;width:31px;">
          <p class="g-pstyle2">31</p>
        </div>
      </div>-->
      <div id="g-ai0-41" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:23.0304%;margin-top:-7.5px;left:37.254%;margin-left:-47px;width:94px;">
        <p class="g-pstyle5">{{(data[0].day)}} {{data[0].dayNumber}}</p>
      </div>
      <div id="g-ai0-42" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:23.0304%;margin-top:-7.5px;left:58.2459%;margin-left:-47.5px;width:95px;">
        <p class="g-pstyle5">{{(data[1].day)}} {{data[1].dayNumber}}</p>
      </div>
      <div id="g-ai0-43" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:23.0304%;margin-top:-7.5px;left:79.2258%;margin-left:-58px;width:116px;">
        <p class="g-pstyle5">{{(data[2].day)}} {{data[2].dayNumber}}</p>
      </div>
      <div id="g-ai0-44" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:26.4468%;margin-top:-5.9px;left:28.2488%;width:64px;" v-if="this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`][data[0].dayNumber]">
        <p class="g-pstyle6"  v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[0].month}${data[0].year}`][data[0].dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-45" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:26.4468%;margin-top:-5.9px;left:70.1716%;width:64px;" v-if="this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`][data[1].dayNumber]">
        <p class="g-pstyle6"  v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[1].month}${data[1].year}`][data[1].dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <div id="g-ai0-46" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:26.4468%;margin-top:-5.9px;left:49.2301%;width:64px;" v-if="this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`][data[2].dayNumber]">
        <p class="g-pstyle6" v-for="(item, index) in this.$store.state.holidayStructureFinal[`${data[2].month}${data[2].year}`][data[2].dayNumber]" :key="index" style="margin: auto; white-space: normal;">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-47" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:28.2012%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-48" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:28.2012%;margin-top:-5.9px;left:70.1716%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-49" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:28.2012%;margin-top:-5.9px;left:49.2301%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-50" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:29.9556%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-51" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:29.9556%;margin-top:-5.9px;left:70.1715%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-52" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:29.9556%;margin-top:-5.9px;left:49.2301%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-53" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:31.7099%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-54" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:31.7099%;margin-top:-5.9px;left:70.1716%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-55" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:31.7099%;margin-top:-5.9px;left:49.2302%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-56" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:33.4643%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-57" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:33.4643%;margin-top:-5.9px;left:70.1715%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-58" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:33.4643%;margin-top:-5.9px;left:49.2301%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-59" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:35.2187%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-60" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:35.2187%;margin-top:-5.9px;left:70.1715%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-61" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:35.2187%;margin-top:-5.9px;left:49.2301%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-62" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:36.9731%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-63" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:36.9731%;margin-top:-5.9px;left:70.1715%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-64" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:36.9731%;margin-top:-5.9px;left:49.2301%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-65" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:38.7275%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-66" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:38.7275%;margin-top:-5.9px;left:70.1716%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-67" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:38.7275%;margin-top:-5.9px;left:49.2301%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-68" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:40.4819%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle6">holiday</p>
      </div>
      <div id="g-ai0-69" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:40.4819%;margin-top:-5.9px;left:70.1715%;width:64px;">
        <p class="g-pstyle6">holiday</p>
      </div>
      <div id="g-ai0-70" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:40.4819%;margin-top:-5.9px;left:49.23%;width:64px;">
        <p class="g-pstyle6">holiday</p>
      </div>
      <div id="g-ai0-71" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:42.2363%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-72" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:42.2363%;margin-top:-5.9px;left:70.1715%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-73" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:42.2363%;margin-top:-5.9px;left:49.23%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-74" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:43.9906%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-75" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:43.9906%;margin-top:-5.9px;left:70.1714%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-76" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:43.9906%;margin-top:-5.9px;left:49.23%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-77" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:45.745%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-78" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:45.745%;margin-top:-5.9px;left:70.1715%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-79" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:45.745%;margin-top:-5.9px;left:49.2301%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-80" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:47.4994%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-81" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:47.4994%;margin-top:-5.9px;left:70.1714%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-82" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:47.4994%;margin-top:-5.9px;left:49.23%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-83" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:49.2538%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-84" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:49.2538%;margin-top:-5.9px;left:70.1714%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-85" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:49.2538%;margin-top:-5.9px;left:49.23%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-86" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:50.862%;margin-top:-5.9px;left:28.2488%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-87" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:50.862%;margin-top:-5.9px;left:70.1714%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>
      <div id="g-ai0-88" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:51.0082%;margin-top:-5.9px;left:49.23%;width:64px;">
        <p class="g-pstyle7">holiday</p>
      </div>-->
      <div id="g-ai0-89" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:93.9906%;margin-top:-5.9px;padding-left:26.9px; padding-right: 31.9px; width: 100%; height: 24px">
        <p class="g-pstyle2 has-text-centered" style="margin: auto; font-size: 7px; white-space: normal;">{{ extra }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kidsmeals1",
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
      currentWeek: 1,
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
    }
  },
  watch: {
    selection(newCount) {
      if (newCount === 'Motivational quotes') this.extra = this.$store.state.motivational[this.index];
      else if (newCount === 'self-care challenges') this.extra = this.$store.state.challenges[this.index];
      else if (newCount === 'personal check ins') this.extra = '';
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
        if((monthDates.slice(i * 7 + 1, (i * 7) + 8)).includes(this.data[0].dayNumber)) this.currentWeek=i;
      }
      console.log('monthData', this.monthData);
    },
  },
  mounted() {
    this.calcMonthData();
  }
}
</script>

<style media="screen,print">
p {
  font-family: 'Kontour Type - Kopius-Light';
}

#g-3_-Kids-_-Meals-L-box,
#g-3_-Kids-_-Meals-L-box .g-artboard {
  margin: 0 auto;
}

#g-3_-Kids-_-Meals-L-box p {
  margin: 0;
}

#g-3_-Kids-_-Meals-L-box .g-aiAbs {
  position: absolute;
}

#g-3_-Kids-_-Meals-L-box .g-aiImg {
  position: absolute;
  top: 0;
  display: block;
  width: 100% !important;
}

#g-3_-Kids-_-Meals-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}

#g-3_-Kids-_-Meals-L-box .g-aiPointText p {
  white-space: nowrap;
}

#g-3_-Kids-_-Meals-L-Artboard_6 {
  position: relative;
  overflow: hidden;
}

#g-3_-Kids-_-Meals-L-Artboard_6 p {
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
  color: rgb(129, 131, 133);
  padding-bottom: 0;
  padding-top: 0;
  mix-blend-mode: normal;
  font-style: normal;
  position: static;
}

#g-3_-Kids-_-Meals-L-Artboard_6 .g-pstyle0 {
  line-height: 10px;
  height: 10px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
}

#g-3_-Kids-_-Meals-L-Artboard_6 .g-pstyle1 {
  line-height: 22px;
  height: 22px;
  font-size: 16px;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
}

#g-3_-Kids-_-Meals-L-Artboard_6 .g-pstyle2 {
  height: 11px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(175, 177, 180);
}

#g-3_-Kids-_-Meals-L-Artboard_6 .g-pstyle3 {
  line-height: 17px;
  height: 17px;
  font-size: 14px;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
}

#g-3_-Kids-_-Meals-L-Artboard_6 .g-pstyle4 {
  height: 11px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
}

#g-3_-Kids-_-Meals-L-Artboard_6 .g-pstyle5 {
  line-height: 14px;
  height: 14px;
  font-size: 11px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
}

#g-3_-Kids-_-Meals-L-Artboard_6 .g-pstyle6 {
  height: 11px;
  text-transform: uppercase;
  color: rgb(129, 132, 133);
}

#g-3_-Kids-_-Meals-L-Artboard_6 .g-pstyle7 {
  height: 11px;
  text-transform: uppercase;
}

#g-3_-Kids-_-Meals-L-Artboard_6 .g-pstyle8 {
  height: 11px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(129, 132, 133);
}
</style>