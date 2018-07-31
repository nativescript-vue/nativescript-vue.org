---
title: Label
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_label_.label
contributors: [ianaya89]
---

`<Label>` es un componentede UI para mostrar un texto de solo lectura.

**IMPORTANTE**: Este `<Label>` **NO** es lo mismo que el `<label>` de HTML.

---

```html
<Label text="Label" />
```

[> screenshots for=Label <]

### Agregand stilos a `<Label>`

Si necesitas agregar estilos a partes del texto, puedes usar una combinación de los elementos [`FormattedString`](https://docs.nativescript.org/angular/ui/ng-ui-widgets/formatted-string) y [`Span`](https://docs.nativescript.org/api-reference/classes/_text_span_.span).

```html
<Label textWrap="true">
  <FormattedString>
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</Label>
```

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `text` | `String` | Obtiene o establece el texto del elemento *label*.
| `textWrap` | `Boolean` | Obtiene o establece cuando el texto se ajusta o no al elemento que lo contiene.<br/>Valor por defecto: `false`.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UILabel`](https://developer.apple.com/documentation/uikit/uilabel)
