---
title: Quick Start
contributors: [rigor789, eddyverbruggen, damain, ikoevska, jlooper]
---

If you don't want the hassle of installing and configuring your system before you can have a taste of NativeScript-Vue, the [NativeScript Playground](/en/docs/getting-started/playground-tutorial) has you covered.

But if [you already have your system ready for native development](/en/docs/getting-started/installation), you can start by using the [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template):

**Supported features**

-   `.vue` single file components
-   Vuex&mdash;state management (opt-in)
-   NativeScript themes
-   Application presets

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$
$ npm install
$ # or
$ yarn install
$
$ tns run android --bundle
$ # or
$ tns run ios --bundle
$
$ # You may also try the new HMR mode by replacing --bundle
$ # with --hmr, but note that this is a beta feature.
```

This set of commands performs the following operations on your system:

1. Installs the latest Vue CLI and support for Vue CLI 2.x templates through the `@vue/cli-init` add-on.
2. Creates a project using the [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template).
3. Switches to the directory containing the newly created project.
4. Installs any npm dependencies locally.
5. Builds and runs the project on any connected devices or installed emulators for the selected platform. The `--bundle` option triggers a webpack build, which compiles `.vue` files and watches for changes.
