---
title: AlertDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [nuochong]
---

 `alert()` 方法显示一条消息和一个OK按钮。使用它显示不需要用户操作的信息和通知。

该方法是该 [`dialogs` 模块](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)的一部分。

---

## 基本

 `alert()` 方法可在全局范围内使用。您可以在应用中的任何位置调用它。

```javascript
alert('Your message')
  .then(() => {
    console.log("Alert dialog closed.");
  });
```

## 配置对话框选项

```JavaScript
alert({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your OK button text"
}).then(() => {
  console.log("Alert dialog closed");
});
```

[> screenshots for=AlertDialog <]
