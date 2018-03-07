---
title: Label - 标签
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_label_.label
contributors: [Pythonfo]
---

**Label** 组件用于显示一个只读的文本。

**Note**: 这个 `<Label>` 和 HTML 的 `<label>` 标签不一样。

---

```html
<Label text="Label" />
```

[> screenshots for=Label <]

### 修改文本样式

如果需要修改文本内某个字、单词或句子的样式，可以通过组合 `FormattedString` 和 `Span` 来修改。

例如:
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

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `text` | `String` | 要显示的文本 |
| `textWrap` | `boolean` | Determines whether or not the Label wraps text. Default `false`. |

## 原生组件（Native Component）

| Android | iOS |
|---------|-----|
| [android.widget.TextView](https://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/documentation/uikit/UILabel) |
