---
title: TextView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [ianaya89]
---

`<TextView>` es un componente de UI que muestra un contenedor de texto editable o de solo-lectura. Puedes utilizarlo para permitir que el usuario ingrese grande cantidades de texto o simplemente para mostrar texto en mas de una línea.

El componente `<TextView>` extiende a [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) y a[`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase),agregando propiedades y eventos adicionales.

---

```html
<TextView text="Multi\nLine\nText" />
```

`<TextView>` provee enlace de datos bidireccional (*two-way data binding*) usando `v-model`.

```html
<TextView v-model="textViewValue" />
```

[> screenshots for=TextView <]

### Mostrando texto con múltiples estilos

Para aplicar múltiples estilos al texto puedes usar el componente `<FormattedString>`:

```html
<TextView editable="false">
  <FormattedString>
    <Span text="You can use text attributes such as " />
    <Span text="bold, " fontWeight="Bold" />
    <Span text="italic " fontStyle="Italic" />
    <Span text="and " />
    <Span text="underline." textDecoration="Underline" />
  </FormattedString>
</TextView>
```

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `text` | `String` | Obtiene o establece el valor del campo de texto
| `hint` | `String` | Obtiene o establece el texto del *placeholder* (siempre y cuando se un campo editable).
| `editable` | `Boolean` | Indica cuando el usuario puede modificar el valor del campo de texto.<br>Valor pore defecto: `true`.
| `maxLength` | `Number` | Limita el valor del campo de texto a un número determinado de caracteres.
| `keyboardType` | `KeyboardType` | Muestra un tipo de teclado determinado para facilitar el ingreso de texto<br/>Posibles valores: `datetime`, `phone`, `number`, `url`, or `email`.
| `returnKeyType` | Obtiene o establece el nombre de la tecla de retorno<br/>Posibles valores: `done`, `next`, `go`, `search`, or `send`.
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
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)
