---
title: WebView/Web представление
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [sn0wil]
---

<<<<<<< HEAD
`<WebView>` - визуальный компонент, позволяющий вам отображать веб-контент внутри приложения. Вы можете получить и отобразить контент из URL или из локального HTML-файла, а также отрендерить статический HTML-контент.
=======
`<WebView>`  - визуальный компонент, позволяющий вам отображать веб-контент внутри приложения. Вы можете получить и отобразить контент из URL или из локального HTML-файла, а также отрендерить статический HTML-контент.
>>>>>>> fixes lex111


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
<<<<<<< HEAD
| `src` | `String` | Получает или задает отображаемый web-контент.<br/>Допустимые значения: абсолютный URL, путь к локальному HTML-файлу или статический HTML.
=======
| `src` | `String` | Получает или задает отображаемый web контент.<br/>Допустимые значения: абсолютный URL, путь к локальному HTML-файлу или статический HTML.
>>>>>>> fixes lex111

## События

| Имя | Описание |
|------|-------------|
| `loadStarted`| Срабатывает, когда страница начала загружаться в `<WebView>`.
| `loadFinished`| Срабатывает, когда страница закончила загружаться в `<WebView>`.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.webkit.WebView`](https://developer.android.com/reference/android/webkit/WebView) | [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview)