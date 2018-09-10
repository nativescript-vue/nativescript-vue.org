---
title: Templates
contributors: [rigor789, tralves, jlooper, lewebsimple, ikoevska]
outdated: false
---

This page provides an overview of how to use a Vue CLI template to scaffold a NativeScript-Vue app.

> **NOTE:** To use a template, you need to [set your system up for NativeScript development](/en/docs/getting-started/installation).

## nativescript-vue/vue-cli-template

**Project link:** [https://github.com/nativescript-vue/vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)

**Features**

-   `.vue` single file components
-   Vuex&mdash;state management (opt-in)
-   Vue Router&mdash;routing (opt-in)&mdash;**experimental**
-   NativeScript themes

Use this template to develop your app from the [Vue CLI](https://github.com/vuejs/vue-cli) and design it around `.vue` file components. Out-of-the-box, the template also provides advanced Vue functionality ([Vuex](https://vuex.vuejs.org/en/) and [Vue Router](https://github.com/vuejs/vue-router)) and support for [NativeScript themes](https://docs.nativescript.org/ui/theme).

Functionality-wise, the template is a spin-off of the basic template for NativeScript development and implements a simple button-controlled counter.

Originally built by [Pascal Martineau](https://github.com/lewebsimple/), this template is now officially supported for NativeScript-Vue.

**Usage**

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```
