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

> **Note**: If you choose to install DevTools, you won't be able to use `tns preview`, as the Preview app doesn't support one of the plugins DevTools uses.

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$
$ npm install
$ # or
$ yarn install
$
$ tns preview
$ # or
$ tns run
```

This set of commands performs the following operations on your system:

1. Installs the latest Vue CLI and support for Vue CLI 2.x templates through the `@vue/cli-init` add-on.
2. Creates a project using the [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template).
3. Switches to the directory containing the newly created project.
4. Installs any npm dependencies locally.
5. If executing `tns preview`, produces a QR code which can be used to preview the app on a device.
6. If executing `tns run`, builds and runs the project on all connected devices or in native emulators.

### If you're experiencing problems while installation

1. I installed according to the instructions. But, it is giving me the error:
```bash
ENOENT: no such file or directory, open 'E:\Otabek\nativescript\anor\nativescript.config.js'
```
What I can do in such a situation?

**Answer:** [Installing Nativescript correctly on devices] (https://nativescript-vue.org/en/docs/getting-started/installation/) or [Installing Nativescript](https://docs.nativescript.org/angular/start/quick-setup)
