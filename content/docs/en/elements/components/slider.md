---
title: Slider
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider
contributors: [MisterBrownRSA, rigor789, eddyverbruggen]

---

The Slider component allows the user to input a numeric value from a specified range.

---

```html
<Slider value="80" @valueChange="onValueChanged" />
```

**Note**: This component supports two-way data binding using `v-model`:

```html
<Slider v-model="value" />
```

[> screenshots for=Slider <]

## Props

| name | type | description |
|------|------|-------------|
| `value` | `Number` | The value of the slider.
| `minValue` | `Number` | The minimum value of the slider. Default `0`.
| `maxValue` | `Number` | The maximum value of the slider. Default `100`.

## Events

| name | description |
|------|-------------|
| `valueChange`| Emitted when the value of the slider changes.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.SeekBar | UISlider
