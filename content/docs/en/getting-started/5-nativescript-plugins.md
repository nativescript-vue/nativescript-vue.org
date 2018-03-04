---
title: Using NativeScript Plugins
contributors: [EddyVerbruggen, naderio, rigor789]
---

Plugins work as in any other NativeScript app, but you may wonder how *UI* plugins would work with Vue.

UI plugins work almost identically to how you'd use a NativeScript UI plugin in an Angular app. For instance consider this example usage of [nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient) which is used in the [listview sample](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js):

Install the plugin using the NativeScript CLI:

```shell
$ tns plugin add nativescript-gradient
```

Open your app entry file and add the following to the top:

```js
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

Then in your template, you can use the newly registered element:

```html
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
