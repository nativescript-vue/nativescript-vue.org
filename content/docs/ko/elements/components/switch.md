---
title: 스위치 (Switch)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [qgp9]
---

스위치(Switch) 컴포넌트는 사용자가 두개의 상태를 토글 할수 있도록 해줍니다.
기본 상태는 `false` 나 "off" 입니다.

---

```html
<Switch checked="true" />
```

**노트**: 이 컴포넌트는 `v-model` 을 이용한 양방향(two-way) 바인딩을 지원합니다:

```html
<Switch v-model="itemEnabled" />
```

[> screenshots for=Switch <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `checked` | `Boolean` | 스위치의 상태를 나타네는 부울값

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `checkedChange`| 스위치의 값이 바뀔때 발생

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.Switch | UISwitch
