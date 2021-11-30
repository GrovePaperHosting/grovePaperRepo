<template>
  <div>
    <div id="page-container">
      <div id="pf1" class="pf w0 h0 " data-page-no="1">
        <div class="pc pc1 w0 h0"><img class="bi x0 y0 w1 h1" alt="" src="../srcHourly.html/bg1.png"/>
          <div class="t m0 x1 h2 y1 ff1 fs0 fc0 sc0 ls0 ws0">HYDRA<span class="_ _0"></span>TION</div>
          <div class="t m0 x2 h2 y2 ff1 fs0 fc0 sc0 ls1 ws1">TO<span class="_ _1"></span> D<span class="_ _1"></span>O
          </div>
          <div class="t m0 x3 h2 y3 ff1 fs0 fc0 sc0 ls2 ws2">NOTES &amp; THOUGHTS</div>
          <div class="t m0 x4 h2 y4 ff1 fs0 fc0 sc0 ls2 ws3">{{date.month}}<span class="_ _5"></span>{{date.day}}<span class="_ _7"> </span> {{date.dayNumber}}</div>

<!--          <div class="t m0 x4 h2 y4 ff1 fs0 fc0 sc0 ls2 ws3">J<span class="_ _0"></span>ANU<span
              class="_ _2"></span>AR<span class="_ _0"></span>Y<span class="_ _3"></span><span class="ls3 ws4">SA<span
              class="_ _0"></span>TURD<span class="_ _0"></span>A<span class="_ _2"></span>Y<span
              class="_ _4"> </span><span class="ls2 ws3">01</span></span></div>-->
          <div class="t m0 x5 h2 y5 ff1 fs0 fc0 sc0 ls2 ws3">T<span class="_ _0"></span>OP 3</div>
          <div class="t m0 x6 h2 y6 ff1 fs0 fc0 sc0 ls2 ws3">5:00 AM</div>
          <div class="t m0 x6 h2 y7 ff1 fs0 fc0 sc0 ls2 ws3">6:00 AM</div>
          <div class="t m0 x6 h2 y8 ff1 fs0 fc0 sc0 ls2 ws3">7:00 AM</div>
          <div class="t m0 x6 h2 y9 ff1 fs0 fc0 sc0 ls2 ws3">8:00 AM</div>
          <div class="t m0 x6 h2 ya ff1 fs0 fc0 sc0 ls2 ws3">9:00 AM</div>
          <div class="t m0 x7 h2 yb ff1 fs0 fc0 sc0 ls2 ws3">10:00 AM</div>
          <div class="t m0 x8 h2 yc ff1 fs0 fc0 sc0 ls2 ws3">11:00 AM</div>
          <div class="t m0 x8 h2 yd ff1 fs0 fc0 sc0 ls2 ws3">12:00 PM</div>
          <div class="t m0 x9 h2 ye ff1 fs0 fc0 sc0 ls2 ws3">1:00 PM</div>
          <div class="t m0 xa h2 yf ff1 fs0 fc0 sc0 ls2 ws3">2:00 PM</div>
          <div class="t m0 xa h2 y10 ff1 fs0 fc0 sc0 ls2 ws3">3:00 PM</div>
          <div class="t m0 x6 h2 y11 ff1 fs0 fc0 sc0 ls2 ws3">4:00 PM</div>
          <div class="t m0 xa h2 y12 ff1 fs0 fc0 sc0 ls2 ws3">5:00 PM</div>
          <div class="t m0 x6 h2 y13 ff1 fs0 fc0 sc0 ls2 ws3">6:00 PM</div>
          <div class="t m0 xa h2 y14 ff1 fs0 fc0 sc0 ls2 ws3">7:00 PM</div>
          <div class="t m0 x6 h2 y15 ff1 fs0 fc0 sc0 ls2 ws3">8:00 PM</div>
          <div class="t m0 x6 h2 y16 ff1 fs0 fc0 sc0 ls2 ws3">9:00 PM</div>
          <div class="t m0 x8 h3 y17 ff1 fs1 fc1 sc0 ls4 ws5">HOLID<span class="_ _0"></span>A<span class="_ _2"></span>Y
          </div>
          <div class="t m0 xb h3 y18 ff1 fs1 fc1 sc0 ls4 ws5">EXTRAS</div>
        </div>
        <div class="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
      </div>
    </div>
    <div class="loading-indicator">
    </div>
  </div>
