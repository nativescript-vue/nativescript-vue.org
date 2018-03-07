---
title: Progress - 进度条
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress
contributors: [Pythonfo]
---

**Progress** 组件会是一个明显的进度指示器。

---

```html
<Progress :value="currentProgress" />
```

[> screenshots for=Progress <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Number` | 当前值，不能大于最大值 |
| `maxValue` | `Number` | 最大值。默认为 `100` |

## Events

| 名称 | 描述 |
|------|-------------|
| `valueChange` | 组件的 `value` 属性改变时触发 |

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.ProgressBar (indeterminate = false) | UIProgressView |
