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
$ npm install --save @vue/devtools@^5.3.4 @triniwiz/nativescript-toasty @triniwiz/nativescript-socketio nativescript-vue-devtools
```

<!--
## (Optional) Step 2: Install Vue DevTools globally

To easily access Vue DevTools, you can install the package globally.

Run the following command:

```shell
$ npm install -g @vue/devtools
```

After the installation is complete, you can run the `vue-devtools` command from any directory on your development machine.
-->

## Step 2: Install the `nativescript-vue-devtools` plugin in your app

To connect your application to the Vue DevTools, you need to modify `main.js` (or `main.ts`).

In your code, import `nativescript-vue-devtools` and tell NativeScript-Vue about it using `Vue.use()`.

```JavaScript
import VueDevtools from 'nativescript-vue-devtools'
import Vue from 'nativescript-vue'

Vue.use(VueDevtools)
```
> Make sure you import devtools before Vue, otherwise it might not work as expected.

If you are using a real device instead of an emulator, set the `host` configuration option to point to the IP of your development machine. Otherwise, your device will not be able to connect to your host machine.

```JavaScript
Vue.use(VueDevtools, { host: '192.168.1.42' })
```

## Step 3: Run Vue DevTools

Run the following command in a new terminal to launch Vue DevTools:

```shell
$ npx vue-devtools
```

A window should open. Instructions shown in this window are not required in a NativeScript-Vue application, so please ignore them. 

## Step 4: Rebuild and run your app

Run the following commands:

```shell
$ rm -rf platforms
$ tns run android
$ # or
$ tns run ios
```

If your machine and app are configured properly, you should see a few components in the component tree of Vue DevTools.

# Troubleshooting

On Android API level 28 and above, cleartext traffic is disabled by default. In order to connect to Vue DevTools you will have to add 
`android:usesCleartextTraffic="true"` to the `App_Resources/Android/src/main/AndroidManifest.xml` file:

```xml
<application
 <!-- ... -->
 android:usesCleartextTraffic="true"
 <!-- ... -->
</application>
```

After making the change, delete the `platforms` folder, and rebuild the app. Vue DevTools should now connect automatically. 
