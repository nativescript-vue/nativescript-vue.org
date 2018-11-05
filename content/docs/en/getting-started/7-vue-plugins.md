---
title: Using Vue Plugins
contributors: [jlooper, ikoevska]
---

This page provides an overview of the currently supported Vue plugins that work with NativeScript-Vue.

* [Vue Router](#vue-router)
* [Vuex](#vuex)

## Vue Router

> Currently, integration with Vue Router is **unsupported**. Until the team resolves the issue, please use [manual routing](/en/docs/routing/manual-routing).

## Vuex

Vuex is a state management pattern and library. It serves as a store for all the components in an app and implements rules to ensure that state is mutated in a predictable fashion.

### Install the plugin

Install Vuex as you would normally in your Vue.js app. With npm, for example:

```shell
$ npm install --save vuex
```

The most recent version of Vuex will be added to your `package.json`.

### Import the plugin

Open your app entry file (likely `app.js` or `main.js`) and add the following line at the top:

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```

Now you can use Vuex to manage the state of your mobile app, similar to how you would use it in a standard Vue web app.

### Usage: Create a store

You need to create a new constant to store your state and invoke Vuex API calls. You can do that in the app entry file after the creation of the Vue instance or in a separate folder (for example, `/store`).

In the following example, a simple store constant includes the state of a counter and tracks its mutations:

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

### Usage: Use the store

Now you can manage state by calling the store you just created. In the following example, the app tracks the count value as you press a '+' or '-' button. Note that you don't manipulate the state itself, but call mutations to increment and decrement its value.

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

For more information about Vuex, see [the Vuex documentation](https://vuex.vuejs.org).

For more examples about how to manage the elements of Vuex, explore the [`/store` folder](https://github.com/tralves/groceries-ns-vue/tree/master/app/store/) of the NativeScript-Vue Groceries sample.
