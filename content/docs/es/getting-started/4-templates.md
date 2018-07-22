---
title: Templates
contributors: [ianaya89]
---

Esta sección provee un resumen sobre los templates que puedes utilizar para desarrollar aplicaciones con NativeScript-Vue. La lista se mantiene actualizada a medida que se crean nuevos templates o se deprecan templates mas antiguos.

> **NOTA:** Para usar cualquier de los templates en la lista, primero debes tener tu [ambiente de desarrollo listo](/es/docs/getting-started/installation).

**Templates soportados:**

* [nativescript-vue/vue-cli-template](#nativescript-vuevue-cli-template)
* [nativescript-vue/nativescript-vue-template](#nativescript-vuenativescript-vue-template)

**Templates deprecados:**

* [tralves/nativescript-vue-webpack-template](https://github.com/tralves/nativescript-vue-webpack-template/)

## nativescript-vue/vue-cli-template

**Link del Proyecto:** [https://github.com/nativescript-vue/vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)

**Características**

* `.vue` *single file components*
* Vuex&mdash;manejo de estado (opt-in)
* Vue Router&mdash;routing (opt-in)&mdash;**experimental**
* NativeScript themes

Usa este template para desarrollar tu aplicación desde [Vue CLI](https://github.com/vuejs/vue-cli) y diseñala a partir de archivos `.vue`. Por defecto, los templates proveen funcionalidade avanzada de Vue como ([Vuex](https://vuex.vuejs.org/en/), [Vue Router](https://github.com/vuejs/vue-router)) y soporte para [NativeScript themes](https://docs.nativescript.org/ui/theme).

En términos funcionales, el template es un `spin-off` del template básico de NativeScript e implementa un simple boton contador a modo de ejemplo.

Originalmente creado por [Pascal Martineau](https://github.com/lewebsimple/), este template is ahora oficialmente soportado por NativeScript-Vue.

**Uso**

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <nombre-proyecto>
$ cd <nombre-proyecto>
$ npm install
$ npm run watch:android
$ # o
$ npm run watch:ios
```

## nativescript-vue/nativescript-vue-template

**Link del Proyecto:** [https://github.com/nativescript-vue/nativescript-vue-template](https://github.com/nativescript-vue/nativescript-vue-template)

**Caraterísticas**

* Vanilla JavaScript&mdash;no hay archivos `.vue`
* NativeScript themes

Usa este template para desarrollar tu aplicación desde [NativeScript CLI](https://github.com/NativeScript/nativescript-cli), usando solamante JavaScript.

En términos funcionales, este template es un spin-off del template básico de NativeScript e implementa un simple boton contador a modo de ejemplo.

**Uso**

```shell
$ tns create <project-name> --template nativescript-vue-template
$ cd <project-name>
$ tns run android
$ # o
$ tns run ios
```
