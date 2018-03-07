---
title: TextField - 文本框
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [Pythonfo]

---

**TextField**组件是是一个单行的可编辑的文本框。

---

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

**Note**: 支持使用 `v-model` 来进行双向数据绑定：

```html
<TextField v-model="textFieldValue" />
```

[> screenshots for=TextField <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `text` | `String` | 用户输入的字符串 |
| `hint` | `String` | 提示 |
| `editable` | `Boolean` | 能否被编辑。为 `true` 时，用户能编辑组件内的值 |
| `maxLength` | `Number` | 能被输入的最大长度 |
| `secure` | `Boolean` | 是否隐藏输入的字符串。默认为 `false` |
| `keyboardType` | `KeyboardType` | 是否显示相对应的键盘以供方便输入。例如 `datetime`, `phone`， `number`，`url`，或者 `email` |
| `returnKeyType` | `ReturnKeyType` | 回车健的标签。例如  `done`，`next`，`go`，`search` 或 `send` |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `textChange`| 组件的 `text` 属性改变时触发 |
| `returnPress`| 回车键点击时触发 |
| `focus`| 组件获取焦点时触发 |
| `blur`| 组件失去焦点时触发 |

## 原生组件（Native Component）
| Android | iOS |
|---------|-----|
| android.widget.EditText | UITextField |
