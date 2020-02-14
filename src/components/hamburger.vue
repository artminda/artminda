<template>
  <div>
    <div
      id="hamburger"
      @click="burgerTime()"
      :class="{is_closed: isClosed, is_open: !isClosed}"
      class="hamburglar"
    >
      <div class="burger-icon">
        <div class="burger-container">
          <span class="burger-bun-top"></span>
          <span class="burger-filling"></span>
          <span class="burger-bun-bot"></span>
        </div>
      </div>

      <!-- svg ring containter -->
      <div class="burger-ring">
        <svg class="svg-ring">
          <path
            class="path"
            fill="none"
            stroke="#4caf50"
            stroke-miterlimit="10"
            stroke-width="4"
            d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
          />
        </svg>
      </div>
      <!-- the masked path that animates the fill to the ring -->

      <svg width="0" height="0">
        <mask id="mask">
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#ff0000"
            stroke-miterlimit="10"
            stroke-width="2"
            d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
          />
        </mask>
      </svg>

      <!-- 往上那一撇 -->
      <div class="path-burger">
        <div class="animate-path">
          <div class="path-rotation"></div>
        </div>
      </div>
    </div>
    <shineBtn @menu="showMenu($event)" class="homeBtn" :text="$t('art_home')" :path="'/'"></shineBtn>
    <transition
      name="router-animation"
      mode="out-in"
      enter-active-class="animated fadeInRight fast"
      leave-active-class="animated fadeOutRight faster"
    >
      <TheMenu
        v-if="menu"
        :goDark="goDark"
        :lang="lang"
        @menu="showMenu($event)"
        @changeTheme="updateTheme($event)"
        @changeLang="updateLang($event)"
      />
    </transition>
  </div>
</template>