</template>

<script>
export default {
  name: "srcHourly",
  props:{
    date:{
      type: Object,
    },
  }
}
</script>

<style scoped>
/*!
 * Base CSS
 * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com>
 * https://github.com/coolwanglu/pdf2htmlEX/blob/master/share/LICENSE
 */
#sidebar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  padding: 0;
  margin: 0;
  overflow: auto
}

/*#page-container {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: 0
}*/

@media screen {
  #sidebar.opened + #page-container {
    left: 250px
  }

  #page-container {
    bottom: 0;
    right: 0;
    overflow: auto
  }

  .loading-indicator {
    display: none
  }

  .loading-indicator.active {
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    top: 50%;
    left: 50%;
    margin-top: -32px;
    margin-left: -32px
  }

  .loading-indicator img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0
  }
}

@media print {
  @page {
    margin: 0
  }

  html {
    margin: 0
  }

  body {
    margin: 0;
    -webkit-print-color-adjust: exact
  }

  #sidebar {
    display: none
  }

  #page-container {
    width: auto;
    height: auto;
    overflow: visible;
    background-color: transparent
  }

  .d {
    display: none
  }
}

.pf {
  position: relative;
  background-color: white;
  overflow: hidden;
  margin: 0;
  border: 0
}

.pc {
  position: absolute;
  border: 0;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
  transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0
}

.pc.opened {
  display: block
}

.bf {
  position: absolute;
  border: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none
}

.bi {
  position: absolute;
  border: 0;
  margin: 0;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none
}

@media print {
  .pf {
    margin: 0;
    box-shadow: none;
    page-break-after: always;
    page-break-inside: avoid
  }

  @-moz-document url-prefix() {
    .pf {
      overflow: visible;
      border: 1px solid #fff
    }
    .pc {
      overflow: visible
    }
  }
}

.c {
  position: absolute;
  border: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: block
}

.t {
  position: absolute;
  white-space: pre;
  font-size: 1px;
  transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  -webkit-transform-origin: 0 100%;
  unicode-bidi: bidi-override;
  -moz-font-feature-settings: "liga" 0
}

.t:after {
  content: ''
}

.t:before {
  content: '';
  display: inline-block
}

.t span {
  position: relative;
  unicode-bidi: bidi-override
}

._ {
  display: inline-block;
  color: transparent;
  z-index: -1
}

::selection {
  background: rgba(127, 255, 255, 0.4)
}

::-moz-selection {
  background: rgba(127, 255, 255, 0.4)
}

.pi {
  display: none
}

.d {
  position: absolute;
  transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  -webkit-transform-origin: 0 100%
}

.it {
  border: 0;
  background-color: rgba(255, 255, 255, 0.0)
}

.ir:hover {
  cursor: pointer
}

/*!
 * Fancy styles
 * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com>
 * https://github.com/coolwanglu/pdf2htmlEX/blob/master/share/LICENSE
 */
@keyframes fadein {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}

@-webkit-keyframes fadein {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}

@keyframes swing {
  0% {
    transform: rotate(0)
  }
  10% {
    transform: rotate(0)
  }
  90% {
    transform: rotate(720deg)
  }
  100% {
    transform: rotate(720deg)
  }
}

@-webkit-keyframes swing {

  0% {
    -webkit-transform: rotate(0)
  }
  10% {
    -webkit-transform: rotate(0)
  }
  90% {
    -webkit-transform: rotate(720deg)
  }
  100% {
    -webkit-transform: rotate(720deg)
  }
}

