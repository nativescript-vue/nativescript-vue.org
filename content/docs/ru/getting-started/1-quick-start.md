---
title: Быстрый старт
contributors: [sn0wil]
---
Если вы хотите просто попробовать NativeScript-Vue, мы рекомендуем сделать это на [NativeScript Playground](https://play.nativescript.org?template=play-vue). Это самый простой способ для знакомства с NativeScript-Vue.

Если вы [уже подготовили вашу систему для нативной разработки](/ru/docs/getting-started/installation), то можете начать с использования шаблона:

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
```

и после этого запустите ваше приложение:

```shell
$ npm run watch:<platform>
```

где `platform` - это `ios` или `android`.

Чтобы узнать больше о доступных шаблонах, перейдите к [документации по шаблонам](/ru/docs/getting-started/templates).