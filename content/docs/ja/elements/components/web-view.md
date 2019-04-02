---
title: WebView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [Spice-Z]
---

`<WebView>`はアプリ内でwebの内容を表示するためのUIコンポーネントです。URLかローカルのHTMLファイルから内容を取得し表示することができますし、静的なHTMLを使うこともできます。


こちらもご覧ください: [HtmlView](/en/docs/elements/components/html-view).

---

```html
<WebView src="http://nativescript-vue.org/" />

<WebView src="~/html/index.html" />

<WebView src="<div><h1>Some static HTML</h1></div>" />
```

[> screenshots for=WebView <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `src` | `String` | 表示されたwebの中身を取得・設定することができます。<br/>有効な値: URLの絶対パス、 ローカルのHTMLファイルへのパス、 静的なHTML。

## Events

| 名前 | 型 |
|------|-------------|
| `loadStarted`| `<WebView>`が読み込まれ始めた時に発火します。
| `loadFinished`| `<WebView>`の読み込みが終わった時に発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.webkit.WebView`](https://developer.android.com/reference/android/webkit/WebView) | [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview)