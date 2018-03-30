---
title: DatePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker
contributors: [alexhiroshi]
---

`<DatePicker>` é um componente de UI que permite o usuário selecionar uma data de uma lista pré-configurada.

---

```html
<DatePicker @loaded="onDatePickerLoaded" @dateChanged="onDateChanged" />
```

`<DatePicker>` fornece two-way data binding usando `v-model`.

```html
<DatePicker v-model="selectedDate" />
```

[> screenshots for=DatePicker <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `date` | `Date` | Obtém ou define a data completa.
| `minDate` | `Date` | Gets or sets the earliest possible date to select.
| `maxDate` | `Date` | Gets or sets the latest possible date to select.
| `day` | `Number` | Obtém ou define o dia.
| `month` | `Number` | Obtém ou define o mês.
| `year` | `Number` | Obtém ou define o ano.

## Eventos

| nome | descrição |
|------|-------------|
| `dateChanged` | Emitido quando a data selecionada é alterada.

## Componente Nativo

| Android |	iOS |
|---------|-----|
| [`android.widget.DatePicker`](https://developer.android.com/reference/android/widget/DatePicker.html) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)