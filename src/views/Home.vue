<template>
  <v-layout row justify-center align-center class="flex-wrap pt-2 wrap">
    <v-flex xs12>
      <!-- mobile -->
      <div
        class="layout mt-4 pt-8 column justify-center align-center hidden-md-and-up typer_mobile"
      >
        <vue-typer
          class="headline"
          :repeat="0"
          text="artminda chen"
        ></vue-typer>
        <div class="typer mt-2 pl-2">
          <vue-typer
            :text="text1"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="erasing"
            :pre-type-delay="70"
            :type-delay="70"
            :pre-erase-delay="1980"
            :erase-delay="150"
            erase-style="select-back"
            :erase-on-complete="false"
            caret-animation="smooth"
          ></vue-typer>
        </div>
      </div>

      <!-- pc -->
      <!-- <div class="layout column hidden-sm-and-down">
    <vue-typer class="typer_title " :repeat="0" text="artminda"></vue-typer>
    <vue-typer class="typer_title " :repeat="0" text="chen"></vue-typer>
     <div class="typer_pc mt-2 pl-2 ">
     <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    />
     </div>
    </div> -->
      <v-flex xs12 row justify-center align-center>
        <transition
          enter-active-class="animated flipInX fast"
          leave-active-class="animated zoomOutUp faster"
        >
          <div v-if="!fakeblak" class="cube mt-md-11">
            <cube />
          </div>
        </transition>
      </v-flex>
    </v-flex>

    <v-flex xs12 md6 row justify-center align-center>
      <!-- <div v-if="fakeblak" class="fakeblak hidden-md-and-up"></div> -->

      <vue-typer
        class="hidden-sm-and-down"
        :text="text1"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="erasing"
        :pre-type-delay="70"
        :type-delay="70"
        :pre-erase-delay="1980"
        :erase-delay="150"
        erase-style="select-back"
        :erase-on-complete="false"
        caret-animation="smooth"
      />

      <v-card
        text
        @scroll="handleScroll($event)"
        color="transparent"
        max-width="450"
        class="noShadow px-4"
      >
        <div class="fakeblak hidden-sm-and-up"></div>
        <v-card-title primary-title class="font-weight-thin subtitle-1">
          <div>
            <h3 class="headline mb-0">
              <span>{{ $t("art_about") }}</span>
              <span class="green--text">{{ $t("art_me") }}</span>
            </h3>
            <!-- <h3 class="headline mb-0"> <span>{{$t('art_good1')}}</span></h3> -->
            <h3 class="BOLD ITALIC text--secondary mb-0 border-left wordbreak">
              <span>{{ $t("art_good2") }}</span>
            </h3>
            <div>
              <p
                class="wordbreak font-weight-regular grey--text text--darken-1"
              >
                {{ $t("art_content_top") }}
                <span class="green--text font-weight-bold">{{
                  $t("art_vue")
                }}</span
                >, {{ $t("art_content_but") }}
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-md-and-up justify-center mb-4 pb-3">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outlined
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 mt-md-10 row justify-center align-center>
      <v-card-actions class="hidden-sm-and-down">
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          fab
          dark
          outlined
          color="green"
          :href="icon.href"
          target="_blank"
        >
          <v-icon dark>{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
// import VueCompareImage from 'vue-compare-image'
// import ball from "@/components/3d_ball";
import * as animationData from '@/assets/pinjump.json'
import cube from '@/components/cube_slide'

export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: "%s ← Artminda's Web",
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,maximum-scale=1'
      },
      { name: 'description', content: "Artminda Chen's Portfolio" },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Artminda' Web" },
      { property: 'og:site_name', content: "Artminda' Web" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://artminda.github.io/artminda' },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/Dcz2PGx.jpg'
      },
      { property: 'og:description', content: "Artminda Chen's Portfolio" }
    ]
  },
  components: {
    'vue-typer': VueTyper,
    // VueCompareImage,
    cube
  },
  data () {
    return {
      fakeblak: false,
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
      anim: {},
      icons: [
        { href: 'https://github.com/artminda', icon: 'fab fa-github' },
        {
          href: 'https://www.cakeresume.com/dashboard#',
          icon: 'fab fa-cuttlefish'
        },
        {
          href: 'https://www.facebook.com/shyshydesign/',
          icon: 'fab fa-facebook-f'
        },
        {
          href: 'https://www.linkedin.com/in/huang-min-chen-73357a16a/',
          icon: 'fab fa-linkedin-in'
        }
      ],
      text1: [this.$t('art_job1'), this.$t('art_job2'), this.$t('art_job3')],
      leftImage: 'https://i.imgur.com/okK8qil.jpg',
      rightImage: 'https://i.imgur.com/f8NTpow.jpg',
      leftImage2: 'https://i.imgur.com/owrCaj3.jpg',
      rightImage2: 'https://i.imgur.com/kNmA7qB.jpg',
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    }
  },
  methods: {
    handleAnimation (anim) {
      this.anim = anim
    },
    handleScroll (e) {
      // console.log(e.srcElement.scrollTop, e.target.scrollTop)
      // scrollTop 獲取到頂部的滾動距離
      if (e.srcElement.scrollTop > 0) {
        this.fakeblak = true
        return
      }
      this.fakeblak = false
    }
  }
}
</script>
<style lang="scss">
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: #4caf50;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #4caf50;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
.border-left {
  border-left-style: solid;
  border-left-color: #4caf50b8;
  padding: 5px;
  font-style: italic;
}
.typer_title {
  overflow: hidden;
  font-size: 9rem;
  word-break: keep-all;
  line-height: 8rem;
  letter-spacing: normal;
  font-family: fantasy;
  margin-left: 5px;
  transform: rotate(-33deg);
  position: relative;
  right: 76px;
  top: -10px;
}

.typer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-width: 0;
}
.typer_mobile {
  display: flex;
  //    position: fixed;
  margin: 0 auto;
  width: 100%;
  top: 10vh;
}
.typer_pc {
  // position: fixed;
  // display: -webkit-box;
  // display: -ms-flexbox;
  display: flex;
  // -webkit-box-flex: 1;
  // -ms-flex: 1 1 auto;
  // flex: 1 1 auto;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-width: 0;
  transform: rotate(-33deg);
  right: -147px;
  // position: absolute;
  // z-index: 5;
  // top: -148px;
  font-size: 2rem;
}
.cube {
  width: 100%;
  display: flex;
  // position: fixed;
  height: 350px;
  // top: 78px;
}

.wordbreak {
  word-break: normal;
}
.fakeblak {
  height: 180px;
  width: 100%;
  position: relative;
  background-color: transparent;
}
.noShadow {
  left: 64px;
  top: 20px;
  box-shadow: none;
  //   margin-top: 13vh;
  word-break: normal;
}
@media (max-width: 600px) {
  .noShadow {
    position: fixed;
    overflow: scroll;
    overflow-x: hidden;
    height: 396px;
    left: 0;
    margin-top: 40vh;
    margin-bottom: 6vh;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  .cube {
    top: 156px;
  }
  .noShadow {
    left: 0;
    // margin-top: 43vh;
    margin-bottom: 6vh;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}
@media (max-width: 1264px) {
  .typer_title {
    left: -61px;
    top: 51px;
  }
  .typer_pc {
    position: fixed;
    top: 53px;
    left: 0;
  }
}
</style>
