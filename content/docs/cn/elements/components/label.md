---
title: Label
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_label_.label
contributors: [nuochong]
---

`<Label>` 是一个显示只读文本的UI组件。

**重要提示：** 此 `<Label>`  **不是** 与 HTML一样的 `<Label>`.

---

```html
<Label text="Label" />
```

[> screenshots for=Label <]

### 造型标签

如果需要设置文本的部分样式，可以使用 [`FormattedString`](https://docs.nativescript.org/angular/ui/ng-ui-widgets/formatted-string) 和 [`Span`](https://docs.nativescript.org/api-reference/classes/_text_span_.span) 元素的组合。

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

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `text` | `String` | 获取或设置标签的文本。
| `textWrap` | `Boolean` | 获取或设置标签是否包装文本。<br/>默认值： `false`。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UILabel`](https://developer.apple.com/documentation/uikit/uilabel)
