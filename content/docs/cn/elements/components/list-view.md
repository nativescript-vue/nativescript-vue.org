---
title: ListView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [nuochong]
---

`<ListView>` 是一个UI组件，用于显示垂直滚动列表中的项目。要设置列表显示单个项目的方式，您可以使用该 `<v-template>` 组件。

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

## 使用 `<ListView>` 多个 `<v-template>` 块

该 [`v-template` 组件](/en/docs/utilities/v-template) 用于定义每个列表项在屏幕上的显示方式。

如果需要以与其余列表项不同的方式显示一个或多个列表项，可以将它们包含在其他 `<v-template>` 块中并使用条件。您可以 `<v-template>` 在一个中包含所需数量的块 `<ListView>`。

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

为其创建条件时 `<v-template>`，可以使用任何有效的JavaScript表达式或以下任何帮助程序：

* `$index`&mdash; 当前项目的索引
* `$even`&mdash;`true` 如果当前项目的索引是偶数
* `$odd`&mdash;`true` 如果当前项的索引是奇数

## 一个重要的注意事项 `v-for`

`<ListView>` 不会像使用 [`v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for) 循环时所期望的那样遍历列表项。而是 `<ListView>` 仅创建必要的视图以在屏幕上显示当前可见的项目，并在滚动时重新使用已在屏幕外的视图。此概念称为视图回收，通常用于移动应用程序以提高性能。 

这很重要，因为 **你不能依赖附加在其中的事件监听器 `v-template`**。相反，您需要使用 `itemTap` 包含已点击项目的索引和列表中的实际项目的事件。

```javascript
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

**注意：** 如果 `v-for` 使用 `<ListView>` ，警告将打印到控制台，并将其转换为 `for` 属性。

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `for` | `String` | 提供迭代项目的表达式。<br/>例如：<ul><li><code>item in listOfItems</code></li><li><code>(item, index) in listOfItems</code></li><li><code>item in [1, 2, 3, 4, 5]</code></li></ul>
| `items` | `Array<any>` | 要显示的项目数组 `<ListView>`.<br/>**此属性仅供高级用途使用。请改用该 `for` 属性。**
| `separatorColor` | `Color` | 设置分隔线颜色。设置为 `transparent` 以删除它。

## 活动

| 名称 | 描述 |
|------|-------------|
| `itemTap`|  `<ListView>` 点击中的项目时发出。要访问已点按的项目，请使用 `event.item`。

## 方法

| 名称 | 描述 |
|------|-------------|
| `refresh()` | （即将推出）强制 `<ListView>` 重新加载所有物品。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.ListView`](https://developer.android.com/reference/android/widget/ListView.html) | [`UITableView`](https://developer.apple.com/documentation/uikit/uitableview)
