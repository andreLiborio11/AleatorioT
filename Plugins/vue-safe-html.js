import Vue from 'vue'
import VueSafeHTML, { allowedTags } from 'vue-safe-html'

Vue.use(VueSafeHTML, {
  allowedTags: [...allowedTags, 'marquee', 'blockquote','span', 'p','h1','h2','u','s','ul','ol','li'],
})
