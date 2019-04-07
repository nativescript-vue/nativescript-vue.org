---
title: TextView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [Spice-Z]
---

`<TextView>`は変更可能か読み取り専用の複数行のテキストのコンテナとなるUIコンポーネントです。ユーザーが長文を入力する時や。複数行に渡る長文をスクリーンに表示ささせる時に使えます。

`<TextView>`は[`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase)とさらなるプロパティとイベントを提供する[`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase)を拡張したものです。

---

```html
<TextView text="Multi\nLine\nText" />
```

`<TextView>`は`v-model`による双方向バインディングを提供します。

```html
<TextView v-model="textViewValue" />
```

[> screenshots for=TextView <]

### 複数行のテキストを表示する

`<TextView>`内でテキストに複数のスタイルをあてるには、`<FormattedString>`が使えます。

```html
<TextView editable="false">
  <FormattedString>
    <Span text="You can use text attributes such as " />
    <Span text="bold, " fontWeight="Bold" />
    <Span text="italic " fontStyle="Italic" />
    <Span text="and " />
    <Span text="underline." textDecoration="Underline" />
  </FormattedString>
</TextView>
```

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `text` | `String` | コンポーネントの値を取得・設定します。
| `hint` | `String` | コンポーネントが編集可能な時、プレースホルダのテキストを取得・設定します。
| `editable` | `Boolean` | `true`の時、ユーザーがコンテナの内容を編集できることを示します。
| `maxLength` | `Number` | コンテナに入力できる文字数の上限を設定します。
| `keyboardType` | `KeyboardType` | テキストをより簡単に入力するためにカスタムキーボードを表示します。.<br/>有効な値: `datetime`、 `phone`、 `number`、 `url`、 `email`。
| `returnKeyType` | エンターキーに紐付けるラベルを取得・設定します。現在はiOSでのみサポートされています。<br/>有効な値: `done`、 `next`、 `go`、 `search`、 `send`。
| `autocorrect` | `Boolean` | 自動修正の可否を設定します。

## Events

| 名前 | 説明 |
|------|-------------|
| `textChange`| テキストが変更された時に発火します。
| `returnPress`| エンターキーが押されたときに発火します。
| `focus`| コンテナにフォーカスがあたった時に発火します。
| `blur`| コンテナのフォーカスが外れた時に発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)
