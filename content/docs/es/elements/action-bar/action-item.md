---
title: ActionItem
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem
contributors: [ianaya89, msaelices]
---

El componente ActionItem es utilizado para agregar botones (con acciones) al componente `ActionBar`.

---

#### Uso básico

```HTML
<ActionBar title="My App">
  <ActionItem @tap="onTapShare"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" />
  <ActionItem @tap="onTapDelete"
    ios.systemIcon="16" ios.position="right"
    text="delete" android.position="popup" />
</ActionBar>
```

#### Mostrando elementos con condicionales

Los elementos `<ActionItem>` pueden ser representados usando condiciones con la directiva `v-show`.

```HTML
<ActionBar title="My App">
  <ActionItem @tap="onTapEdit"
    v-show="!isEditing"
    ios.systemIcon="2" ios.position="right"
    android.systemIcon="ic_menu_edit" />
  <ActionItem @tap="onTapSave"
    v-show="isEditing"
    ios.systemIcon="3" ios.position="right"
    android.systemIcon="ic_menu_save" />
  <ActionItem @tap="onTapCancel"
    v-show="isEditing"
    ios.systemIcon="1"
    android.systemIcon="ic_menu_close_clear_cancel" />
</ActionBar>
```

## Propiedades

| Nombre | Tipo | Descripcioón |
|------|------|-------------|
| `ios.systemIcon` | `String` | Estabelece el ícono para iOS.
| `android.systemIcon` | `String` | Estabelece ícono para Android.
| `ios.position` | `String` | Estabelece la posición del item en iOS.<br>Valores posibles:<br>- `left` (valor por defecto): Coloca el item en el lado izquierdo del componente ActionBar.<br>- `right`: Coloca el item en el lado derecho del componente ActionBar.
| `android.position` | `String` | Estabelece la posición del item en Android.<br>Valores posibles:<br>- `actionBar` (valor por defecto): Coloca el item en el componente `ActionBar`.<br>- `popup`: Coloca el item en el menú de opciones (el item será mostrado como texto)<br>- `actionBarIfRoom`: Coloca el item en el componente `ActionBar`, siempre y cuando haya espacio suficiente. De lo contrario, coloca el item en el menú de opciones.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `tap`| Emitido cada vez que el item es presionado.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html) | [`UINavigationItem`](https://developer.apple.com/documentation/uikit/uinavigationitem)
