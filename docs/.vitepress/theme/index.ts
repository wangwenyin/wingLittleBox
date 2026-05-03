import DefaultTheme from "vitepress/theme";
 
export default {
  ...DefaultTheme,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp() {},
};
