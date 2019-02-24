---
title: HtmlView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_html_view_.htmlview
contributors: [Spice-Z]
---

`<HtmlView>`はHTMLのコンテンツを表示するためのUIコンポーネントです。

こちらもご覧ください: [WebView](/en/docs/elements/components/web-view).

---

```html
<HtmlView html="<div><h1>HtmlView</h1></div>" />
```

[> screenshots for=HtmlView <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `html` | `String` | 表示されるHTMLのコンテンツ

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)