---
title: ListPicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
contributors: [MisterBrownRSA, rigor789]
---

The ListPicker component allows the user to pick a value from a list.

---

```html
<ListPicker :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="selectedIndexChanged" />
```

**Note**: This component supports two-way data binding using `v-model`:

```html
<ListPicker :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=ListPicker <]

## Props

| name | type | description |
|------|------|-------------|
| `items` | `Array<String>` | An Array of strings that will be displayed as options in the list picker.
| `selectedIndex` | `Number` | The index of the currently selected item.

## Events

| name | description |
|------|-------------|
| `selectedIndexChange`| Emitted when the selected option (index) of the ListPicker changes.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.NumberPicker | UIPickerView
