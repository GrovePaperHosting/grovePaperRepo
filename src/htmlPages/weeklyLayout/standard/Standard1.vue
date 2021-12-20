<template>
  <div id="g-1_-Standard-L-box" class="ai2html">
    <div id="g-1_-Standard-L-Artboard_1" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-1_-Standard-L-Artboard_1-img" class="g-aiImg" alt="" src="./1_-Standard-L-Artboard_1.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:6.5485%;margin-top:-11.8px;left:5.6622%;width:105px;">
        <p class="g-pstyle0">{{data[0].month}}</p>
      </div>
      <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:14.8433%;margin-top:-7.5px;left:6.1107%;width:94px;">
        <p class="g-pstyle1">Monday {{data[0].dayNumber}}</p>
      </div>
      <div id="g-ai0-3" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:16.5053%;margin-top:-5.9px;left:6.1107%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-4" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:29.6094%;margin-top:-7.5px;left:6.1107%;width:95px;">
        <p class="g-pstyle1">Tuesday {{data[1].dayNumber}}</p>
      </div>
      <div id="g-ai0-5" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:31.7099%;margin-top:-5.9px;left:6.1107%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-6" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:44.814%;margin-top:-7.5px;left:6.1107%;width:116px;">
        <p class="g-pstyle1">Wednesday {{data[2].dayNumber}}</p>
      </div>
      <div id="g-ai0-7" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:46.9146%;margin-top:-5.9px;left:6.1107%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-8" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:59.8725%;margin-top:-7.5px;left:6.1107%;width:106px;">
        <p class="g-pstyle1">Thursday {{data[3].dayNumber}}</p>
      </div>
      <div id="g-ai0-9" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:62.1193%;margin-top:-5.9px;left:6.1107%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-10" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:75.0772%;margin-top:-7.5px;left:6.1107%;width:82px;">
        <p class="g-pstyle1">Friday {{data[4].dayNumber}}</p>
      </div>
      <div id="g-ai0-11" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:77.1778%;margin-top:-5.9px;left:6.1107%;width:64px;">
        <p class="g-pstyle2">holiday</p>
      </div>
      <div id="g-ai0-12" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:94.283%;margin-top:-5.9px;left:47.3689%;margin-left:-28.5px;width:57px;">
        <p class="g-pstyle3">extras</p>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "Standard1",
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
#g-1_-Standard-L-box ,
#g-1_-Standard-L-box .g-artboard {
  margin:0 auto;
}
#g-1_-Standard-L-box p {
  margin:0;
}
#g-1_-Standard-L-box .g-aiAbs {
  position:absolute;
}
#g-1_-Standard-L-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-1_-Standard-L-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-1_-Standard-L-box .g-aiPointText p { white-space: nowrap; }
#g-1_-Standard-L-Artboard_1 {
  position:relative;
  overflow:hidden;
}
#g-1_-Standard-L-Artboard_1 p {
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
#g-1_-Standard-L-Artboard_1 .g-pstyle0 {
  line-height:22px;
  height:22px;
  font-size:18px;
  text-transform:uppercase;
}
#g-1_-Standard-L-Artboard_1 .g-pstyle1 {
  height:14px;
  text-transform:uppercase;
}
#g-1_-Standard-L-Artboard_1 .g-pstyle2 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-transform:uppercase;
  color:rgb(129,131,133);
}
#g-1_-Standard-L-Artboard_1 .g-pstyle3 {
  line-height:11px;
  height:11px;
  font-size:9px;
  text-align:center;
  text-transform:uppercase;
  color:rgb(129,132,133);
}

</style>
