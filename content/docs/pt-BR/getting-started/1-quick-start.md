---
title: Introdução rápida
contributors: [alexhiroshi]
---

Se você não quiser ter o trabalho de instalar e configurar seu sistema antes de desenvolver com NativeScript + Vue.js, você pode usar [Playground do NativeScript](/pt-BR/docs/getting-started/playground-tutorial).

Mas se [você já tem o sistema pronto para o desenvolvimento nativo](/pt-BR/docs/getting-started/installation), você pode começar usando um template:

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
```

e então execute o seu aplicativo usando:

```shell
$ npm run watch:<platform>
```

onde platform é `ios` ou `android`.

Para mais informações sobre os templates disponíveis, veja a [documentação de templates](/pt-BR/docs/getting-started/templates).