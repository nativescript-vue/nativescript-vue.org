---
title: ListPicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
contributors: [ianaya89]
---

`<ListPicker>` es un componente de UI que permite al usuario seleccionar un valor desde una lista pre-configurada.

---

```html
<ListPicker :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="selectedIndexChanged" />
```

`<ListPicker>` provee enlace de datos bidireccional (*two-way data binding*) usando `v-model`.

```html
<ListPicker :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=ListPicker <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `items` | `Array<String>` | Obtiene o establece los elementos que se muestran como opciones en el `<ListPicker`.
| `selectedIndex` | `Number` | Obtiene o establece el índice del elemento que se encuentra seleccionado.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `selectedIndexChange`| Emitido cada vez que cambia el elemento seleccionado.

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.NumberPicker`](https://developer.android.com/reference/android/widget/NumberPicker.html) | [`UIPickerView`](https://developer.apple.com/documentation/uikit/uipickerview)
