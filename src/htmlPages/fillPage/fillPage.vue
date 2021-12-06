<template>
  <div id="g-1_-Fill-Page-box" class="ai2html">
    <div id="g-1_-Fill-Page-Artboard_2" class="g-artboard" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-1_-Fill-Page-Artboard_2-img" class="g-aiImg" alt="" src="1_-Fill-Page-Artboard_2.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:50.0187%;margin-top:-65.1px;left:52.6521%;margin-left:-71px;width:142px;">
        <p class="g-pstyle0">From the desk of: </p>
        <p class="g-pstyle0">{{data.Name}}</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">{{data.Year}}</p>
        <p class="g-pstyle0"> </p>
        <p class="g-pstyle0">Email: {{data.Email}}</p>
        <p class="g-pstyle0">Telephone: {{data.Telephone}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fillPage",
  props:{
    data:{
      type: Object
    }
  }
}
</script>

<style scoped>
#g-1_-Fill-Page-box ,
#g-1_-Fill-Page-box .g-artboard {
  margin:0 auto;
}
#g-1_-Fill-Page-box p {
  margin:0;
}
#g-1_-Fill-Page-box .g-aiAbs {
  position:absolute;
}
#g-1_-Fill-Page-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-1_-Fill-Page-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-1_-Fill-Page-box .g-aiPointText p { white-space: nowrap; }
#g-1_-Fill-Page-Artboard_2 {
  position:relative;
  overflow:hidden;
}
#g-1_-Fill-Page-Artboard_2 p {
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
#g-1_-Fill-Page-Artboard_2 .g-pstyle0 {
  height:14px;
  text-align:center;
  text-transform:uppercase;
}
</style>