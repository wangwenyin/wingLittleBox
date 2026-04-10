import { h } from "vue";
import moveLife from "./components/movie-life.vue";
 
import DefaultTheme from "vitepress/theme";
 
export default {
  ...DefaultTheme,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    app.component("MoveLife", moveLife);
  },
};