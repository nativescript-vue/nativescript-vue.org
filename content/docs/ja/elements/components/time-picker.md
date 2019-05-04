---
title: TimePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker
contributors: [Spice-Z]
---

`<TimePicker>`ユーザーが時間を選択するためのUIコンポーネントです。

> こちらもご覧ください: [DatePicker](/en/docs/elements/components/date-picker).

---

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

`<TimePicker>`は`v-model`による双方向バインディングを提供します。

```html
<TimePicker v-model="selectedTime" />
```

[> screenshots for=TimePicker <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `hour` | `Number` | 選択されているhourを取得・設定します。
| `minute` | `Number` | 選択されているminuteを取得・設定します。
| `time` | `Date` | 選択されているtimeを取得・設定します。
| `minHour` | `Number` | 選択できる最小のhourを取得・設定します。
| `maxHour` | `Number` | 選択できる最大のhourを取得・設定します。
| `minMinute` | `Number` | 選択できる最小のminuteを取得・設定します。
| `maxMinute` | `Number` | 選択できる最大のminuteを取得・設定します。
| `minuteInterval` | `Number` | 選択できる分の最小のインターバルを取得・設定します。例えば: 5分か15分。<br/>デフォルトの値: `1`.

## Events

| 名前 | 説明 |
|------|-------------|
| `timeChange` | 選択された時間が変更された時に発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.TimePicker`](https://developer.android.com/reference/android/widget/TimePicker) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)
