<template>
  <v-container>
    <v-row justify-center align-center class="mb-4 pt-2 resumTop">
      <v-col cols="12" sm="6" class="mt-4 pt-2">
        <h2 class="mb-4 pl-4">{{ $t("art_experience") }}</h2>
        <v-card-text class="py-0">
          <v-timeline align-top dense>
            <v-timeline-item color="green" small>
              <v-layout>
                <v-col cols="4">
                  <div class="caption font-weight-bold green--text">
                    MAR 2020 -
                  </div>
                  <div class="caption font-weight-bold green--text">
                    OCT 2020
                  </div>
                </v-col>
                <v-col class="pl-2">
                  <strong>Senior Front-End Developer</strong>
                  <div class="caption mb-2">GSI Technology Co., Ltd.</div>
                </v-col>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="green" small>
              <v-layout>
                <v-col cols="4">
                  <div class="caption font-weight-bold green--text">
                    JUN 2019 -
                  </div>
                  <div class="caption font-weight-bold green--text">
                    JAN 2020
                  </div>
                </v-col>
                <v-col class="pl-2">
                  <strong
                    >Front-End Developer</strong
                  >
                  <div class="caption mb-2">{{ $t("art_chung") }}</div>
                </v-col>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="green" small>
              <v-layout>
                <v-col cols="4">
                  <div class="caption font-weight-bold green--text">
                    JUL 2018 -
                  </div>
                  <div class="caption font-weight-bold green--text">
                    MAY 2019
                  </div>
                </v-col>
                <v-col xs8 class="pl-2">
                  <strong
                    >Front-End Developer
                   </strong
                  >
                  <div class="caption mb-2">{{ $t("art_rock") }}</div>
                </v-col>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-col>

      <v-col cols="12" sm="6" class="mt-4 pt-4">
        <h2 class="mb-4 pl-4 pt-2">{{ $t("art_education") }}</h2>
        <v-card-text class="py-0">
          <v-timeline align-top dense>
            <v-timeline-item color="green" small>
              <v-layout>
                <v-col cols="4">
                  <div class="caption font-weight-bold green--text">
                    SEP 2017 -
                  </div>
                  <div class="caption font-weight-bold green--text">
                    PRESENT
                  </div>
                </v-col>
                <v-col class="pl-2 subheading">
                  <strong>{{ $t("art_master") }}</strong>
                  <div class="caption mb-2">{{ $t("art_chiayi") }}</div>
                </v-col>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="green" small>
              <v-layout>
                <v-col cols="4">
                  <div class="caption font-weight-bold green--text">
                    SEP 2011 -
                  </div>
                  <div class="caption font-weight-bold green--text">
                    MAY 2015
                  </div>
                </v-col>
                <v-col class="pl-2 subheading">
                  <strong>{{ $t("art_bachelor") }}</strong>
                  <div class="caption mb-2">{{ $t("art_taitung") }}</div>
                </v-col>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-col>

      <v-col cols="12" sm="2" class="pt-4">
        <h2>
          <span>F2E</span>
          <span class="green--text">Skills</span>
        </h2>
      </v-col>
      <v-col cols="12" sm="4" class="pt-4">
        <strong v-for="(item,i) in op" :key="`${i}_${item}`" class="op">{{item}}</strong>
      </v-col>

      <v-col cols="12" sm="2" class="pt-4">
        <h2>
          <span>Design</span>
          <span class="green--text">Skills</span>
        </h2>
       </v-col>
      <v-col cols="12" sm="4" class="pt-4">
        <strong v-for="(item,i) in opUI" :key="`${i}_${item}`" class="op">{{item}}</strong>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Resume',
    titleTemplate: "%s ← poca's web",
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,maximum-scale=1'
      },
      {
        name: 'description',
        content:
          'Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "poca' web" },
      { property: 'og:site_name', content: "poca' web" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://poca.github.io/poca' },
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
      op: [
        'VUE',
        'React',
        'Redux',
        'front-end SSR',
        'Webpack setting',
        'Scrum',
        'game web',
        'SEO & Speed optimization'
      ],
      opUI: [
        'CSS3 Animation', 'Photoshop', 'Illustrator', 'Premiere'
      ]
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
strong.op{
   display: inline-flex;
   white-space:nowrap;
   width: 100%;
   padding: 0 20px;
}
</style>
