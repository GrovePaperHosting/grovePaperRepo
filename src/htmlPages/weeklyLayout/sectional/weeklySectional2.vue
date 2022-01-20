<template>
  <div id="g-6_-Sectional-R-box" class="ai2html">
    <div id="g-6_-Sectional-R-Artboard_12" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-6_-Sectional-R-Artboard_12-img" class="g-aiImg" alt="" src="./6_-Sectional-R-Artboard_12.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4047%;margin-top:-7.5px;left:24.592%;margin-left:-53px;width:106px;">
        <p class="g-pstyle0">Thursday {{data[3].dayNumber}}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.4047%;margin-top:-7.5px;left:52.6369%;margin-left:-41px;width:82px;">
        <p class="g-pstyle0">Friday {{data[4].dayNumber}}</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.1134%;margin-top:-5.9px;left:11.6995%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:18.1134%;margin-top:-5.9px;left:39.7734%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "weeklySectional2",
  props:{
    data:{
      type: Array,
    },
  }
}
</script>

<style media="screen,print">
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-6_-Sectional-R-box ,
#g-6_-Sectional-R-box .g-artboard {
  margin:0 auto;
}
#g-6_-Sectional-R-box p {
  margin:0;
}
#g-6_-Sectional-R-box .g-aiAbs {
  position:absolute;
}
#g-6_-Sectional-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-6_-Sectional-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-6_-Sectional-R-box .g-aiPointText p { white-space: nowrap; }
#g-6_-Sectional-R-Artboard_12 {
  position:relative;
  overflow:hidden;
}
#g-6_-Sectional-R-Artboard_12 p {
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
#g-6_-Sectional-R-Artboard_12 .g-pstyle0 {
  height:14px;
  text-align:center;
  text-transform:uppercase;
}
#g-6_-Sectional-R-Artboard_12 .g-pstyle1 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-transform:uppercase;
  color:rgb(129,132,133);
}
</style>