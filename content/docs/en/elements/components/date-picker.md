---
title: DatePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker
contributors: [MisterBrownRSA]
---

The DatePicker allows the user to pick a date.

---

```html
<DatePicker @loaded="onDatePickerLoaded" @dateChanged="onDateChanged" />
```

[> screenshots for=DatePicker <]

## Props

| name | type | description |
|------|------|-------------|
| `date` | `Date` | The current set date
| `minDate` | `Date` | The minimum option for date range
| `maxDate` | `Date` | The minimum option for date range
| `day` | `Number` | The current set day
| `month` | `Number` | The current set month
| `year` | `Number` | The current set year

## Events

| name | description |
|------|-------------|
| `loaded`| Emitted after the component has been loaded
| `dateChanged` | Emitted after every single change on component

## Native Component

| Android |	iOS |
|---------|-----|
| android.widget.DatePicker | UIDatePicker