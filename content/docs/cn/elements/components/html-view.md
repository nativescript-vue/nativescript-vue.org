---
title: HtmlView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_html_view_.htmlview
contributors: [Pythonfo]
---

**HtmlView** 组件可以不需要 WebView 的情况下显示静态的 HTML 代码。

---

```html
<HtmlView html="<div><h1>HtmlView</h1></div>" />
```

[> screenshots for=HtmlView <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `html` | `String` | 要显示的内容 |

## 原生组件（Native Component）

| Android | iOS |
|---------|-----|
| [android.widget.TextView](https://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/documentation/uikit/UILabel) |
