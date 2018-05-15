---
title: Vue Router
contributors: [sn0wil]
---

Если [Ручная маршрутизация](/ru/docs/routing/manual-routing) не подходит для вашего случая, то
тогда вы будете счастливы изучить [the Vue router](https://router.vuejs.org/ru/), который поддерживается в настоящий момент is supported

C Vue-router существует два типа маршрутизации, которые вы можете использовать. Маршрутизация на основе компонентов и маршрутизация на основе страниц.

При компонентной маршрутизации вы указываете компонент `<router-view />` в своем шаблоне и различные маршруты будут отображены в том же представлении, заменяя предыдущий марщрут. Иногда это полезно, но во многих случаях вам нужно перейти на разные страницы.

Этот мануал документирует маршрутизацию страницы более подробно, но обратите внимание, что эта функция в данный момент нестабильна, и рекомендуется придерживаться ручной маршрутизации, если вам требуются разные страницы в приложении. Мы исправить это в ближайшем будущем, и это приоритетная задача в нашем списке.

## Установка
В командной строке выполните:
```shell
$ npm install --save vue-router
```

## Использование
Давайте покажем полный пример, разбитый на несколько частей, чтобы мы могли оставить некоторые комментарии.
Обратите внимание, что Vue Router имеет больше возможностей и хитрых подходов, поэтому обязательно посетите
[официальную документацию](https://router.vuejs.org/ru/).

---
Требуется Vue, VueRouter, и дать им пожать руки 🤝
```js
const Vue = require('nativescript-vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);
```

---
Определим страницу `Master` с текущим маршрутом в качестве названия (`$route.path`)
и кнопку с кодом `@tap="$router.push('/detail')"`, который добавит новую страницу в очередь и перейдет на нее.

Также добавим кнопку на этой же странцие с параметром `user`.
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

Определим страницу `Detail` с `NavigationButton`. На iOS это автоматически вернет вас на
предыдущую страницу в очереди, но для Android нужен `tap` обработчик (который игнорируется iOS).
Поэтому добавим `@tap="$router.back()"`.

Помните, что параметр `user`, который мы передаем из второй кнопки в страницу `Master`? Вы можете использовать это 
на странице `Details`: `<Label :text="$route.query.user">`

Наконец, вы можете перемещаться назад (и вперед) с помощью `$router.go(<number-of-pages>)`, как показано ниже.

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
Определим все страницы вашего приложения:
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
И перейдем на один из маршрутов, когда приложение запустится:
```js
router.replace('/master');
```

---
Оу, и не забудем сказать `Vue`  вашим маршрутах:
```js
new Vue({
  router
}).$start();
```
