<template>
  <v-container grid-list-md>
    <v-layout row justify-center  wrap class="mt-5 my-3 pt-3">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4 mt-2">
          <span>{{$t("art_my")}}</span>
          <span class="green--text">{{$t("art_ser")}}</span>
        </h2>
      </v-flex>

      <v-flex v-for="service in services" :key="service.src" xs12 sm6 lg3 xl3>
         <v-expansion-panels popout  class="hidden-lg-and-up">
          <v-expansion-panel >
            <v-expansion-panel-header class="justify-center align-center">
              <v-img
                :src="service.src"
                max-width="111"
                width="88"
                height="100"
                aspect-ratio="2.75"
                :alt="'poca do '+service.title"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
                contain
              ></v-img>
              <h4 class="text-center">
              {{service.title}}</h4></v-expansion-panel-header>
            <v-expansion-panel-content v-html="service.content"></v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-card text color="transparent" :style="{'cursor':'context-menu'}" class="hidden-md-and-down">
          <v-card-title></v-card-title>
          <v-img
            :src="service.src"
            height="100"
            aspect-ratio="2.75"
            :alt="'poca do '+service.title"
            lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
            contain
          ></v-img>
          <v-card-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{service.title}}</v-flex>
          </v-card-title>
          <v-card-text v-html="service.content">
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <span>{{$t("art_my")}}</span>
          <span class="green--text">{{$t("art_cli")}}</span>
        </h2>
      </v-flex>

      <v-flex v-for="client in clients" :key="client.name" xs5 sm4 md3 lg2 xl2>

            <v-img
               style="filter:contrast(50%);"
              :src="client.src"
              :alt="client.name+' logo'"
              lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              height="100"
              outlined="true"
              contain
            >
            </v-img>

      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Services',
    titleTemplate: "%s ← poca's web",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1' },
      {
        name: 'description',
        content:
          "poca chen's Services Web Development Video Editing Graphic Design Front-End Advetising"
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
          "poca chen's Services Web Development Video Editing Graphic Design Front-End Advetising"
      }
    ]
  },
  data () {
    return {
      clients: [
        {
          name: '元美電器',
          src: 'https://i.imgur.com/kW3Mvd2.png',
          href: 'https://www.facebook.com/am2213113/'
        },
        {
          name: '怡安藥局',
          src: 'https://i.imgur.com/rHOZNe9.png',
          href:
            'https://www.facebook.com/pages/%E6%80%A1%E5%AE%89%E8%97%A5%E5%B1%80/157407534395817'
        },
        {
          name: '大林濕地保育協會',
          src: 'https://i.imgur.com/qTTPaw0.png',
          href: ''
        },
        {
          name: 'taxi',
          src: 'https://i.imgur.com/dwGsXlO.png',
          href: ''
        },
        {
          name: 'spa',
          src: 'https://i.imgur.com/NRedBVN.png',
          href: ''
        }
      ],
      services: [
        {
          src: 'https://i.imgur.com/nWjbVgU.png',
          title: this.$t('art_ser_dev'),
          content: `<div class="services_cont"><ul><li>${this.$t('ser_front_data')}</li><li>${this.$t('ser_front_opt')}</li><li>${this.$t('ser_front_api')}</li></ul></div>`
        },
        {
          src: 'https://i.imgur.com/OCabWSH.png',
          title: this.$t('art_ser_web'),
          content: `<div class="services_cont"><ul><li>${this.$t('ser_front_vis')}</li><li>${this.$t('ser_front_web')}</li><li>${this.$t('ser_front_rwd')}</li></ul></div>`
        },
        {
          src: 'https://i.imgur.com/oMftESd.png',
          title: this.$t('art_ser_pack'),
          content: `<div class="services_cont"><ul><li>${this.$t('ser_front_iden')}</li><li>${this.$t('ser_front_envir')}</li><li>${this.$t('ser_front_shock')}</li></ul></div>`
        },
        {
          src: 'https://i.imgur.com/weuqlNn.png',
          title: this.$t('art_ser_video'),
          content: `<div class="services_cont"><ul><li>${this.$t('ser_front_video')}</li><li>${this.$t('ser_front_ani')}</li><li>${this.$t('ser_front_feff')}</li></ul></div>`
        }
      ]
    }
  }
}
</script>
<style >

.v-img--reveal {
  opacity: 0.3;
}
.services_cont {
  text-align-last: left;
    padding: 1em 2em;
    background: rgb(85, 181, 89);
    color: rgb(251, 251, 251);
    width: 100%;
}
.v-card__text{
    padding: 16px 0 0 0;
}
</style>