<script>
import TheMenu from "./TheMenu";
import shineBtn from "./shine_btn";
export default {
  props: {
    goDark: {
      type: Boolean
    },
    lang: {
      type: String
    },
    theStatus: {
      type: Boolean
    }
  },
  components: {
    TheMenu,
    shineBtn
  },
  data() {
    return {
      menu: false,
      isClosed: true,
      selectLang: localStorage.getItem("lang") === "tw" ? "中文" : "English",
      items: ["English", "中文"],
      drawer: null
    };
  },
  // created() {
  //   // [註冊監聽事件]
  //   this.$bus.$on("closeMenu", event);
  //   this.isClosed = !event;
  // },

  methods: {
    showMenu(data) {
      if(this.menu === false){
       this.$emit('menu', data)
       return  
      }
      this.menu = data.sta
      this.burgerTime()
      this.$emit('menu', data)
    },
    changeTheme() {
      this.$emit("changeTheme", this.goDark);
    },
    burgerTime() {
      if (this.isClosed === true) {
        this.isClosed = false;
        this.menu = true;
      } else {
        this.isClosed = true;
        this.menu = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>

// vars
$color: #4caf50; // icon color
$blue: transparent; // background color
$animation: 0.6s; // animation speed
$scale: 1; // icon scale 68/68 default

.hamburglar {
  position: absolute;
  z-index: 999;
  right: 0vw;
  float: right;
  -webkit-transform: scale(1);
  transform: scale(1);
  margin: 0 1em;
  display: block;
  width: 68px;
  height: 68px;
  background: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

// transition mask
.path-burger {
  position: absolute;
  top: 0;
  left: 0;
  height: 68px;
  width: 68px;
  // two masks because... browser support.
  mask: url(#mask);
  -webkit-mask-box-image: url(https://raygun.io/upload/mask.svg);
}

.animate-path {
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 68px;
}

// what this does is create a small square that I then rotate behind an svg mask, giving the apparence of the line animating
.path-rotation {
  height: 34px;
  width: 34px;
  margin: 34px 34px 0 0;
  transform: rotate(0deg);
  transform-origin: 100% 0;
  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 34px;
    margin: 0 4px 0 0;
    background: $color;
  }
}

// box rotation animation
@keyframes rotate-out {
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-in {
  0% {
    transform: rotate(360deg);
  }
  40% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

// offset moves
// dasharray is the dash size
// need to be able to control dash space size.

.hamburglar.is_open {
  .path {
    animation: dash-in $animation linear normal;
    animation-fill-mode: forwards;
  }
  .animate-path {
    animation: rotate-in $animation linear normal;
    animation-fill-mode: forwards;
  }
}

.hamburglar.is_closed {
  .path {
    animation: dash-out $animation linear normal;
    animation-fill-mode: forwards;
  }
  .animate-path {
    animation: rotate-out $animation linear normal;
    animation-fill-mode: forwards;
  }
}

.path {
  stroke-dasharray: 240;
  stroke-dashoffset: 240;
  stroke-linejoin: round;
}

@keyframes dash-in {
  0% {
    stroke-dashoffset: 240;
  }
  40% {
    stroke-dashoffset: 240;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes dash-out {
  0% {
    stroke-dashoffset: 0;
  }
  40% {
    stroke-dashoffset: 240;
  }
  100% {
    stroke-dashoffset: 240;
  }
}

// All good burgers need filling!

.burger-icon {
  position: absolute;
  padding: 20px 16px;
  height: 68px;
  width: 68px;
}

.burger-container {
  position: relative;
  height: 28px;
  width: 36px;
}

.burger-bun-top,
.burger-bun-bot,
.burger-filling {
  position: absolute;
  display: block;
  height: 4px;
  width: 36px;
  border-radius: 2px;
  background: $color;
}

.burger-bun-top {
  top: 0;
  transform-origin: 34px 2px;
}

.burger-bun-bot {
  bottom: 0;
  transform-origin: 34px 2px;
}
//.burger-filling {
//  @include transition(all,($animation/2.5),ease-in-//out);
//}
// relative parent is the button
.burger-filling {
  top: 10px;
  height: 8px;
}

// burger ring container
.burger-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 68px;
}

.svg-ring {
  width: 68px;
  height: 68px;
}

// bun animations
.hamburglar.is_open {
  .burger-bun-top {
    animation: bun-top-out $animation linear normal;
    animation-fill-mode: forwards;
  }
  .burger-bun-bot {
    animation: bun-bot-out $animation linear normal;
    animation-fill-mode: forwards;
  }
}
.hamburglar.is_closed {
  .burger-bun-top {
    animation: bun-top-in $animation linear normal;
    animation-fill-mode: forwards;
  }
  .burger-bun-bot {
    animation: bun-bot-in $animation linear normal;
    animation-fill-mode: forwards;
  }
}

@keyframes bun-top-out {
  0% {
    left: 0;
    top: 0;
    transform: rotate(0deg);
  }
  20% {
    left: 0;
    top: 0;
    transform: rotate(15deg);
  }
  80% {
    left: -5px;
    top: 0;
    transform: rotate(-60deg);
  }
  100% {
    left: -5px;
    top: 1px;
    transform: rotate(-45deg);
  }
}

@keyframes bun-bot-out {
  0% {
    left: 0;
    transform: rotate(0deg);
  }
  20% {
    left: 0;
    transform: rotate(-15deg);
  }
  80% {
    left: -5px;
    transform: rotate(60deg);
  }
  100% {
    left: -5px;
    transform: rotate(45deg);
  }
}

@keyframes bun-top-in {
  0% {
    left: -5px;
    bot: 0;
    transform: rotate(-45deg);
  }
  20% {
    left: -5px;
    bot: 0;
    transform: rotate(-60deg);
  }
  80% {
    left: 0;
    bot: 0;
    transform: rotate(15deg);
  }
  100% {
    left: 0;
    bot: 1px;
    transform: rotate(0deg);
  }
}

@keyframes bun-bot-in {
  0% {
    left: -5px;
    transform: rotate(45deg);
  }
  20% {
    left: -5px;
    bot: 0;
    transform: rotate(60deg);
  }
  80% {
    left: 0;
    bot: 0;
    transform: rotate(-15deg);
  }
  100% {
    left: 0;
    transform: rotate(0deg);
  }
}

// burger filling
.hamburglar.is_open {
  .burger-filling {
    animation: burger-fill-out $animation linear normal;
    animation-fill-mode: forwards;
  }
}

.hamburglar.is_closed {
  .burger-filling {
    animation: burger-fill-in $animation linear normal;
    animation-fill-mode: forwards;
  }
}

@keyframes burger-fill-in {
  0% {
    width: 0;
    left: 36px;
  }
  40% {
    width: 0;
    left: 40px;
  }
  80% {
    width: 36px;
    left: -6px;
  }
  100% {
    width: 36px;
    left: 0px;
  }
}

@keyframes burger-fill-out {
  0% {
    width: 36px;
    left: 0px;
  }
  20% {
    width: 42px;
    left: -6px;
  }

  40% {
    width: 0;
    left: 40px;
  }

  100% {
    width: 0;
    left: 36px;
  }
}

.homeBtn {
  left: -22px;
    position: absolute;
    z-index: 999;
    margin: 0 2em;
    cursor: pointer;
}
</style>