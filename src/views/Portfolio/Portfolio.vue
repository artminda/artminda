<template>
  <v-container grid-list-md mt-5>
    <v-layout row align-center justify-center wrap class="mt-4 py-2 px-2 portfolio_top">
      <v-flex v-for="portfolio in portfolios" :key="portfolio.src" xs6 sm6 md4 lg4 xl4>
        <v-card
          :to="'/portfolio/'+(portfolio.path).toLowerCase()"
          text
          color="transparent"
          height="230"
          @click.native="portfolioLoading()"
        >
          <v-card-title></v-card-title>
          <v-img :src="portfolio.src" lazy-src="https://i.imgur.com/MrbPiPS.gif" aspect-ratio="2.75" height="130" contain></v-img>
          <v-card-title primary-title class="justify-center">
            <v-flex text-center subheading font-weight-bold>{{portfolio.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio',
    titleTemplate: "%s ← artminda's web",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1' },
      {
        name: 'description',
        content:
          "artminda chen's Portfolio Web Development Video Editing Graphic Design Front-End Advetising"
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
          "artminda chen's Portfolio Web Development Video Editing Graphic Design Front-End Advetising"
      }
    ]
  },
  data () {
    return {
      portfolios: [
        {
          src: 'https://i.imgur.com/nWjbVgU.png',
          title: this.$t('por_web'),
          path: 'Web'
        },
        {
          src: 'https://i.imgur.com/OCabWSH.png',
          title: this.$t('por_vis'),
          path: 'Graphic'
        },
        {
          src: 'https://i.imgur.com/weuqlNn.png',
          title: this.$t('por_video'),
          path: 'Video'
        }
      ]
    }
  },
  methods: {
    portfolioLoading () {

    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio_top {
   margin-top: 3rem !important;
}

@media(min-width: 600px){

.portfolio_top {
    margin-top: 9rem !important;
 }
}
</style>
