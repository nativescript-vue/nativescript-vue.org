---
title: DockLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_
contributors: [ianaya89]
---

El contenedor `<DockLayout>` provee un mecanismo de acoplamiento para los elementos hijos que permite ubicarlos a los costados o en el centro del contenedor.

`<DockLayout>` se comporta de la siguiente forma:

* Usa la propiedad `dock` para ubicar los elementos con los valores: `left`, `right`, `top`, `bottom` and `center`.
* Permite acoplar un elemento hijo en el centro del contenedor. En ese caso, este deberá ser el último hijo del contenedor `<DockLayout>` y la propiedad de `stretchLastChild` (de `<DockLayout>`) deberá tener el valor `true`.
* Fuerza restricciones de posicionamiento sobre los elementos hijos.
* Redimensiona los elementos hijos en tiempo de ejecución, cuando estos cambian de tamaño.

## Ejemplos

### Acoplar a cada lado sin estirar el último elemento hijo

```html
<DockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_no_stretch.svg" />

### Acoplar a cada lado estirando el último elemento hijo

El siguiente ejemplo muestra como la propiedad `stretchLastChild` afecta la posición de los elementos hijos en un contenedor `<DockLayout>`. El último elemento (con la propiedad `dock="bottom"`), es estirado para que ocupe el resto del espacio disponible luego del posicionamiento de los primeros tres elementos.

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" backgroundColor="#1c6b48"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_stretch.svg" />

### Acoplar a ambos lados y al centro

El siguiente ejemplo crea un contenedor `<DockLayout>` de cinco elementos. Los primeros cuatro elementos envuelven al elemento del centro en un cuadro.

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
  <Label text="center" backgroundColor="#1c6b48" />
</DockLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_all_sides_and_stretch.svg" />

### Múltiples elementos hijos en el mismo lado

El siguiente ejemplo crea una sola línea de posicionamiento, con cuatro elementos que se estiran a lo largo y ancho de la pantalla.

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left 1" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="left 2" dock="left" width="40" backgroundColor="#289062"/>
  <Label text="left 3" dock="left" width="40" backgroundColor="#1c6b48"/>
  <Label text="last child" backgroundColor="#43b883"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_multiple_on_same_side.svg" />

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
`stretchLastChild` | `Boolean` | Habilita o deshabilita la posibilidad de que el último elemento hijo se estire para encajar en todo el espacio restante.

## Propiedades de elementos hijos

Cuando un elemento es hijo directo de `DockLayout`, las siguientes propiedades pueden ser utilizadas en ese elemento hijo:

| Nombre | Tipo | Descripción |
|------|------|-------------|
`dock` | `String` | Especifica a que lado del contenedor `DockLayout` se va acoplar el elemento. Posibles valores: `top`, `right`, `bottom`, `left`.
