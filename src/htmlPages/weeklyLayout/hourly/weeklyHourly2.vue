<template>
  <div id="g-2_-Hourly-R-box" class="ai2html">

    <!-- Artboard: Artboard_5 -->
    <div id="g-2_-Hourly-R-Artboard_5" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-2_-Hourly-R-Artboard_5-img" class="g-aiImg" alt="" src="./2_-Hourly-R-Artboard_5.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.3883%;margin-top:-5.9px;left:12.8654%;width:64px;">
        <p class="g-pstyle0">holiday</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:11.3883%;margin-top:-5.9px;left:41.3056%;width:64px;">
        <p class="g-pstyle0">holiday</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.1123%;margin-top:-7.5px;left:24.2807%;margin-left:-53px;width:106px;">
        <p class="g-pstyle1">Thursday {{data[3].dayNumber}}</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.1123%;margin-top:-7.5px;left:54.5238%;margin-left:-41px;width:82px;">
        <p class="g-pstyle1">Friday {{data[4].dayNumber}}</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.1123%;margin-top:-7.5px;left:82.9459%;margin-left:-51.5px;width:103px;">
        <p class="g-pstyle1">Saturday {{data[5].dayNumber}}</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.2129%;margin-top:-5.9px;left:72.422%;width:64px;">
        <p class="g-pstyle0">holiday</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:45.9836%;margin-top:-7.5px;left:82.9958%;margin-left:-45px;width:90px;">
        <p class="g-pstyle1">Sunday {{data[6].dayNumber}}</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:48.0842%;margin-top:-5.9px;left:72.422%;width:64px;">
        <p class="g-pstyle0">holiday</p>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "weeklyHourly2",
  props:{
    data:{
      type: Object,
    },
  }
}
</script>

<style media="screen,print">
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-2_-Hourly-R-box ,
#g-2_-Hourly-R-box .g-artboard {
  margin:0 auto;
}
#g-2_-Hourly-R-box p {
  margin:0;
}
#g-2_-Hourly-R-box .g-aiAbs {
  position:absolute;
}
#g-2_-Hourly-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-2_-Hourly-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-2_-Hourly-R-box .g-aiPointText p { white-space: nowrap; }
#g-2_-Hourly-R-Artboard_5 {
  position:relative;
  overflow:hidden;
}
#g-2_-Hourly-R-Artboard_5 p {
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
#g-2_-Hourly-R-Artboard_5 .g-pstyle0 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
#g-2_-Hourly-R-Artboard_5 .g-pstyle1 {
  height:14px;
  text-align:center;
  text-transform:uppercase;
}

</style>