@media screen {
  #sidebar {
    background-color: #2f3236;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+")
  }

  #outline {
    font-family: Georgia, Times, "Times New Roman", serif;
    font-size: 13px;
    margin: 2em 1em
  }

  #outline ul {
    padding: 0
  }

  #outline li {
    list-style-type: none;
    margin: 1em 0
  }

  #outline li > ul {
    margin-left: 1em
  }

  #outline a, #outline a:visited, #outline a:hover, #outline a:active {
    line-height: 1.2;
    color: #e8e8e8;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    display: block;
    overflow: hidden;
    outline: 0
  }

  #outline a:hover {
    color: #0cf
  }

  #page-container {
    -webkit-transition: left 500ms;
    transition: left 500ms
  }

  .pf {
    margin: 0 auto;
    border-collapse: separate
  }

  .pc.opened {
    -webkit-animation: fadein 100ms;
    animation: fadein 100ms
  }

  .loading-indicator.active {
    -webkit-animation: swing 1.5s ease-in-out .01s infinite alternate none;
    animation: swing 1.5s ease-in-out .01s infinite alternate none
  }

  .checked {
    background: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC)
  }
}

.ff0 {
  font-family: sans-serif;
  visibility: hidden;
}

@font-face {
  font-family: ff1;
  src: url(f1.woff) format("woff");
}

.ff1 {
  font-family: ff1;
  line-height: 0.718000;
  font-style: normal;
  font-weight: normal;
  visibility: visible;
}

.m0 {
  transform: matrix(0.250000, 0.000000, 0.000000, 0.250000, 0, 0);
  -ms-transform: matrix(0.250000, 0.000000, 0.000000, 0.250000, 0, 0);
  -webkit-transform: matrix(0.250000, 0.000000, 0.000000, 0.250000, 0, 0);
}

.v0 {
  vertical-align: 0.000000px;
}

.ls1 {
  letter-spacing: -1.488000px;
}

.ls3 {
  letter-spacing: -0.480000px;
}

.ls2 {
  letter-spacing: 0.000000px;
}

.ls4 {
  letter-spacing: 0.900000px;
}

.ls0 {
  letter-spacing: 19.200000px;
}

.sc_ {
  text-shadow: none;
}

.sc0 {
  text-shadow: -0.015em 0 transparent, 0 0.015em transparent, 0.015em 0 transparent, 0 -0.015em transparent;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .sc_ {
    -webkit-text-stroke: 0px transparent;
  }

  .sc0 {
    -webkit-text-stroke: 0.015em transparent;
    text-shadow: none;
  }
}

.ws0 {
  word-spacing: -19.200000px;
}

.ws5 {
  word-spacing: -0.900000px;
}

.ws2 {
  word-spacing: -0.720000px;
}

.ws3 {
  word-spacing: 0.000000px;
}

.ws4 {
  word-spacing: 0.480000px;
}

.ws1 {
  word-spacing: 1.488000px;
}

._3 {
  margin-left: -502.992000px;
}

._5 {
  margin-left: -446.976000px;
}

._6 {
  margin-left: -4.848000px;
}

._2 {
  margin-left: -3.456000px;
}

._0 {
  margin-left: -2.352000px;
}

._1 {
  width: 1.488000px;
}

._7 {
  width: 297.408000px;
}

._4 {
  width: 302.064000px;
}

.fc1 {
  color: rgb(122, 126, 130);
}

.fc0 {
  color: rgb(35, 31, 32);
}

.fs1 {
  font-size: 36.000000px;
}

.fs0 {
  font-size: 48.000000px;
}

.y19 {
  bottom: 38.500000px;
}

.y18 {
  bottom: 38.891600px;
}

.y0 {
  bottom: 69.000000px;
}

.y1b {
  bottom: 87.701700px;
}

.y1 {
  bottom: 87.924800px;
}

.y16 {
  bottom: 126.199500px;
}

.y2c {
  bottom: 126.975100px;
}

.y15 {
  bottom: 153.535500px;
}

.y2b {
  bottom: 154.311100px;
}

.y3 {
  bottom: 177.286100px;
}

.y14 {
  bottom: 180.871500px;
}

.y2a {
  bottom: 181.647100px;
}

.y13 {
  bottom: 208.207500px;
}

.y29 {
  bottom: 208.983100px;
}

.y12 {
  bottom: 235.543500px;
}

.y28 {
  bottom: 236.319100px;
}

.y11 {
  bottom: 262.879500px;
}

.y27 {
  bottom: 263.655100px;
}

.y10 {
  bottom: 290.215500px;
}

.y26 {
  bottom: 290.991100px;
}

.yf {
  bottom: 317.551500px;
}

.y25 {
  bottom: 318.327100px;
}

.ye {
  bottom: 344.887500px;
}

