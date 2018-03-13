---
title: Templates
contributors: [rigor789, tralves, jlooper, lewebsimple]
outdated: false
---

You can use the [Vue CLI](https://github.com/vuejs/vue-cli) with a custom template to bootstrap your `nativescript-vue` app. Out of the box, this template provides support for Vuex, the Vue Router, and NativeScript themes. Originally built by [Pascal Martineau](https://github.com/lewebsimple/), this template is now officially supported for NativeScript-Vue development.

## Scaffold your app with a Vue CLI template

#### Project link

[](https://github.com/nativescript-vue/vue-cli-template)

#### Description

Use this template to scaffold a basic NativeScript-Vue app. Depending on your choices during the pre-installation prompts, your app will include a [Vuex](https://vuex.vuejs.org/en/) integration, use the [router](https://github.com/vuejs/vue-router), and include single-file components. You can also add a NativeScript [theme](https://docs.nativescript.org/ui/theme).

#### Installation

You will need to have the [Vue CLI](https://github.com/vuejs/vue-cli) installed, as well as [NativeScript](https://docs.nativescript.org/). Follow NativeScript's [installation guide](https://docs.nativescript.org/start/quick-setup) which delineates the steps you need to take to build NativeScript apps.

#### Installation

```shell
$ vue init nativescript-vue/vue-cli-template <project-name>
```

*Follow the [project link](https://github.com/nativescript-vue/vue-cli-template) for further instructions.*

## Build an app with web/mobile code sharing potential

#### Project link

[](https://github.com/nativescript-vue/nativescript-vue-webpack-template)

#### Description

The webpack template leverages webpack to provide the same functionality as the rollup counterpart. It is evolving to support code sharing, i.e., create projects that share as much of the logic as possible between a web build and the native (android/iOS) builds.

 Features:

- livereload;
- .vue Single-File Components;
- scss imports and scss inside `<style>` tags in .vue files;
- babel with `es2015` and `stage-2` presets;
- (soon) native/web code sharing;

#### Installation

```shell
$ tns create sample-app --template https://github.com/tralves/nativescript-vue-webpack-template
```

*Follow the [project link](https://github.com/tralves/nativescript-vue-webpack-template) for further instructions.*
