---
title: 프로그레스 (Progress)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress
contributors: [qgp9]
---

프로그레스(Progress) 컴포넌트는 진행상태를 시각적으로 보여주는 바(막대)입니다.

---

```html
<Progress :value="currentProgress" />
```

[> screenshots for=Progress <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `value` | `Number` | 최대값을 기준으로한 현재 진행 상태.
| `maxValue` | `Number` | 진행상태의 최대값. 기본값은 `100`.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `valueChange` | value 프로퍼티가 바뀔때 발생

## 네이티브 컴포넌트

| Android | iOS |
|---------|-----|
| android.widget.ProgressBar (indeterminate = false) | UIProgressView
