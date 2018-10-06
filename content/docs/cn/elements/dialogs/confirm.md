---
title: ConfirmDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm
contributors: [nuochong]
---

 `confirm()` 方法显示确认消息和取消以及OK按钮。

该方法是该 [`dialogs` 模块](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)的一部分。

---

## 基本用途

 `confirm()` 方法可在全局范围内使用。您可以在应用中的任何位置调用它。

```javascript
confirm('Your message')
  .then(result => {
    console.log(result);
  });
```

## 配置对话框选项

```javascript
confirm({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your OK button text",
  cancelButtonText: "Your Cancel text"
}).then(result => {
  console.log(result);
});
```

[> screenshots for=ConfirmDialog <]
