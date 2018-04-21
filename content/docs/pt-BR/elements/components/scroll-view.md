---
title: ScrollView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors: [alexhiroshi]
---

O componente ScrollView permite que você mostre o conteúdo com rolagem.

---

```html
<ScrollView orientation="horizontal">
  <StackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </StackLayout>
</ScrollView>
```

[> screenshots for=ScrollView <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `orientation` | `String` | `horizontal` ou `vertical`. Padrão `vertical`.

## Eventos

| nome | descrição |
|------|-------------|
| `scroll`| Emitido quando ocorre o evento de rolagem
