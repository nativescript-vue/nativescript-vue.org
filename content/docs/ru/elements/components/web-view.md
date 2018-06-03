---
title: WebView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [sn0wil]
---

`<WebView>` - визуальный компонент, позволяющий вам отображать веб-контент внутри приложения. Вы можете получить и отобразить контент из URL или из локального HTML-файла, а также отрендерить статический HTML-контент.


Смотрите также: [HtmlView](/ru/docs/elements/components/html-view).
---

```html
<WebView src="http://nativescript-vue.org/" />

<WebView src="~/html/index.html" />

<WebView src="<div><h1>Some static HTML</h1></div>" />
```

[> screenshots for=WebView <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `src` | `String` | Получает или задает отображаемый web-контент.<br/>Допустимые значения: абсолютный URL, путь к локальному HTML-файлу или статический HTML.

## События

| Имя | Описание |
|------|-------------|
| `loadStarted`| Срабатывает, когда страница начала загружаться в `<WebView>`.
| `loadFinished`| Срабатывает, когда страница закончила загружаться в `<WebView>`.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.webkit.WebView`](https://developer.android.com/reference/android/webkit/WebView) | [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview)