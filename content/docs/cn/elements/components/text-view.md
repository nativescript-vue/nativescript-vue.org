---
title: TextView - 文本域
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [Pythonfo]
---

**TextView** 组件是一个多行的可编辑的文本框。
此组件也可以用于显示多行的只读文本，只要将组件的 `editable` 属性设置为 `false`。

---

```html
<TextView text="Multi\nLine\nText" />
```

**Note**: 支持使用 `v-model` 来进行双向数据绑定：

```html
<TextView v-model="textViewValue" />
```

### 不同样式的多行文本。

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

[> screenshots for=TextView <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `text` | `String` |用户输入的字符串 |
| `hint` | `String` | 提示 |
| `editable` | `Boolean` | 能否被编辑。为 `true` 时，用户能编辑组件内的值 |
| `maxLength` | `Number` | 能被输入的最大长度 |
| `keyboardType` | `KeyboardType` | 是否显示相对应的键盘以供方便输入。例如 `datetime`, `phone`， `number`，`url`，或者 `email` |
| `returnKeyType` | `ReturnKeyType` | 回车健的标签。例如  `done`，`next`，`go`，`search` 或 `send` |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `textChange`| 组件的 `text` 属性改变时触发 |
| `returnPress`| 回车键点击时触发 |
| `focus`| 组件获取焦点时触发 |
| `blur`| 组件失去焦点时触发 |

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.EditText | UITextView |
