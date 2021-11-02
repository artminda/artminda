<template>
  <v-container grid-list-md class="potfolio_top">
    <h2 class="pl-4">
      <span>Web</span>
      <span class="green--text">Portfolio</span>
    </h2>
    <v-btn large text to="/portfolio" class="green--text xs4 md2 mt-3">
      <v-icon>arrow_back</v-icon>Back to portfolio
    </v-btn>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover text color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{project.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="headline mb-0">
              <span>Technology</span>
            </h3>
            <span v-for="techitem in project.tech" :key="techitem">
              <v-chip color="green" text-color="white" class="mx-1 my-1">{{techitem}}</v-chip>
            </span>
          </v-card-text>
          <v-card-actions>
            <v-btn v-if="project.git" text large dark color="green" :href="project.git" target="_blank">
              <v-icon left>fab fa-github</v-icon>GitHub
            </v-btn>
            <v-btn large text dark color="green" :href="project.demo" target="_blank">
              <v-icon left>fas fa-desktop</v-icon>Demo
              <span v-if="project.title == 'yabo_mobile_practice'" class="ml-1">
                ( vpn required China )
              </span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Web Portfolio',
    titleTemplate: "%s ← poca's web",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1' },
      {
        name: 'description',
        content:
          "poca chen's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
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
          "poca chen's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
      }
    ]
  },
  data () {
    return {
      dialog: false,
      projects: [
        {
          dialog: false,
          title: '搞運彩-即時比分數據平台',
          demo: 'https://getsport.cc/',
          tech: {
            tech1: 'vue',
            tech2: 'Quasar-cli',
            tech3: 'Firebase SDK',
            tech4: 'GA Tag',
            tech5: 'SEO',
            tech6: 'realtime database'
          },
          poster: 'https://i.imgur.com/tWuVmp7.jpg'
        },
        // {
        //   dialog: false,
        //   title: 'KK 彩票',
        //   demo: 'https://poca.github.io/work_copy',
        //   tech: {
        //     tech1: 'vue-cli',
        //     tech2: 'webpack config',
        //     tech3: 'RESTful API',
        //     tech4: 'javascript ES6',
        //     tech5: 'Route',
        //     tech6: 'vuex',
        //     tech8: 'SCSS'
        //   },
        //   poster: 'https://i.imgur.com/Uu2nLat.png'
        // },
        {
          dialog: false,
          title: 'This Site',
          git: 'https://github.com/poca/poca',
          demo: 'https://poca.github.io/poca',
          tech: {
            tech1: 'vue-cli',
            tech2: 'JavaScript',
            tech3: 'vuetify',
            tech4: 'storyblok',
            tech5: 'i18n',
            tech6: 'css 3D transform'
          },
          poster: 'https://i.imgur.com/7MxhQDD.jpg'
        },
        {
          dialog: false,
          title: 'creat_fun',
          git: 'https://github.com/poca/creatFun',
          demo: 'https://poca.github.io/creatFun',
          tech: {
            tech1: 'ui design',
            tech2: 'css',
            tech3: 'html',
            tech4: 'JQery'
          },
          poster: 'https://i.imgur.com/TO4wz9M.jpg'
        },
        {
          dialog: false,
          title: 'My Old Web Portfolio',
          git: 'https://github.com/poca/poca-old',
          demo: 'https://poca.github.io/poca-old',
          tech: {
            tech1: 'ui design',
            tech2: 'bootstrap'
          },
          poster: 'https://i.imgur.com/5KnIrGS.jpg'
        },
        {
          dialog: false,
          title: 'oasis bitcoin',
          git: 'https://github.com/poca/oasis',
          demo: 'http://poca.byethost17.com',
          tech: {
            tech1: 'ui design',
            tech2: 'bootstrap',
            tech3: 'php'
          },
          poster: 'https://i.imgur.com/Tm5cS5K.jpg'
        },
        {
          dialog: false,
          title: 'Admin dashboard',
          git: 'https://github.com/poca/poca-management',
          demo: 'https://poca.github.io/poca-management/',
          tech: [
            'vue cli',
            'JavaScript',
            'sass',
            'element ui',
            'proxy api'
          ],
          poster: 'https://i.imgur.com/0kctvSn.jpg'
        },
        // {
        //   dialog: false,
        //   title: "GraphQL practice",
        //   git: "https://github.com/EldinZaimovic/SnowBall-Project",
        //   demo: "https://poca.github.io/GraphQL-practice/index.html",
        //   tech: {
        //     tech1: "VUE",
        //     tech2: "GraphQL",
        //     tech3: "Axios",
        //     tech4: "JavaScript"
        //   },
        //   poster: "https://i.imgur.com/rXHBs36.png"
        // },
        {
          dialog: false,
          title: 'Lodash practice',
          git: 'https://github.com/poca/Lodash-practice',
          demo: 'https://poca.github.io/Lodash-practice/index.html',
          tech: {
            tech1: 'VUE',
            tech2: 'Lodash',
            tech3: 'HTML',
            tech4: 'JavaScript'
          },
          poster: 'https://i.imgur.com/kCN1CFH.png'
        },
        {
          dialog: false,
          title: 'poople',
          git: 'https://github.com/poca/poople',
          demo: 'https://poca.github.io/poople/',
          tech: {
            tech1: 'bootstrp',
            tech2: 'RWD',
            tech3: 'HTML'
          },
          poster: 'https://i.imgur.com/VDE7Bdp.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.potfolio_top{
  margin-top: 13vh;
  @media (max-width:960px){
     margin-top: 11vh;
  }
}

</style>
