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
            text: "NativeScript Plugins",
            link: "/docs/getting-started/nativescript-plugins",
          },
          { text: "Vue Plugins", link: "/docs/getting-started/vue-plugins" },
          { text: "Vue Devtools", link: "/docs/getting-started/vue-devtools" },
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
          { text: "Manual Router", link: "/docs/routing/manual-routing" },
          { text: "Vue Router", link: "/docs/routing/vue-router" },      
        ],
      },
      {
        text: "Utilities",
        items: [
          { text: "v-template", link: "/docs/utilities/v-template" },
          { text: "v-view", link: "/docs/utilities/v-view" },
        ],
      },
      {
        text: "Elements",
        items: [
          { text: "Absolute Layout", link: "/docs/elements/layouts/absolute-layout.md" },
          { text: "Dock Layout", link: "/docs/elements/layouts/dock-layout.md" },
          { text: "Flexbox Layout", link: "/docs/elements/layouts/flexbox-layout.md" },
          { text: "GridLayout", link: "/docs/elements/layouts/grid-layout.md" },
          { text: "StackLayout", link: "/docs/elements/layouts/stack-layout.md" },
          { text: "WrapLayout", link: "/docs/elements/layouts/wrap-layout.md" },
        ],
      },
      {
        text: "Elements : Action Bar",
        items: [
          { text: "Action Bar", link: "/docs/elements/action-bar" },
          { text: "Action Item", link: "/docs/elements/action-item" },
          { text: "Navigation Button", link: "/docs/elements/navigation-button" }
        ],
      },
      {
        text: "Elements : Components",
        items: [
          { text: "Activity Indicator", link: "/docs/components/activity-indicator" },
          { text: "Button", link: "/docs/components/button" },
          { text: "DatePicker", link: "/docs/components/date-picker" },
          { text: "Label", link: "/docs/components/label" },
          { text: "ListPicker", link: "/docs/components/list-picker" },
          { text: "Progress", link: "/docs/components/progress" },
          { text: "SearchBar", link: "/docs/components/search-bar" },
          { text: "Slider", link: "/docs/components/slider" },
          { text: "Switch", link: "/docs/components/switch" },
          { text: "TextField", link: "/docs/components/text-field" },
          { text: "TextView", link: "/docs/components/text-view" },
          { text: "TimePicker", link: "/docs/components/time-picker" },
        ]
      },
      {
        text: "Elements : Dialogs",
        items: [
          { text: "Alert", link: "/docs/dialogs/alert" },
          { text: "Confirm", link: "/docs/dialogs/confirm" },
          { text: "Prompt", link: "/docs/dialogs/prompt" },
          { text: "Login", link: "/docs/dialogs/login" },
          { text: "Action Sheet", link: "/docs/dialogs/action-sheet" },
        ]
      }
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
