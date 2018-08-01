---
title: Progress
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress
contributors: [ianaya89]
---

`<Progress>` es un componente de UI que muestra una barra para indicar el progreso de una tarea determinada.

Puedes ver también: [ActivityIndicator](/en/docs/elements/components/activity-indicator).

---

```html
<Progress :value="currentProgress" />
```

[> screenshots for=Progress <]

## Props

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `value` | `Number` | Obtiene o establece el valor actual de la barra de progreso. El número debe estar entre el rango `0` a `maxValue`.
| `maxValue` | `Number` | Obtiene o establece el máximo valor posible que puede tener la barra de progreso.<br/>Valor por defecto: `100`.

## Events

| Nombre | Descripción |
|------|-------------|
| `valueChange` | Emitido cada vez que cambia el valor de la propiedad `value`.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = false)](https://developer.android.com/reference/android/widget/ProgressBar.html) | [`UIProgressView`](https://developer.apple.com/documentation/uikit/uiprogressview)
