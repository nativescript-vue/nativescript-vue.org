---
title: v-view
contributors: [ianaya89]
---

La directiva `v-view`, permite establecer la instancia `View` del elemento deseado como una propiedad padre.

---

```HTML
<Child v-view:parentPropertyName />
<!-- same as: -->
<Child ~parentPropertyName />
```

```HTML
<Child v-view:parentArrayPropertyName.array />
<!-- same as: -->
<Child ~parentArrayPropertyName.array />
```

---

### Ejemplo: `<RadSideDrawer>`

El componente `<RadSideDrawer>` forma parte del paquete [Progress NativeScript UI](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/getting-started).

Este componente, requiere las propiedades `drawerContent` y `mainContent` para ser configuradas en la instancia de `View`. Usando la directiva `v-view`, puedes realizar este procedimiento con unas pocas líneas de código:

```HTML
<RadSideDrawer>
  <StackLayout ~drawerContent />
  <StackLayout ~mainContent />
</RadSideDrawer>
```

Si no utilizas la directiva `v-view`, necesitas un trabajo mas tedioso para lograr el mismo resultado:

```HTML
<RadSideDrawer ref="drawer">
  <StackLayout ref="drawerContent" />
  <StackLayout ref="mainContent" />
</RadSideDrawer>
```

```JavaScript
{
  mounted() {
    this.$refs.drawer.nativeView.drawerContent = this.$refs.drawerContent.nativeView
    this.$refs.drawer.nativeView.mainContent = this.$refs.mainContent.nativeView
  }
}
```