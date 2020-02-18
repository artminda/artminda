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
                :alt="'artminda do '+service.title"
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
            :alt="'artminda do '+service.title"
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
      <v-flex xs12 sm12 md12 lg12 xl12>
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
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Services",
    titleTemplate: "%s ← artminda's web",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1,maximum-scale=1" },
      {
        name: "description",
        content:
          "artminda chen's Services Web Development Video Editing Graphic Design Front-End Advetising"
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
          "artminda chen's Services Web Development Video Editing Graphic Design Front-End Advetising"
      }
    ]
  },
  data() {
    return {
      clients: [
        {
          name: "元美電器",
          src: "https://i.imgur.com/kW3Mvd2.png",
          href: "https://www.facebook.com/am2213113/"
        },
        {
          name: "怡安藥局",
          src: "https://i.imgur.com/rHOZNe9.png",
          href:
            "https://www.facebook.com/pages/%E6%80%A1%E5%AE%89%E8%97%A5%E5%B1%80/157407534395817"
        },
        {
          name: "大林濕地保育協會",
          src: "https://i.imgur.com/qTTPaw0.png",
          href: ""
        },
        {
          name: "taxi",
          src: "https://i.imgur.com/dwGsXlO.png",
          href: ""
        },
        {
          name: "spa",
          src: "https://i.imgur.com/NRedBVN.png",
          href: ""
        }
      ],
      services: [
        {
          src: "https://i.imgur.com/nWjbVgU.png",
          title: this.$t("art_ser_dev"),
          content: `<div class="services_cont"><ul><li>前端資料處理</li><li>效能優化</li><li>API串接</li></ul></div>`
        },
        {
          src: "https://i.imgur.com/OCabWSH.png",
          title: "Web Design",
          content: `<div class="services_cont"><ul><li>視覺總體設計</li><li>網站切版</li><li>RWD設計</li></ul></div>`
        },
        {
          src: "https://i.imgur.com/oMftESd.png",
          title: "Package Design",
          content: `<div class="services_cont"><ul><li>視覺識別系統</li><li>環保材質</li><li>防震包材</li></ul></div>`
        },
        {
          src: "https://i.imgur.com/weuqlNn.png",
          title: "Video Editing",
          content: `<div class="services_cont"><ul><li>短片剪接</li><li>特效動畫</li><li>字體特效</li></ul></div>`
        }
      ]
    };
  }
};
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