---
title: Vue Router
contributors: [eddyverbruggen, rigor789, ikoevska]
---

> Currently, integration with Vue Router is **experimental**. If you want to use a non-experimental approach, you can try [manual routing](/en/docs/routing/manual-routing).  

With the router, you can choose between component-based routing and page-based routing.

## Install and require the plugin

In the command prompt, run:

```Shell
$ npm install --save vue-router
```

In the entry file for your app (likely, `app.js` or `main.js`), require Vue and Vue Router and let them shake hands.

```JavaScript
const Vue = require('nativescript-vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);
```

## Usage

This section walks you through a complete example, breaking it down into key pieces and providing comments along the way.

---
Define a `Master` page with the current router as its title (`$route.path`). 

Create a button with a `@tap="$router.push('/detail')"` so a new `Detail` page is pushed on the stack and navigated to.

Add a second button to the `Master` page with a query param `user`.

```HTML
const Master = {
  template: `
    <Page>
      <ActionBar :title="$route.path" />
      <StackLayout>
        <Button text="To Details" @tap="$router.push('/detail')" />
        <Button text="To Details (with query param)" @tap="$router.push('/detail?user=John+Appleseed')"></Button>
      </StackLayout>
    </Page>
  `
};
```

---
Define a `Detail` page with a `NavigationButton`. On iOS, the button automatically brings you back to the
previous page in the stack. On Android, you need to add a `tap` handler (ignored on iOS) to take you back: `@tap="$router.back()"`.

Use the `user` query param, defined in the `Master` page. For example, display its value as text on the `Detail` page: `<Label :text="$route.query.user">`.

Use `$router.go(<number-of-pages>)` to navigate back and forth.

```HTML
const Detail = {
  template: `
    <Page>
      <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
      </ActionBar>
      <StackLayout>
        <Label :text="$route.query.user" v-if="$route.query.user" />
        <Button text="Back to Master" @tap="$router.go(-1)" />
      </StackLayout>
    </Page>
  `
};
```

---
Create a router instance, enable page routing and define all the pages of your app.

```JavaScript
const router = new VueRouter({
  pageRouting: true,
  routes: [
    {path: '/master', component: Master},
    {path: '/detail', component: Detail},
    {path: '*', redirect: '/master'}
  ]
});
```

---
Load one of the routes when the app starts.

```JavaScript
router.replace('/master');
```

---
Tell `Vue` about your routes.

```JavaScript
new Vue({
  router
}).$start();
```

## See also

Vue Router has more tricks up its sleeve, so be sure to visit [the official documentation](https://router.vuejs.org/en/).