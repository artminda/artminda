<template>
  <v-app :dark="goDark">
    <v-content>
      <div class="appbg">
        <!-- <TheHeader :goDark="goDark" :lang="lang" @changeTheme="updateTheme($event)" @changeLang="updateLang($event)"/> -->
        <!-- <TheTips v-if="$route.name === 'home'"/> -->
        <div class="screenHight">
        <v-btn @click="updateTheme(goDark = !goDark)" depressed small icon>
          <v-icon v-if="goDark==true">fas fa-sun</v-icon>
          <v-icon v-else>fas fa-moon</v-icon>
        </v-btn>
         <hamburger
          :lang="lang"
          @menu="showMenu($event)"
          @changeTheme="updateTheme($event)"
          @changeLang="updateLang($event)"
        />
          <transition
            mode="out-in"
            name="fade"
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated fadeOutLeft faster"
            :duration="{ enter: 800, leave: 1400 }"
          >
            <router-view></router-view>
          </transition>
          <transition
          name="load"
          enter-active-class="animated slideInUp "
          leave-active-class="animated slideOutUp"
          >
          <div v-if="sideBlock" id='sideBlock'></div>
           </transition>
           <!-- <TheFooter/> -->
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import hamburger from "./components/hamburger";
import TheTips from "./components/TheTips";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import i18n from 'i18n'
import $ from 'jquery'

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← artminda's web",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "artminda chen's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "artminda' web" },
      { property: "og:site_name", content: "artminda' web" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://artminda.web" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      { property: "og:description", content: "artminda chen's Portfolio" }
    ]
  },
  components: {
    hamburger,
    TheHeader,
    TheFooter,
    TheTips
  },
  data() {
    return {
      sideBlock: false,
      menu: false, 
      goDark: false, 
      lang: "en"  
    };
  },
  methods: {
     showMenu(val) {
       setTimeout(()=>{
      this.sideBlock = !val
      setTimeout(()=>{
         this.sideBlock = val;
      },600);
     },300)
    },
    slideOnSideBlock(){
      $('#sideBlock').removeClass('un-active-side-block')
      $('#sideBlock').addClass('is-active-side-block')
    },
    beforeEnter(el) {
      setTimeout(function () {
        this.sideBlock = true
        this.slideOnSideBlock()
    }, 2000);
      console.log('beforeEnter')
    },
    enter(el, done) {
      console.log('enter')
       this.sideBlock = false
      console.log("this.sideBlock:",this.sideBlock)
       done()
    },
    leave(el, done) {
      console.log('leave')
      this.sideBlock = true
       setTimeout(function () {
        this.slideOnSideBlock()
    }, 2000);
       console.log("this.sideBlock:",this.sideBlock)
     done()
  },
   updateTheme(updatedTheme) {
      // console.log("goDark:",updatedTheme)
    },
    updateLang(newLang){
      console.log("APP-newLang-EMIT:", typeof newLang, newLang)
      if (newLang === "中文"){
        this.$i18n.locale = "tw"
        localStorage.setItem("lang", "tw")
        return
      }
      this.$i18n.locale = newLang
      localStorage.setItem("lang", newLang)
    }
  }
};
</script>
<style lang="scss" scoped src="@/assets/css/pageTrans.scss"/>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

* {
  font-family: "Microsoft JhengHei", sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  margin: 80px 0 5px 0;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: rgb(219, 219, 219);
}

.screenHight {
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
  border: 10px red solid;
}

pre {
  font-size: 1rem;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #282c34;
  background: #282c34;
  color: #dcdcdc;
  display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0px;
}

code {
  background: #282c34;
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #dcdcdc;
}
</style>
