---
title: Vue Router
contributors: [eddyverbruggen]
---

If [Manual Routing](/en/docs/routing/manual-routing) doesn't cut it for your use-case,
then you'll be happy to learn [the Vue router](https://router.vuejs.org/en/) is supported.

With the router, there are two types of routing that you can use. Component based routing, and page based routing.

Component based routing is where you specify the `<router-view />` component in your template, and the different routes will get placed into the view, and then when navigating the views will be swapped. This is useful sometimes, but in many cases what you want is to navigate to different pages.

This document documents page routing in more detail, but please note that this feature is unstable at this point, and it is recommended that you stick to manual routing if you require different pages in your application. We are hoping to change this in the near future, and it is a priority on our todo list.

## Installation
From a command prompt, run:
```shell
$ npm i vue-router --save
```

## Usage
Let's show a full example, broken down in a few pieces so we can provide some comments.
Note that the Vue Router has more tricks up its sleeve, so be sure to visit
[the official documentation](https://router.vuejs.org/en/).

---
Require Vue, VueRouter, and let them shake hands 🤝
```js
const Vue = require('nativescript-vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);
```

---
Define a `Master` page with the current router as its title (`$route.path`)
and a button with a `@tap="$router.push('/detail')"` so a new page is pushed on the stack and navigated to.

Also, a button to the same page with a query param `user`.
```html
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
Define a `Detail` page with a `NavigationButton`. On iOS this will automatically bring you back to the
previous page in the stack, but for Android `tap` handler is required (which is ignored on iOS).
So add `@tap="$router.back()"`.

Remember that `user` query param we passed from the second button of the `Master` page? You can use it in the `Details`
page like this: `<Label :text="$route.query.user">`

Lastly, you can navigate back (and forth) with `$router.go(<number-of-pages>)` as demonstrated below.

```html
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
Define all the pages of your application as follows:
```js
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
And load one of those routes when the app starts:
```js
router.replace('/master');
```

---
Oh, and don't forget to tell `Vue` about your routes:
```js
new Vue({
  router
}).$start();
```
