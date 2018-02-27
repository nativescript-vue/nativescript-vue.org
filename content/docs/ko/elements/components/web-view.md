---
title: WebView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [MisterBrownRSA, rigor789, eddyverbruggen]
---

The WebView component is used to display web content within your application. 
You can use the component by providing a `src` attribute that points at a URL or a local HTML file.

---

```html
<WebView src="http://nativescript-vue.org/" />
```

[> screenshots for=WebView <]

## Props

| name | type | description |
|------|------|-------------|
| `src` | `String` | The source of the displayed page.

## Events

| name | description |
|------|-------------|
| `loadStarted`| Emitted when the page has started loading in the WebView.
| `loadFinished`| Emitted when the page has been loaded in the WebView.

## Native Component
| Android | iOS |
|---------|-----|
| android.webkit.WebView | WKWebView
