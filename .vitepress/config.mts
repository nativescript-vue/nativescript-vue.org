import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "content",
  title: "NativeScript-Vue",
  description: "Delightful mobile app development.",

  // todo: remove when content is ready
  ignoreDeadLinks: true,

  themeConfig: {
    logo: {
      dark: "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.svg",
      light: "https://art.nativescript-vue.org/NativeScript-Vue.svg",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        items: [
          { text: "Introduction", link: "/docs/introduction" },
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/docs/getting-started/installation" },
          {
            text: "Creating an Application",
            link: "/docs/getting-started/creating-an-application",
          },
          {
            text: "NativeScript Plugins",
            link: "/docs/getting-started/nativescript-plugins",
          },
          { text: "Vue Plugins", link: "/docs/getting-started/vue-plugins" },
          { text: "Vue Devtools", link: "/docs/getting-started/vue-devtools" },
          {
            text: "Template Refs",
            link: "/docs/getting-started/template-refs",
          },
          // { text: "Code Sharing", link: "/docs/getting-started/code-sharing" },
          {
            text: "Upgrade Guide",
            link: "/docs/getting-started/upgrade-guide",
          },
        ],
      },
      {
        text: "Routing",
        items: [
          { text: "Manual routing", link: "/docs/routing/manual-routing" },
          {
            text: "Vue router (Unsupported)",
            link: "/docs/routing/vue-router",
          },
        ],
      },
      {
        text: "Utilities",
        items: [
          {
            text: "NativeScript View",
            link: "/docs/utilities/nativescript-view",
          },
        ],
      },
      {
        text: "Components",
        items: [
          {
            text: "NativeScript Components",
            link: "/docs/elements/components/ns-components",
          },
          {
            text: "ListView",
            link: "/docs/elements/components/list-view",
          },
          {
            text: "RootLayout",
            link: "/docs/elements/components/root-layout",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "discord", link: "https://nativescript.org/discord" },
      {
        icon: "github",
        link: "https://github.com/nativescript-vue/nativescript-vue",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2018-present Igor Randjelovic",
    },
  },
});
