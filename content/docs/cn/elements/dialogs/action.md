---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action
contributors: [nuochong]
---

该 `action()` 方法显示可选选项列表和取消按钮。使用它让用户在选项之间进行选择或关闭选择。

该方法是该 [`dialogs` 模块](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)的一部分。

---

## 基本用途

 `action()` 方法可在全局范围内使用。您可以在应用中的任何位置调用它。

```JavaScript
action("Your message", "Cancel button text", ["Option1", "Option2"])
  .then(result => {
    console.log(result);
  });
```

[> screenshots for=ActionDialog <]
