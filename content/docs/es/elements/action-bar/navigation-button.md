---
title: NavigationButton
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton
contributors: [ianaya89, msaelices]
---

El componente `<NavigationButton>` es una abstracción de NativeScript para el botón de Navegación de Android y el botón `atrás` de iOS.

Extiende al componente [`<ActionItem>`](/es/docs/elements/action-bar/action-item).

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
| `android.systemIcon` | `String` | Establece el icono que se mostrará en Android.

**La lista de posibles iconos para Android se puede encontrar en este [link](https://developer.android.com/reference/android/R.drawable.html), los iconos son aquellos que comienzan con el prefijo `ic_`.**

## Eventos

| Nombre | Descripción |
|------|-------------|
| `tap`| Emitido cada vez que el botón es presionado.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html) | [`UINavigationItem`](https://developer.apple.com/documentation/uikit/uinavigationitem)
