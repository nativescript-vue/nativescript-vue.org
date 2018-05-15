---
title: Использование Vue плагинов
contributors: [jlooper, sn0wil]
---

## vue-router

VueRouter - это Vue плагин для обработки роутинга на основе URL.
В Nativescript-Vue была добавлена экспериментальная интеграция vue-router.

Имейте в виду, что стратегия маршрутизации на мобильных устройствах не совсем такая же, как URL и история, используемые в браузере.

Router links **не будут работать** в NativeScript.

```html
<!-- не сработает -->
<router-link to="/foo">Go to Foo</router-link>
```

Вместо этого нам необходимо задать новый маршрут, используя метод `route.push`. Например, когда мы используем кнопку, то можем использовать событие `tap` для изменения маршрута:

```html
<Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
```

Для более детальной информации о router [загляните на страницу VueRouter](/ru/docs/routing/vue-router/).

## Vuex

Vuex это библиотека управления состоянием в Vue. Он служит хранилищем для данных и гарантирует предсказуемое измненение состояния приложения. Vuex может использоваться в NativeScript приложениях. Для примера посмотрите на [NativeScript Groceries Vue sample](https://github.com/tralves/groceries-ns-vue). 

### Установка

Установка Vuex производится так же, как и для простого Vue приложения. C использваонием npm, пример:

```shell
$ npm install --save vuex
```

Последняя версия Vuex будет добавлена в ваш package.json файл.

### Импорт

Сверху вашего `main.js` файла импортируйте Vuex:

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```
Теперь вы можете использовать Vuex аналогично тому, как вы использовали его в стандартном приложении Vue.

### Создание Store

В папке `/store` создадим константу с нашим Store. Это место, где вы будете соверщать вызовы Vuex API. Простой Store включает в себя состояние счетчика и мутации, изменяющие состояние:

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

### Использование Store

Теперь мы можем управлять нашим состоянием. В примере ниже мы создаем вычисляемое свойство `count` и изменяем его по нажатию на кнопку '+' или '-'. Обратите внимание что вы не изменяете ваше состояние напрямую, а вызываете мутации которые дедают это.

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

Больше информации о Vuex и о том, как управлять состоянием вы можете найти в [Vuex документации](https://vuex.vuejs.org/ru/). Хорошую архитектуру для управления различными элементами вы можете найти в приложении Groceries в [папке `/store`](https://github.com/tralves/groceries-ns-vue/tree/master/app/store).
