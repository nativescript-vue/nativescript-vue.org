---
title: ListView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [MisterBrownRSA, rigor789, eddyverbruggen]
---

`<ListView>` is a UI component that shows items in a vertically scrolling list. To set how the list shows its items, you can use the `<v-template>` component.

```
<ListView for="item in listOfItems" @itemTap="onItemTap"> // Iterates on every list item and attaches an itemTap event to it.
  <v-template>
    <Label :text="item.text" /> // Shows the list item label in the default color and stye.
  </v-template>
</ListView>
```

---

[> screenshots for=ListView <]

## Using `<ListView>` with `<v-template>`

The [`v-template` component](/en/docs/utilities/v-template) lets you determine how each list item is shown on the screen. 

If you need to visualize one or more list items differently than the rest, you can enclose them in additional `<v-template>` blocks and use conditions. You can have as many `<v-template>` blocks as needed within one `<ListView>`.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap"> 
  <v-template>
    <Label :text="item.text" /> 
  </v-template>

  <v-template if="$odd">
    <Label :text="item.text" color="red" /> // For items with an odd index, shows the label in red. 
  </v-template>
</ListView>
```

When you create conditions for `<v-template>`, you can use any valid JavaScript expression or any of the following helpers:

* `$index`
* `$even` 
* `$odd`

## Using `<ListView>` with `v-for`

When you use `<ListView>` with [`v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for), you need to use the default `itemTap` event instead of attaching other event listeners. The `itemTap` event contains the index of the tapped item and the actual item from the list.

```javascript
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

## Props

| Name | Type | Description |
|------|------|-------------|
| `for` | `String` | Provides the expression for iterating through the items.<br/>For example: <ul><li><code>item in listOfItems</code></li><li><code>(item, index) in listOfItems</code></li><li><code>item in [1, 2, 3, 4, 5]</code></li></ul>
| `items` | `Array<any>` | An array of items to be shown in the `<ListView>`.<br/>**This property is only for advanced use. Use the `for` property instead.**
| `separatorColor` | `Color` | Sets the separator line color. Set to `transparent` to remove it.

## Events

| Name | Description |
|------|-------------|
| `itemTap`| Emitted when an item in the `<ListView>` is tapped. To access the tapped item, use `event.item`.

## Methods

| Name | Description |
|------|-------------|
| `refresh()` | Forces the `<ListView>` to reload all its items.

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.ListView`](https://developer.android.com/reference/android/widget/ListView.html) | [`UITableView`](https://developer.apple.com/documentation/uikit/uitableview)
