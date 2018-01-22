---
title: Quick Start
contributors: [rigor789]
---

If you want try NativeScript-Vue easily, we strongly recommend trying
it in the [NativeScript Playground](https://play.nativescript.org?template=play-vue). It is
by far the easiest introduction you can get into NativeScript-Vue.


If you are ready to move on and work locally on your machine, and [you
have your system ready for native development](/en/docs/getting-started/installation), start by creating a new project using a template:

```bash
$ tns create my-app --template nativescript-vue-template
```

and run your project using:

```bash
$ tns run android / ios
```

To learn more about the available templates head over to the [templates documentation](/en/docs/getting-started/templates).

## From scratch

The above template can be easily replicated:

```bash
$ tns create my-app
$ cd my-app
$ npm i --save nativescript-vue
```

And change `app.js` to:

```javascript
const Vue = require('nativescript-vue');

new Vue({
  data: {
    msg: 'Hello NativeScript-Vue!'
  },

  template: `
    <StackLayout>
      <Label :text="msg"/>
    </StackLayout>
  `
}).$start();
```

and run it:

```bash
$ tns run android / ios
```
