---
title: 날짜선택 (DatePicker)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker
contributors: [qgp9]
---

DatePicker 컴포넌트는 사용자가 날짜를 선택할 수 있도록 합니다.

---

```html
<DatePicker @loaded="onDatePickerLoaded" @dateChange="onDateChanged" />
```

**노트**: 이 컴포넌트는 `v-model` 을 이용한 양방향(two-way) 바인딩을 지원합니다:

```html
<DatePicker v-model="selectedDate" />
```

[> screenshots for=DatePicker <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `date` | `Date` | 현재 표시되는 날짜.
| `minDate` | `Date` | 최소 선택 가능 날짜.
| `maxDate` | `Date` | 최대 선택 가능 날짜.
| `day` | `Number` | 현재 선택된 날.
| `month` | `Number` | 현재 선택된 달.
| `year` | `Number` | 현재 선택된 년.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `dateChange` | 선택된 날짜가 바뀔때 발생(Emit)

## 네이티브 컴포넌트

| Android |	iOS |
|---------|-----|
| android.widget.DatePicker | UIDatePicker
