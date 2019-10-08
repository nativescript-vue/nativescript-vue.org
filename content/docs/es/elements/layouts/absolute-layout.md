---
title: AbsoluteLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_
docRef: https://docs.nativescript.org/ui/layouts/layout-containers#absolutelayout
contributors: [ianaya89]
---


El contenedor `AbsoluteLayout` es el *layout* más simple de NativeScript. Usa coordenadas absolutas para posicionar los componentes hijos a partir del vértice superior izquierdo.
`AbsoluteLayout` no aplicará ninguna restricción de diseño a tus elementos hijos y tampoco los redimensionará en tiempo de ejecución (cuando cambie su tamaño).

El contenedor `<AbsoluteLayout>` es el *layout* más simple de NativeScript

`<AbsoluteLayout>` se comporta de la siguiente forma:

* Usa un par de coordenadas absolutas izquierda/derecha para posicionar los elementos hijos.
* **No** fuerza ningún tipo de restricción de posicionamiento sobre los elementos hijos.
* **No** redimensiona los elementos hijos en tiempo de ejecución, cuando estos cambien de tamaño.

## Ejemplos

### Diseño de tipo grilla

El siguiente ejemplo crea una grilla simple. Para más información sobre *layouts* de grillas puedes ver [GridLayout](/es/docs/elements/layouts/grid-layout).

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_grid.svg" />

### Superponiendo elementos

El siguiente ejemplo crea un grupo de elementos que se superponen entre ellos.

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
  <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_overlap.svg" />

## Propiedades

No tiene propiedades.

## Additional children props

Cuando un elemento es hijo directo de AbsoluteLayout, las siguientes propiedades pueden ser utilizadas en ese elemento hijo:

| Name | Type | Description |
|------|------|-------------|
| `top` | `Number` | Obtiene o establece la distancia (en píxeles) entre el borde superior del elemento hijo y el borde superior del elemento padre.
| `left` | `Number` | Obtiene o establece la distancia (en píxeles) entre el borde izquierdo del elemento hijo y el borde izquierdo del elemento padre.
