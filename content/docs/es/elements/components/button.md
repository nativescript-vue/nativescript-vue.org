---
title: Button
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
contributors: [ianaya89]
---

`<Button>` es un componente de UI que muestra un boton, el cual puede reaccionar ante un gesto del usuario.

Para más informacion sobre los posibles gestos, puedes veravailable gestures [Gestos en la documentación oficial de NativeScript](https://docs.nativescript.org/ui/gestures).

---

```html
<Button text="Button" @tap="onButtonTap" />
```

[> screenshots for=Button <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `text` | `String` | Obtiene o establece el texto del botón.
| `textWrap` | `Boolean` | Obtiene o establece cuando el texto se ajusta o no al elemento que lo contiene.<br>Valor por defecto: `false`.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `tap` | Emitido cada vez que el boton es presionado.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.Button`](https://developer.android.com/reference/android/widget/Button.html) | [`UIButton`](https://developer.apple.com/documentation/uikit/uibutton)
