---
title: Using Vue Plugins
contributors: [jlooper]
---

## vue-router

VueRouter is a Vue plugin to handle URL based routing.
An experimental integration with vue-router has been added to Nativescript-Vue.

Keep in mind, the routing strategy on mobile is not exactly same as URL and History API used in a browser.

Router links, as you are familiar in Vue like the following **will not work** in NativeScript

```html
<!-- does not work -->
<router-link to="/foo">Go to Foo</router-link>
```

Instead we have to change to a new route using the `route.push` method. For example when using a button we can use the `tap` event to change the route:

```html
<Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
```

For a more in depth documentation about the router [go to the VueRouter page](/en/docs/routing/vue-router/).

## Vuex

Vuex is Vue.js's state management pattern and library. It serves as a store for all the components in an application and implements rules to ensure that state is mutated in a predictable fashion. Vuex can be used in NativeScript apps; for an example, see the [NativeScript Groceries Vue sample](https://github.com/tralves/groceries-ns-vue). 

### Install

Install Vuex as you would normally in your Vue.js app. With npm, for example:

```shell
$ npm install --save vuex
```

The most recent version of Vuex will be added to your package.json file.

### Import

In your app's `main.js` file, import Vuex at the top:

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```
Now you can use Vuex in the app similar to how you would use it in a standard Vue app for the web to manage your app's state.

### Create a Store

Above your creation of a new Vue instance, or in a separate folder (for example `/store` in your app folder), create a new constant to store your state. This is where you will invoke Vuex API calls. A simple store constant would include the state of a counter whose state you control throughout your app by means of tracking its mutations:

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

### Use the Store

Now you can manage state by calling the store you just created. In the example below, the app tracks the count value as you press a '+' or '-' button. Note that you don't manipulate the state itself, but rather call mutations to increment and decrement its value.

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

More information about Vuex and how to manage state can be found in [the Vuex documentation](https://vuex.vuejs.org/en/core-concepts.html). A good architecture to manage the various elements of Vuex can be found in the Groceries app in the [`/store` folder](https://github.com/tralves/groceries-ns-vue/tree/master/app/store).
