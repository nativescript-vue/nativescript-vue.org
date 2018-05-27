---
title: DatePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker
contributors: [sn0wil]
---

`<DatePicker>` - визуальный компонент, позволяющий пользователю выбрать дату из заранее заданного диапазона.

Также смотрите: [TimePicker](/ru/docs/elements/components/time-picker).

---

```html
<DatePicker @loaded="onDatePickerLoaded" @dateChanged="onDateChanged" />
```

`<DatePicker>` обеспечивает двустороннюю привязку данных, используя `v-model`.

```html
<DatePicker v-model="selectedDate" />
```

[> screenshots for=DatePicker <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `date` | `Date` | Получает или задает дату завершения.
| `minDate` | `Date` | Получает или задает самую раннюю возможную дату, доступную для выбора.
| `maxDate` | `Date` | Получает или задает самую позднюю дату, доступную для выбора.
| `day` | `Number` | Получает или задает день.
| `month` | `Number` | Получает или задает месяц.
| `year` | `Number` | Получает или задает год.

## События

| Имя | Описание |
|------|-------------|
| `dateChanged` | Срабатывает при измененнии выбранной даты.

## Нативный компонент

| Android |	iOS |
|---------|-----|
| [`android.widget.DatePicker`](https://developer.android.com/reference/android/widget/DatePicker.html) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)