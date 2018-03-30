---
title: WebView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [alexhiroshi]
---

O componente WebView é usado para exibir conteúdo da web dentro do seu aplicativo.
Você pode usar o componente adicionando um atributo `src` que aponta para uma URL ou um arquivo HTML local.

---

```html
<WebView src="http://nativescript-vue.org/" />
```

[> screenshots for=WebView <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `src` | `String` | A fonte da página que será exibida.

## Eventos

| nome | descrição |
|------|-------------|
| `loadStarted`| Emitido quando a página começa a carregar na WebView.
| `loadFinished`| Emitido quando a página termina de carregar na WebView.

## Componente Nativo
| Android | iOS |
|---------|-----|
| android.webkit.WebView | WKWebView
