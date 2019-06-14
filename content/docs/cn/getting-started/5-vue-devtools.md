---
title: 使用Vue Devtools
contributors: [nuochong]
outdated: false
---

要使用Vue Devtools调试NativeScript-Vue应用程序，您需要使用独立版本的Vue Devtools。

为了使集成更容易，我们已经发布了 [`nativescript-vue-devtools`](https://github.com/nativescript-vue/nativescript-vue-devtools) ，它负责连接到Vue Devtools。

** 1.安装依赖项 **

```shell
$ cd <project-folder>
$ npm install --save @vue/devtools@beta nativescript-toasty nativescript-socketio nativescript-vue-devtools
```

** 2.可选择全局安装Vue Devtools **

如果您想轻松访问Vue Devtools，最好全局安装它。

```shell
$ npm install -g @vue/devtools@beta
```

这将允许您运行 `vue-devtools` 命令，而不管您当前所在的目录。

** 3.将 `nativescript-vue-devtools` 插件安装到您的应用程序中 **

要将您的应用程序连接到devtools，您必须对您的应用程序中的`main.js`稍作修改 。
导入 `nativescript-vue-devtools` 并使用`Vue.use()`告诉NativeScript-Vue 使用它。

```js
import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools)
```

** 4.运行Vue Devtools ** 

```shell
$ # if installed globally
$ vue-devtools
$ # or
$ npx vue-devtools
```

** 5.重建并运行您的应用程序 **

```shell
$ rm -rf platforms
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

如果一切顺利，您应该在Vue Devtools的组件树中看到一些组件。
