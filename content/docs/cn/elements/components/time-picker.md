---
title: TimePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker
contributors: [nuochong]
---

`<TimePicker>` 是一个允许用户选择时间的UI组件。

> 另请参见： [DatePicker](/en/docs/elements/components/date-picker)。

---

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

`<TimePicker>` 使用提供双向数据绑定 `v-model`。

```html
<TimePicker v-model="selectedTime" />
```

[> screenshots for=TimePicker <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `hour` | `Number` | 获取或设置选定的小时。
| `minute` | `Number` | 获取或设置所选分钟。
| `time` | `Date` | 获取或设置所选时间。
| `minHour` | `Number` | 获取或设置最小可选小时。
| `maxHour` | `Number` | 获取或设置最大可选小时数。
| `minMinute` | `Number` | 获取或设置最小可选分钟。
| `maxMinute` | `Number` | 获取或设置最大可选分钟。
| `minuteInterval` | `Number` | 获取或设置可选的分钟间隔。例如：5或15分钟。<br/>默认值： `1`。

## 活动

| 名称 | 描述 |
|------|-------------|
| `timeChange` | 选定时间更改时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.TimePicker`](https://developer.android.com/reference/android/widget/TimePicker) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)
