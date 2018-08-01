---
title: GridLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_grid_layout_
contributors: [ianaya89]
---

El contenedor `<GridLayout>` permite alinear los elementos hijos de una forma similar a una tabla o grilla.

La grilla esta compuesta por filas, columnas y celdas. Una celda puede abarcar una o más filas y una o más columnas. También puede contener múltiples elementos hijos, los cuales pueden abarcar mútiples filas y/o columnas e incluso superponerse unos con otros.

Por defecto, el contenedor  `<GridLayout>` tiene una sola fila y una sola columna pero puedes agregar más utilizando las propiedaes `columns` y `rows`. En ambas propiedades debes establecer la cantidad de columna/filas y el ancho y alto de las mismas. La manera de indicar la cantidad de columnas, es escribir una lista separada por comas con el ancho (*width*) de las mismas. El mismo procedimiento se aplica para las filas pero estableciendo al alto (*height*).

Ten en cuenta que puedas configurar un ancho de columna y alto de fila de forma fija o también de forma dinámica para lograr un efecto *responsive*.

* **Número absoluto:** Indicar un tamaño fijo.
* **auto:** Configurar que la columna sea tan ancha como su hijo más ancho o que la fila sea tan alta como su hijo más alto.
* **\*:** Tomar tanto espacio como está disponible después de llenar todas las columnas o filas automáticas y de tamaño fijo.

## Ejemplos

### Contenedor de grilla con tamaño fijo

El siguiente ejemplo crea una simple grilla de 2x2 con columnas y filas de tamaño fijo.

```html
<GridLayout columns="115, 115" rows="115, 115">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout.svg" />

### Contenedor de grilla con tamaño estrella

El siguiente ejemplo crea una grilla *responsive*, donde el espacio se asigna proporcionalmente a los elementos hijos.

```html
<GridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_star_sizing.svg" />

### Contenedor de grilla con tamaño fijo y ajustable a la pantalla

El siguiente ejemplo crea una grilla con una columna ajustable a la pantalla y una con tamaño fijo. Las filas tiene un alto fijo.

```html
<GridLayout columns="80, auto" rows="80, 80" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_fixed_auto.svg" />

### Contenedor de grilla mixta con tamaño mixto y celdas combinadas

El siguiente ejemplo crea una grilla *responsive* con compleja con ancho y altos mixtos y celdas combinadas.

```html
<GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
  <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
  <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
  <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_complex.svg" />

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
`columns` | `String` | Un valor de tipo `String` representando los anchos de las columnas (separados por coma: `,`)<br/>Posibles valores: Número absoluto (valor fijo de la columna), `auto` (hace que la columna sea tan ancha como su elemento hijo más ancho) o `*` (hace que la columna ocupe todo el espacio horizontal disponible. El espacio está dividido proporcionalmente en todas las columnas de tamaño estrella. Puede establecer valores como `3*` y `5*` para indicar una proporción de 3:5 en tamaños).
`rows` | `String` | Un valor de tipo `String` representando los altos de las filas (separados por coma: `,`)<br/>Posibles valores: Número absoluto (valor fijo de la columna), `auto` (hace que la fila sea tan alta como su elemento hijo más alto) o `*` (hace que la fila ocupe todo el espacio vertical disponible. El espacio está dividido proporcionalmente en todas las columnas de tamaño estrella. Puede establecer valores como `3*` y `5*` para indicar una proporción de 3:5 en tamaños).

## Propiedades de elementos hijos

Cuando un elemento es hijo directo de `GridLayout`, las siguientes propiedades pueden ser utilizadas en ese elemento hijo:

| Nombre | Tipo | Descripción |
|------|------|-------------|
`row` | `Number` | Establece la fila para el elemento. Si se lo combina con la propiedad `col`, se configuran las coordenadas del elemento.<br/>La primer fila tiene el valor `0`.
`col` | `Number` | Establece la columna para el elemento. Si se lo combina con la propiedad `row`, se configuran las coordenadas del elemento.<br/>La primer columna tiene el valor `0`.
`rowSpan` | `Number` | Indica la cantidad de filas en las que el elemento se expandirá.
`colSpan` | `Number` | Indica la cantidad de columnas en las que el elemento se expandirá.