.y24 {
  bottom: 345.663100px;
}

.yd {
  bottom: 372.223500px;
}

.y23 {
  bottom: 372.999100px;
}

.yc {
  bottom: 399.559500px;
}

.y22 {
  bottom: 400.335100px;
}

.yb {
  bottom: 426.895500px;
}

.y21 {
  bottom: 427.671100px;
}

.ya {
  bottom: 454.231500px;
}

.y20 {
  bottom: 455.007100px;
}

.y2 {
  bottom: 476.757300px;
}

.y9 {
  bottom: 481.567500px;
}

.y1f {
  bottom: 482.343100px;
}

.y8 {
  bottom: 508.903500px;
}

.y1e {
  bottom: 509.679100px;
}

.y7 {
  bottom: 536.239500px;
}

.y1d {
  bottom: 537.015100px;
}

.y6 {
  bottom: 563.575500px;
}

.y1c {
  bottom: 564.351100px;
}

.y5 {
  bottom: 607.543500px;
}

.y17 {
  bottom: 620.309600px;
}

.y1a {
  bottom: 633.611800px;
}

.y4 {
  bottom: 633.634100px;
}

.h3 {
  height: 25.416000px;
}

.h2 {
  height: 33.888000px;
}

.h1 {
  height: 569.500000px;
}

.h4 {
  height: 600.000000px;
}

.h0 {
  height: 684.000000px;
}

.w1 {
  width: 425.000000px;
}

.w0 {
  width: 522.000000px;
}

.x7 {
  left: 26.805700px;
}

.x8 {
  left: 29.553700px;
}

.x6 {
  left: 32.913700px;
}

.xa {
  left: 34.425700px;
}

.x9 {
  left: 35.649700px;
}

.x0 {
  left: 41.000000px;
}

.x10 {
  left: 54.737200px;
}

.x11 {
  left: 57.485200px;
}

.xf {
  left: 60.845200px;
}

.x13 {
  left: 62.357200px;
}

.x12 {
  left: 63.581200px;
}

.xc {
  left: 69.000000px;
}

.x1 {
  left: 95.173800px;
}

.x4 {
  left: 102.256700px;
}

.xe {
  left: 123.108400px;
}

.xb {
  left: 230.254500px;
}

.x3 {
  left: 278.596700px;
}

.x5 {
  left: 285.093700px;
}

.x2 {
  left: 290.684100px;
}

.x15 {
  left: 306.677700px;
}

.x16 {
  left: 313.175300px;
}

.x14 {
  left: 318.765100px;
}

.xd {
  left: 420.958000px;
}

.x17 {
  left: 456.464800px;
}

