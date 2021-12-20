<template>
  <div id="g-2_-Sectional-R-box" class="ai2html">

    <!-- Artboard: Artboard_5 -->
    <div id="g-2_-Sectional-R-Artboard_5" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-2_-Sectional-R-Artboard_5-img" class="g-aiImg" alt="" src="./3_-Reflection-R-Artboard_2.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.6562%;margin-top:-7.5px;right:4.9756%;width:163px;">
        <p class="g-pstyle0">{{data.day}} &bull;  {{data.month}}  &bull;  {{data.dayNumber}}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:8.6105%;margin-top:-5.9px;right:4.973%;width:64px;">
        <p class="g-pstyle1">holiday</p>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "dailyReflection2",
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
#g-2_-Sectional-R-box ,
#g-2_-Sectional-R-box .g-artboard {
  margin:0 auto;
}
#g-2_-Sectional-R-box p {
  margin:0;
}
#g-2_-Sectional-R-box .g-aiAbs {
  position:absolute;
}
#g-2_-Sectional-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-2_-Sectional-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-2_-Sectional-R-box .g-aiPointText p { white-space: nowrap; }
#g-2_-Sectional-R-Artboard_5 {
  position:relative;
  overflow:hidden;
}
#g-2_-Sectional-R-Artboard_5 p {
  font-weight:500;
  line-height:14px;
  height:auto;
  filter:alpha(opacity=100);
  -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity:1;
  letter-spacing:0em;
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
#g-2_-Sectional-R-Artboard_5 .g-pstyle0 {
  height:14px;
  text-align:right;
  text-transform:uppercase;
}
#g-2_-Sectional-R-Artboard_5 .g-pstyle1 {
  line-height:11px;
  height:11px;
  letter-spacing:0.025em;
  font-size:9px;
  text-align:right;
  text-transform:uppercase;
  color:rgb(129,130,133);
}

</style>

