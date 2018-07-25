---
title: DockLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_
contributors: [rigor789]
---

El contenedor `DockLayout` provee un mecanismo de acoplamiento para los elementos hijos, basado en los valores `left`, `right`, `top`, `bottom`. Para definir el tipo de acoplamiento de un elemento hijo, se puede utilizar la propiedad `dock`. Para acoplar un elemento hijo en el centro de un `DockLayout`, este deberá ser el último hijo del contenedor `DockLayout` y la propiedad de `stretchLastChild` (de `DockLayout`) deberá tener el valor `true`.

### Ejemplos

#### Acoplar a cada lado sin estirar el último elemento hijo

```html
<DockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_no_stretch.svg" />

#### Acoplar a cada lado estirando el último elemento hijo

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" backgroundColor="#1c6b48"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_stretch.svg" />

#### Múltiples elementos hijos en el mismo lado

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

Cuando un elemento es un hijo directo de `DockLayout`, las siguientes propiedades toman significado (en el elemento hijo):

| Nombre | Tipo | Descripción |
|------|------|-------------|
`dock` | `String` | Especifica a que lado del contenedor `DockLayout` se va acoplar el elemento. Posibles valores: `top`, `right`, `bottom`, `left`.
