---
title: ActivityIndicator
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator
contributors: [nuochong]
---

`<ActivityIndicator>` 是一个UI组件，显示进度指示器向用户发出在后台运行的操作的信号。

---

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

[> screenshots for=ActivityIndicator <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `busy` | `Boolean` | 获取或设置指标是否处于活动状态。何时 `true`，指标处于活动状态。

## 活动

| 名称 | 描述 |
|------|-------------|
| `busyChange`| 当发射的 `busy` 属性更改。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = true)](https://developer.android.com/reference/android/widget/ProgressBar.html)	| [`UIActivityIndicatorView`](https://developer.apple.com/documentation/uikit/uiactivityindicatorview)