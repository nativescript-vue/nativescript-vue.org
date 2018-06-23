---
title: Using NativeScript Plugins
contributors: [EddyVerbruggen, naderio, rigor789, ikoevska]
---

Plugins work as in [any other NativeScript app](https://docs.nativescript.org/plugins/plugins), but you may wonder how *UI* plugins work with Vue.

UI plugins work almost identically to how you'd use a NativeScript UI plugin in an Angular app. 

## Sample use: nativescript-gradient

Let's review how you can use [nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient). You can also check its use in the [listview sample](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js).

### Install the plugin using the NativeScript CLI

After you have [set up your system for NativeScript development](/en/docs/getting-started/installation), run the following command:

```shell
$ npm install --save nativescript-gradient
```

> **NOTE:** If you are using the [vue-cli-template](/en/docs/getting-started/templates/#nativescript-vuevue-cli-template), you may have to run the following:

```shell
$ npm run clean
```

### Register the plugin in your app

Open your app entry file (llikely `app.js` or `main.js`) and add the following line at the top:

```JavaScript
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

This requires and registers the plugin in your `Vue` instance. The `registerElement` function expects the name of the `<Element>` as the first argument, and a function that returns the plugin as its second argument. Provide the element name exactly as you are supposed to call it in your code. Provide the plugin name exactly as its npm package name.

### Use the plugin in your app

```HTML
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
