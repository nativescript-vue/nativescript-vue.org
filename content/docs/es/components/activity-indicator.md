---
title: ActivityIndicator
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator
contributors: [ianaya89]
---

`<ActivityIndicator>` es un componente de UI que muestra un indicador de progreso. Este componente permite señalar al usuario el estado de una operación que corre en segundo plano.

---

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

[> screenshots for=ActivityIndicator <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `busy` | `Boolean` | Obtiene o establece si el indicador esta activo o no. El valor `true`, indica que esta activo.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `busyChange`| Emitido cada vez que la propiedad `busy` cambia de valor.

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = true)](https://developer.android.com/reference/android/widget/ProgressBar.html)	| [`UIActivityIndicatorView`](https://developer.apple.com/documentation/uikit/uiactivityindicatorview)