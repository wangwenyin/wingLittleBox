import DefaultTheme from "vitepress/theme";
import MovieNowPlaying from "./components/MovieNowPlaying.vue";
 
export default {
  ...DefaultTheme,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app }) {
    app.component("MovieNowPlaying", MovieNowPlaying);
  },
};
