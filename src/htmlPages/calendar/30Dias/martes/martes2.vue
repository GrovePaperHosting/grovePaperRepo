<template>
  <div id="g-30---Tuesday-R-box" class="ai2html">
    <div id="g-30---Tuesday-R-Artboard_2" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-30---Tuesday-R-Artboard_2-img" class="g-aiImg" alt="" src="./30---Tuesday-R-Artboard_2.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:6.7254%;margin-top:-5px;left:83.2824%;margin-left:-31.5px;width:63px;">
        <p class="g-pstyle0">{{ data.monthBefore }}</p>
      </div>
      <div v-for="(item1, index1) in monthBeforeData " :key="index1">
        <div v-for="(item, index) in item1 " :key="index" id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText"
             :style="`top:${1.41*index1+10.2342}%;margin-top:-5px;left:${2.8*index+74.8314}%;margin-left:-12px;width:24px;`">
          <p class="g-pstyle0"><span v-if="item<10">&nbsp;</span>{{item}}</p>
        </div>
      </div>
      <div id="g-ai0-50" class="g-Layer_1 g-aiAbs g-aiPointText"
           style="top:20.6143%;margin-top:-5px;left:83.3341%;margin-left:-30.5px;width:61px;">
        <p class="g-pstyle0">{{ data.monthAfter }}</p>
      </div>
      <div v-for="(item1, index1) in monthAfterData " :key="index1">
        <div v-for="(item, index) in item1 " :key="index" id="g-ai0-60" class="g-Layer_1 g-aiAbs g-aiPointText"
             :style="`top:${1.41*index1+24.1231}%;margin-top:-5px;left:${2.8*index+74.8314}%;margin-left:-12px;width:24px;`">
          <p class="g-pstyle0"><span v-if="item<10">&nbsp;</span>{{item}}</p>
        </div>
      </div>
      <div id="g-ai0-78" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:17.2363%;margin-top:-5.9px;left:11.2316%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[3]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-107" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:11.2316%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[10]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-122" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:11.2316%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[17]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-137" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:53.786%;margin-top:-5.9px;left:11.2316%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[24]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:65.9205%;margin-top:-5.9px;left:11.2316%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[31]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-79" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:17.2363%;margin-top:-5.9px;left:30.7236%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[4]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-108" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:30.7236%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[11]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-123" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:30.7236%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[18]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-138" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:53.786%;margin-top:-5.9px;left:30.7236%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[25]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-106" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:17.2363%;margin-top:-5.9px;left:49.8958%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[5]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-109" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:29.3708%;margin-top:-5.9px;left:49.8956%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[12]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-124" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:41.6515%;margin-top:-5.9px;left:49.8958%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[19]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <div id="g-ai0-139" class="g-Layer_1 g-aiAbs g-aiPointText g-ai0-2"
           style="top:53.786%;margin-top:-5.9px;left:49.8956%;width:98px;">
        <p class="g-pstyle1" v-for="(item, index) in data.holidays[26]" :key="index" style="margin: auto; white-space: normal; height: auto">{{ item }}</p>
      </div>
      <!--<div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.7254%;margin-top:-5px;left:83.2824%;margin-left:-31.5px;width:63px;">
        <p class="g-pstyle0">DECEMBER</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.2342%;margin-top:-5px;left:77.6885%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.2342%;margin-top:-5px;left:80.5361%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.2342%;margin-top:-5px;left:74.8314%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.2342%;margin-top:-5px;left:83.3311%;margin-left:-12.5px;width:25px;">
        <p class="g-pstyle0">1</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.2342%;margin-top:-5px;left:86.2095%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">2</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.2342%;margin-top:-5px;left:89.0885%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">3</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:10.2342%;margin-top:-5px;left:91.7956%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">4</p>
      </div>
      <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.6962%;margin-top:-5px;left:74.8531%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">5</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.6962%;margin-top:-5px;left:77.6723%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">6</p>
      </div>
      <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.6962%;margin-top:-5px;left:80.5782%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">7</p>
      </div>
      <div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.6962%;margin-top:-5px;left:86.1736%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">9</p>
      </div>
      <div id="g-ai0-13" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.6962%;margin-top:-5px;left:89.0954%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">10</p>
      </div>
      <div id="g-ai0-14" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.6962%;margin-top:-5px;left:91.8096%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">11</p>
      </div>
      <div id="g-ai0-15" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.6962%;margin-top:-5px;left:83.3214%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">8</p>
      </div>
      <div id="g-ai0-16" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.1582%;margin-top:-5px;left:74.8537%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">12</p>
      </div>
      <div id="g-ai0-17" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.1582%;margin-top:-5px;left:77.7059%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">13</p>
      </div>
      <div id="g-ai0-18" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.1582%;margin-top:-5px;left:80.5161%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">14</p>
      </div>
      <div id="g-ai0-19" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.1582%;margin-top:-5px;left:83.3459%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">15</p>
      </div>
      <div id="g-ai0-20" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.1582%;margin-top:-5px;left:86.1622%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">16</p>
      </div>
      <div id="g-ai0-21" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.1582%;margin-top:-5px;left:91.7997%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">18</p>
      </div>
      <div id="g-ai0-22" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:13.1582%;margin-top:-5px;left:89.1151%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">17</p>
      </div>
      <div id="g-ai0-23" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.6202%;margin-top:-5px;left:74.8178%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">19</p>
      </div>
      <div id="g-ai0-24" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.6202%;margin-top:-5px;left:77.7411%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle0">20</p>
      </div>
      <div id="g-ai0-25" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.6202%;margin-top:-5px;left:80.5584%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">21</p>
      </div>
      <div id="g-ai0-26" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.6202%;margin-top:-5px;left:83.3747%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">22</p>
      </div>
      <div id="g-ai0-27" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.6202%;margin-top:-5px;left:86.2241%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">23</p>
      </div>
      <div id="g-ai0-28" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.6202%;margin-top:-5px;left:91.8524%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">25</p>
      </div>
      <div id="g-ai0-29" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.6202%;margin-top:-5px;left:89.0707%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">24</p>
      </div>
      <div id="g-ai0-30" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.0822%;margin-top:-5px;left:91.8233%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-31" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.0822%;margin-top:-5px;left:86.2305%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle0">30</p>
      </div>
      <div id="g-ai0-32" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.0822%;margin-top:-5px;left:89.084%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">31</p>
      </div>
      <div id="g-ai0-33" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.0822%;margin-top:-5px;left:74.8346%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">26</p>
      </div>
      <div id="g-ai0-34" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.0822%;margin-top:-5px;left:77.6545%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">27</p>
      </div>
      <div id="g-ai0-35" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.0822%;margin-top:-5px;left:80.5484%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">28</p>
      </div>
      <div id="g-ai0-36" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.0822%;margin-top:-5px;left:83.3388%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">29</p>
      </div>
      <div id="g-ai0-37" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.2363%;margin-top:-5.9px;left:30.7237%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-38" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.2363%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-39" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.2363%;margin-top:-5.9px;left:49.8958%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-40" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.5441%;margin-top:-5px;left:74.8432%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-41" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.5441%;margin-top:-5px;left:77.7003%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-42" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.5441%;margin-top:-5px;left:80.5479%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-43" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.5441%;margin-top:-5px;left:83.3403%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-44" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.5441%;margin-top:-5px;left:86.1947%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-45" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.5441%;margin-top:-5px;left:89.0786%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-46" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:17.5441%;margin-top:-5px;left:91.8233%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-47" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:19.1368%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-48" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:19.1368%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-49" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:19.1368%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-50" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:20.6143%;margin-top:-5px;left:83.3341%;margin-left:-30.5px;width:61px;">
        <p class="g-pstyle0">february</p>
      </div>
      <div id="g-ai0-51" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.0374%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-52" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.0374%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-53" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:21.1836%;margin-top:-5.9px;left:49.8958%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-54" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.0842%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-55" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.0842%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-56" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:23.0842%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-57" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.1231%;margin-top:-5px;left:77.6794%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">2</p>
      </div>
      <div id="g-ai0-58" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.1231%;margin-top:-5px;left:80.5219%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">3</p>
      </div>
      <div id="g-ai0-59" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.1231%;margin-top:-5px;left:83.277%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">4</p>
      </div>
      <div id="g-ai0-60" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.1231%;margin-top:-5px;left:86.1687%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">5</p>
      </div>
      <div id="g-ai0-61" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.1231%;margin-top:-5px;left:91.8176%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">7</p>
      </div>
      <div id="g-ai0-62" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.1231%;margin-top:-5px;left:74.7983%;margin-left:-12.5px;width:25px;">
        <p class="g-pstyle0">1</p>
      </div>
      <div id="g-ai0-63" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.1231%;margin-top:-5px;left:89.0146%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">6</p>
      </div>
      <div id="g-ai0-64" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.9848%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-65" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.9848%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-66" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:24.9848%;margin-top:-5.9px;left:49.8958%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-67" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5851%;margin-top:-5px;left:77.6435%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">9</p>
      </div>
      <div id="g-ai0-68" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5851%;margin-top:-5px;left:80.5288%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">10</p>
      </div>
      <div id="g-ai0-69" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5851%;margin-top:-5px;left:83.2911%;margin-left:-14px;width:28px;">
        <p class="g-pstyle0">11</p>
      </div>
      <div id="g-ai0-70" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5851%;margin-top:-5px;left:86.1695%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">12</p>
      </div>
      <div id="g-ai0-71" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5851%;margin-top:-5px;left:91.7555%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">14</p>
      </div>
      <div id="g-ai0-72" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5851%;margin-top:-5px;left:74.7886%;margin-left:-13px;width:26px;">
        <p class="g-pstyle0">8</p>
      </div>
      <div id="g-ai0-73" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:25.5851%;margin-top:-5px;left:89.0483%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">13</p>
      </div>
      <div id="g-ai0-74" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.0471%;margin-top:-5px;left:74.8131%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">15</p>
      </div>
      <div id="g-ai0-75" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.0471%;margin-top:-5px;left:77.632%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">16</p>
      </div>
      <div id="g-ai0-76" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.0471%;margin-top:-5px;left:80.5484%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">17</p>
      </div>
      <div id="g-ai0-77" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.0471%;margin-top:-5px;left:83.2811%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">18</p>
      </div>
      <div id="g-ai0-78" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.0471%;margin-top:-5px;left:86.1334%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">19</p>
      </div>
      <div id="g-ai0-79" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.0471%;margin-top:-5px;left:91.7978%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">21</p>
      </div>
      <div id="g-ai0-80" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:27.0471%;margin-top:-5px;left:89.0833%;margin-left:-15.5px;width:31px;">
        <p class="g-pstyle0">20</p>
      </div>
      <div id="g-ai0-81" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.5091%;margin-top:-5px;left:74.8417%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">22</p>
      </div>
      <div id="g-ai0-82" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.5091%;margin-top:-5px;left:77.694%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">23</p>
      </div>
      <div id="g-ai0-83" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.5091%;margin-top:-5px;left:80.5041%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">24</p>
      </div>
      <div id="g-ai0-84" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.5091%;margin-top:-5px;left:83.3339%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">25</p>
      </div>
      <div id="g-ai0-85" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.5091%;margin-top:-5px;left:86.1504%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">26</p>
      </div>
      <div id="g-ai0-86" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.5091%;margin-top:-5px;left:88.9968%;margin-left:-14.5px;width:29px;">
        <p class="g-pstyle0">27</p>
      </div>
      <div id="g-ai0-87" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:28.5091%;margin-top:-5px;left:91.7879%;margin-left:-15px;width:30px;">
        <p class="g-pstyle0">28</p>
      </div>
      <div id="g-ai0-88" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.3708%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-89" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.3708%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-90" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.3708%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-91" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.971%;margin-top:-5px;left:74.8414%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-92" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.971%;margin-top:-5px;left:77.6983%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-93" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.971%;margin-top:-5px;left:80.5456%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-94" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.971%;margin-top:-5px;left:83.3382%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-95" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.971%;margin-top:-5px;left:86.1927%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-96" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.971%;margin-top:-5px;left:91.8212%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-97" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.971%;margin-top:-5px;left:89.0763%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-98" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.2713%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-99" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.4175%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-100" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.4175%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-101" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.433%;margin-top:-5px;left:74.8412%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-102" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.433%;margin-top:-5px;left:77.6983%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-103" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.433%;margin-top:-5px;left:80.5458%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-104" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.433%;margin-top:-5px;left:83.3382%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-105" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.433%;margin-top:-5px;left:86.1927%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-106" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.433%;margin-top:-5px;left:89.0765%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-107" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.433%;margin-top:-5px;left:91.8212%;margin-left:-12px;width:24px;">
        <p class="g-pstyle0">.</p>
      </div>
      <div id="g-ai0-108" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:33.3181%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-109" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:33.3181%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-110" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:33.3181%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-111" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:35.2187%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-112" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:35.2187%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-113" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:35.2187%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-114" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:37.2655%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-115" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:37.2655%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-116" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:37.2655%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-117" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:41.6515%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-118" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:41.6515%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-119" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:41.6515%;margin-top:-5.9px;left:49.8958%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-120" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.552%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-121" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.552%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-122" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:43.552%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-123" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.4526%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-124" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.4526%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-125" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.5988%;margin-top:-5.9px;left:49.8958%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-126" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:47.4994%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-127" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:47.4994%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-128" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:47.4994%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-129" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:49.4%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-130" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:49.4%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-131" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:49.4%;margin-top:-5.9px;left:49.8958%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-132" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:53.786%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-133" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:53.786%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-134" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:53.786%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-135" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:55.6865%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-136" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:55.8327%;margin-top:-5.9px;left:11.2314%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-137" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:55.8327%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-138" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:57.7333%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-139" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:57.7333%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-140" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:57.7333%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-141" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:59.6339%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-142" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:59.6339%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-143" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:59.6339%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-144" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:61.5345%;margin-top:-5.9px;left:30.7236%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-145" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:61.6807%;margin-top:-5.9px;left:11.2316%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-146" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:61.6807%;margin-top:-5.9px;left:49.8956%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>-->
    </div>

  </div>
</template>

<script>
export default {
  name: "martes2",
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
#g-30---Tuesday-R-box ,
#g-30---Tuesday-R-box .g-artboard {
  margin:0 auto;
}
#g-30---Tuesday-R-box p {
  margin:0;
}
#g-30---Tuesday-R-box .g-aiAbs {
  position:absolute;
}
#g-30---Tuesday-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-30---Tuesday-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-30---Tuesday-R-box .g-aiPointText p { white-space: nowrap; }
#g-30---Tuesday-R-Artboard_2 {
  position:relative;
  overflow:hidden;
}
#g-30---Tuesday-R-Artboard_2 p {
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
#g-30---Tuesday-R-Artboard_2 .g-pstyle0 {
  line-height:9px;
  height:9px;
  font-size:7px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(175,177,180);
}
#g-30---Tuesday-R-Artboard_2 .g-pstyle1 {
  height:11px;
  text-transform:uppercase;
}
@media only screen and (min-width: 1200px) {
  #g-30---Tuesday-R-Artboard_2 p {
    font-size: 7.5px;
  }

  .g-Layer_1.g-aiAbs.g-aiPointText.g-ai0-2 {
    width: 70px !important;
  }
}
</style>