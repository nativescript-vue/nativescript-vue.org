---
title: Label
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_label_.label
contributors: [Spice-Z]
---

`<Label>`はテキストを表示するUIコンポーネントです。

**重要**: この`<Label>`はHTMLの`<label>`とは**異なります**。

---

```html
<Label text="Label" />
```

[> screenshots for=Label <]

### ラベルのスタイリング

テキストの一部にスタイルを反映させたい場合、[`FormattedString`](https://docs.nativescript.org/angular/ui/ng-ui-widgets/formatted-string)と[`Span`](https://docs.nativescript.org/api-reference/classes/_text_span_.span)エレメントの組み合わせが使えます。

```html
<Label textWrap="true">
  <FormattedString>
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</Label>
```

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `text` | `String` | ラベルのテキストを取得・設定します。
| `textWrap` | `Boolean` | ラベルがテキストをラップするかどうかを取得・設定します。<br/>デフォルトの値は: `false`です。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UILabel`](https://developer.apple.com/documentation/uikit/uilabel)
