---
title: DatePicker - 日期选择器
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker
contributors: [Pythonfo]
---

**DatePicker** 组件是一个日期选择器。

---

```html
<DatePicker @loaded="onDatePickerLoaded" @dateChanged="onDateChanged" />
```

**Note**: 支持使用 `v-model` 来进行双向数据绑定：

```html
<DatePicker v-model="selectedDate" />
```

[> screenshots for=DatePicker <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| date | Date | 当前选择的日期 |
| minDate | Date | 可供选择的日期上限 |
| maxDate | Date | 可供选择的日期下限 |
| day | Number | 日 |
| month | Number | 月 |
| year | Number | 年 |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `dateChanged` | 组件的 `date` 属性改变时触发 |

## 原生组件（Native Component）

| Android | iOS |
|---------|-----|
| [android.widget.DatePicker](https://developer.android.com/reference/android/widget/DatePicker.html) | [UIDatePicker](https://developer.apple.com/documentation/uikit/UIDatePicker) |
