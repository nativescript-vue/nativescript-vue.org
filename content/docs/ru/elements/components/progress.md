---
title: Progress
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress
contributors: [sn0wil]
---

`<Progress>` - визуальный компонент, отображающий полосу для индикации прогресса задачи.

See also: [ActivityIndicator](/en/docs/elements/components/activity-indicator).

---

```html
<Progress :value="currentProgress" />
```

[> screenshots for=Progress <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `value` | `Number` | Получает или задает текущее значение полосы прогресса. Должно быть в диапазоне от 0 до `maxValue`.
| `maxValue` | `Number` | Получает или задает максимальное значение полосы прогресса.<br/>Значение по умолчанию: `100`.

## События

| Имя | Описание |
|------|-------------|
| `valueChange` | Срабатывает при изменении свойства `value`.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = false)](https://developer.android.com/reference/android/widget/ProgressBar.html) | [`UIProgressView`](https://developer.apple.com/documentation/uikit/uiprogressview)
