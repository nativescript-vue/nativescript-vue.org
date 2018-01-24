---
title: Slider
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_slider_.slider
contributors: [MisterBrownRSA]

---

The slider allows the user to input from a numeric specified range.

---

```html
<Slider value="80" @valueChange="onValueChanged"></Slider>
```

[> screenshots for=Slider <]

## Props

| name | type | description |
|------|------|-------------|
| `value` | `Number` | The value of the slider
| `min` | `Number` | The minimum value of the slider
| `max` | `Number` | The maximum value of the slider

## Events

| name | description |
|------|-------------|
| `tap`| Emitted when the button is pressed

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.SeekBar | UISlider