---
title: SearchBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar
contributors: [ianaya89]
---

`<SearchBar>` es un componente de UI que muestra un campo de texto que sirve para ejecutar búsquedas y enviar información al proveedor de búsqueda.

---

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
```

`<SearchBar>` provee enlace de datos bidireccional (*two-way data binding*) usando `v-model`.

```html
<SearchBar v-model="searchQuery" />
```

[> screenshots for=SearchBar <]

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `hint` | `String` | Obtiene o establece el *placeholder* para el campo de texto.
| `text` | `String` | Obtiene o establece el valor del campo de texto.
| `textFieldBackgroundColor` | `Color` | Obtiene o establece el color del fondo del campo de texto
| `textFieldHintColor` | `Color` | Obtiene o establece el color del *placeholder* del campo de texto.

## Eventos

| Nombre | Descripción |
|------|-------------|
| `textChange` | Emitido cada vez que cambia el valor del campo de texto.
| `submit` | Emitido cuando se envian el valor del campo de texto.
| `clear` | Emitido cada vez que se limpia el valor del campo de texto (presionando el botón **X**).

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.SearchView`](https://developer.android.com/reference/android/widget/SearchView.html)	| [`UISearchBar`](https://developer.apple.com/documentation/uikit/uisearchbar)
