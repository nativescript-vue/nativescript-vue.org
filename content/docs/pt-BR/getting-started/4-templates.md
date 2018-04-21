---
title: Templates
contributors: [alexhiroshi]
outdated: false
---

Essa página serve como uma visão geral dos templates atualmente suportados que você pode usar para começar com NativeScript-Vue.
É assumido que você tenha [configurado o seu sistema para desenvolver com NativeScript](/pt-BR/docs/getting-started/installation).

> Essa lista será atualizada conforme novos templates entrarem ou templates antigos forem descontinuados.

**Templates atualmente suportados:**

* [nativescript-vue/vue-cli-template](#nativescript-vuevue-cli-template)
* [nativescript-vue/nativescript-vue-template](#nativescript-vuenativescript-vue-template)

**Templates descontinuados:**

* [tralves/nativescript-vue-webpack-template](https://github.com/tralves/nativescript-vue-webpack-template/)

## nativescript-vue/vue-cli-template

Link do projeto: [https://github.com/nativescript-vue/vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)

**Características:**
* Componentes `.vue` de único arquivo
* Vuex &mdash; gestão de estado (opt-in)
* VueRouter &mdash; rotas (opt-in) &mdash; **experimental!**
* Temas do NativeScript

Você pode usar o [CLI do Vue](https://github.com/vuejs/vue-cli) para iniciar o seu aplicativo NativeScript-Vue. Esse template fornece suporte para o [Vuex](https://vuex.vuejs.org/en/), o [Vue Router](https://github.com/vuejs/vue-router), e [temas do NativeScript](https://docs.nativescript.org/ui/theme). Originalmente construído por [Pascal Martineau](https://github.com/lewebsimple/), esse template agora é oficialmente suportado para o desenvolvimento do NativeScript-Vue.

**Uso:**

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

Link do projeto: [https://github.com/nativescript-vue/nativescript-vue-template](https://github.com/nativescript-vue/nativescript-vue-template)

**Características:**
* JS puro &mdash; sem arquivos `.vue`
* Temas do NativeScript

Esse template é a maneira mais simples de desenvolver seu aplicativo com NativeScript-Vue. Ele não precisa de uma etapa extra para compilação, porque os componentes/aplicativos são escritos em arquivos `.js` puros.

**Uso:**

```shell
$ tns create <project-name> --template nativescript-vue-template
$ cd <project-name>
$ tns run android
$ # or
$ tns run ios
```
