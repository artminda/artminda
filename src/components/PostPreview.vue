<template>
  <v-flex xs12 sm6 md4 lg4 xl4 class="blog_list">
    <v-card :to="'/blog/'+id" >
      <v-img :src="thumbnailImage" aspect-ratio="2.75" height="230" :alt="title"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0 textNobreak">{{title}}</h3>
          <div>
            <p class="green--text font-weight-medium pt-3">{{excerpt}}</p>
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
};
</script>

<style >
.blog_list {
  padding: 1rem 2rem !important;
  height: 400px;

}
.textNobreak {
  word-break: normal;
   height: 50px;
  font-family: "Microsoft JhengHei", sans-serif !important; 
}
</style>