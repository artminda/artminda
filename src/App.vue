<template>
  <v-app>
    <v-content>
      <div class="appbg">
        <!-- <TheHeader :goDark="goDark" :lang="lang" @changeTheme="updateTheme($event)" @changeLang="updateLang($event)"/> -->
        <!-- <TheTips v-if="$route.name === 'home'"/> -->
        <div class="screenHight">
          <div class="screenContent">
            <hamburger
              :lang="lang"
              @menu="showMenu($event)"
              @changeTheme="updateTheme($event)"
              @changeLang="updateLang($event)"
            />
            <v-btn class="godark" @click="updateTheme(goDark = !goDark)" depressed small icon>
              <v-icon v-if="goDark===true">fas fa-sun</v-icon>
              <v-icon v-else>fas fa-moon</v-icon>
            </v-btn>
            <v-select
              v-model="selectLang"
              class="selectWidth ml-3 mr-3 golang"
              :items="items"
              label="select lang"
              dense
              single-line
            ></v-select>

            <transition
              mode="out-in"
              name="router-animation"
              enter-active-class="animated fadeInLeft fast"
              leave-active-class="animated fadeOutLeft faster"
              :duration="{ enter: 800, leave: 1400 }"
            >
              <router-view class="routerMargin" @portfolioLoading="portfolio($event)"></router-view>
            </transition>
            <!-- <div id='sideBlock'></div> -->
            <transition name="load">
              <div v-if="sideBlock" id="sideBlock"></div>
            </transition>
            <!-- <TheFooter/> -->
          </div>
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
import i18n from "i18n";
import $ from "jquery";

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
      selectLang: localStorage.getItem("lang") === "tw" ? "中文" : "English",
      items: ["English", "中文"],
      sideBlock: false,
      menu: false,
      goDark: false,
      lang: "en"
    };
  },
  watch: {
    selectLang(val) {
      this.updateLang(val);
    }
  },
  mounted() {
    localStorage.getItem("lang", "English");
  },
  methods: {
    showMenu(data) {
      if (data.run === "noRun") {
        return;
      }
      setTimeout(() => {
        this.sideBlock = !data.sta;
        setTimeout(() => {
          this.sideBlock = data.sta;
        }, 600);
      }, 300);
    },
    portfolio(data){
      console.log('portfolio-data')
       setTimeout(() => {
        this.sideBlock = !data.sta;
        setTimeout(() => {
          this.sideBlock = data.sta;
        }, 600);
      }, 300);
    },
    slideOnSideBlock() {
      $("#sideBlock").removeClass("un-active-side-block");
      $("#sideBlock").addClass("is-active-side-block");
    },
    beforeEnter(el) {
      setTimeout(function() {
        this.sideBlock = true;
        this.slideOnSideBlock();
      }, 2000);
      console.log("beforeEnter");
    },
    enter(el, done) {
      console.log("enter");
      this.sideBlock = false;
      console.log("this.sideBlock:", this.sideBlock);
      done();
    },
    leave(el, done) {
      console.log("leave");
      this.sideBlock = true;
      setTimeout(function() {
        this.slideOnSideBlock();
      }, 2000);
      console.log("this.sideBlock:", this.sideBlock);
      done();
    },
    updateTheme(updatedTheme) {
      this.$vuetify.theme.dark = updatedTheme
    },
    updateLang(newLang) {
      if (newLang === "中文") {
        this.$i18n.locale = "tw";
        localStorage.setItem("lang", "tw");
        return;
      }
      this.$i18n.locale = newLang;
      localStorage.setItem("lang", newLang);
    }
  }
};
</script>
<style lang="scss" scoped src="@/assets/css/pageTrans.scss"/>
<style >
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
  background: #616161;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background-color: #4caf50;
}

.screenHight {
  height: 100vh;
  padding: 10px;
}

body::-webkit-scrollbar {
    display: none;
}
body{
  -ms-overflow-style: none;
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

.godark {
  position: absolute;
  z-index: 999;
  right: 177px;
  top: 5vh;
  float: right;
  margin: 0 1em;
  display: block;
  cursor: pointer;
}

.godark:hover {
  margin: 0 1em;
  position: absolute;
  z-index: 999;
  right: 177px;
  top: 5vh;
}

.golang {
  right: 85px;
  top: 4vh;
  position: absolute;
  z-index: 999;
  float: right;
  margin: 0 1em;
  display: block;
  cursor: pointer;
}

.selectWidth {
  width: 65px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-item-align: center;
  align-self: center;
}

.screenContent {
  overflow: auto;
  overflow-x: hidden;
  height: inherit;
  height: 97vh;
  border: #4caf50 2px solid;
}
.routerMargin {
  margin-top: 4vh;
}

@media (max-width: 960px) {
  .screenHight {
    padding: 0;
    }
  .screenContent {
  height: 100vh;
  border: none;
  }
  .godark {
    top: 3vh;
  }
  .godark:hover {
    top: 3vh;
  }
  .golang {
    top: 2vh;
  }  
}
</style>
