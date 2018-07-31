---
title: AbsoluteLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_
contributors: [ianaya89]
---

El contenedor `AbsoluteLayout` es el *layout* mas simple de NativeScript. Usa coordenadas absolutas para posicionar los componentes hijos a partir del vértice superior izquierdo.
`AbsoluteLayout` no aplicará ninguna restricción de diseño a tus elementos hijos y tampoco los redimensionará en tiempo de ejecución (cuando cambie su tamaño).

### Ejemplos

#### Diseño de tipo grilla

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_grid.svg" />

#### Superponiendo elementos

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
  <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_overlap.svg" />


## Propiedades

`AbsoluteLayout` no tiene propiedades.

## Propiedades de elementos hijos

Cuando un elemento es hijo directo de `AbsoluteLayout`, las siguientes propiedades pueden ser utilizadas en ese elemento hijo:

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `top` | `Number` | Representa la distancia desde el margen superior del `AbsoluteLayout`
| `left` | `Number` | Representa la distancia desde el margen izquierdo del `AbsoluteLayout`
