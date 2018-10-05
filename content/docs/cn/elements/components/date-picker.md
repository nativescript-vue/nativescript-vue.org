---
title: DatePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker
contributors: [nuochong]
---

`<DatePicker>` 是一个UI组件，允许用户从预先配置的范围中选择日期。

> 另请参见： [TimePicker](/en/docs/elements/components/time-picker).

---

```html
<DatePicker :date="someDate" />
```

`<DatePicker>` 使用提供双向数据绑定 `v-model`。

```html
<DatePicker v-model="selectedDate" />
```

[> screenshots for=DatePicker <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `date` | `Date` | 获取或设置完整日期。
| `minDate` | `Date` | 获取或设置要选择的最早可能日期。
| `maxDate` | `Date` | 获取或设置要选择的最新可能日期。
| `day` | `Number` | 获取或设置日期。
| `month` | `Number` | 获取或设置月份。
| `year` | `Number` | 获取或设置年份。

## 活动

| 名称 | 描述 |
|------|-------------|
| `dateChange` | 选定日期更改时发出。

## 原生组件

| Android |	iOS |
|---------|-----|
| [`android.widget.DatePicker`](https://developer.android.com/reference/android/widget/DatePicker.html) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)
