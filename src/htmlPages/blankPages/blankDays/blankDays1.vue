<template>
  <div id="g-6_-Blank-Days-L-box" class="ai2html">

    <!-- Artboard: Artboard_1 -->
    <div id="g-6_-Blank-Days-L-Artboard_1" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-6_-Blank-Days-L-Artboard_1-img" class="g-aiImg" alt="" src="./6_-Blank-Days-L-Artboard_1.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.6562%;margin-top:-7.5px;left:5.1764%;width:52px;">
        <p class="g-pstyle0">DAY {{ data + data -1 }}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:50.8082%;margin-top:-7.5px;left:5.1764%;width:53px;">
        <p class="g-pstyle0">DAY {{ (data + data) }}</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:94.283%;margin-top:-5.9px;left:47.3689%;margin-left:-28.5px;width:57px;">
        <p class="g-pstyle1">extras</p>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "blankDays1",
  props:{
    data:{
      type: Number,
    },
  }
}
</script>

<style media="screen,print">
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-6_-Blank-Days-L-box ,
#g-6_-Blank-Days-L-box .g-artboard {
  margin:0 auto;
}
#g-6_-Blank-Days-L-box p {
  margin:0;
}
#g-6_-Blank-Days-L-box .g-aiAbs {
  position:absolute;
}
#g-6_-Blank-Days-L-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-6_-Blank-Days-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-6_-Blank-Days-L-box .g-aiPointText p { white-space: nowrap; }
#g-6_-Blank-Days-L-Artboard_1 {
  position:relative;
  overflow:hidden;
}
#g-6_-Blank-Days-L-Artboard_1 p {
  font-weight:500;
  line-height:14px;
  height:auto;
  filter:alpha(opacity=100);
  -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity:1;
  letter-spacing:0em;
  font-size:12px;
  text-align:left;
  color:rgb(0,0,0);
  text-transform:none;
  padding-bottom:0;
  padding-top:0;
  mix-blend-mode:normal;
  font-style:normal;
  position:static;
}
#g-6_-Blank-Days-L-Artboard_1 .g-pstyle0 {
  height:14px;
}
#g-6_-Blank-Days-L-Artboard_1 .g-pstyle1 {
  line-height:11px;
  height:11px;
  letter-spacing:0.025em;
  font-size:9px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(130,133,133);
}

</style>

