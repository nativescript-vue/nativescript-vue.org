---
title: WebView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [alexhiroshi]
---

`<WebView>` é um componente de UI que deixa você exibir contéudo da web no seu aplicativo. Você pode puxar e mostrar conteúdo a partir de uma URL ou um arquivo HTML local, ou você pode renderizar contéudo estático em HTML.

Veja também: [HtmlView](/pt-BR/docs/elements/components/html-view).

---

```html
<WebView src="http://nativescript-vue.org/" />

<WebView src="~/html/index.html" />

<WebView src="<div><h1>Some static HTML</h1></div>" />
```

[> screenshots for=WebView <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `src` | `String` | Obtém ou define o conteúdo web.<br/>Valores válidos: uma URL absoluta, o caminho do arquivo HTML local, ou HTML estático.

## Eventos

| nome | descrição |
|------|-------------|
| `loadStarted`| Emitido quando a página começa a carregar na WebView.
| `loadFinished`| Emitido quando a página termina de carregar na WebView.

## Componente Nativo
| Android | iOS |
|---------|-----|
| [`android.webkit.WebView`](https://developer.android.com/reference/android/webkit/WebView) | [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview)
