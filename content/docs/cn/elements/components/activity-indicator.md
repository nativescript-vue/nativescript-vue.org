---
title: ActivityIndicator - 活动指示器
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator
contributors: [Pythonfo]
---

**ActivityIndicator** 组件用于当 APP 的后台正在处理一些事情，提示用户停止操作。

---

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

[> screenshots for=ActivityIndicator <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `busy` |`Boolean` | 为 `true` 时，指示器就会显示 |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `busyChange` | 当组件的 `busy` 属性改变时触发 |

## 原生组件（Native Component）

| Android | iOS |
|---------|-----|
| [android.widget.ProgressBar](https://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = true) | [UIActivityIndicatorView](https://developer.apple.com/documentation/uikit/UIActivityIndicatorView) |