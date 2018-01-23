---
title: ListPicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
---

The Listpicker component allows you to pick a value from a list.

---

```html
<ListPicker :items="pokemons" selectedIndex="0" @selectedIndexChange="selectedIndexChanged(event)"></ListPicker>
```
[> screenshots for=ListPicker <]

## Props

| name | type | description |
|------|------|-------------|
| `items` | `Array<string>` | An Array of strings that will be options of the list

## Events

| name | description |
|------|-------------|
| `selectedIndexChange`| Emitted when the index changes on the ListPicker