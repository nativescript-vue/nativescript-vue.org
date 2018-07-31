---
title: DatePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker
contributors: [ianaya89]
---

`<DatePicker>` es un componente de UI que permite al usuario seleccionar una fecha a partir de un rango pre-configurado.

> Puedes ver también: [TimePicker](/en/docs/elements/components/time-picker).

---

```html
<DatePicker @loaded="onDatePickerLoaded" @dateChange="onDateChanged" />
```

`<DatePicker>` provee enlace de datos bidireccional (*two-way data binding*) usando `v-model`.

```html
<DatePicker v-model="selectedDate" />
```

[> screenshots for=DatePicker <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `date` | `Date` | Obtiene o establece la fecha completa.
| `minDate` | `Date` | Obtiene o establece la mínima fecha posible para seleccionar.
| `maxDate` | `Date` | Obtiene o establece la máxima fecha posible para seleccionar.
| `day` | `Number` | Obtiene o establece el día de la fecha.
| `month` | `Number` | Obtiene o establece el mes de la fecha.
| `year` | `Number` | Obtiene o establece el año de la fecha.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `dateChange` | Emitido cada vez que la fecha seleccionada cambia.

## Componente nativo

| Android |	iOS |
|---------|-----|
| [`android.widget.DatePicker`](https://developer.android.com/reference/android/widget/DatePicker.html) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)
