---
title: Slider
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider
contributors: [ianaya89]

---

`<Slider>` es un componente de UI que provee un control deslizante para elegir valores entre un rango númerico.

---

```html
<Slider value="80" @valueChange="onValueChanged" />
```

`<Slider>` provee enlace de datos bidireccional (*two-way data binding*) usando `v-model`.

```html
<Slider v-model="value" />
```

[> screenshots for=Slider <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `value` | `Number` | Obtiene o establece el actual valor del *slider*.<br/>Valor por defecto: `0`.
| `minValue` | `Number` | Obtiene o establece el mínimo valor posible del *slider*.<br/>Valor por defecto: `0`.
| `maxValue` | `Number` | Obtiene o establece el máximo valor posible del *slider*.<br/>Valor por defecto: `100`.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `valueChange`| Emitido cada vez que cambia el valor del slider.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.SeekBar`](https://developer.android.com/reference/android/widget/SeekBar.html) | [`UISlider`](https://developer.apple.com/documentation/uikit/uislider)
