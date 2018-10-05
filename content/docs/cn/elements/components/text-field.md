---
title: TextField
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [nuochong]

---

`<TextField>`  是一个输入组件，用于创建可编辑的单行框。

`<TextField>` 扩展 [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) 和 [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase) 提供其他属性和事件。

---

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

`<TextField>` 使用提供双向数据绑定 `v-model`。

```html
<TextField v-model="textFieldValue" />
```

[> screenshots for=TextField <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `text` | `String` | 获取或设置字段的值。
| `hint` | `String` | 获取或设置占位符文本。
| `editable` | `Boolean` | 何时 `true`，表示用户可以编辑该字段的值。
| `maxLength` | `Number` | 限制输入到spcified数字的字符。
| `secure` | `Boolean` | 隐藏输入的文本 `true`。使用此属性可创建密码输入字段。<br/>默认值：`false`。
| `keyboardType` | `KeyboardType` | 显示自定义键盘以便于文本输入。<br/>有效值： `datetime`, `phone`, `number`, `url`, 或 `email`。
| `returnKeyType` | `ReturnKeyType` | 获取或设置返回键的标签。<br/>有效值： `done`, `next`, `go`, `search`, 或 `send`。
| `autocorrect` | `Boolean` | 启用或禁用自动更正。

## 活动

| 名称 | 描述 |
|------|-------------|
| `textChange` | 文本更改时发出。
| `returnPress` | 按下返回键时发出。
| `focus` | 当场是焦点时发射。
| `blur` | 当场失去焦点时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield)
