---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action
contributors: [Spice-Z]
---

`action()`メソッドは選択できるオプションとキャンセルボタンを列挙して表示します。ユーザーにオプションの中から選択させるか、選択を辞めさせるためにこれを使ってください。 

このメソッドは[`dialogs` module](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)の一部です。

---

## 基本的な使い方

`action()`はグローバルに利用できます。アプリ上のどこからでも呼び出すことが可能です。

```JavaScript
action("Your message", "Cancel button text", ["Option1", "Option2"])
  .then(result => {
    console.log(result);
  });
```

[> screenshots for=ActionDialog <]
