---
title: TimePicker - 时间选择器
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker
contributors: [Pythonfo]

---

**TimePicker** 组件允许用户选择一个格式化的时间。

---

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

**Note**: 支持使用 `v-model` 来进行双向数据绑定：

```html
<TimePicker v-model="selectedTime" />
```

[> screenshots for=TimePicker <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `hour` | `Number` | 小时 |
| `minute` | `Number` | 分钟 |
| `time` | `Date` | 当前选择的时间 |
| `minHour` | `Number` | 可供选择的最小小时 |
| `maxHour` | `Number` | 可供选择的最大小时 |
| `minMinute` | `Number` | 可供选择的最小分钟 |
| `maxMinute` | `Number` | 可供选择的最大分钟 |
| `minuteInterval` | `Number` | 可供选择的间隔 |

## 事件（Events）

| 事件 | 描述 |
|------|-------------|
| `timeChanged` | 组件的 `time` 属性改变时触发 |

## 原生组件（Native Component）
| Android | iOS |
|---------|-----|
| android.widget.TimePicker | UIDatePicker |