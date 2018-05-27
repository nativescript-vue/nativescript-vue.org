---
title: PromptDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt
contributors: [lex111]
---

Метод `prompt()` показывает диалоговое окно с однострочным полем для ввода.

Этот метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Основное использование

Метод `prompt()` доступен глобально. Вы можете вызывать его в любом месте вашего приложения.

```JavaScript
prompt('Ваше сообщение для пользователя', 'Предложенный пользователем ввод')
.then(result => {
  console.log(`Результат диалога: ${result.result}, текст: ${result.text}`)
})
```

## Настройка параметров диалога

```JavaScript
prompt({
  title: "Ваш заголовок диалога",
  message: "Ваше сообщение",
  okButtonText: "Ваш текст для кнопки OK",
  cancelButtonText: "Ваш текст для кнопки Cancel",
  defaultText: "Предложенный пользователем ввод",
}).then(result => {
  console.log(`Результат диалога: ${result.result}, текст: ${result.text}`)
});
```

## Настройка типа ввода

Вы можете настроить тип ввода, используя `inputType`. Вы можете выбрать между простым текстом (`text`), вводом электронной почты (`email`) и скрытым вводом пароля (`password`).

```JavaScript
inputType: dialogs.inputType.text
inputType: dialogs.inputType.email
inputType: dialogs.inputType.password
```

**Примечание:** Эта опция недоступна глобально, и перед использованием `inputType` вам требуется подключить модуль `dialogs` в вашем приложении.

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')
```

### Пример

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')

prompt({
  title: "Ввод электронной почты",
  message: "Укажите свой адрес электронной почты:",
  okButtonText: "OK",
  cancelButtonText: "Cancel",
  defaultText: "name@domain.com",
  inputType: dialogs.inputType.email
}).then(result => {
  console.log(`Результат диалога: ${result.result}, текст: ${result.text}`)
});
```

[> screenshots for=PromptDialog <]
