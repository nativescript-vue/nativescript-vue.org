---
title: Шаблоны
contributors: [rigor789, tralves, jlooper, lewebsimple, sn0wil]
outdated: false
---

Эта страница сожержит обзор поддерживаемых в настоящий момент шаблонов, которые вы можете использовать для начала работы с NativeScript-Vue. Это также подразумевает, что [подготовили вашу систему для разработки с NativeScript](/en/docs/getting-started/installation)

> Этот список будет обновляться, так как появляются новые шаблоны, а некоторые становятся устаревшими. 

**Шаблоны, поддерживаемые в настоящее время:**

* [nativescript-vue/vue-cli-template](#nativescript-vuevue-cli-template) 
* [nativescript-vue/nativescript-vue-template](#nativescript-vuenativescript-vue-template) 

**Устаревшие шаблоны:**

* [tralves/nativescript-vue-webpack-template](https://github.com/tralves/nativescript-vue-webpack-template/)

## nativescript-vue/vue-cli-template

Ссылка на проект: [https://github.com/nativescript-vue/vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)

**Возможности:**
* `.vue` однофайловые компоненты 
* Vuex &mdash;  управление состоянием (опционально)
* VueRouter &mdash; роутинг (опционально) &mdash; **экспериментально!**
* Темы NativeScript

Вы можете использовать [Vue CLI](https://github.com/vuejs/vue-cli) для загрузки вашего NativeScript-Vue приложения. Из коробки этот шаблон обеспеччивает поддержку [Vuex](https://vuex.vuejs.org/ru/), [Vue Router](https://github.com/vuejs/vue-router) и[Темы NativeScript](https://docs.nativescript.org/ui/theme). Изначально сделанный [Pascal Martineau](https://github.com/lewebsimple/),этот шаблон является официально поддерживаемым для разработки с использованием NativeScript-Vue.

**Использование:**

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ npm run watch:android
$ # или
$ npm run watch:ios
```

## nativescript-vue/nativescript-vue-template

Ссылка на проект: [https://github.com/nativescript-vue/nativescript-vue-template](https://github.com/nativescript-vue/nativescript-vue-template)

**Возможности:**
* Чистый JS &mdash; без `.vue` файлов
* Темы NativeScript

Этот шаблон - простой способ раработки прилодежений с использованием NativeScript-Vue. Он не требует лишних шагов для сборки, потому что компоненты / приложение реализован на чистых `.js` файлах. 

**Использование:**

```shell
$ tns create <project-name> --template nativescript-vue-template
$ cd <project-name>
$ tns run android
$ # или
$ tns run ios
```
