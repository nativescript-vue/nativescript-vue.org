---
title: TimePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker
contributors: [ianaya89]
---

`<TimePicker>` es un componente de UI que permite al usuario seleccionar un valor de tiempo.

> También puedes ver [DatePicker](/en/docs/elements/components/date-picker).

---

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

`<TimePicker>` provee enlace de datos bidireccional (*two-way data binding*) usando `v-model`.

```html
<TimePicker v-model="selectedTime" />
```

[> screenshots for=TimePicker <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `hour` | `Number` | Obtiene o establece la hora.
| `minute` | `Number` | Obtiene o establece el minuto.
| `time` | `Date` | Obtiene o establece el el valor de tiempo.
| `minHour` | `Number` | Obtiene o establece la hora mínima disponible para seleccionar.
| `maxHour` | `Number` | Obtiene o establece la hora máxima disponible para seleccionar.
| `minMinute` | `Number` | Obtiene o establece el minuto mínimo disponible para seleccionar.
| `maxMinute` | `Number` | Obtiene o establece el minuto máximo disponible para seleccionar.
| `minuteInterval` | `Number` | Obtiene o establece el intervalo de minutos seleccionable. Por ejemplo: intervalo de 5 o 15 minutos.<br/>Valor por defecto: `1`.

## Events

| Nombre | Descripción |
|------|-------------|
| `timeChange` | Emitido cada vez que cambia el valor de tiempo seleccionado.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.TimePicker`](https://developer.android.com/reference/android/widget/TimePicker) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)
