---
title: HtmlView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_html_view_.htmlview
contributors: [MisterBrownRSA, rigor789]
---

The HtmlView component allows you to show static html content without the need of a WebView.

---

```html
<HtmlView html="<div><h1>HtmlView</h1></div>" />
```

[> screenshots for=HtmlView <]

## Props

| name | type | description |
|------|------|-------------|
| `html` | `String` | The html content to be shown.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.TextView | UILabel
