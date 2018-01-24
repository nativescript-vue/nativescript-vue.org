---
title: ListPicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
contributors: [MisterBrownRSA]
---

The Listpicker component allows the user to pick a value from a list.

---

```html
<ListPicker v-model="pokemons" selectedIndex="0" @selectedIndexChange="selectedIndexChanged" />
```
[> screenshots for=ListPicker <]

## Props

| name | type | description |
|------|------|-------------|
| `items` | `Array<string>` | An Array of strings that will be displayed as options in the list picker

## Events

| name | description |
|------|-------------|
| `selectedIndexChange`| Emitted when the selected option (index) of the ListPicker changes

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.NumberPicker | UIPickerView