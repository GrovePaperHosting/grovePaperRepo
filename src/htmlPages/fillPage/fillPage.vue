<template>
  <div id="g-1_-Fill-Page-R-box" class="ai2html">
    <div id="g-1_-Fill-Page-R-Artboard_2" class="g-artboard is-flex is-justify-content-center" style="max-width: 522px;max-height: 684px" data-aspect-ratio="0.763" data-min-width="0">
      <div style="padding: 0 0 131.0345% 0;"></div>
      <img id="g-1_-Fill-Page-R-Artboard_2-img" class="g-aiImg" alt="" src="./1_-Fill-Page-R-Artboard_2.png"/>
      <div id="g-ai0-1" class="g-Layer_1 g-aiAbs" style="top:52.1532%;margin-top:-50.7px;width:80%; height: auto; padding-left: 15px">
        <p class="g-pstyle0"></p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">{{data.Name}}</p>

        <p class="g-pstyle0">{{data.Year}}</p>
        <p class="g-pstyle0">{{data.Email}}</p>
        <p class="g-pstyle0">{{data.Telephone}}</p>
        <p>&nbsp;</p>
        <p v-if="data.Message" class="g-pstyle0" v-html="data.Message.replace('\n', '</br>')" ></p>
        <!--<p class="g-pstyle0">{{data.Email}}</p>-->
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

<style media="screen,print">
.g-aiPointText{

}
p{
  font-family: 'Kontour Type - Kopius-Light';
}
#g-1_-Fill-Page-R-box ,
#g-1_-Fill-Page-R-box .g-artboard {
  margin:0 auto;
}
#g-1_-Fill-Page-R-box p {
  margin:0;
}
#g-1_-Fill-Page-R-box .g-aiAbs {
  position:absolute;
}
#g-1_-Fill-Page-R-box .g-aiImg {
  position:absolute;
  top:0;
  display:block;
  width:100% !important;
}
#g-1_-Fill-Page-R-box .g-aiSymbol {
  position: absolute;
  box-sizing: border-box;
}
#g-1_-Fill-Page-R-box .g-aiPointText p { white-space: nowrap; }
#g-1_-Fill-Page-R-Artboard_2 {
  position:relative;
  overflow:hidden;
}
#g-1_-Fill-Page-R-Artboard_2 p {
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
#g-1_-Fill-Page-R-Artboard_2 .g-pstyle0 {

  text-align:center;
  text-transform:uppercase;
}
@media only screen and (max-width: 1200px) {
  p {
    font-size:10px !important;
  }
}
</style>
