<template>
  <v-container grid-list-xl>
    <h2 class="pl-4 xs12 sm4">
      <span>Graphic</span>
      <span class="green--text">Portfolio</span>
    </h2> 
    <v-flex xs6 sm4 md2>
      <v-select
      v-model="select" 
      class="my-2 pl-4"
      :items="items"
      label="select"
      dense
      single-line
    ></v-select>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <!-- <transition-group> -->
      <v-dialog
        v-model="image.dialog"
        lazy
        max-width="800"
        v-for="image in reversed"
        :key="image.poster"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="image.poster"
                height="230"
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
    title: "Graphic Portfolio ",
    titleTemplate: "%s ← artminda's web",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "artminda chen's Graphic Adobe PhotoShop Logo Design Instagram Poster"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "artminda' web" },
      { property: "og:site_name", content: "artminda' web" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://artminda.github.io/artminda" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      {
        property: "og:description",
        content:
          "artminda chen's Graphic Adobe PhotoShop Logo Design Instagram Poster"
      }
    ]
  },
  data() {
    return {
      select: "ALL",
      dialog: false,
      items:[
        "ALL","LOGO","BANNER","UI","PACKAGE"
      ],
      images: [
        { 
          type: "LOGO",
          dialog: false,
          title: "artminda Logo",
          poster: "https://i.imgur.com/Fj5l6Ka.jpg"
        },
        { 
          type: "LOGO",
          dialog: false,
          title: "artminda Logo",
          poster: "https://i.imgur.com/WmrQxZ1.jpg"
        },
        { 
          type: "LOGO",
          dialog: false,
          title: "artminda Logo",
          poster: "https://i.imgur.com/eb7P9S5.jpg"
        },
        { 
          type: "LOGO",
          dialog: false,
          title: "artminda Logo",
          poster: "https://i.imgur.com/ovRIoIK.jpg"
        },
        {
          type: "LOGO",
          dialog: false,
          title: "city boyz",
          poster: "https://i.imgur.com/3spNE3i.jpg"
        },
        {
          type: "LOGO",
          dialog: false,
          title: "rgb practice",
          poster: "https://i.imgur.com/sNBBULk.jpg"
        },
        {
          type: "LOGO",
          dialog: false,
          title: "168 practice",
          poster: "https://i.imgur.com/Q4U4RNT.jpg"
        },
        {
          type: "LOGO",
          dialog: false,
          title: "甘丹數位學院",
          poster: "https://i.imgur.com/xYW1cbS.jpg"
        },
        { 
          type: "LOGO",
          dialog: false,
          title: "poople",
          poster: "https://i.imgur.com/u27mcm9.jpg"
        },
        { 
          type: "LOGO",
          dialog: false,
          title: "practice",
          poster: "https://i.imgur.com/McRCner.jpg"
        },
        { 
          type: "BANNER",
          dialog: false,
          title: "new year",
          poster: "https://i.imgur.com/MzpCn4D.jpg"
        },
        { 
          type: "BANNER",
          dialog: false,
          title: "new year",
          poster: "https://i.imgur.com/MkXsTf2.jpg"
        },
        { 
          type: "BANNER",
          dialog: false,
          title: "practice",
          poster: "https://i.imgur.com/yFwNQcC.jpg"
        },
        { 
          type: "BANNER",
          dialog: false,
          title: "practice",
          poster: "https://i.imgur.com/Dz6iBC5.jpg"
        },
        { 
          type: "UI",
          dialog: false,
          title: "sport practice",
          poster: "https://i.imgur.com/jqDq9R1.png"
        },
        { 
          type: "UI",
          dialog: false,
          title: "practice",
          poster: "https://i.imgur.com/Em4E9Ri.jpg"
        },
         { 
          type: "UI",
          dialog: false,
          title: "practice",
          poster: "https://i.imgur.com/A3hCsYj.jpg"
        },
         { 
          type: "PACKAGE",
          dialog: false,
          title: "Skincare package",
          poster: "https://i.imgur.com/5Ypmb4T.jpg"
        }, 
        { 
          type: "PACKAGE",
          dialog: false,
          title: "Skincare package",
          poster: "https://i.imgur.com/SlEcwAS.jpg"
        }, 
        { 
          type: "PACKAGE",
          dialog: false,
          title: "Skincare package",
          poster: "https://i.imgur.com/7LrgaTn.jpg"
        },
        { 
          type: "PACKAGE",
          dialog: false,
          title: "Skincare package",
          poster: "https://i.imgur.com/sgzGXjW.jpg"
        }
      ]
    };
  },
  computed:{
      reversed(){
        if (this.select === "ALL"){
          return this.images
        }
        return this.images.filter(item => item.type === this.select)
      }
  }
};
</script>

<style scoped>
.item {
  width: 2rem;
}
</style>