@media print {
  .v0 {
    vertical-align: 0.000000pt;
  }

  .ls1 {
    letter-spacing: -1.984000pt;
  }

  .ls3 {
    letter-spacing: -0.640000pt;
  }

  .ls2 {
    letter-spacing: 0.000000pt;
  }

  .ls4 {
    letter-spacing: 1.200000pt;
  }

  .ls0 {
    letter-spacing: 25.600000pt;
  }

  .ws0 {
    word-spacing: -25.600000pt;
  }

  .ws5 {
    word-spacing: -1.200000pt;
  }

  .ws2 {
    word-spacing: -0.960000pt;
  }

  .ws3 {
    word-spacing: 0.000000pt;
  }

  .ws4 {
    word-spacing: 0.640000pt;
  }

  .ws1 {
    word-spacing: 1.984000pt;
  }

  ._3 {
    margin-left: -670.656000pt;
  }

  ._5 {
    margin-left: -595.968000pt;
  }

  ._6 {
    margin-left: -6.464000pt;
  }

  ._2 {
    margin-left: -4.608000pt;
  }

  ._0 {
    margin-left: -3.136000pt;
  }

  ._1 {
    width: 1.984000pt;
  }

  ._7 {
    width: 396.544000pt;
  }

  ._4 {
    width: 402.752000pt;
  }

  .fs1 {
    font-size: 48.000000pt;
  }

  .fs0 {
    font-size: 64.000000pt;
  }

  .y19 {
    bottom: 51.333333pt;
  }

  .y18 {
    bottom: 51.855467pt;
  }

  .y0 {
    bottom: 92.000000pt;
  }

  .y1b {
    bottom: 116.935600pt;
  }

  .y1 {
    bottom: 117.233067pt;
  }

  .y16 {
    bottom: 168.266000pt;
  }

  .y2c {
    bottom: 169.300133pt;
  }

  .y15 {
    bottom: 204.714000pt;
  }

  .y2b {
    bottom: 205.748133pt;
  }

  .y3 {
    bottom: 236.381467pt;
  }

  .y14 {
    bottom: 241.162000pt;
  }

  .y2a {
    bottom: 242.196133pt;
  }

  .y13 {
    bottom: 277.610000pt;
  }

  .y29 {
    bottom: 278.644133pt;
  }

  .y12 {
    bottom: 314.058000pt;
  }

  .y28 {
    bottom: 315.092133pt;
  }

  .y11 {
    bottom: 350.506000pt;
  }

  .y27 {
    bottom: 351.540133pt;
  }

  .y10 {
    bottom: 386.954000pt;
  }

  .y26 {
    bottom: 387.988133pt;
  }

  .yf {
    bottom: 423.402000pt;
  }

  .y25 {
    bottom: 424.436133pt;
  }

  .ye {
    bottom: 459.850000pt;
  }

  .y24 {
    bottom: 460.884133pt;
  }

  .yd {
    bottom: 496.298000pt;
  }

  .y23 {
    bottom: 497.332133pt;
  }

  .yc {
    bottom: 532.746000pt;
  }

  .y22 {
    bottom: 533.780133pt;
  }

  .yb {
    bottom: 569.194000pt;
  }

  .y21 {
    bottom: 570.228133pt;
  }

  .ya {
    bottom: 605.642000pt;
  }

  .y20 {
    bottom: 606.676133pt;
  }

  .y2 {
    bottom: 635.676400pt;
  }

  .y9 {
    bottom: 642.090000pt;
  }

  .y1f {
    bottom: 643.124133pt;
  }

  .y8 {
    bottom: 678.538000pt;
  }

  .y1e {
    bottom: 679.572133pt;
  }

  .y7 {
    bottom: 714.986000pt;
  }

  .y1d {
    bottom: 716.020133pt;
  }

  .y6 {
    bottom: 751.434000pt;
  }

  .y1c {
    bottom: 752.468133pt;
  }

  .y5 {
    bottom: 810.058000pt;
  }

  .y17 {
    bottom: 827.079467pt;
  }

  .y1a {
    bottom: 844.815733pt;
  }

  .y4 {
    bottom: 844.845467pt;
  }

  .h3 {
    height: 33.888000pt;
  }

  .h2 {
    height: 45.184000pt;
  }

  .h1 {
    height: 759.333333pt;
  }

  .h4 {
    height: 800.000000pt;
  }

  .h0 {
    height: 912.000000pt;
  }

  .w1 {
    width: 566.666667pt;
  }

  .w0 {
    width: 696.000000pt;
  }

  .x7 {
    left: 35.740933pt;
  }

  .x8 {
    left: 39.404933pt;
  }

  .x6 {
    left: 43.884933pt;
  }

  .xa {
    left: 45.900933pt;
  }

  .x9 {
    left: 47.532933pt;
  }

  .x0 {
    left: 54.666667pt;
  }

  .x10 {
    left: 72.982933pt;
  }

  .x11 {
    left: 76.646933pt;
  }

  .xf {
    left: 81.126933pt;
  }

  .x13 {
    left: 83.142933pt;
  }

  .x12 {
    left: 84.774933pt;
  }

  .xc {
    left: 92.000000pt;
  }

  .x1 {
    left: 126.898400pt;
  }

  .x4 {
    left: 136.342267pt;
  }

  .xe {
    left: 164.144533pt;
  }

  .xb {
    left: 307.006000pt;
  }

  .x3 {
    left: 371.462267pt;
  }

  .x5 {
    left: 380.124933pt;
  }

  .x2 {
    left: 387.578800pt;
  }

  .x15 {
    left: 408.903600pt;
  }

  .x16 {
    left: 417.567067pt;
  }

  .x14 {
    left: 425.020133pt;
  }

  .xd {
    left: 561.277333pt;
  }

  .x17 {
    left: 608.619733pt;
  }
}


</style>