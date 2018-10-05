---
title: Progress
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress
contributors: [nuochong]
---

`<Progress>` 是一个UI组件，显示一个指示任务进度的栏。

另请参见： [ActivityIndicator](/en/docs/elements/components/activity-indicator)。

---

```html
<Progress :value="currentProgress" />
```

[> screenshots for=Progress <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Number` | 获取或设置进度条的当前值。必须在0到 `maxValue` 范围以内。
| `maxValue` | `Number` | 获取或设置进度条的最大值。<br/>默认值： `100`。

## 活动

| 名称 | 描述 |
|------|-------------|
| `valueChange` |  `value` 属性发生变化时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = false)](https://developer.android.com/reference/android/widget/ProgressBar.html) | [`UIProgressView`](https://developer.apple.com/documentation/uikit/uiprogressview)
