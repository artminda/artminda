<template>
  <v-container grid-list-md class="potfolio_top">
    <v-flex column xs12>

    <h2 class="pl-4 xs12">
      <span>Graphic</span>
      <span class="green--text">Portfolio</span>
    </h2>

    <v-row :justify="'space-between'">
    <v-col xs="5" md="2">
      <v-select
      v-model="select"
      class="my-2 pl-4"
      :items="items"
      label="select"
      dense
      single-line
    ></v-select>
    </v-col>
    <v-col xs="5" md="3">
    <v-btn large text to="/portfolio" class="green--text xs4 md2">
      <v-icon>arrow_back</v-icon>Back to portfolio
    </v-btn>
    </v-col>
    </v-row>

    </v-flex>
    <v-layout row justify-center align-center wrap class="">
      <!-- <transition-group> -->
      <v-dialog
        v-model="image.dialog"
        max-width="800"
        v-for="image in reversed"
        :key="image.poster"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover text color="transparent">
              <v-img
                :src="image.poster"
                height="230"
                :position="image.position"
                :alt="image.title"
                lazy-src="https://i.imgur.com/MrbPiPS.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{image.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="image.dialog">
          <v-img :src="image.poster"></v-img>
        </v-card>
      </v-dialog>
      <!-- </transition-group> -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Graphic Portfolio ',
    titleTemplate: "%s ← poca's web",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1' },
      {
        name: 'description',
        content:
          "poca chen's Graphic Adobe PhotoShop Logo Design Instagram Poster"
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
          "poca chen's Graphic Adobe PhotoShop Logo Design Instagram Poster"
      }
    ]
  },
  data () {
    return {
      select: 'ALL',
      dialog: false,
      items: [
        'ALL', 'BANNER', 'LOGO', 'PACKAGE', 'PRINT', 'EXHIBITION'
      ],
      images: [
        {
          type: 'LOGO',
          dialog: false,
          title: 'poca Logo',
          poster: 'https://i.imgur.com/Fj5l6Ka.jpg'
        },
        {
          type: 'LOGO',
          dialog: false,
          title: 'poca Logo',
          poster: 'https://i.imgur.com/WmrQxZ1.jpg'
        },
        {
          type: 'LOGO',
          dialog: false,
          title: 'poca Logo',
          poster: 'https://i.imgur.com/eb7P9S5.jpg'
        },
        {
          type: 'LOGO',
          dialog: false,
          title: 'poca Logo',
          poster: 'https://i.imgur.com/ovRIoIK.jpg'
        },
        {
          type: 'LOGO',
          dialog: false,
          title: 'city boyz',
          poster: 'https://i.imgur.com/3spNE3i.jpg'
        },
        // {
        //   type: 'LOGO',
        //   dialog: false,
        //   title: 'practice',
        //   poster: 'https://i.imgur.com/sNBBULk.jpg'
        // },
        // {
        //   type: 'LOGO',
        //   dialog: false,
        //   title: 'practice',
        //   poster: 'https://i.imgur.com/Q4U4RNT.jpg'
        // },
        {
          type: 'LOGO',
          dialog: false,
          title: '甘丹數位學院',
          poster: 'https://i.imgur.com/xYW1cbS.jpg'
        },
        {
          type: 'LOGO',
          dialog: false,
          title: 'poople',
          poster: 'https://i.imgur.com/u27mcm9.jpg'
        },
        {
          type: 'LOGO',
          dialog: false,
          title: 'practice',
          poster: 'https://i.imgur.com/McRCner.jpg'
        },
        {
          type: 'BANNER',
          dialog: false,
          title: 'new year',
          poster: 'https://i.imgur.com/MzpCn4D.jpg'
        },
        {
          type: 'BANNER',
          dialog: false,
          title: 'new year',
          poster: 'https://i.imgur.com/MkXsTf2.jpg'
        },
        // {
        //   type: 'BANNER',
        //   dialog: false,
        //   title: 'practice',
        //   poster: 'https://i.imgur.com/yFwNQcC.jpg'
        // },
        // {
        //   type: 'BANNER',
        //   dialog: false,
        //   title: 'practice',
        //   poster: 'https://i.imgur.com/Dz6iBC5.jpg'
        // },
        // {
        //   position: 'top',
        //   type: 'UI',
        //   dialog: false,
        //   title: 'practice',
        //   poster: 'https://i.imgur.com/OwYp710.jpg'
        // },
        // {
        //   position: 'top',
        //   type: 'UI',
        //   dialog: false,
        //   title: 'practice',
        //   poster: 'https://i.imgur.com/Ie7oZtj.jpg'
        // },
        {
          type: 'PACKAGE',
          dialog: false,
          title: 'Skincare package',
          poster: 'https://i.imgur.com/5Ypmb4T.jpg'
        },
        {
          type: 'PACKAGE',
          dialog: false,
          title: 'Skincare package',
          poster: 'https://i.imgur.com/SlEcwAS.jpg'
        },
        {
          type: 'PACKAGE',
          dialog: false,
          title: 'Skincare package',
          poster: 'https://i.imgur.com/7LrgaTn.jpg'
        },
        {
          type: 'PACKAGE',
          dialog: false,
          title: 'Skincare package',
          poster: 'https://i.imgur.com/sgzGXjW.jpg'
        },
        {
          position: 'bottom',
          type: 'PRINT',
          dialog: false,
          title: 'Skincare adv',
          poster: 'https://i.imgur.com/kABMfXy.jpg'
        },
        {
          position: 'bottom',
          type: 'PRINT',
          dialog: false,
          title: 'Skincare adv',
          poster: 'https://i.imgur.com/1OlMiCy.jpg'
        },
        {
          position: 'bottom',
          type: 'PRINT',
          dialog: false,
          title: 'Skincare adv',
          poster: 'https://i.imgur.com/x1OrJCL.jpg'
        },
        {
          position: 'top',
          type: 'PRINT',
          dialog: false,
          title: 'I-AN adv',
          poster: 'https://i.imgur.com/0p4GYNP.jpg'
        },
        {
          type: 'PRINT',
          dialog: false,
          title: '愛之味 adv',
          poster: 'https://i.imgur.com/JdiZbux.jpg'
        },
        {
          position: 'bottom',
          type: 'PRINT',
          dialog: false,
          title: 'T-shirt',
          poster: 'https://i.imgur.com/FRdKHZS.jpg'
        },
        {
          type: 'PRINT',
          dialog: false,
          title: 'toy',
          poster: 'https://i.imgur.com/gKJIYMg.jpg'
        },
        {
          type: 'EXHIBITION',
          dialog: false,
          title: '頂員林埤濕地保育展',
          poster: 'https://i.imgur.com/fFn59iD.jpg'
        },
        {
          type: 'EXHIBITION',
          dialog: false,
          title: '頂員林埤濕地保育展',
          poster: 'https://i.imgur.com/FgH4lci.jpg'
        }
      ]
    }
  },
  computed: {
    reversed () {
      if (this.select === 'ALL') {
        return this.images
      }
      return this.images.filter(item => item.type === this.select)
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
.item {
  width: 2rem;
}
</style>
