<template>
  <div class="slider">
    <div class="container">
      <div class="slide x"></div>
      <div class="slide y"></div>
      <div class="slide z"></div>
    </div>
    <div class="shadow"></div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  background: #ff0074;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 11px;
}

.title {
  text-align: center;
  margin: 40px;
}

.title h1,
.title p {
  margin: 0;
}

.slider {
  position: relative;
  top: 0px;
  width: 200px;
  height: 200px;
  margin: auto;
  -webkit-perspective: 600px;
  perspective: 600px;
}

.slider * {
  -webkit-transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
  transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
}

.container {
  width: inherit;
  height: inherit;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateY(0deg) rotateX(0deg);
  transform: rotateY(0deg) rotateX(0deg);
}

.slide,
.slide:after,
.slide:before {
  display: block;
  width: inherit;
  height: inherit;
  /* background: url("https://i.imgur.com/owrCaj3.jpg"); */
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  background-size: cover;
  background-position: center;
}

.slide.x {
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
}

.slide.x:after {
  content: "";
  background-image: url("https://i.imgur.com/eb7P9S5.jpg");
  -webkit-transform: translateZ(100px) rotateZ(-90deg);
  transform: translateZ(100px) rotateZ(-90deg);
}

.slide.x:before {
  content: "";
  background-image: url("https://i.imgur.com/WmrQxZ1.jpg");
  -webkit-transform: translateZ(-100px) rotateZ(-90deg);
  transform: translateZ(-100px) rotateZ(-90deg);
}

.slide.y {
  -webkit-transform: rotateX(90deg);
  transform: rotateX(90deg);
}

.slide.y:after {
  content: "";
  background-image: url("https://i.imgur.com/ovRIoIK.jpg");
  -webkit-transform: translateZ(100px) scale(-1);
  transform: translateZ(100px) scale(-1);
}

.slide.y:before {
  content: "";
  background-image: url("https://i.imgur.com/McRCner.jpg");
  -webkit-transform: translateZ(-100px);
  transform: translateZ(-100px);
}

.slide.z {
  -webkit-transform: rotateX(0);
  transform: rotateX(0);
}

.slide.z:after {
  content: "";
  background-image: url("https://i.imgur.com/Fj5l6Ka.jpg");
  -webkit-transform: translateZ(100px);
  transform: translateZ(100px);
}

.slide.z:before {
  content: "";
  background-image: url("https://i.imgur.com/3spNE3i.jpg");
  -webkit-transform: translateZ(-100px);
  transform: translateZ(-100px);
}

.container {
  -webkit-animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
  animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
}

@-webkit-keyframes rotate {
  0%,
  10% {
    -webkit-transform: rotateY(0deg) rotateX(0deg);
    transform: rotateY(0deg) rotateX(0deg);
  }
  15%,
  20% {
    -webkit-transform: rotateY(180deg) rotateX(0deg);
    transform: rotateY(180deg) rotateX(0deg);
  }
  25%,
  35% {
    -webkit-transform: rotateY(180deg) rotateX(270deg);
    transform: rotateY(180deg) rotateX(270deg);
  }
  40%,
  50% {
    -webkit-transform: rotateY(180deg) rotateX(90deg);
    transform: rotateY(180deg) rotateX(90deg);
  }
  55%,
  65% {
    -webkit-transform: rotateY(-90deg) rotateX(90deg);
    transform: rotateY(-90deg) rotateX(90deg);
  }
  70%,
  80% {
    -webkit-transform: rotateY(90deg) rotateX(90deg);
    transform: rotateY(90deg) rotateX(90deg);
  }
  90%,
  95% {
    -webkit-transform: rotateY(0deg) rotateX(90deg);
    transform: rotateY(0deg) rotateX(90deg);
  }
}

