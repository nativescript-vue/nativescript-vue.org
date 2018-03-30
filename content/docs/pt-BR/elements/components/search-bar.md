---
title: SearchBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar
contributors: [alexhiroshi]
---

SearchBar é um componente que fornece um campo de pesquisa e envia solicitações ao provedor de busca.

---

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
```

**Nota**: Esse componente suporta two-way data binding usando `v-model`:

```html
<SearchBar v-model="searchQuery" />
```

[> screenshots for=SearchBar <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `hint` | `String` | Texto de placeholder para o campo editável.
| `text` | `String` | Valor para o campo de busca.

## Eventos

| nome | descrição |
|------|-------------|
| `textChange`| Emitido quando o texto é alterado.
| `submit`| Emitido quando o campo de busca é enviado.

## Componente Nativo

| Android | iOS |
|---------|-----|
| android.widget.SearchView	| UISearchBar
