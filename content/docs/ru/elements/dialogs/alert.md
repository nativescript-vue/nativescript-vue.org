---
title: AlertDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [lex111]
---

Метод `alert()` показывает сообщение и кнопку OK. Используйте его для отображения информации и уведомлений, не требующих действий пользователя.

Этот метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Основное использование

Метод `alert()` доступен глобально. Вы можете вызывать его в любом месте вашего приложения.

```javascript
alert('Ваше сообщение')
  .then(() => {
    console.log("Диалоговое окно закрыто.");
  });
```

## Настройка параметров диалога

```JavaScript
alert({
  title: "Ваш заголовок",
  message: "Ваше сообщение",
  okButtonText: "Ваш текст кнопки OK"
}).then(() => {
  console.log("Диалоговое окно закрыто");
});
```

[> screenshots for=AlertDialog <]