@keyframes rotate {
  0%,
  10% {
    -webkit-transform: rotateY(0deg) rotateX(0deg);
    transform: rotateY(0deg) rotateX(0deg);
  }
  15%,
  20% {
    -webkit-transform: rotateY(180deg) rotateX(0deg);
    transform: rotateY(180deg) rotateX(0deg);
  }
  25%,
  35% {
    -webkit-transform: rotateY(180deg) rotateX(270deg);
    transform: rotateY(180deg) rotateX(270deg);
  }
  40%,
  50% {
    -webkit-transform: rotateY(180deg) rotateX(90deg);
    transform: rotateY(180deg) rotateX(90deg);
  }
  55%,
  65% {
    -webkit-transform: rotateY(-90deg) rotateX(90deg);
    transform: rotateY(-90deg) rotateX(90deg);
  }
  70%,
  80% {
    -webkit-transform: rotateY(90deg) rotateX(90deg);
    transform: rotateY(90deg) rotateX(90deg);
  }
  90%,
  95% {
    -webkit-transform: rotateY(0deg) rotateX(90deg);
    transform: rotateY(0deg) rotateX(90deg);
  }
}

.shadow {
  display: block;
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 60%;
  -webkit-transform: rotateX(90deg);
  transform: rotateX(90deg);
  z-index: -1;
  -webkit-filter: blur(20px);
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="20" /></filter></svg>#filter');
  -webkit-filter: blur(20px);
  filter: blur(20px);
  left: 0;
  right: 0;
  margin: auto;
  -webkit-animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
  animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
}

@-webkit-keyframes rotateShadow {
  0%,
  10% {
    -webkit-transform: rotateY(0deg) rotateX(90deg);
  }
  15%,
  20% {
    -webkit-transform: rotateY(180deg) rotateX(90deg);
  }
  20.1%,
  20.9% {
    -webkit-transform: rotateY(180deg) rotateX(90deg) translatez(5px);
  }
  25%,
  35% {
    -webkit-transform: rotateY(180deg) rotateX(90deg);
  }
  35.1%,
  35.9% {
    -webkit-transform: rotateY(180deg) rotateX(90deg) translatez(-5px);
  }
  40%,
  50% {
    -webkit-transform: rotateY(180deg) rotateX(90deg);
  }
  55%,
  65% {
    -webkit-transform: rotateY(0deg) rotateX(90deg);
  }
  70%,
  80% {
    -webkit-transform: rotateY(180deg) rotateX(90deg);
  }
  90%,
  99% {
    -webkit-transform: rotateY(90deg) rotateX(90deg);
  }
  99.1%,
  99.9% {
    -webkit-transform: rotateY(90deg) rotateX(90deg) translatez(-5px);
  }
}

/*@keyframes rotateShadow {
0%, 10% {transform: rotateY(0deg) rotateX(90deg);}
15%, 20% {transform: rotateY(180deg) rotateX(90deg); opacity: 1; filter: alpha(opacity=100);}
20.1%, 20.9% {transform: rotateY(180deg) rotateX(90deg) translatez(10px); opacity: 0.95; filter: alpha(opacity=95);}
25%, 35% {transform: rotateY(180deg) rotateX(90deg); opacity: 1; filter: alpha(opacity=100);}
35.1%, 35.9% {transform: rotateY(180deg) rotateX(90deg) translatez(-10px); opacity: 0.95; filter: alpha(opacity=95);}
40%, 50% {transform: rotateY(180deg) rotateX(90deg);}
55%, 65% {transform: rotateY(0deg) rotateX(90deg);}
70%, 80% {transform: rotateY(180deg) rotateX(90deg);}
90%, 99% {transform: rotateY(0deg) rotateX(90deg);}
99.1%, 99.9% {transform: rotateY(180deg) rotateX(90deg) translatez(5px); opacity: 0.95; filter: alpha(opacity=95);}
}*/

/*
Credit */

.credit {
  position: fixed;
  bottom: 22px;
  left: 0;
  right: 0;
  margin: auto;
  width: 200px;
  text-align: center;
}

.credit a {
  font-weight: 900;
  color: blue;
  text-decoration: none;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
  background: url("https://dl.dropboxusercontent.com/u/12646264/assets/open-in-new-window-icon.png")
    no-repeat right;
  background-size: 12px;
  padding-right: 20px !important;
  -filter: invert(1);
  -webkit-filter: invert(1);
  -moz--filter: invert(1);
  -o--filter: invert(1);
}

.credit a:hover {
  color: tomato;
}

.small {
  font-size: smaller;
  opacity: 0.75;
}
</style>
