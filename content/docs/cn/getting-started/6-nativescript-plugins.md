---
title: 使用NativeScript插件
contributors: [nuochong]
---

插件的工作方式与 [任何其他NativeScript应用程序一样](https://docs.nativescript.org/plugins/plugins)，但您可能想知道UI插件如何与Vue一起使用。

UI插件的工作方式几乎与您在Angular应用程序中使用NativeScript UI插件的方式相同。

## 示例用法： nativescript-gradient

我们来看看如何使用 [nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient)。您还可以在 [listview sample](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js)示例中查看其用法。

### 使用NativeScript CLI安装插件

[在为NativeScript开发设置好你的系统](/en/docs/getting-started/installation)之后，运行以下命令：

```shell
$ npm install --save nativescript-gradient
```

> **注意：** 如果您的插件无法立即生效，则可能需要通过删除平台文件夹来清理项目：

```shell
$ rm -rf platforms
```

### 在您的应用中注册插件

打开您的应用程序条目文件（类似于 `app.js` 或 `main.js`）并在顶部添加以下行：

```JavaScript
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

这需要在 `Vue` 实例中注册插件。 `registerElement` 函数将 `<Element>` 的名称作为第一个参数，并将返回插件的函数作为第二个参数。按照在代码中应该调用的方式提供元素名称。提供与npm包名称完全相同的插件名称。

### 在您的应用中使用该插件

```HTML
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
