---
title: FlexboxLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
contributors: [ianaya89]
---

El contenedor `FlexboxLayout` es una implementación (no exacta) de [CSS Flexbox Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox). Este contenedor, permite ubicar elemento hijos de forma horizontal y vertical.

## Ejemplos

### Contenido flexible por defecto

El siguiente ejemplo crea una fila de tres elementos (equivalentes en tamaño) que se expanden a lo largo de la pantalla.

```html
<FlexboxLayout backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_stretch.svg" />

### Contenido flexible en columnas

El siguiente ejemplo crea una columna de tres elementos (equivalentes en tamaño) que se expanden a lo ancho de la pantalla.

```html
<FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_stretch.svg" />

### Contenido en fila con items alineados con `flex-start`

El siguiente ejemplo crea una fila de tres elementos ubicados en la parte superior de la pantalla. Los elementos se colocan en órden de declaración.

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_flex-start.svg" />

### Contenido en fila con órden personalizado

El siguiente ejemplo crea una fila de tres elementos ubicados en la parte superior de la pantalla. Los elementos se colocan con un órden personalizado usando la propiedad `order`.

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" order="2" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" order="3" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" order="1" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_custom_order.svg" />

### Contenedor envolventes

El siguiente ejemplo crea cuatro elementos envolventes. Cuando la fila no tiene espacio suficiente, el contenedor envuelve el ultimo elemento en una nueva línea.

```html
<FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <Label text="first" width="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_wrap.svg" />

### Contenido en columna de forma invertida

El siguiente ejemplo muestra como usar:

* `flexDirection` para colocar elementos en una columna, empezando por la parte inferior.
* `justifyContent` para crear espacio equivalente (vertical) entre elementos.
* `alignSelf` para modificar la posición de los elementos en base al eje horizontal.

```html
<FlexboxLayout flexDirection="column-reverse" justifyContent="space-around" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third\nflex-end" alignSelf="flex-end" width="70" height="70" backgroundColor="#289062"/>
  <Label text="fourth" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_reverse_space_around_align_self.svg" />

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
`flexDirection` | `String` | La dirección la que los elementos hijos son colocados en el contenedor. Posibles valores: `row` (direccion igual a la del texto), `row-reverse` (dirección contraria a la del texto), `column` (igual que `row` pero del márgen superior al inferior(*top* y *bottom*)) y `column-reverse` (igual que `row-reverse` pero del márgen superior al inferior(*top* y *bottom*)).<br>Valor por defecto: `row`.
`flexWrap` | `String` | Establece cuando los elementos hijos son forzados a encajar en una sola línea o pueden acomodarse en líneas múltiples. Si se establece como líneas múltiples también se define el `cross-axis`, el cual determina la dirección de las nuevas líneas. Posibles valores: `nowrap` (una sola línea, puede causar un *overflow* en el contenedor), `wrap` (múltiples líneas, dirección definida por `flexDirection`) y `wrap-reverse` (múltiples líneas, dirección opuesta a la definida por `flexDirection`).<br>Valor por defecto: `nowrap`.
`justifyContent` | `String` |  Establece el alineamiento de los elementos segun el eje principal. Ayuda a distribuir espacio libre adicional cuando todos los elementos flexibles de una línea (inflexibles o flexibles), han alcanzado su tamaño máximo. También ejerce cierto control sobre la alineación de los elementos cuando desbordan la línea. Posibles valores: `flex-start` (los elementos se alinean desde la linea del comienzo), `flex-end` (los elementos se alinean desde la linea del final), `center` (los elementos se centran), `space-between` (los elementos se distribuyen parejamnete sobre la linea, primer item en la primera linea, ultimo item en la ultima linea) y `space-around` (los elementos se distribuyen parejamente en la linea, con el mismo espacio de margenes entre cada uno).<br>Valor por defecto: `flex-start`.
`alignItems` | `String` | Establece como los elementos se ubican a lo largo del eje transversal de la línea. Es quivalente a la propiedad `justifyContent` pero tomando como base el eje transversal. Posibles valores: `flex-start` (El borde del margen de inicio de los artículos se coloca en la línea de inicio), `flex-end` (El borde del margen de inicio de los artículos se coloca en la línea del final), `center` (los elementos quedan centrados), `baseline` (los elementos se alinean de la misma forma que sus líneas base), `stretch` (los elementos se estiran para rellenar el contenedor, pero aún asi respetan `min-width`/`max-width`).<br>Valor por defecto: `stretch`.
`alignContent` | `String` | Establece como los elementos se ubican in el contenedor flexible basado en el eje transversal, similar a como `justifyContent` alinea los items en el eje principal. Posibles valores: `flex-start` (se alinea al comienzo del contenedor), `flex-end` (se alinea al final del contenedor), `center` (se alinea en el centro del contenedor), `space-between` (se distribuye el contenido de forma pareja, la primer línea al comienzo del contendor y la última al final), `space-around` (se distribuye el contenido de forma pareja con igual espacio entre cado uno de los elementos), and `stretch` (el contenido se estira hasya llenar el espacio disponible).<br>Valor por defecto: `stretch`. Esta propiedad no tiene ningún efecto, cuando el contenedor tiene un solo elemento hijo.

## Propiedades de elementos hijos

Cuando un elemento es hijo directo de `FlexboxLayout`, las siguientes propiedades pueden ser utilizadas en ese elemento hijo:

| Nombre | Tipo | Descripción |
|------|------|-------------|
`order` | `Number` | Cambia el órden por defecto del elemento
`flexGrow` | `Number` | Valor sin unidad que indica si el elemento flexible puede crecer (en caso de ser necesario). Señala qué cantidad de espacio disponible, dentro del contenedor flexible, debe ocupar el elemento
`flexShrink` | `Number` | Un valor que indica el "factor de contracción flexible", que determina cuánto se encogerá el elemento en relación con el resto de los elementos en el contenedor cuando no hay suficiente espacio en la fila. Cuando se omite, se establece en 1 y el factor de contracción flexible se multiplica por la base flexible.
`alignSelf` | `String` | Un valor que sobre escribre la propiedad `alignItems` para un elemento especifico. Esta propiedad acepta los mismo valores que la propiedad `alignItems`: `flex-start`, `flex-end`, `center`, `baseline` y `stretch`.<br>Valor por defecto: `stretch`.
`flexWrapBefore` | `Boolean` | Un valor booleano para controlar cuando el item debe envoler o no el contenido. Con el valor `true` se fuerza a que el contenido sea envuelto en una nueva línea.<br>Valor por defecto: `false`. (Esta propiedad no forma parte de la especificación oficial de flexbox)
