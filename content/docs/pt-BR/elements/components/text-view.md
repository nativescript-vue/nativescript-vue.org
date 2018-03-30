---
title: TextView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [alexhiroshi]
---

O componente TextView representa um campo editável de múltiplas linhas.
O componente também pode ser usado para mostrar qualquer conteúdo somente leitura, configurando a propriedade `editable` para `false`.

---

```html
<TextView text="Multi\nLine\nText" />
```

**Nota**: Esse componente suporta two-way data binding usando `v-model`:

```html
<TextView v-model="textViewValue" />
```

### Exibindo um texto com múltiplas linhas com estilos diferentes

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

[> screenshots for=TextView <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `text` | `String` | O valor do TextView.
| `hint` | `String` | O texto de placeholder.
| `editable` | `Boolean` | Quando definido como `true`, o usuário pode editar o valor do TextView.
| `maxLength` | `Number` | Limita o campo para um determinado número de caracteres.
| `keyboardType` | `KeyboardType` | Mostra um teclado personalizado para facilitar a entrada de texto. Pode ser `datetime`, `phone`, `number`, `url`, ou `email`.
| `returnKeyType` | `ReturnKeyType` | O texto do teclado return. Pode ser `done`, `next`, `go`, `search`, ou `send`.

## Eventos

| nome | descrição |
|------|-------------|
| `textChange`| Emitido quando o texto é alterado.
| `returnPress`| Emitido quando o botão de return é pressionado.
| `focus`| Emitido quando o textview está em foco.
| `blur`| Emitido quando o textview perde o foco.

## Componente Nativo
| Android | iOS |
|---------|-----|
| android.widget.EditText | UITextView
