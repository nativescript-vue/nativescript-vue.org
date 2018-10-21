---
title: TextView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [nuochong]
---

`<TextView>` 是一个UI组件，显示可编辑或只读的多行文本容器。您可以使用它来让用户在您的应用中键入大文本，或在屏幕上显示更长的多行文字。

`<TextView>` 扩展 [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) 并 [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase) 提供其他属性和事件。

---

```html
<TextView text="Multi\nLine\nText" />
```

`<TextView>` 使用提供双向数据绑定 `v-model`。

```html
<TextView v-model="textViewValue" />
```

[> screenshots for=TextView <]

### 显示多样式文本

要将多种样式应用于您的文本 `<TextView>`，您可以使用 `<FormattedString>`

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

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `text` | `String` | 获取或设置组件的值。
| `hint` | `String` | 在组件可编辑时获取或设置占位符文本。
| `editable` | `Boolean` | 当 `true`，表示用户可以编辑容器的内容。
| `maxLength` | `Number` | 设置可以在容器中输入的最大字符数。
| `keyboardType` | `KeyboardType` | 显示自定义键盘以便于文本输入。<br/>有效值： `datetime`, `phone`, `number`, `url`, 或 `email`。
| `returnKeyType` | 获取或设置返回键的标签。<br/>有效值： `done`, `next`, `go`, `search`, 或 `send`。 | *暂且不支援*
| `autocorrect` | `Boolean` | 启用或禁用自动更正。

## 活动

| 名称 | 描述 |
|------|-------------|
| `textChange`| 文本更改时发出。
| `returnPress`| 按下返回键时发出。
| `focus`| 容器处于焦点时发出。
| `blur`| 当容器失去焦点时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)
