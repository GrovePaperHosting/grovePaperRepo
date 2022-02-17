<template>
  <div id="g-6_-Blank-Days-R-box" class="ai2html">

    <!-- Artboard: Artboard_2 -->
    <div id="g-6_-Blank-Days-R-Artboard_2" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-6_-Blank-Days-R-Artboard_2-img" class="g-aiImg" alt="" src="./6_-Blank-Days-R-Artboard_2.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.6562%;margin-top:-7.5px;left:10.3508%;width:54px;">
        <p class="g-pstyle0">DAY {{data + data -1 }}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:50.8082%;margin-top:-7.5px;left:10.3508%;width:54px;">
        <p class="g-pstyle0">DAY {{data + data}}</p>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "blankDays2",
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
#g-6_-Blank-Days-R-box ,
#g-6_-Blank-Days-R-box .g-artboard {
  margin:0 auto;
}
#g-6_-Blank-Days-R-box p {
  margin:0;
}
#g-6_-Blank-Days-R-box .g-aiAbs {
  position:absolute;
}
#g-6_-Blank-Days-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-6_-Blank-Days-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-6_-Blank-Days-R-box .g-aiPointText p { white-space: nowrap; }
#g-6_-Blank-Days-R-Artboard_2 {
  position:relative;
  overflow:hidden;
}
#g-6_-Blank-Days-R-Artboard_2 p {
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
#g-6_-Blank-Days-R-Artboard_2 .g-pstyle0 {
  height:14px;
}
</style>