---
title: ListView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [MisterBrownRSA, rigor789, eddyverbruggen, ikoevska]
---

`<ListView>` is a UI component that shows items in a vertically scrolling list. To set how the list shows individual items, you can use the `<v-template>` component.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <!-- Shows the list item label in the default color and style. -->
    <Label :text="item.text" />
  </v-template>
</ListView>
```

---

[> screenshots for=ListView <]

## Using `<ListView>` with multiple `<v-template>` blocks

The [`v-template` component](/en/docs/utilities/v-template) is used to define how each list item is shown on the screen. 

If you need to visualize one or more list items differently than the rest, you can enclose them in additional `<v-template>` blocks and use conditions. You can have as many `<v-template>` blocks as needed within one `<ListView>`.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap"> 
  <v-template>
    <Label :text="item.text" /> 
  </v-template>

  <v-template if="$odd">
    <!-- For items with an odd index, shows the label in red. -->
    <Label :text="item.text" color="red" />
  </v-template>
</ListView>
```

When you create conditions for `<v-template>`, you can use a valid JavaScript expression with the following variables:

* `$index`&mdash; the index of the current item
* `$even`&mdash; `true` if the index of the current item is even
* `$odd`&mdash; `true` if the index of the current item is odd
* *`item`*&mdash; the *item* of the list (the name corresponds to the iterator in the `for` property). E.g. `if="item.text == 'danger'"`

Only the above variables are available in this scope, and currently you do not have access to the component scope (component state, computed properties...). 

## An important note about `v-for`

`<ListView>` does not loop through list items as you would expect when using a [`v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for) loop. Instead `<ListView>` only creates the necessary views to display the currently visible items on the screen, and reuses the views that are already off-screen when scrolled. This concept is called _view recycling_ and is commonly used in mobile apps to improve performance. 

This is important because **you can't rely on event listeners attached inside the `v-template`**. Instead, you need to use the `itemTap` event which contains the index of the tapped item and the actual item from the list.

```javascript
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

**NOTE:** If a `v-for` is used on a `<ListView>` a warning will be printed to the console, and it will be converted to the `for` property.

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
