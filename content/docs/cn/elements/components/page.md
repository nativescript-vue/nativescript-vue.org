---
title: Page
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_page_.page
contributors: [nuochong]
---

`<Page>` 是一个用于包装内容并可选择显示的UI组件 [`<ActionBar>`](/en/docs/elements/action-bar/action-bar)。

---

```html
<Page>
  <ActionBar title="My App" />
  <GridLayout>
    <Label text="My Content"/>
  </GridLayout>
</Page>
```

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `actionBarHidden` | `Boolean` | 显示或隐藏ActionBar。<br/>默认值： `false`
| `backgroundSpanUnderStatusBar` | `Boolean` | 获取或设置页面背景是否跨越状态栏。<br/>默认值： `false`。
| `androidStatusBarBackground` | `Color` | 获取或设置android上状态栏的颜色。
| `enableSwipeBackNavigation` | `Boolean` | 获取或设置是否可以在ios上刷回页面。<br/>默认值： `true`。
| `statusBarStyle` | `String` | 获取或设置状态栏的样式。<br/>有效值：<br/>`"light"`,<br/>`"dark"`


## 活动

| 名称 | 描述 |
|------|-------------|
| `navigatedFrom` | 导航父框架时发出。
| `navigatedTo` | 父框架导航到此页面时发出。
| `navigatingFrom` | 父框架导航离开此页面时发出。
| `navigatingTo` | 父框架导航到此页面时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.GridLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/GridLayout.java) | [`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller)
