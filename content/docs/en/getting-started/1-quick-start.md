---
title: Quick Start
contributors: [rigor789, eddyverbruggen, damain, ikoevska, jlooper]
---

If you don't want the hassle of installing and configuring your system before you can have a taste of NativeScript-Vue, the [NativeScript Playground](/en/docs/getting-started/playground-tutorial) has you covered.

But if [you already have your system ready for native development](/en/docs/getting-started/installation), you can start by using the [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template):

**Supported features**

-   `.vue` single file components
-   Vuex&mdash;state management (opt-in)
-   NativeScript themes
-   Application presets

> **Note**: If you choose to install DevTools, you won't be able to use `tns preview`, as the Preview app doesn't support one of the plugins DevTools uses.

```shell
$ ns create <project-name> --vue # add --ts if you'd like to scaffold a project with TypeScript
$ cd <project-name>
$
$ npm install
$ # or
$ yarn install
$
$ ns run
```
