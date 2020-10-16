<template>
 <v-container>
  <v-row  justify-center align-center  class="mb-4 pt-2 resumTop">
    <v-col cols="12" sm="6"  class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">{{$t("art_education")}}</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout>
              <v-col cols="4">
                <div class="caption font-weight-bold green--text">SEP 2017 -</div>
                <div class="caption font-weight-bold green--text">PRESENT</div>
              </v-col>
              <v-col class="pl-2 subheading">
                <strong>{{$t("art_master")}}</strong>
                <div class="caption mb-2">{{$t("art_chiayi")}}</div>
              </v-col>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout >
              <v-col cols="4">
                <div class="caption font-weight-bold green--text">SEP 2011 -</div>
                <div class="caption font-weight-bold green--text">MAY 2015</div>
              </v-col>
              <v-col class="pl-2 subheading">
                <strong>{{$t("art_bachelor")}}</strong>
                <div class="caption mb-2">{{$t("art_taitung")}}</div>
              </v-col>
            </v-layout>
          </v-timeline-item>

        </v-timeline>
      </v-card-text>
    </v-col>
    <v-col cols="12" sm="6" class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">{{$t("art_experience")}}</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout >
              <v-col cols="4">
                <div class="caption font-weight-bold green--text">JUN 2019 -</div>
                <div class="caption font-weight-bold green--text">JAN 2020</div>
              </v-col>
              <v-col class="pl-2">
                <strong>{{$t('art_front')}}<br> + {{$t("art_web")}}</strong>
                <div class="caption mb-2">{{$t("art_chung")}}</div>
              </v-col>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout >
              <v-col cols="4">
                <div class="caption font-weight-bold green--text">JUL 2018 -</div>
                <div class="caption font-weight-bold green--text">MAY 2019</div>
              </v-col>
              <v-col xs8 class="pl-2">
                <strong>{{$t('art_front')}}<br> + {{$t("art_web")}}</strong>
                <div class="caption mb-2">{{$t("art_rock")}}</div>
              </v-col>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout >
              <v-col cols="4">
                <div class="caption font-weight-bold green--text">SEP 2015 -</div>
                <div class="caption font-weight-bold green--text">AUG 2016</div>
              </v-col>
              <v-col class="pl-2">
                <strong>{{$t("art_visual")}}</strong>
                <div class="caption mb-2">{{$t("art_avg")}}</div>
              </v-col>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-col>

      <v-col cols="12" sm="6" class="pt-4">
        <h2>
          <span>F2E</span>
          <span class="green--text">Skills</span>
        </h2>
        <br>
        <strong>Vue</strong>
        <v-progress-linear v-model="buffer10" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>專案溝通整合管理</strong>
        <v-progress-linear v-model="buffer9" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Webpack setting</strong>
        <v-progress-linear v-model="buffer7" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>敏捷開發</strong>
        <v-progress-linear v-model="buffer8" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>球類遊戲網站製作</strong>
        <v-progress-linear v-model="buffer10" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>WERP製作</strong>
        <v-progress-linear v-model="buffer9" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>SEO</strong>
        <v-progress-linear v-model="buffer10" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-col>

        <v-col cols="12" sm="6" class="pt-4">
        <h2>
          <span>Design</span>
          <span class="green--text">Skills</span>
        </h2>
        <br>
        <strong>CSS Animation / Transform / Transition</strong>
        <v-progress-linear v-model="buffer8" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Photoshop</strong>
        <v-progress-linear v-model="buffer9" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Illustrator</strong>
        <v-progress-linear v-model="buffer9" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Premiere</strong>
        <v-progress-linear v-model="buffer7" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-col>

      <v-col col="12">
      <v-row
      :align="'center'"
      :justify="'center'"
      >
        <div class="mt-4 mb-4 pt-2 mb-5">
        <v-btn
          href="https://docs.google.com/document/d/14wZAIgwog7Lo5EdK7AeU4D311ADfNKnO4YEsiwBlcYY/edit?usp=sharing"
          target="_blank"
          color="green"
          dark
          large
        >
          {{$t("art_down")}}
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
      </v-row>

      </v-col>
  </v-row>
 </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Resume',
    titleTemplate: "%s ← artminda's web",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1' },
      {
        name: 'description',
        content:
          'Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "artminda' web" },
      { property: 'og:site_name', content: "artminda' web" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://artminda.github.io/artminda' },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/Dcz2PGx.jpg'
      },
      {
        property: 'og:description',
        content:
          'Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End'
      }
    ]
  },
  data () {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      buffer7: 0,
      buffer8: 0,
      buffer9: 0,
      buffer10: 0,
      bufferValue: 100,
      interval: 0
    }
  },
  mounted () {
    this.startBuffer()
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    startBuffer () {
      this.interval = setInterval(() => {
        this.buffer1 = 10
        this.buffer2 = 20
        this.buffer3 = 30
        this.buffer4 = 40
        this.buffer5 = 50
        this.buffer6 = 60
        this.buffer7 = 70
        this.buffer8 = 80
        this.buffer9 = 90
        this.buffer10 = 100
      }, 800)
    }
  }
}
</script>
<style >
.resumTop {
  margin-top: 6vh;
}
</style>
