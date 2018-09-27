---
title: Шаблоны
contributors: [sn0wil]
outdated: false
---

Эта страница сожержит обзор актуальных в настоящий момент шаблонов, которые вы можете использовать для начала работы с NativeScript-Vue. Подразумевается, что вы уже [подготовили вашу систему для разработки с NativeScript](/ru/docs/getting-started/installation).

> Этот список будет обновляться, так как шаблоны появляются и устаревают.

**Актуальные шаблоны:**

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

Вы можете использовать [Vue CLI](https://github.com/vuejs/vue-cli) для загрузки вашего NativeScript-Vue приложения. Из коробки этот шаблон обеспечивает поддержку [Vuex](https://vuex.vuejs.org/ru/), [Vue Router](https://github.com/vuejs/vue-router) и [Темы NativeScript](https://docs.nativescript.org/ui/theme). Этот шаблон, сделанный [Pascal Martineau](https://github.com/lewebsimple/), поддерживается официально и рекомендуется для использования с NativeScript-Vue.

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

Это простой шаблон для разработки приложений с использованием NativeScript-Vue. Он не требует лишних шагов для сборки, потому что компоненты реализованы на чистых `.js` файлах.

**Использование:**

```shell
$ tns create <project-name> --template nativescript-vue-template
$ cd <project-name>
$ tns run android
$ # или
$ tns run ios
```
