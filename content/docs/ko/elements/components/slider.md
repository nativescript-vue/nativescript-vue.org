---
title: 슬라이더 (Slider)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider
contributors: [qgp9]

---

슬라이더(Slider) 컴포넌트는 사용자가 특정 범위의 숫자 값을 입력할 수 있도록 해줍니다.

---

```html
<Slider value="80" @valueChange="onValueChanged" />
```

**노트**: 이 컴포넌트는 `v-model` 을 이용한 양방향(two-way) 바인딩을 지원합니다:

```html
<Slider v-model="value" />
```

[> screenshots for=Slider <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `value` | `Number` | 슬라이더의 값
| `minValue` | `Number` | 슬라이더 최소값. 기본값은 `0`.
| `maxValue` | `Number` | 슬라이더 최대값. 기본값은 `100`.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `valueChange`| 슬라이더 값이 바뀔때 발생.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.SeekBar | UISlider
