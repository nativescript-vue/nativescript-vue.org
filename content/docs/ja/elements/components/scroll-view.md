---
title: ScrollView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors: [Spice-Z]
---

`<ScrollView>`はスクロール可能なコンテンツを表示するUIコンポーネントです。コンテンツは垂直方向か並行方向にスクロールできます。

---

```html
<ScrollView orientation="horizontal">
  <StackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </StackLayout>
</ScrollView>
```

[> screenshots for=ScrollView <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `orientation` | `String` | コンテンツがスクロールできる方向を取得・設定します。使用可能な値は: `horizontal`か `vertical`です。<br/>デフォルトの値: `vertical`
| `scrollBarIndicatorVisible` | `Boolean` | スクロールバーが見えるかどうかを指定します。<br/>デフォルトの値: `true`.

## Events

| 名前 | 説明 |
|------|-------------|
| `scroll` | スクロールイベントが発生した際に発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.view`](https://developer.android.com/reference/android/view/View.html) | [`UIScrollView`](https://developer.apple.com/documentation/uikit/uiscrollview)