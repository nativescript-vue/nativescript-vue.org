---
title: ListView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [ianaya89]
---

`<ListView>` es un componente de UI que muestra elementos en una lista verticalmente desplazable. Para estableceer como la lista muestra cada uno de los elementos puedes usar el componente `<v-template>`.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <!-- Shows the list item label in the default color and style. -->
    <Label :text="item.text" />
  </v-template>
</ListView>
```

---

[> screenshots for=ListView <]

## Usando `<ListView>` con multiples bloques `<v-template>`

El componente [`<v-template>`](/en/docs/utilities/v-template) es utilizado para definir como se va a mostrar cada elemento de la lista dentro de la pantalla.

Si necesitas visualizar uno o más elementos de manera diferente al resto, puedes ingresarlos como hijos de un componente `<v-template>` y utilizar las condiciones que sean necesarias. Dentro de un `<ListView>`, puedes usar todos los `<v-template>` que creas necesarios.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <Label :text="item.text" />
  </v-template>

  <v-template if="$odd">
    <!-- For items with an odd index, shows the label in red. -->
    <Label :text="item.text" color="red" />
  </v-template>
</ListView>
```

Cuando creas condiciones para un `<v-template>`, puedes usar cualquier expresión de JavaScript válida o también cualquiera de estos *helpers*:

* `$index`&mdash; el índice del elemento actual
* `$even`&mdash; `true` indica si el índice del elemento actual es par
* `$odd`&mdash; `true` indica si el índice del elemento actual es impar

## Una nota importante sobre `v-for`

`<ListView>` no puede iterar los elementos de la forma en que lo hace la directiva [`v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for). En su lugar, el componente solo crea las vistas necesarias para mostrar los elementos que estan actualmente visibles dentro de la pantalla (y reutiliza las vistas que estan fuera de la pantalla a medida que el usuario se va desplazando). Este concepto se denomina _view recycling_ y es un patrón muy común usado en aplicaciones móviles con el propósito de mejorar el rendimiento de las mismas.

Esto es muy importante ya que **no puedes confiar en eventos que estan enlazados a `v-template`. En lugar de eso, debes usar el evento `itemTap`. Este evento recibe como argumentos, el índice del elemento presionado y el elemento actual de la lista.

```javascript
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

**NOTA:** Si un `v-for` es usado dentro de un `<ListView>`, una advertencia será mostrada en la consola y se convertira automáticamente en una propiedad `for`.

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `for` | `String` | Provee una expresión para iterar por todos los elementos.<br/>Por ejemplo: <ul><li><code>item in listOfItems</code></li><li><code>(item, index) in listOfItems</code></li><li><code>item in [1, 2, 3, 4, 5]</code></li></ul>
| `items` | `Array<any>` | Una colección de elementos para mostrar dentro del `<ListView>`.<br/>**Esta propiedad es solo para uso avanzado. En su lugar use la propiedad `for`.**
| `separatorColor` | `Color` | Establece la línea que separa cada elemento. Puedes usar el valor `transparent` para eliminarla.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `itemTap`| Emitido cuando un elemento perteneciente al `<ListView>` es presionado. Para acceder al elemento presionado, podes usar `event.item`.

## Métodos

| Nombre | Descripción |
|------|-------------|
| `refresh()` | (Disponible pronto) Fuerza al componente `<ListView>` a recargar todos los elementos.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.ListView`](https://developer.android.com/reference/android/widget/ListView.html) | [`UITableView`](https://developer.apple.com/documentation/uikit/uitableview)
