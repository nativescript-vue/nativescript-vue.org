---
title: Slider
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider
contributors: [alexhiroshi]

---

O componente Slider permite o usuário inserir um valor numérico de um intervalo especificado.

---

```html
<Slider value="80" @valueChange="onValueChanged" />
```

**Nota**: Esse componente suporta two-way data binding usando `v-model`:

```html
<Slider v-model="value" />
```

[> screenshots for=Slider <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `value` | `Number` | Valor do slider.
| `minValue` | `Number` | Valor mínimo do slider. Padrão `0`.
| `maxValue` | `Number` | Valor máximo do slider. Padrão `100`.

## Eventos

| nome | descrição |
|------|-------------|
| `valueChange`| Emitido quando o valor do slider é alterado.

## Componente Nativo

| Android | iOS |
|---------|-----|
| android.widget.SeekBar | UISlider
