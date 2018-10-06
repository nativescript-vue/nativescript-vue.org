---
title: LoginDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login
contributors: [nuochong]
---

 `login()` 方法显示一个对话框，用户可以在其中提供登录凭据。

该方法是 [`dialogs` 模块](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)的一部分。

---

## 基本用途

 `login()` 方法可在全局范围内使用。您可以在应用中的任何位置调用它。

```javascript
login("Your message", "Username field value", "Password field value").then(result => {
  console.log(`Dialog result: ${result.result}, user: ${result.userName}, pwd: ${result.password}`);
});
```

## 配置对话框选项

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
