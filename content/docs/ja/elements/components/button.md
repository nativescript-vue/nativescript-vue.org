---
title: ボタン
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
contributors: [Spice-Z]
---

`<Button>`はユーザーの動きを反映するボタンを表示するためのUIコンポーネントです。

使用できる動きについては[Gestures in the official NativeScript documentation](https://docs.nativescript.org/ui/gestures)を見てください。

---

```html
<Button text="Button" @tap="onButtonTap" />
```

[> screenshots for=Button <]

## プロップス

| 名前 | 型 |説明 |
|------|------|-------------|
| `text` | `String` | ボタンのラベルを取得したり設定します。
| `textWrap` | `Boolean` | ウィジェトがラベルのテキストを覆うかどうかについて取得したり設定します。the text of the label. ラベルが長いときに有用です。デフォルトの値は`false`です。

## イベント

| 名前 | 説明 |
|------|-------------|
| `tap` | ボタンがタップされたときに通達されます。

## ネイティブコンポーネント

| Android | iOS |
|---------|-----|
| [`android.widget.Button`](https://developer.android.com/reference/android/widget/Button.html) | [`UIButton`](https://developer.apple.com/documentation/uikit/uibutton)
