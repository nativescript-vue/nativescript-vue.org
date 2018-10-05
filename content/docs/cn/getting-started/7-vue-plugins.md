---
title: 使用Vue插件
contributors: [nuochong]
---

此页面概述了当前支持的与NativeScript-Vue一起使用的Vue插件。

* [Vue Router](#vue-router)
* [Vuex](#vuex)

## Vue Router

> 目前，与Vue Router的集成是 **实验性的**。有关更多信息，请参阅 [Vue Router页面](/en/docs/routing/vue-router/)。

### 安装并要求插件

有关如何安装插件并使其在NativeScript-Vue应用程序中可用的详细信息，请参阅 [Vue Router页面](/en/docs/routing/vue-router/)。

### 使用说明

移动设备上的路由策略与浏览器中的路由策略不同，熟悉的路由器链路Vue格式不适用于NativeScript-Vue。

相反，您需要 **使用该 `route.push` 方法更改为新路线**。以下示例显示如何使用tap事件更改路由。

```HTML
<Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
``` 

有关如何在NativeScript-Vue应用程序中使用该插件的详细信息，请参阅 [Vue Router页面](/en/docs/routing/vue-router/)。

## Vuex

Vuex是一种状态管理模式和库。它充当应用程序中所有组件的存储库，并实现规则，以确保状态以可预测的方式发生变化。

### 安装插件

像在Vue.js应用程序中一样安装Vuex。以npm为例，例如：

```shell
$ npm install --save vuex
```

最新版本的Vuex将添加到您的 `package.json`。

### 导入插件

打开您的应用程序条目文件（ `app.js` 或 `main.js`）并在顶部添加以下行：

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```

现在，您可以使用Vuex管理移动应用程序的状态，类似于在标准Vue Web应用程序中使用它的方式。

### 用法：创建 store

您需要创建一个新常量来存储状态并调用Vuex API。您可以在创建Vue实例后在应用程序条目文件中执行此操作，也可以在单独的文件夹中执行此操作（例如， `/store`）。

在以下示例中，简单的存储常量包括计数器的状态并跟踪其突变：

```js
const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
})
```

### 用法：使用 store

现在，您可以通过调用刚创建的商店来管理状态。在以下示例中，当您按下“+”或“ - ”按钮时，应用会跟踪计数值。请注意，您不会操纵状态本身，而是调用mutations来增加和减少其值。

```js
new Vue({
  computed: {
    count(){
      return store.state.count
    }
  },

  template: `
    <Page>
      <ScrollView>
        <StackLayout>
          <Button @tap="increment" text="+" />
          <Button @tap="decrement" text="-" />
          <Label :text="count" />
        </StackLayout>
      </ScrollView>
    </Page>
  `,

  methods: {
    increment() {
      store.commit('increment')
    },
    decrement() {
      store.commit('decrement')
    }
  }
}).$start()
```

有关Vuex的更多信息，请参阅 [Vuex文档](https://vuex.vuejs.org)。

有关如何管理Vuex元素的更多示例，请浏览NativeScript-Vue Groceries示例的 [`/store` 文件夹](https://github.com/tralves/groceries-ns-vue/tree/master/src/store/) 。
