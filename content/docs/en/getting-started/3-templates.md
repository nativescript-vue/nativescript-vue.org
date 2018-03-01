---
title: Templates
contributors: [rigor789, tralves, damain]
outdated: false
---

## vue-cli-template

#### Project link

[](https://github.com/nativescript-vue/vue-cli-template)

#### Description

This is the currently recommended template. It uses the vue-cli to scaffold your app and prompts for configuration settings when it is creating the app. It uses webpack to build your app.

It supports:

- faster livereload;
- .vue Single-File Components;
- scss imports and scss inside `<style>` tags in .vue files;
- uses `~` to refer to the `src/assets` folder e.g. <Image src="~/images/NativeScript-Vue.png"/>
- support for plugins
#### Installation
*platform is either `ios` or `android`
``` sh
$ npm install -g vue-cli
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ npm run watch:<platform>

```

*Follow the [project link](https://github.com/nativescript-vue/vue-cli-template) for further instructions.*

---

## Older Methods

You can still use NativeScript's [template system](https://docs.nativescript.org/tooling/app-templates) to bootstrap your `nativescript-vue` app. All these templates generate a NativeScript app that uses the `nativescript-vue` plugin. Some templates are equipped with more features such as support for Vue.js Single File Components (`.vue`) and livereload.

## nativescript-vue-template

#### Project link

[](https://github.com/tralves/nativescript-vue-template)

#### Description

This one the most basic template. It contains a number of app samples that you can use as the starting point of your app. To try them, copy and paste the code from `app-with-list-view.js`, `app-with-router.js`, `app-with-tab-view.js`, or `app-with-vmodel.js` into your app’s `app.js` file.

#### Installation

```shell
$ tns create sample-app --template nativescript-vue-template
```

*Follow the [project link](https://github.com/tralves/nativescript-vue-template) for further instructions.*

## nativescript-vue-rollup-template

#### Project link

[](https://github.com/tralves/nativescript-vue-rollup-template)

#### Description
Originally a [fork from rigor789's](https://github.com/rigor789/nativescript-vue-rollup-template), this template is currently the most stable and feature complete. You can see it in action in the [🍏 🍍 🍓 Groceries Vue](https://github.com/tralves/groceries-ns-vue) app.
It supports:

- livereload;
- .vue Single-File Components;
- scss imports and scss inside `<style>` tags in .vue files;
- root imports (imports starting with `/ `refer to the root of the app folder);
- babel with `es2015` and `stage-2` presets;

#### Installation

```shell
$ tns create sample-app --template nativescript-vue-rollup-template
```

*Follow the [project link](https://github.com/tralves/nativescript-vue-rollup-template) for further instructions.*

## nativescript-vue-webpack-template

#### Project link

[](https://github.com/tralves/nativescript-vue-webpack-template)

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
