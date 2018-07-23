---
title: WebView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [ianaya89]
---

`<WebView>` es un componente de UI que permite mostrar contenido web en tu aplicación. Puedes disponer y visualizar contenido que se obtiene a traves de una URL o de un archivo HTML loca. También puedes renderizar contenido HTML estático.


Puedes ver también: [HtmlView](/en/docs/elements/components/html-view).

---

```html
<WebView src="http://nativescript-vue.org/" />

<WebView src="~/html/index.html" />

<WebView src="<div><h1>Some static HTML</h1></div>" />
```

[> screenshots for=WebView <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `src` | `String` | Obtiene o establece el contenido que se intenta mostrar.<br/>Posibles valores: URL absoluta, ruta de un archivo HTML local o contendio HTML estático.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `loadStarted`| Emitido cada vez que la página ha comenzado a cargar el componente `<WebView>`.
| `loadFinished`| Emitido cada vez que la página ha finalizado de cargar el componente `<WebView>`.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.webkit.WebView`](https://developer.android.com/reference/android/webkit/WebView) | [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview)