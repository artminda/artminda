<template>
  <v-layout row justify-center align-center class="flex-wrap mt-4 pt-2 wrap">

    <!-- <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ maxWidth: '1200px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    /> -->

      <!-- <ball
       :style="{ maxWidth: '1200px' }"
       /> -->
<v-flex xs12 sm6 md6>
    
    <div class="cube">
    <cube/>
    </div>  
    <!-- <lottie
    class="" 
    :options="defaultOptions" 
    :height="400" 
    :width="400"
    v-on:animCreated="handleAnimation"
    /> -->
   
    <!-- <VueCompareImage
      class="hidden-lg-and-up"
      :style="{ maxWidth: '300px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    /> -->

    <br>
    <!-- mobile -->
    <div class="layout mt-4 pt-2 column justify-center align-center hidden-lg-and-up typer_mobile">
    <vue-typer class="headline" :repeat="0" text="artminda chen"></vue-typer>
    <div class="typer mt-2 pl-2 ">
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
    <div class="layout mt-4 pt-2 column hidden-md-and-down">
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
    ></vue-typer>
     </div>
    </div>


    </v-flex>

    <v-flex xs12 sm6 md6>
      <v-card text color="transparent" max-width="500" class="noShadow px-3">
        <v-card-title primary-title class="font-weight-thin subtitle-1">
          <div>
            <h3 class="headline mb-0">
              <span>{{$t('art_about')}}</span>
              <span class="green--text">{{$t('art_me')}}</span>
            </h3>
            <!-- <h3 class="headline mb-0"> <span>{{$t('art_good1')}}</span></h3> -->
            <h3 class="BOLD ITALIC text--secondary mb-0 border-left"> <span>{{$t('art_good2')}}</span></h3>
            <div>
              <p class="wordbreak font-weight-regular grey--text text--darken-1">
               {{$t('art_content_top')}}
                <span
                  class="green--text font-weight-bold"
                >{{$t('art_vue')}}</span>, {{$t('art_content_but')}}
              </p>
            </div>
          </div>
        </v-card-title>

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
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

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
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";
// import ball from "@/components/3d_ball";
import * as animationData from '@/assets/pinjump.json';
import cube from "@/components/cube_slide";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Artminda's Web",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1,maximum-scale=1" },
      { name: "description", content: "Artminda Chen's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Artminda' Web" },
      { property: "og:site_name", content: "Artminda' Web" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://artminda.github.io/artminda" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      { property: "og:description", content: "Artminda Chen's Portfolio" }
    ]
  },
  components: {
    "vue-typer": VueTyper,
    VueCompareImage,
    cube
  },
  data() {
    return {
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1,
      anim: {},
      icons: [
        { href: "https://github.com/artminda", icon: "fab fa-github" },
        {
          href: "https://www.cakeresume.com/dashboard#",
          icon: "fab fa-cuttlefish"
        },
        {
          href: "https://www.facebook.com/shyshydesign/",
          icon: "fab fa-facebook-f"
        },
        {
          href: "https://www.upwork.com/o/profiles/users/~01665ea6dd70561bc2/",
          icon: "fas fa-underline"
        }
      ],
      text1: [this.$t("art_job1"), this.$t("art_job2"), this.$t("art_job3")],
      leftImage: "https://i.imgur.com/okK8qil.jpg",
      rightImage: "https://i.imgur.com/f8NTpow.jpg",
      leftImage2: "https://i.imgur.com/owrCaj3.jpg",
      rightImage2: "https://i.imgur.com/kNmA7qB.jpg",
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    };
  },
    methods: {
       handleAnimation (anim) {
        this.anim = anim;
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
  font-style:italic;
}
.typer_title {
  font-size: 9rem;
  word-break: keep-all;
  line-height: 8rem;
  letter-spacing: normal;
  font-family: fantasy ;
  margin-left: 5px;
  transform: rotate(-33deg);
  position: relative;
  right: 58px;
  top: -52px;
}
.typer{
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
.typer_mobile{
   position: fixed;
    margin: 0 auto;
    width: 100%;
    top: 10vh;
}
.typer_pc{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    min-width: 0;
    transform: rotate(-33deg);
    right: -147px;
    position: relative;
    top: -148px;
    font-size: 2rem;
}
.cube {
    width: 100%;
    position: fixed;
    height: 350px;
    top: 78px;
}

.wordbreak {
  word-break: normal;
}
.noShadow{
  top: 20px;
  left: 161px;
  box-shadow: none;
  margin-top: 13vh;
  word-break: normal;
}
@media(max-width: 960px){
  .noShadow{
    margin-top: 51vh;
    margin-bottom: 6vh;
    left: 0;
    width: 100%;
    justify-content: center;
  }
}  
</style>