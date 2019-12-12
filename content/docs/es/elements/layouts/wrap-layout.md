---
title: WrapLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_wrap_layout_
contributors: [ianaya89]
---

El contenedor `<WrapLayout>` permite posicionar los elementos hijos en filas o columnas, usando una propiedad de orientación. El contenedor coloca los elementos hasta que el espacio este totalmente ocupado y luego envuelve los elementos restantes en una nueva fila o columna.

## Ejemplos

### Contenedor envolvente por defecto (horizontal)

El siguiente ejemplo crea una fila de elementos equivalentes en tamaño. Cuando no queda suficiente, el contenedor envuelve el último elemento en una nueva fila.

```html
<WrapLayout backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_horizontal.svg" />

### Contenedor envolvente vertical

El siguiente ejemplo crea una columna de elementos equivalentes en tamaño. Cuando no queda suficiente, el contenedor envuelve el último elemento en una nueva columna.

```html
<WrapLayout orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_vertical.svg" />

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
`orientation` | `String` | Indica el tipo de orientación en la cual fluyen los elementos. Si el valor es `horizontal` los items son alineados en filas. Si el valor es `vertical`, los items son alineados en columnas.<br>Valor por defecto: `horizontal`.
`itemWidth` | `Number` | Establece el ancho utilizado para medir y posicionar cada elmento hijo.<br>Valor por defecto: `Number.NaN` (no restringe elementos hijos).
`itemHeight` | `Number` | Establece el alto utilizado para medir y posicionar cada elmento hijo.<br>Valor por defecto: `Number.NaN` (no restringe elementos hijos).


## Propiedades de elementos hijos

No existen propiedades adicionales para los elementos hijos.
