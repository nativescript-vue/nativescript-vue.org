---
title: Использование плагинов NativeScript
contributors: [sn0wil, lex111, chimit]
---

Плагины работают так же, как и в [любом другом приложении NativeScript](https://docs.nativescript.org/plugins/plugins), но вы можете задаться вопросом, как модули _UI_ будут работать с Vue.

Использование UI-плагинов очень похоже на использование NativeScript UI-плагинов в приложении на Angular.

## Пример использования: nativescript-gradient

Рассмотрим на примере [nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient). Вы также можете посмотреть, как он используется в [listview sample](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js).

### Установка плагина с использованием NativeScript CLI

После того как вы [настроили свою систему для разработки на NativeScript](/ru/docs/getting-started/installation), запустите следующую команду:

```shell
$ npm install --save nativescript-gradient
```

> **Замечание:** Если ваш плагин не работает, попробуйте удалить папку platforms:

```shell
$ rm -rf platforms
```

### Регистрация плагина в вашем приложении

Откройте запускающий файл вашего приложения (как правило, `app.js` или `main.js`) и добавьте следующую строчку в его начало:

```JavaScript
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

Таким образом, мы зарегистрировали плагин в экземляре `Vue`. В качестве первого аргумента функция `registerElement` принимает имя `<Element>`, а в качестве второго аргумента функцию, которая возвращает плагин. Используйте точно такое же имя элемента, какое собираетесь использовать в вашем коде. Имя плагина должно точно соответствовать имени npm-пакета.

### Использование плагина в вашем приложении

Затем в вашем шаблоне вы можете использовать новый элемент:

```HTML
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
