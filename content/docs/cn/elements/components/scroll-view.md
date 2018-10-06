---
title: ScrollView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors: [nuochong]
---

`<ScrollView>` 是一个显示可滚动内容区域的UI组件。内容可以垂直或水平滚动。

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

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `orientation` | `String` | 获取或设置内容可以滚动的方向： `horizontal` 或 `vertical`.<br/>默认值：`vertical`。
| `scrollBarIndicatorVisible` | `Boolean` | 指定滚动条是否可见。<br/>默认值： `true`。

## 活动

| 名称 | 描述 |
|------|-------------|
| `scroll` | 滚动事件发生时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.view`](https://developer.android.com/reference/android/view/View.html) | [`UIScrollView`](https://developer.apple.com/documentation/uikit/uiscrollview)