import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import GiscusComments from './components/GiscusComments.vue'
import MovieNowPlaying from './components/MovieNowPlaying.vue'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-after': () => h(GiscusComments)
    }),
  NotFound: () => '404',
  enhanceApp({ app }) {
    app.component('MovieNowPlaying', MovieNowPlaying)
  }
}

export default theme
