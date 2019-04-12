---
title: AlertDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [Spice-Z]
---

`alert()`はメッセージとOKボタンを表示するメソッドです。ユーザーからの反応が必要ない情報を見せる時に使います。

このメソッドは[`dialogs` module](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)の一部です。

---

## 基本的な使い方

`alert()`はグローバルに利用できます。アプリ上のどこからでも呼び出すことが可能です。

```javascript
alert('Your message')
  .then(() => {
    console.log("Alert dialog closed.");
  });
```

## ダイアログのオプションを設定する。

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
