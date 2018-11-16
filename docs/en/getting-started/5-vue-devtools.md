---
title: Using Vue DevTools
contributors: [rigor789, ikoevska]
outdated: false
---

You can debug NativeScript-Vue applications using the standalone version of Vue DevTools.

To simplify the integration, you can use the [`nativescript-vue-devtools`](https://github.com/nativescript-vue/nativescript-vue-devtools) plugin which takes care of connecting your app to Vue DevTools.

## Step 1: Install dependencies

Run the following command:

```shell
$ cd <project-folder>
$ npm install --save @vue/devtools@beta nativescript-toast nativescript-socket.io nativescript-vue-devtools
```

## (Optional) Step 2: Install Vue DevTools globally

To easily access Vue DevTools, you can install the package globally.

Run the following command:

```shell
$ npm install -g @vue/devtools@beta
```

After the installation is complete, you can run the `vue-devtools` command from any directory on your development machine.

## Step 3: Install the `nativescript-vue-devtools` plugin in your app

To connect your application to the Vue DevTools, you need to modify `main.js`.

In your code, import `nativescript-vue-devtools` and tell NativeScript-Vue about it using `Vue.use()`.

```JavaScript
import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools)
```

If you are using a real device instead of an emulator, set the `host` configuration option to point to the IP of your development machine. Otherwise, your device will not be able to connect to your host machine.

```JavaScript
Vue.use(VueDevtools, { host: '192.168.1.42' })
```

## Step 4: Run Vue DevTools 

Run the following command to launch the Vue DevTools:

```shell
$ # if installed globally
$ vue-devtools
$ # or
$ npx vue-devtools
```

## Step 5: Rebuild and run your app

Run the following command:

```shell
$ rm -rf platforms
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

If your machine and app are configured properly, you should see a few components in the component tree of Vue DevTools.