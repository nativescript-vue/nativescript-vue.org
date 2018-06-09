---
title: Quick Start
contributors: [rigor789, eddyverbruggen, damain, ikoevska]
---

If you don't want the hassle of installing and configuring your system before you can have a taste of NativeScript-Vue, the [NativeScript Playground](/en/docs/getting-started/playground-tutorial) has you covered.

But if [you already have your system ready for native development](/en/docs/getting-started/installation), you can start by using a template:

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
```

Next, run your app using:

```shell
$ npm run watch:<platform>
```

where platform is `ios` or `android`.

This set of commands performs the following operations on your system:

1. Installs the Vue CLI and its init add-on on your system. This lets you use both the NativeScript CLI and the Vue CLI on your system. Skip this command, if you already have Vue CLI installed.
2. Pulls the selected template (the Vue CLI-compatible NativeScript-Vue template) and creates a project locally. This template relies on `.vue` components and provides routing and Vuex state management out of the box. For more information about the available templates, see [Templates](/en/docs/getting-started/templates).
3. Switches to the directory containing the newly created project.
4. Installs any npm dependencies locally.
5. Builds and runs the project on any connected devices or installed emulators for the selected platform. The `watch` option detects code changes and applies them automatically.