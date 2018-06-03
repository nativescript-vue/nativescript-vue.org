---
title: HtmlView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_html_view_.htmlview
contributors: [sn0wil]
---

`<HtmlView>` -визуальный компонент, позволяющий отобразить статический HTML контент.

Также смотрите: [WebView](/ru/docs/elements/components/web-view).

---

```html
<HtmlView html="<div><h1>HtmlView</h1></div>" />
```

[> screenshots for=HtmlView <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `html` | `String` | HTML контент, который будет отображен.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)