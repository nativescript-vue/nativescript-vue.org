---
title: Templates
contributors: [rigor789, tralves, jlooper, lewebsimple]
outdated: false
---

This page serves as an overview of the currently supported templates that you can use to get started with NativeScript-Vue.
It is also assumed that you have [set up your system for NativeScript development](/en/docs/getting-started/installation).

> This list will be updated as new templates come up, or old templates get deprecated.

**Currently supported templates:**

* [nativescript-vue/vue-cli-template](#nativescript-vuevue-cli-template) 
* [nativescript-vue/nativescript-vue-template](#nativescript-vuenativescript-vue-template) 

**Deprecated templates:**

* [tralves/nativescript-vue-webpack-template](https://github.com/tralves/nativescript-vue-webpack-template/)

## nativescript-vue/vue-cli-template

Project link: [https://github.com/nativescript-vue/vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)

**Features:**
* `.vue` single file components
* Vuex &mdash; state management (opt-in)
* VueRouter &mdash; routing (opt-in) &mdash; **experimental!**
* NativeScript themes

You can use [Vue CLI](https://github.com/vuejs/vue-cli) to bootstrap your NativeScript-Vue app. Out of the box, this template provides support for [Vuex](https://vuex.vuejs.org/en/), the [Vue Router](https://github.com/vuejs/vue-router), and [NativeScript themes](https://docs.nativescript.org/ui/theme). Originally built by [Pascal Martineau](https://github.com/lewebsimple/), this template is now officially supported for NativeScript-Vue development.

**Usage:**

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

Project link: [https://github.com/nativescript-vue/nativescript-vue-template](https://github.com/nativescript-vue/nativescript-vue-template)

**Features:**
* Pure JS &mdash; no `.vue` files
* NativeScript themes

This template is the simplest way you can develop your app with NativeScript-Vue. It does not require an extra build step, because the components / application is written in pure `.js` files. 

**Usage:**

```shell
$ tns create <project-name> --template nativescript-vue-template
$ cd <project-name>
$ tns run android
$ # or
$ tns run ios
```
