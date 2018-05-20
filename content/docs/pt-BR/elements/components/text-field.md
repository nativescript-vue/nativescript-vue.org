---
title: TextField
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [alexhiroshi]

---

`<TextField>` é um componente de campo de texto editável com uma única linha.

`<TextField>` estende [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) e [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase) que fornece propriedades e eventos adicionais.

---

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

`<TextField>` suporta two-way data binding usando `v-model`.

```html
<TextField v-model="textFieldValue" />
```

[> screenshots for=TextField <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `text` | `String` | Obtém ou define o valor do campo.
| `hint` | `String` | Obtém ou define o texto do placeholder.
| `editable` | `Boolean` | Quando `true`, indica que o usuário pode editar o valor do campo.
| `maxLength` | `Number` | Limita o campo para um número específico de caracteres.
| `secure` | `Boolean` | Esconde o texto digitado quando `true`. Use essa propriedade para criar um campo de senha.<br/>Valor padrão: `false`.
| `keyboardType` | `KeyboardType` | Exibe um teclado personalizado para facilitar a entrada de textos.<br/>Valores válidos: `datetime`, `phone`, `number`, `url` ou `email`.
| `returnKeyType` | `ReturnKeyType` | Obtém ou define o texto do teclado return.<br/>Valores válidos: `done`, `next`, `go`, `search` ou `send`.
| `autocorrect` | `Boolean` | Habilita ou desabilita a auto correção.

## Eventos

| nome | descrição |
|------|-------------|
| `textChange` | Emitido quando o texto é alterado.
| `returnPress` | Emitido quando o teclado return é precionado.
| `focus` | Emitido quando o campo está em foco.
| `blur` | Emitido quando o campo perder o foco.

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield)
