---
title: TimePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker
contributors: [MisterBrownRSA, rigor789]

---

The TimePicker component allows the user to select formatted time.

---

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

**Note**: This component supports two-way data binding using `v-model`:

```html
<TimePicker v-model="selectedTime" />
```

[> screenshots for=TimePicker <]

## Props

| name | type | description |
|------|------|-------------|
| `hour` | `Number` | The hour of the TimePicker.
| `minute` | `Number` | The minute of the TimePicker.
| `time` | `Date` | The time of the TimePicker.
| `minHour` | `Number` | The minimum selectable hour.
| `maxHour` | `Number` | The maximum selectable hour.
| `minMinute` | `Number` | The minimum selectable minute.
| `maxMinute` | `Number` | The maximum selectable minute.
| `minuteInterval` | `Number` | The interval between selectable minutes.

## Events

| name | description |
|------|-------------|
| `timeChanged` | Emitted when the selected time changes.

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.TimePicker | UIDatePicker
