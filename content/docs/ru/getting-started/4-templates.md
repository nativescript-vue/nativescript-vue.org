---
title: Templates
contributors:
  - rigor789
  - tralves
  - jlooper
  - lewebsimple
  - ikoevska
outdated: false
---
This page provides an overview of the templates that you can use to develop apps with NativeScript-Vue. The list is updated as new templates come up or old templates become deprecated.

> **NOTE:** To use any of the listed templates, you need to [set your system up for NativeScript development](/en/docs/getting-started/installation).

**Currently supported templates:**

* [nativescript-vue/vue-cli-template](#nativescript-vuevue-cli-template) 
* [nativescript-vue/nativescript-vue-template](#nativescript-vuenativescript-vue-template) 

**Deprecated templates:**

* [tralves/nativescript-vue-webpack-template](https://github.com/tralves/nativescript-vue-webpack-template/)

## nativescript-vue/vue-cli-template

**Project link:** <https://github.com/nativescript-vue/vue-cli-template>

**Features**

* `.vue` single file components
* Vuex&mdash;state management (opt-in)
* Vue Router&mdash;routing (opt-in)&mdash;**experimental**
* NativeScript themes

Use this template to develop your app from the [Vue CLI](https://github.com/vuejs/vue-cli) and design it around `.vue` file components. Out-of-the-box, the template also provides advanced Vue functionality ([Vuex](https://vuex.vuejs.org/en/) and [Vue Router](https://github.com/vuejs/vue-router)) and support for [NativeScript themes](https://docs.nativescript.org/ui/theme).

Functionality-wise, the template is a spin-off of the basic template for NativeScript development and implements a simple button-controlled counter.

Originally built by [Pascal Martineau](https://github.com/lewebsimple/), this template is now officially supported for NativeScript-Vue.

**Usage**

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ npm run watch:android
$ # or
$ npm run watch:ios
```

## nativescript-vue/nativescript-vue-template

**Project link:** <https://github.com/nativescript-vue/nativescript-vue-template>

**Features**

* Pure JavaScript&mdash;no `.vue` files
* NativeScript themes

Use this template to develop your app from the [NativeScript CLI](https://github.com/NativeScript/nativescript-cli), using only JavaScript.

Functionality-wise, the template is a spin-off of the basic template for NativeScript development and implements a simple button-controlled counter.

**Usage**

```shell
$ tns create <project-name> --template nativescript-vue-template
$ cd <project-name>
$ tns run android
$ # or
$ tns run ios
```