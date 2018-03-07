---
title: WebView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview
contributors: [Pythonfo]
---

**WebView** 组件用于在 APP 里面显示页面。
你可以为组件提供 `src` 属性，指向一个网络页面或本地页面。

---

```html
<WebView src="http://nativescript-vue.org/" />
```

[> screenshots for=WebView <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `src` | `String` | 页面源 |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `loadStarted`| 页面开始加载时触发 |
| `loadFinished`| 页面完成加载后触发 |

## 原生组件（Native Component）
| Android | iOS |
|---------|-----|
| android.webkit.WebView | WKWebView |