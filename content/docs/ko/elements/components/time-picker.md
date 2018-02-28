---
title: 시간 선택 (TimePicker)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker
contributors: [qgp9]

---

시간선택(TimePicker) 컴포넌트는 사용자가 형식을 가진 시간을 선택할 수 있게 해줍니다.

---

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

**노트**: 이 컴포넌트는 `v-model` 을 이용한 양방향(two-way) 바인딩을 지원합니다:

```html
<TimePicker v-model="selectedTime" />
```

[> screenshots for=TimePicker <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `hour` | `Number` | 시간 선택기의 시
| `minute` | `Number` | 시간 선택기의 분
| `time` | `Date` | 시간 선택기의 시간
| `minHour` | `Number` | 선택 가능한 최소 시
| `maxHour` | `Number` | 선택 가능한 최대 시
| `minMinute` | `Number` | 선택 가능한 최소 분
| `maxMinute` | `Number` | 선택 가능한 최대 분
| `minuteInterval` | `Number` | 선택된 분들의 간격

## Events

| name | description |
|------|-------------|
| `timeChanged` | 선택된 시간이 바뀌면 발생

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.TimePicker | UIDatePicker
