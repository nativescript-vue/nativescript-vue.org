---
title: SearchBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar
contributors: [MisterBrownRSA, rigor789]
---

The SearchBar component provides a user interface for entering search queries and submitting requests to the search provider.

---

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
```

**Note**: This component supports two-way data binding using `v-model`:

```html
<SearchBar v-model="searchQuery" />
```

[> screenshots for=SearchBar <]

## Props

| name | type | description |
|------|------|-------------|
| `hint` | `String` | Placeholder text for the editable input area.
| `text` | `String` | The value of the search input.

## Events

| name | description |
|------|-------------|
| `textChange`| Emitted when the text is changed.
| `submit`| Emitted when the search input is submitted.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.SearchView	| UISearchBar
