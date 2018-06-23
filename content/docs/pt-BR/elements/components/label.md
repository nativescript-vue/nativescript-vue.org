---
title: Label
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_label_.label
contributors: [alexhiroshi]
---

`<Label>` é um componente de UI que exibe um texto somente leitura.

**IMPORTANTE**: O `<Label>` **não é** o mesmo que o `<Label>` do HTML.

---

```html
<Label text="Label" />
```

[> screenshots for=Label <]

### Estilizando o label

Se você precisa estilizar partes do texto, use a combinação de elementos [`FormattedString`](https://docs.nativescript.org/angular/ui/ng-ui-widgets/formatted-string) e [`Span`](https://docs.nativescript.org/api-reference/classes/_text_span_.span).

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

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `text` | `String` | Obtém ou define o texto do label.
| `textWrap` | `Boolean` | Obtém ou define se o texto do label quebra.<br/>Valor padrão: `false`.

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UILabel`](https://developer.apple.com/documentation/uikit/uilabel)