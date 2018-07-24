---
title: ScrollView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors: [ianaya89]
---

`<ScrollView>` es un componente de UI que sirve para mostrar contenido en un área desplazable. El contenido puede ser desplazado de forma horizontal o vertical.

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

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `orientation` | `String` | Obtiene o establece la dirección en la cual se desplaza el contenido: `horizontal` or `vertical`.<br/>Valor por defecto: `vertical`.
| `scrollBarIndicatorVisible` | `Boolean` | Especifíca si la barra de desplazamiento esta visible o no.<br/>Valor por defecto: `true`.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `scroll` | Emitido cada vez que ocurre un evento de desplazamiento

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.view`](https://developer.android.com/reference/android/view/View.html) | [`UIScrollView`](https://developer.apple.com/documentation/uikit/uiscrollview)