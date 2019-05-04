---
title: ConfirmDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm
contributors: [Spice-Z]
---

`confirm()`は確認のメッセージを表示とキャンセルボタン、OKボタンを表示するメソッドです。

このメソッドは[`dialogs` module](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)の一部です。

---

## 基本的な使い方

`confirm()`はグローバルに利用できます。アプリ上のどこからでも呼び出すことが可能です。

```javascript
confirm('Your message')
  .then(result => {
    console.log(result);
  });
```

## ダイアログのオプションを設定する。

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
