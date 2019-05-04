---
title: LoginDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login
contributors: [Spice-Z]
---

`login()`はユーザーにログインの確認をする場所でダイアログを表示するメソッドです。

このメソッドは[`dialogs` module](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)の一部です。

---

## 基本的な使い方

`login()`はグローバルに利用できます。アプリ上のどこからでも呼び出すことが可能です。

```javascript
login("Your message", "Username field value", "Password field value").then(result => {
  console.log(`Dialog result: ${result.result}, user: ${result.userName}, pwd: ${result.password}`);
});
```

## ダイアログのオプションを設定する。

```JavaScript
login({
  title: "Your login title",
  message: "Your login message",
  okButtonText: "Your OK button text",
  cancelButtonText: "Your Cancel button text",
  userName: "Username field value",
  password: "Password field value"
}).then(result => {
  console.log(`Dialog result: ${result.result}, user: ${result.userName}, pwd: ${result.password}`);
});
```

[> screenshots for=LoginDialog <]
