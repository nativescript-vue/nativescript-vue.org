---
title: StackLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_stack_layout_
contributors: [ianaya89]
---

El contenedor `StackLayout` apila los elementos hijos de forma vertical (comportamiento por defecto) u horizontal

### Ejemplos

#### StackLayout Vertical (valor por defecto)

```html
<StackLayout backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#289062"/>
  <Label text="third" height="70" backgroundColor="#1c6b48"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_vertical.svg" />

#### StackLayout Horizontal

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#289062"/>
  <Label text="third" width="70" backgroundColor="#1c6b48"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_horizontal.svg" />

#### StackLayout Vertical con elementos hijos alineados horizontalmente

```html
<StackLayout backgroundColor="#3c495e">
  <Label text="left" horizontalAlignment="left"
         width="33%" height="70" backgroundColor="#43b883"/>
  <Label text="center" horizontalAlignment="center"
         width="33%" height="70" backgroundColor="#289062"/>
  <Label text="right" horizontalAlignment="right"
         width="33%" height="70" backgroundColor="#1c6b48"/>
  <Label text="stretch" horizontalAlignment="stretch"
         height="70" backgroundColor="#43b883"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_vertical_align_children.svg" />

#### StackLayout Horizontal con elementos hijos alineados verticalmente

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="top" verticalAlignment="top"
         width="70" height="33%" backgroundColor="#43b883"/>
  <Label text="center" verticalAlignment="center"
         width="70" height="33%" backgroundColor="#289062"/>
  <Label text="bottom" verticalAlignment="bottom"
         width="70" height="33%" backgroundColor="#1c6b48"/>
  <Label text="stretch" verticalAlignment="stretch"
         width="70" backgroundColor="#43b883"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_horizontal_align_children.svg" />

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
`orientation` | `String` | Especifica la direccion de apilamiento. Posibles valores: `vertical` y `horizontal`.<br>Valor por defecto: `vertical`.


## Propiedades de elementos hijos

No existen propiedades adicionales para los elementos hijos.
