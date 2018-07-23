---
title: Switch
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [ianaya89]
---

`<Switch>` es un componente de UI que permite al usuario alternar entre dos estados.

El valor por defecto es `false` o apagado (*Off*).

---

```html
<Switch checked="true" />
```

`<Switch>` prevee enlace de datos bidireccional (*two-way data binding*) usando `v-model`.

```html
<Switch v-model="itemEnabled" />
```

[> screenshots for=Switch <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `checked` | `Boolean` | Obtiene o establece el valor actual del element *switch*.<br/>Valor por defecto: `false`.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `checkedChange`| Emitido cada vez que el elemento *switch* cambia de valor.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.Switch`](https://developer.android.com/reference/android/widget/Switch.html) | [`UISwitch`](https://developer.apple.com/documentation/uikit/uiswitch)
