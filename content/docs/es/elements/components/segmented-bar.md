---
title: SegmentedBar
apiRef: http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html
contributors: [ianaya89]
---

`<SegmentedBar>` es un componente de UI que muestra en pantalla una serie de botones para un selección discreta. Los botones pueden contener texto o imágenes.

A lo contrario que sucede con el componente `<TabView>`:
* La posición del componente `<SegmentedBar>` no es fija.
* Puedes ubicar y personalizar el componente dentro de la página o dentro de otros elementos como un menu hamburguesa.
* El contenido que se muestra luega de la selección (de un botón), debe ser manejado por separado.

---
```html
<SegmentedBar>
  <SegmentedBarItem title="First" />
  <SegmentedBarItem title="Second" />
  <SegmentedBarItem title="Third" />
</SegmentedBar>
```

```html
<SegmentedBar :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="onSelectedIndexChange" />
```

`<SegmentedBar>` provee enlace de datos bidireccional (*two-way data binding*) usando `v-model`.

```html
<SegmentedBar :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=SegmentedBar <]

## Propiedades

| Nombre | Tipo | Descrición |
|------|------|-------------|
| `items` | `Array<SegmentedBarItem>` | La colección de elementos que se desea mostrar (la cual debe ser creada antes de renderizar el componente).
| `selectedIndex` | `Number` | Obtiene o establece el índice del item seleccionado.
| `selectedBackgroundColor` | `Color` | (Propiedad de estilo) Obtiene o establece el color de fondo del item seleccionado. Para cambiar el color de fondo de todo el `SegmentedBar` puedes usar: `backgroundColor`.

## Eventos

| Nombre | Descrición |
|------|-------------|
| `selectedIndexChange`| Emitido cada vez que un item es presionado.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.TabHost`](https://developer.android.com/reference/android/widget/TabHost.html) | [`UISegmentedControl`](https://developer.apple.com/documentation/uikit/uisegmentedcontrol)
