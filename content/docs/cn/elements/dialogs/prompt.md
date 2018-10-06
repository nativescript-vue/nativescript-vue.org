---
title: PromptDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt
contributors: [nuochong]
---

 `prompt()` 方法显示一个对话框，其中包含用于用户输入的单行字段。

该方法是 [`dialogs` 模块](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)的一部分。

---

## 基本用途

 `prompt()` 方法可在全局范围内使用 您可以在应用中的任何位置调用它。

```JavaScript
prompt('Your message to the user', 'Suggested user input')
.then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
})
```

## 配置对话框选项

```JavaScript
prompt({
  title: "Your dialog title",
  message: "Your message",
  okButtonText: "Your OK button text",
  cancelButtonText: "Your Cancel button text",
  defaultText: "Suggested user input",
}).then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
});
```

## 配置输入类型

您还可以使用配置输入类型 `inputType`。您可以选择纯文本（`text`），启用电子邮件的输入（`email`）和类似密码的隐藏输入（`password`）。

```JavaScript
inputType: dialogs.inputType.text
inputType: dialogs.inputType.email
inputType: dialogs.inputType.password
```

**注意：** 此选项不是全局可用的，您需要 `dialogs` 在使用之前在应用程序中要求该模块 `inputType`。

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')
```

### 例

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')

prompt({
  title: "Email Prompt",
  message: "Provide your email address:",
  okButtonText: "OK",
  cancelButtonText: "Cancel",
  defaultText: "name@domain.com",
  inputType: dialogs.inputType.email
}).then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
});
```

[> screenshots for=PromptDialog <]
