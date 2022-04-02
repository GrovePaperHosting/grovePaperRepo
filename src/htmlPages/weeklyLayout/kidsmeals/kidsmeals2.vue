<template>
  <div id="g-3_-Kids-_-Meals-R-box" class="ai2html">
    <div id="g-3_-Kids-_-Meals-R-Artboard_2" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-3_-Kids-_-Meals-R-Artboard_2-img" class="g-aiImg" alt="" src="./3_-Kids-_-Meals-R-Artboard_2.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:5.2817%;margin-top:-5.1px;left:21.1456%;margin-left:-33.5px;width:67px;">
        <p class="g-pstyle0">{{monthAfter.key}}</p>
      </div>
      <div v-for="(item1, index1) in monthAfterData " :key="index1">
        <div v-for="(item, index) in item1 " :key="index" id="g-ai0-4" class="g-Layer_1 g-aiAbs aiPointText"
             :style="`top:${1.9*index1+9.4016}%;margin-top:-5.9px;left:${3.1*index+15.3294}%;margin-left:-13.5px;width:27px;`">
          <p class="g-pstyle12" style="font-size: 8.5px" :class="`${arrayDates.includes(item)? 'has-text-weight-bold': ''}`">{{item}}</p>
        </div>
      </div>
      <!--<div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.2016%;margin-top:-5.9px;left:11.3294%;margin-left:-13px;width:26px;">
        <p class="g-pstyle1">1</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.2016%;margin-top:-5.9px;left:14.6161%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle1">2</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.2016%;margin-top:-5.9px;left:17.9824%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle1">3</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.2016%;margin-top:-5.9px;left:21.3893%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle1">4</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.2016%;margin-top:-5.9px;left:24.8896%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle1">5</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.2016%;margin-top:-5.9px;left:27.9415%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle1">6</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:9.2016%;margin-top:-5.9px;left:30.8611%;margin-left:-13px;width:26px;">
        <p class="g-pstyle1">7</p>
      </div>
      <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.956%;margin-top:-5.9px;left:11.2946%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle1">8</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.956%;margin-top:-5.9px;left:14.5717%;margin-left:-13.5px;width:27px;">
        <p class="g-pstyle1">9</p>
      </div>
      <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.956%;margin-top:-5.9px;left:17.9972%;margin-left:-16px;width:32px;">
        <p class="g-pstyle1">10</p>
      </div>
      <div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.956%;margin-top:-5.9px;left:21.4576%;margin-left:-15px;width:30px;">
        <p class="g-pstyle1">11</p>
      </div>
      <div id="g-ai0-13" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.956%;margin-top:-5.9px;left:24.8232%;margin-left:-15px;width:30px;">
        <p class="g-pstyle1">12</p>
      </div>
      <div id="g-ai0-14" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.956%;margin-top:-5.9px;left:28.0116%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">13</p>
      </div>
      <div id="g-ai0-15" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.956%;margin-top:-5.9px;left:30.9088%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">14</p>
      </div>
      <div id="g-ai0-16" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7104%;margin-top:-5.9px;left:11.3534%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">15</p>
      </div>
      <div id="g-ai0-17" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7104%;margin-top:-5.9px;left:30.8652%;margin-left:-15px;width:30px;">
        <p class="g-pstyle1">21</p>
      </div>
      <div id="g-ai0-18" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7104%;margin-top:-5.9px;left:14.5861%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">16</p>
      </div>
      <div id="g-ai0-19" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7104%;margin-top:-5.9px;left:17.948%;margin-left:-15px;width:30px;">
        <p class="g-pstyle1">17</p>
      </div>
      <div id="g-ai0-20" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7104%;margin-top:-5.9px;left:21.423%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">18</p>
      </div>
      <div id="g-ai0-21" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7104%;margin-top:-5.9px;left:24.8747%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">19</p>
      </div>
      <div id="g-ai0-22" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:12.7104%;margin-top:-5.9px;left:28.0101%;margin-left:-16.5px;width:33px;">
        <p class="g-pstyle1">20</p>
      </div>
      <div id="g-ai0-23" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4648%;margin-top:-5.9px;left:11.2709%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">22</p>
      </div>
      <div id="g-ai0-24" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4648%;margin-top:-5.9px;left:14.5444%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">23</p>
      </div>
      <div id="g-ai0-25" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4648%;margin-top:-5.9px;left:17.9667%;margin-left:-16px;width:32px;">
        <p class="g-pstyle1">24</p>
      </div>
      <div id="g-ai0-26" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4648%;margin-top:-5.9px;left:21.3699%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">25</p>
      </div>
      <div id="g-ai0-27" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4648%;margin-top:-5.9px;left:24.873%;margin-left:-16px;width:32px;">
        <p class="g-pstyle1">26</p>
      </div>
      <div id="g-ai0-28" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4648%;margin-top:-5.9px;left:27.9482%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle1">27</p>
      </div>
      <div id="g-ai0-29" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4648%;margin-top:-5.9px;left:30.9263%;margin-left:-16px;width:32px;">
        <p class="g-pstyle1">28</p>
      </div>
      <div id="g-ai0-30" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.2191%;margin-top:-5.9px;left:11.2943%;margin-left:-12px;width:24px;">
        <p class="g-pstyle1">.</p>
      </div>
      <div id="g-ai0-31" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.2191%;margin-top:-5.9px;left:14.574%;margin-left:-12px;width:24px;">
        <p class="g-pstyle1">.</p>
      </div>
      <div id="g-ai0-32" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.2191%;margin-top:-5.9px;left:17.9465%;margin-left:-12px;width:24px;">
        <p class="g-pstyle1">.</p>
      </div>
      <div id="g-ai0-33" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.2191%;margin-top:-5.9px;left:21.3994%;margin-left:-12px;width:24px;">
        <p class="g-pstyle1">.</p>
      </div>
      <div id="g-ai0-34" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.2191%;margin-top:-5.9px;left:24.8537%;margin-left:-12px;width:24px;">
        <p class="g-pstyle1">.</p>
      </div>
      <div id="g-ai0-35" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.2191%;margin-top:-5.9px;left:27.9525%;margin-left:-12px;width:24px;">
        <p class="g-pstyle1">.</p>
      </div>
      <div id="g-ai0-36" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.2191%;margin-top:-5.9px;left:30.8957%;margin-left:-12px;width:24px;">
        <p class="g-pstyle1">.</p>
      </div>
      <div id="g-ai0-37" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.8273%;margin-top:-5.9px;left:11.2943%;margin-left:-12px;width:24px;">
        <p class="g-pstyle1">.</p>
      </div>
      <div id="g-ai0-38" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.8273%;margin-top:-5.9px;left:14.574%;margin-left:-12px;width:24px;">
        <p class="g-pstyle1">.</p>
      </div>-->
      <div id="g-ai0-39" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.0304%;margin-top:-7.5px;left:20.9127%;margin-left:-53px;width:106px;">
        <p class="g-pstyle2">{{(data[3].day)}} {{data[3].dayNumber}}</p>
      </div>
      <div id="g-ai0-40" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.0304%;margin-top:-7.5px;left:41.7675%;margin-left:-41px;width:82px;">
        <p class="g-pstyle2">{{(data[4].day)}} {{data[4].dayNumber}}</p>
      </div>
      <div id="g-ai0-41" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.0304%;margin-top:-7.5px;left:62.7011%;margin-left:-51.5px;width:103px;">
        <p class="g-pstyle2">{{(data[5].day)}} {{data[5].dayNumber}}</p>
      </div>
      <div id="g-ai0-42" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.0304%;margin-top:-7.5px;left:83.6826%;margin-left:-45px;width:90px;">
        <p class="g-pstyle2">{{(data[6].day)}} {{data[6].dayNumber}}</p>
      </div>
      <div id="g-ai0-43" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:26.4468%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-44" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:26.4468%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-45" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:26.4468%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-46" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:26.4468%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-47" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.2012%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-48" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.2012%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-49" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.2012%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-50" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.2012%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-51" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.9556%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-52" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.9556%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-53" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.9556%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-54" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.9556%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-55" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.7099%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-56" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.7099%;margin-top:-5.9px;left:32.91%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-57" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.7099%;margin-top:-5.9px;left:53.7798%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-58" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.7099%;margin-top:-5.9px;left:74.7111%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-59" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:33.4643%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-60" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:33.4643%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-61" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:33.4643%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-62" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:33.4643%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-63" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:35.2187%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-64" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:35.2187%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-65" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:35.2187%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-66" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:35.2187%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-67" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:36.9731%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-68" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:36.9731%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-69" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:36.9731%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-70" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:36.9731%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-71" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:38.7275%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-72" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:38.7275%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-73" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:38.7275%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-74" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:38.7275%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-75" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:40.4819%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-76" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:40.4819%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-77" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:40.4819%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-78" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:40.4819%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle3">holiday</p>
      </div>
      <div id="g-ai0-79" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:42.2363%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-80" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:42.2363%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-81" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:42.2363%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-82" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:42.2363%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-83" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.9906%;margin-top:-5.9px;left:11.9288%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-84" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.9906%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-85" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.9906%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-86" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.9906%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-87" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.745%;margin-top:-5.9px;left:11.929%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-88" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.745%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-89" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.745%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-90" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.745%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-91" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:47.4994%;margin-top:-5.9px;left:11.9288%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-92" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:47.4994%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-93" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:47.4994%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-94" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:47.4994%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-95" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:49.2538%;margin-top:-5.9px;left:11.9288%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-96" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:49.2538%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-97" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:49.2538%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-98" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:49.2538%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-99" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:50.862%;margin-top:-5.9px;left:11.9288%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-100" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:50.862%;margin-top:-5.9px;left:32.9098%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-101" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:50.862%;margin-top:-5.9px;left:53.7796%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
      <div id="g-ai0-102" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:50.862%;margin-top:-5.9px;left:74.711%;width:64px;">
        <p class="g-pstyle4">holiday</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "kidsmeals2",
  props:{
    data:{
      required: true
    },
  },
  data() {
    return {
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
  methods: {
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
  computed: {
    arrayDates(){
      const arrayDates = this.data.map(element=>{
        return element.dayNumber;
      })
      return arrayDates;
    }
  },
  mounted() {
    this.calcMonthAfterData();
  }
}
</script>

<style media="screen,print">
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-3_-Kids-_-Meals-R-box ,
#g-3_-Kids-_-Meals-R-box .g-artboard {
  margin:0 auto;
}
#g-3_-Kids-_-Meals-R-box p {
  margin:0;
}
#g-3_-Kids-_-Meals-R-box .g-aiAbs {
  position:absolute;
}
#g-3_-Kids-_-Meals-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-3_-Kids-_-Meals-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-3_-Kids-_-Meals-R-box .g-aiPointText p { white-space: nowrap; }
#g-3_-Kids-_-Meals-R-Artboard_2 {
  position:relative;
  overflow:hidden;
}
#g-3_-Kids-_-Meals-R-Artboard_2 p {
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
#g-3_-Kids-_-Meals-R-Artboard_2 .g-pstyle0 {
  line-height:10px;
  height:10px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(175,177,180);
}
#g-3_-Kids-_-Meals-R-Artboard_2 .g-pstyle1 {
  height:11px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(175,177,180);
}
#g-3_-Kids-_-Meals-R-Artboard_2 .g-pstyle2 {
  line-height:14px;
  height:14px;
  font-size:11px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(0,0,0);
}
#g-3_-Kids-_-Meals-R-Artboard_2 .g-pstyle3 {
  height:11px;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
#g-3_-Kids-_-Meals-R-Artboard_2 .g-pstyle4 {
  height:11px;
  text-transform:uppercase;
}
</style>