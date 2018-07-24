---
title: TextField
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [ianaya89]

---

`<TextField>` es un componente de UI que permite al usuario ingresar información a traves de un cuadro de texto (de una sola línea).

El componente `<TextField>` extiende [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) y [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase), y provee propiedades y eventos adicionales.

---

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

`<TextField>` provee enlace de datos bidireccional (*two-way data binding*) usando `v-model`.

```html
<TextField v-model="textFieldValue" />
```

[> screenshots for=TextField <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `text` | `String` | Obtiene o establece el valor del campo de texto.
| `hint` | `String` | Obtiene o establece el texto del *placeholder* del campo de texto.
| `editable` | `Boolean` | Indica cuando el usuario puede modificar el valor del campo de texto.<br>Valor pore defecto: `true`.
| `maxLength` | `Number` | Limita el valor del campo de texto a un número determinado de caracteres.
| `secure` | `Boolean` | Oculta el valor del campo de texto. Usa este propiedad para crear campos de texto para contraseñas.<br/>Default value: `false`.
| `keyboardType` | `KeyboardType` | Muestra un tipo de teclado determinado para facilitar el ingreso de texto<br/>Posibles valores: `datetime`, `phone`, `number`, `url`, or `email`.
| `returnKeyType` | `ReturnKeyType` | Obtiene o establece el nombre de la tecla de retorno<br/>Posibles valores: `done`, `next`, `go`, `search`, or `send`.
| `autocorrect` | `Boolean` | Habilita o deshabilita el autocorrector.

## Events

| Nombre | Descripción |
|------|-------------|
| `textChange` | Emitido cada vez que cambia el valor del campo de texto.
| `returnPress` | Emitido cada vez que la tecla de retorno es presionada.
| `focus` | Emitido cada vez que se hace foco en el campo de texto.
| `blur` | Emitido cada vez que pierde foco el campo de texto.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield)
