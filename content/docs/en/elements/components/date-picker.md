---
title: DatePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker
contributors: [MisterBrownRSA, rigor789]
---

The DatePicker component allows the user to pick a date.

---

```html
<DatePicker @loaded="onDatePickerLoaded" @dateChanged="onDateChanged" />
```

**Note**: This component supports two-way data binding using `v-model`:

```html
<DatePicker v-model="selectedDate" />
```

[> screenshots for=DatePicker <]

## Props

| name | type | description |
|------|------|-------------|
| `date` | `Date` | The currently displayed date.
| `minDate` | `Date` | The minimum selectable date.
| `maxDate` | `Date` | The maximum selectable date.
| `day` | `Number` | The currently set day.
| `month` | `Number` | The currently set month.
| `year` | `Number` | The currently set year.

## Events

| name | description |
|------|-------------|
| `dateChanged` | Emitted when the selected date changes.

## Native Component

| Android |	iOS |
|---------|-----|
| android.widget.DatePicker | UIDatePicker
