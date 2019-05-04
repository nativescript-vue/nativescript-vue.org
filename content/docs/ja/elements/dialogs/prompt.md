---
title: PromptDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt
contributors: [Spice-Z]
---

`prompt()`はダイアログを一行の入力フィールドとともに表示するメソッドです。

このメソッドは[`dialogs` module](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)の一部です。

---

## 基本的な使い方

`prompt()`はグローバルに利用できます。アプリ上のどこからでも呼び出すことが可能です。

```JavaScript
prompt('Your message to the user', 'Suggested user input')
.then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
})
```

## ダイアログのオプションを設定する。

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

## 入力のオプションを設定する。

また、`inputType`により入力の型を設定することもできます。型はプレーンテキストとして(`text`)、eメールとして(`email`)、パスワードのような入力を隠すものとして(`password`)が使えます。

```JavaScript
inputType: dialogs.inputType.text
inputType: dialogs.inputType.email
inputType: dialogs.inputType.password
```

**注意:** このオプションはグローバルに利用可能ではないので、`inputType`を使う前に、アプリの中で`dialogs`モジュールを呼び出す必要があります。

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
