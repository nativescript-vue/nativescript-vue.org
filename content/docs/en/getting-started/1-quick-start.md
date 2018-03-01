---
title: Quick Start
contributors: [rigor789, eddyverbruggen, damain]
---

If you want to easily try NativeScript-Vue, we strongly recommend trying
it in the [NativeScript Playground](https://play.nativescript.org?template=play-vue). It is the easiest introduction you can get into NativeScript-Vue.

If you are ready to move on and work locally on your machine, and [you
have your system ready for native development](/en/docs/getting-started/installation), you can start by using a template:

```shell
$ $ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
```

and then run your app using
```shell
$ npm run watch:<platform>
```
> where platform is `ios` or `android`.

For more details check out [nativescript-vue/vue-cli-template on GitHub](https://github.com/nativescript-vue/vue-cli-template).

To learn more about the available templates head over to the [templates documentation](/en/docs/getting-started/templates).
