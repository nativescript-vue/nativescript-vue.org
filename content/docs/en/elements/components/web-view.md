---
title: WebView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [MisterBrownRSA]
---

The WebView component is used to display web content within your application. 
You use the control by providing a src attribute that points at a URL or a local HTML file.
You can load a page from a URL or by navigating back and forward.

---

```html
<WebView height="1200px" src="http://nativescript-vue.org/#/"></WebView>
```

[> screenshots for=WebView <]

## Props

| name | type | description |
|------|------|-------------|
| `src` | `String` | The location link of the "browser"

## Events

| name | description |
|------|-------------|
| `tap`| Emitted when the button is pressed

## Native Component
| Android | iOS |
|---------|-----|
| android.webkit.WebView | UIWebView