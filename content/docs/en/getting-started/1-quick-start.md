---
title: Quick Start
contributors: [rigor789, eddyverbruggen]
---

If you want to easily try NativeScript-Vue, we strongly recommend trying
it in the [NativeScript Playground](https://play.nativescript.org?template=play-vue). It is the easiest introduction you can get into NativeScript-Vue.

If you are ready to move on and work locally on your machine, and [you
have your system ready for native development](/en/docs/getting-started/installation), you can start by using a template:

###  Scaffold project
```sh
$ npm install -g vue-cli
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
```

### Install dependencies
```sh
$ npm install
```
## Run you app using either of the following
### Build, watch for changes and debug the application
Plarform below would be `ios` or `android`
```sh
$ npm run debug:<platform>
```

## Or

### Build, watch for changes and run the application
```sh
$ npm run watch:<platform>
```


**Please Note:  When invoking the build scripts, omitting the platform will attempt to launch \`tns\` for both platforms, which will only work in a properly configured OSX environment. Because you can only develop for ios on Mac OSX**.

To learn more about the available templates head over to the [templates documentation](/en/docs/getting-started/templates).
