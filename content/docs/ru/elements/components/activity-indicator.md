---
title: ActivityIndicator
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator
contributors: [MisterBrownRSA, rigor789, ikoevska]
---

`<ActivityIndicator>` - визуальный компонент, отображающий прогресс, сигнализирующий пользователю о том, что операция выполняется в фоновом режиме.

---

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

[> screenshots for=ActivityIndicator <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `busy` | `Boolean` | Получает или устанавливает состояние активности индикатора. `true` означает, что индикатор активен.

## События

| Имя | Описание |
|------|-------------|
| `busyChange`| Срабатывает при изменении свойства `busy`.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = true)](https://developer.android.com/reference/android/widget/ProgressBar.html)	| [`UIActivityIndicatorView`](https://developer.apple.com/documentation/uikit/uiactivityindicatorview)
