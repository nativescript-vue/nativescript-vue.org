---
title: TimePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker
contributors: [sn0wil]

---

`<TimePicker>`  - визуальный компонент, позволяющий пользователю выбрать время. 

Также смотрите: [DatePicker](/ru/docs/elements/components/date-picker).
---

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

`<TimePicker>` обеспечивает двустороннюю привязку данных, используя `v-model`.

```html
<TimePicker v-model="selectedTime" />
```

[> screenshots for=TimePicker <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `hour` | `Number` | Получает или задает выбранный час.
| `minute` | `Number` | Получает или задает выбранную минуту.
| `time` | `Date` | Получает или задает выбранное время.
| `minHour` | `Number` | Получает или задает минимально возможный для выбора час.
| `maxHour` | `Number` | Получает или задает максимально возможный для выбора час.
| `minMinute` | `Number` | Получает или задает минимально возможную для выбора минуту.
| `maxMinute` | `Number` | Получает или задает максимально возможную для выбора минуту.
| `minuteInterval` | `Number` | Получает или задает доступный для выбора интервал в минутах. Например: 5 или 15 минут.<br/>Значение по умолчанию: `1`.

## События

| Имя | Описание |
|------|-------------|
| `timeChanged` | Срабатывает при изменении времени.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.TimePicker`](https://developer.android.com/reference/android/widget/TimePicker) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)
