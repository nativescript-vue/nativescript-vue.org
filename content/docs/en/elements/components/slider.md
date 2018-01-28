---
title: Slider
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_slider_.slider
contributors: [MisterBrownRSA, rigor789]

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
| `min` | `Number` | The minimum value of the slider.
| `max` | `Number` | The maximum value of the slider.

## Events

| name | description |
|------|-------------|
| `valueChange`| Emitted when the value of the slider changes.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.SeekBar | UISlider
