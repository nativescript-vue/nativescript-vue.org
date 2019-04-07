---
title: TextField
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [Spice-Z]

---

`<TextField>`は一行のテキストを入力するためのボックスを提供するコンポーネントです。

`<TextField>`は[`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase)とさらなるプロパティとイベントを提供する[`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase)を拡張したものです。

---

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

`<TextField>`は`v-model`による双方向バインディングを提供します。

```html
<TextField v-model="textFieldValue" />
```

[> screenshots for=TextField <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `text` | `String` | フィールドの値を取得・設定します。
| `hint` | `String` | プレースホルダーの値を取得・設定します。
| `editable` | `Boolean` | `true`の時、ユーザーがフィールドの値を編集可能であることを示します。
| `maxLength` | `Number` | 指定された数で文字数の上限を設定します。
| `secure` | `Boolean` | `true`の時は入力されたテキストを隠します。パスワードを入力するフィールドで使ってください。<br/>デフォルトの値: `false`。
| `keyboardType` | `KeyboardType` | テキストをより簡単に入力するためにカスタムキーボードを表示します。<br/>有効な値: `datetime`、 `phone`、 `number`、 `url`、`email`。
| `returnKeyType` | `ReturnKeyType` | エンターキーに紐付けるラベルを取得・設定します。<br/>有効な値: `done`、 `next`、 `go`、 `search`、`send`。
| `autocorrect` | `Boolean` | 自動修正の可否を設定します。

## Events

| 名前 | 説明 |
|------|-------------|
| `textChange` | テキストが変更されたときに発火します。
| `returnPress` | エンターキーが押されたときに発火します。
| `focus` | フィールドにフォーカスがあたった時に発火します。
| `blur` | フィールドのフォーカスが外れた時に発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield)
