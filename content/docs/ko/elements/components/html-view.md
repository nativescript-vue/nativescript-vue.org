---
title: HTML뷰 (HtmlView)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_html_view_.htmlview
contributors: [qgp9]
---

HtmlView 컴포넌트는 정적인 html 컨텐츠를 웹뷰(WebView) 없이 보여줄 수 있도록 해줍니다.

---

```html
<HtmlView html="<div><h1>HtmlView</h1></div>" />
```

[> screenshots for=HtmlView <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `html` | `String` | 보여줄 html 컨텐츠.

## 네이티브 컴포넌트

| Android | iOS |
|---------|-----|
| android.widget.TextView | UILabel
