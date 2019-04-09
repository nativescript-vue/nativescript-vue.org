---
title: Introdução rápida
contributors: [alexhiroshi, WesleiRamos]
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

Este conjunto de comandos realiza as seguintes operações no seu sistema:

1. Instala o Vue CLI e seu complemento de inicialização no seu sistema. Isto permite você usar NativeScript CLI e o Vue CLI no seu sistema. Ignore esse comando se você já possui o Vue CLI instalado.
2. Extrai o template selecionado (o template NativeScript-Vue compativel com Vue CLI) e cria um projeto localmente. Este template depende dos componentes `.vue` e fornece roteamento e gerenciamento de estado Vuex pronto para o uso. Para mais informações sobre os templates disponíveis, veja a [documentação de templates](/pt-BR/docs/getting-started/templates).
3. Alterna para o diretório que contém o projeto recem criado.
4. Instala qualquer dependência npm localmente.
5. Cria e executa o projeto em quaisquer dispositivo conectado ou emulador instalado para a plataforma selecionada. A opção `watch` detecta mudanças no código e as aplica automaticamente.
