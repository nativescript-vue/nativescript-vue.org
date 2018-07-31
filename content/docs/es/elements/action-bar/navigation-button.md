---
title: NavigationButton
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton
contributors: [ianaya89]
---

El componente NavigationButton es una abstracción de NativeScript para el botón de Navegación de Android y el botón "atrás" de iOS.

---

```html
<ActionBar title="My App">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
</ActionBar>
```

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `text` | `String` | Establece el texto que se mostrará en iOS.
| `android.systemIcon` | `String` | Establece el ícono que se mostrará en Android.

**La lista de posibles íconos para Android se puede encontrar en este [link](https://developer.android.com/reference/android/R.drawable.html), los íconos son aquellos que comienzan con el prefijo `ic_`.**

## Eventos

| Nombre | Descripción |
|------|-------------|
| `tap`| Emitido cada vez que el botón es presionado.
