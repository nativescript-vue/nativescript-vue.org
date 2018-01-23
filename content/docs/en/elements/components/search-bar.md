---
title: SearchBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
---

The SearchBar widget provides a user interface for entering search queries and submitting requests to the search provider.

---

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged($event)" @submit="onSubmit($event)"></SearchBar>
```

[> screenshots for=SearchBar <]

## Props

| name | type | description |
|------|------|-------------|
| `hint` | `String` | Placeholder text for the edittable input area.
| `text` | `String` | The value of the input.

## Events

| name | description |
|------|-------------|
| `textChange`| Emitted when the text (value) is changed
| `submit`| Emitted when the input is submitted