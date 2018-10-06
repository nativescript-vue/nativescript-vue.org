---
title: 升级指南
contributors: [nuochong]
outdated: false
---

> 预计升级时间： **10-20 分钟**。

如果您使用1.3.1版本的Vue-CLI模板搭建了NativeScript-Vue应用程序，则可以升级到最新版本2.0，本指南将帮助您实现这一目标。新模板与旧版本具有不同的文件夹结构：

![New folder structure](/screenshots/old-new-folder-structure.png)

**步骤 1**

首先使用Vue-CLI模板创建一个新应用程序。

> **提示：** 确保在这个新项目中使用与创建旧版本时相同的预安装命令;例如，如果您第一次在CLI中安装了Vuex，那么现在再做一次。

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

升级过程涉及将旧应用文件复制到新项目中，然后重新整理并添加一些文件。

**第2步：替换应用资源**

复制旧应用的 `App_Resources` 文件夹 `./template/app/` 并将其粘贴到新应用的 `app` 文件夹中，替换其 `App_Resources` 文件夹。

**第3步：合并 `src` 和 `app` 文件夹**

复制 `src` 旧应用中的所有文件夹，然后将其粘贴到 `app` 新应用中的文件夹中。

**第4步：编辑 `main.js`**

NativeScript 4.0引入了一个新的Frame元素，并引入了一种更改应用程序根元素的方法，允许跨页面共享公共视图元素（导航）。

在4.0之前，根元素是一个Frame，它是在我们的应用程序启动时由NativeScript隐式创建的。

通过这些更改，我们无法再自动创建Frame和Page元素，因此在2.0.0中，您需要将这些元素显式添加到模板中。

要保持以前具有单个根框架的行为，可以将根Vue实例更改为带有一个 `<Frame>` 和一个 `<Page>` 的元素。

**例子**

```js
// in prior versions
// this automatically created a Page
new Vue({
  template: `<Label text="Hello world"/>`
}).$start()
```

```js
// in 2.0.0
// the <Frame> and <Page> must exist in your template
new Vue({
  template: `
    <Frame>
      <Page>
        <Label text="Hello world"/>
      </Page>
    </Frame>
  `
}).$start()
```

允许我们在不同的页面上使用共享的SideDrawer，例如：

```js
new Vue({
  template: `
    <RadSideDrawer>
      <StackLayout ~drawerContent>...</StackLayout>
      <Frame ~mainContent>
        <Page>
          <Label text="Hello world"/>
        </Page>
      </Frame>
    </RadSideDrawer>
  `
}).$start()
```

然而，其最简单的形式是，类似于编辑 `main.js`的Vue初始化块：

```js
new Vue({
  render: h => h('frame', [h(HelloWorld)]),
}).$start();
```

**第5步：编辑路径**

由于文件夹结构已更改，您需要编辑新应用程序中的路径以指向样式，字体和图片。

在您的组件中，如果您的旧应用程序中的图片引用如下：

```HTML
<Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
```

改变路径：

```HTML
<Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png"/>
```

**第6步：对齐 `package.json`**

将旧应用根 `package.json` 文件中的相关值复制到新应用的根 `package.json` 文件中。这很可能需要复制 `Dependencies:` 模块，但您可能还需要在`package.json`中重新调整新应用程序的应用程序版本和描述 。

**第7步：清洁并运行**

此时，有个好方法就是清理新应用程序的文件夹（如果您之前已经运行它）并重新安装所有依赖项。

```shell
$ cd <project-name>
$ rm -rf platforms
$ npm install
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

**步骤8（可选）：尝试HMR**

就在最近，nativescript获得了对HMR（热模块更换）的支持。最新版本的NativeScript-Vue支持开箱即用，但您需要安装最新（最好）的NativeScript CLI版本。

```shell
$ npm install -g nativescript@next
$ cd <project-name>
$ rm -rf platforms
$ tns run android --hmr
$ # or
$ tns run ios --hmr
```
