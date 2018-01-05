---
title: Quick Start
contributors: [naderio, galaxyblur]
---

## Using `nativescript-vue-template`

1) Create a NativeScript app using `nativescript-vue-template`

```shell
$ tns create MyApp --template nativescript-vue-template
```

2) Run the app on Android or iOS:

```shell
$ tns run android
```

or

```shell
$ tns run ios
```

## Using `tns` CLI

1) Create a NativeScript app

```shell
$ tns create sample-app
```

2) Install `nativescript-vue`

```shell
$ npm install --save nativescript-vue
```
3) Change `app.js` content to:

```javascript
const Vue = require('nativescript-vue/dist/index');

new Vue({

  template: `
    <page>
      <stack-layout>
        <label :text="message"></label>
      </stack-layout>
    </page>
  `,

  data() {
    return {
      message: "Hello Vue!",
    };
  },

}).$start();
```

4) Run the app on Android or iOS:

```shell
$ tns run android
```

or

```shell
$ tns run ios
```
