<template>
  <v-container grid-list-md>
    <v-layout  row wrap  class="my-4 pt-4 blogTop ">

        <PostPreview
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnailImage="post.thumbnailUrl"
          :id="post.id"
        />

    </v-layout>
  </v-container>
</template>

<script>
import PostPreview from '../components/PostPreview'
import StoryblokClient from 'storyblok-js-client'
const token = 'mUT1Vr0FJ9aOLrdlHaMSbQtt'
let storyapi = new StoryblokClient({
  accessToken: token
})

export default {
  metaInfo: {
    title: 'Blog',
    titleTemplate: "%s ← poca's web",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1' },
      {
        name: 'description',
        content: "poca chen's Blog"
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "poca' web" },
      { property: 'og:site_name', content: "poca' web" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://poca.github.io/poca/' },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/Dcz2PGx.jpg'
      },
      {
        property: 'og:description',
        content: "poca chen's Blog"
      }
    ]
  },
  data () {
    return {
      posts: []
    }
  },

  created () {
    window.storyblok.init({
      accessToken: token
    })
    window.storyblok.on('change', () => {
      // console.log("change-clik")
      this.getStory('article', 'draft')
    })
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory('article', 'draft')
      } else {
        this.getStory('article', 'published')
      }
    })
  },

  methods: {
    getStory (version) {
      storyapi
        .get('cdn/stories', {
          version: 'draft',
          starts_with: 'article/'
        })
        .then(res => {
          this.posts = res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summary,
              thumbnailUrl: bp.content.teaser_image
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  components: {
    PostPreview
  }
}
</script>

<style scoped>
.blogTop{
  margin-top: 6vh !important;
}
</style>
