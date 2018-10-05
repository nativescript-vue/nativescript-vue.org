---
title: WebView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [nuochong]
---

`<WebView>` 是一个UI组件，可让您在应用中显示Web内容。您可以从URL或本地HTML文件中提取和显示内容，也可以呈现静态HTML内容。


另请参见： [HtmlView](/en/docs/elements/components/html-view).

---

```html
<WebView src="http://nativescript-vue.org/" />

<WebView src="~/html/index.html" />

<WebView src="<div><h1>Some static HTML</h1></div>" />
```

[> screenshots for=WebView <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `src` | `String` | 获取或设置显示的Web内容。<br/>有效值：绝对URL，本地HTML文件的路径或静态HTML。

## 活动

| 名称 | 描述 |
|------|-------------|
| `loadStarted`| 页面开始加载时发出 `<WebView>`。
| `loadFinished`| 页面加载完成后发出 `<WebView>`。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.webkit.WebView`](https://developer.android.com/reference/android/webkit/WebView) | [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview)