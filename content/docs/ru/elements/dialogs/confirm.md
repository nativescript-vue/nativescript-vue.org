---
title: ConfirmDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm
contributors: [lex111]
---

Метод `confirm()` показывает сообщение подтверждения с кнопками Cancel и OK.

Этот метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Основное использование

Метод `confirm()` доступен глобально. Вы можете вызывать его в любом месте вашего приложения.

```javascript
confirm('Ваше сообщение')
  .then(result => {
    console.log(result);
  });
```

## Настройка параметров диалога

```javascript
confirm({
  title: "Ваш заголовок",
  message: "Ваше сообщение",
  okButtonText: "Ваш текст для кнопки OK",
  cancelButtonText: "Ваш текст для кнопки Cancel"
}).then(result => {
  console.log(result);
});
```

[> screenshots for=ConfirmDialog <]
