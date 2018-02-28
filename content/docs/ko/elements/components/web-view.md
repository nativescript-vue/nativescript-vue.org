---
title: 웹뷰 (WebView)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [qgp9]
---

웹뷰(WebView) 컴포넌트는 어플리케이션 안에 웹 컨텐츠를 표시하기 위해 사용됩니다.
Url 이나 로컬 HTML 파일을 가리키는 `src` 속성과 함께 컴포넌트를 사용할 수 있습니다.

---

```html
<WebView src="http://nativescript-vue.org/" />
```

[> screenshots for=WebView <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `src` | `String` | 표시되는 페이지의 소스

## Events

| name | description |
|------|-------------|
| `loadStarted`| 웹뷰에서 페이지가 로딩되기 시작할때 발생
| `loadFinished`| 웹뷰의 페이지가 다 로딩되었을때 발생

## Native Component
| Android | iOS |
|---------|-----|
| android.webkit.WebView | WKWebView
