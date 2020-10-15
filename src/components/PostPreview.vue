<template>
  <v-flex xs12 sm6 md4 lg4 xl4 >
    <v-card :to="'/blog/'+id" class="mb-3">
      <v-img :src="thumbnailImage" aspect-ratio="2.75" height="230" :alt="title"></v-img>
      <v-card-title primary-title class="">
        <div>
          <h3 class="headline mb-0 textNobreak wordbreak">{{title}}</h3>
          <div>
            <p class="green--text font-weight-medium pt-3 wordbreak">{{excerpt}}</p>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style >
.blog_list {
  padding: 1rem 2rem !important;
  height: 400px;
  margin: 2rem;
}
.textNobreak {
  word-break: normal;
  font-family: "Microsoft JhengHei", sans-serif !important;
}
.hightlimt {
  height: 170px;
}
</style>
