import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import VueAnalytics from 'vue-analytics'
import English from './lang/en.js'
import tw from './lang/tw.js'
import lottie from 'vue-lottie';

Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === "production"

Vue.component('lottie', lottie)

Vue.use(VueI18n)
const locale = localStorage.getItem('lang') || 'English'
const i18n = new VueI18n({
  locale,
  messages: { English, tw }
})
export default i18n

Vue.use(StoryblokVue)
// Vue.use(VueAnalytics, {
//   id: 'UA-139190314-1',
//   router,
//   debug: {
//     enabled: !isProd,
//     sendHitTask: isProd
//   }
// })

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')