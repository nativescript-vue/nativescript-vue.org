---
title: Using Vue Devtools
contributors: [rigor789]
outdated: false
---

To debug a NativeScript-Vue application with Vue Devtools you need to use the standalone version of Vue Devtools.

To make integration easier we have published [`nativescript-vue-devtools`](https://github.com/nativescript-vue/nativescript-vue-devtools) which takes care of connecting to Vue Devtools.

** 1. Install dependencies **

```shell
$ cd <project-folder>
$ npm install --save @vue/devtools@beta nativescript-toast nativescript-socket.io nativescript-vue-devtools
```

** 2. Optionally install Vue Devtools globally **

If you'd like to easily access Vue Devtools, it's a good idea to install it globally.

```shell
$ npm install -g @vue/devtools@beta
```

This will allow you to run the `vue-devtools` command regardless of the current directory you are in.

** 3. Install the `nativescript-vue-devtools` plugin into your app **

To connect your application to the devtools, you will have to make a slight modification to your `main.js`.
Import `nativescript-vue-devtools` and tell NativeScript-Vue about it using `Vue.use()`

```js
import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools)
```

*Optional*: If you use a real device instead of an emulator, it will not be able to connect to your host machine by default. You will need to set the host config option to the IP of your dev machine:
```js
Vue.use(VueDevtools, { host: '192.168.1.42' })
```

** 4. Run Vue Devtools ** 

```shell
$ # if installed globally
$ vue-devtools
$ # or
$ npx vue-devtools
```

** 5. Rebuild and run your app **

```shell
$ rm -rf platforms
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

If everything went well, you should see a few components in the component tree of Vue Devtools.
