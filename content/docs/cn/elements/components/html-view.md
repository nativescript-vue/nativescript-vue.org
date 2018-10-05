---
title: HtmlView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_html_view_.htmlview
contributors: [nuochong]
---

`<HtmlView>` 是一个UI组件，可让您显示静态HTML内容。

另请参见：[WebView](/en/docs/elements/components/web-view)。

---

```html
<HtmlView html="<div><h1>HtmlView</h1></div>" />
```

[> screenshots for=HtmlView <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `html` | `String` | 要显示的HTML内容。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)