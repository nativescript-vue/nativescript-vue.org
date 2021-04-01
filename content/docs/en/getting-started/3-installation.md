---
title: Installation
contributors: [rigor789, TheOriginalJosh, eddyverbruggen, ikoevska]
---

To use NativeScript-Vue, you need to set up your system to compile your apps.

## Choose your System

- [Windows](#windows) (for developing Android applications on Windows)
- [macOS](#macos) (for developing iOS and Android applications on macOS)
- [Linux](#linux) (for developing Android applications on Linux)

### Windows

Check the system requirements and follow the setup instructions for the Android SDK on Windows:

[Advanced setup: Windows](https://docs.nativescript.org/start/ns-setup-win)

### macOS

Check the system requirements and follow the setup instructions for Xcode and the Android SDK on macOS:

[Advanced setup: macOS](https://docs.nativescript.org/start/ns-setup-os-x)

### Linux

Check the system requirements and follow the setup instructions for the Android SDK on Linux:

[Advanced setup: Linux](https://docs.nativescript.org/start/ns-setup-linux)

## What you should now have installed

- Node.js
- Android SDK (and Xcode if macOS)
- Android Device Emulator
- NativeScript CLI

## Next: Install Vue CLI and Create NativeScript-Vue Project

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

**Supported features**

-   `.vue` single file components
-   Vuex&mdash;state management (opt-in)
-   NativeScript themes
-   Application presets

