---
title: TabView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview
contributors: [ianaya89, msaelices]
---

`<TabView>` es un componente de navegación que muestra contenido agrupado en pestañas y permite a los usuarios cambiar la pestaña visible.

---

```html
<TabView :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
  <TabViewItem title="Tab 1">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```

```js
methods: {
  indexChange: function(args) {
      let newIndex = args.value
      console.log('Current tab index: ' + newIndex)
  }
}
```

**NOTA:** Actualmente, el componente `TabViewItem` espera recibir un solo elemento hijo. En la mayoría de los casos, necesitas envolver tu contenido en un componente contenedor o *layout*.

[> screenshots for=TabView <]

#### Agregando íconos a las pestañas

```html
<TabView :selectedIndex="selectedIndex" iosIconRenderingMode="alwaysOriginal">
  <TabViewItem title="Tab 1" iconSource="~/images/icon.png">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2" iconSource="~/images/icon.png">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```
**NOTA:** Utiliza imágenes para los íconos en lugar de fuentes.

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `selectedIndex` | `Number` | Obtiene o establece la pestaña seleccionada.<br> Valor por defecto: `0`.
| `tabTextColor` | `Color` | (Propiedad de Estilo) Obtiene o establece el color del texto para los títulos de las pestañas.
| `tabBackgroundColor` | `Color` | (Propiedad de Estilo) Obtiene o establece el color de fondo de las pestañas.
| `selectedTabTextColor` | `Color` | (Propiedad de Estilo) Obtiene o establece el color del texto de las pestañas.
| `androidTabsPosition` | `String` | Obtiene o establece la posición del TabView en Android<br/>Valores válidos: `top` o `bottom`.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `selectedIndexChange` | Emitido cada vez que un componente `<TabViewItem>` es presionado.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.support.v4.view.ViewPager`](https://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller)
