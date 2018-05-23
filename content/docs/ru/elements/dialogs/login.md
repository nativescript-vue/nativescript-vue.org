---
title: LoginDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login
contributors: [lex111]
---

Метод `login()` показывает диалоговое окно, в котором пользователь может ввести учетные данные для входа.

Этот метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Основное использование

Метод `login()` доступен глобально. Вы можете вызывать его в любом месте вашего приложения.

```javascript
login("Ваше сообщение", "Значение поля пользователя", "Значение поля пароля").then(result => {
  console.log(`Результат диалога: ${result.result}, пользователь: ${result.userName}, пароль: ${result.password}`);
});
```

## Настройка параметров диалога

```JavaScript
login({
  title: "Ваш заголовок для входа",
  message: "Ваше сообщение для входа",
  okButtonText: "Ваш текст для кнопки OK",
  cancelButtonText: "Ваш текст для кнопки Cancel",
  userName: "Значение поля пользователя",
  password: "Значение поля пароля"
}).then(result => {
  console.log(`Результат диалога: ${result.result}, пользователь: ${result.userName}, пароль: ${result.password}`);
});
```

[> screenshots for=LoginDialog <]
