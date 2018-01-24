---
title: TimePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker
contributors: [MisterBrownRSA]

---

The TimePicker component allows the user to select formatted time.

---

```html
<TimePicker :hour="currentHour" :minute="currentMinute" />
```

[> screenshots for=TimePicker <]

## Props

| name | type | description |
|------|------|-------------|
| `hour` | `Number` | Sets the hour field
| `minute` | `Number` | Sets the minute field

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.TimePicker | UIDatePicker