---
title: DatePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker
contributors: [Spice-Z]
---

`<DatePicker>`は、予め設定した範囲から日付を選択できるUIコンポーネントです。

> こちらもご覧ください: [TimePicker](/en/docs/elements/components/time-picker).

---

```html
<DatePicker :date="someDate" />
```

`<DatePicker>`は`v-model`による双方向バインディングを提供します。

```html
<DatePicker v-model="selectedDate" />
```

[> screenshots for=DatePicker <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `date` | `Date` | 日付を取得・設定する。
| `minDate` | `Date` | 選択できる最短の日付を取得・設定する。
| `maxDate` | `Date` | 選択できる最も遅いの日付を取得・設定する。
| `day` | `Number` | 日を取得・設定する。
| `month` | `Number` | 月を取得・設定する。
| `year` | `Number` | 年を取得・設定する。

## Events

| 名前 | 説明 |
|------|-------------|
| `dateChange` | 選択されている日付が変更されたときに通達されます。

## Native component

| Android |	iOS |
|---------|-----|
| [`android.widget.DatePicker`](https://developer.android.com/reference/android/widget/DatePicker.html) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)
