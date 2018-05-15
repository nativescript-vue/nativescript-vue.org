---
title: Использование плагинов NativeScript
contributors: [EddyVerbruggen, naderio, rigor789, sn0wil]
---

Плагины работают так же, как и в любом другом приложении NativeScript, но вы можете задаться вопросом, как модули *UI* будут работать с Vue.

Использование UI плагинов очень похоже на использование NativeScript UI плагинов в Angular приложении. Рассмотрим пример использования [nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient), который используется в примере [listview sample](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js):
 
Установите плагин, используя NativeScript CLI:

```shell
$ npm install --save nativescript-gradient
```

**Важно:** Если вы используете [vue-cli-template](/ru/docs/getting-started/templates/#nativescript-vuevue-cli-template), вам может потребоваться запустить:

```shell
$ npm run clean
```
Откройте входной файл вашего приложения и добавьте в начале:

```js
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

Затем в вашем шаблоне вы можете использовать новый элемент:

```html
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
