---
title: Slider/Слайдер
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider
contributors: [sn0wil]

---

`<Slider>` - визуальный компонент, обеспечивающий управление ползунком для выбора значений в пределах определенного чилового диапазона.

---

```html
<Slider value="80" @valueChange="onValueChanged" />
```

`<Slider>` обеспечивает двустороннюю привязку данных, используя `v-model`.

```html
<Slider v-model="value" />
```

[> screenshots for=Slider <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `value` | `Number` | Получает или задает выбранное значение слайдера.<br/>Значение по умолчанию: `0`.
| `minValue` | `Number` | Получает или задает минимальное значение слайдера.<br/>Значение по умолчанию: `0`.
| `maxValue` | `Number` | Получает или задает максимальное значение слайдера.<br/>Значение по умолчанию: `100`.

## События

| Имя | Описание |
|------|-------------|
| `valueChange`| Срабатывает при изменении значения слайдера.Emitted when the value of the slider changes.

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.SeekBar`](https://developer.android.com/reference/android/widget/SeekBar.html) | [`UISlider`](https://developer.apple.com/documentation/uikit/uislider)
