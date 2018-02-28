---
title: ActivityIndicator
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator
contributors: [qgp9]
---

ActivityIndicator 컴포넌트는 백그라운드에서 동작하는 것을 표시하는 프로그레스 인디케이터를 추가하고 사용자가 일시중지(pause) 할수 있게 도와줍니다.

---

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

[> screenshots for=ActivityIndicator <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `busy` | `Boolean` | `true` 일때 인디케이터가 활성화됨.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `busyChange`| `busy` 프로퍼티가 바뀔때 발생(Emit)

## 네이티브 컴포넌트

| Android | iOS |
|---------|-----|
| android.widget.ProgressBar (indeterminate = true)	| UIActivityIndicatorView
