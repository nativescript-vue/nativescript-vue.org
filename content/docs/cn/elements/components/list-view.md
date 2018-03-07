---
title: ListView - 列表
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [Pythonfo]
---

**ListView** 组件会垂直显示条目，你可以通过使用 `v-template` 组件来为每个条目设置不同的内容。

---

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <Label :text="item.text" />
  </v-template>

  <v-template if="$odd">
    <Label :text="item.text" color="red" />
  </v-template>
</ListView>
```

在上面的示例中，第二个 `v-template` 被设置为当条目的索引是奇数时才显示。
为了便于开发，我们会提供辅助参数 `$index`、`$even` 和 `$odd`，但是你得要为 `v-template` 写一个有效的 `if` 表达式。

关于 `v-template` 组件的更多信息，可点击 [v-template documentation](/en/docs/utilities/v-template) 查看。

当通过 [`v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for) 去循环 **ListView** 组件的内容时，可能不会是你所期望的结果。因为它只会渲染当前屏幕所显示的项，也就是说，当用户滑动屏幕到下一屏时，下一屏的内容才会被渲染，而上一屏的内容会被回收。这个概念叫做视图回收，一般用于提高移动端应用的性能。这是很重要的，因为你不能依赖绑定在 `v-template` 里的事件监听，而是应该使用 `itemTap` 事件，该事件包含被选中项的索引，以及列表中的实际项。

```js
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

[> screenshots for=ListView <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `for` | `String` | 循环语句，例如:  <br />- `item in listOfItems`<br />- `(item, index) in listOfItems`<br />- `item in [1, 2, 3, 4, 5]` |
| `items` | `Array<any>` | An array of items to be displayed in the ListView. **Note**: This property is only for advanced use, we recommend using the `for` property in most cases. |
| `separatorColor` | `Color` | 条目间的分割线。可设置为 `transparent` |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `itemTap`| 当条目被点击时触发。To access the tapped item use `event.item`. |

## 原生组件（Native Component）
| Android | iOS |
|---------|-----|
| [android.widget.ListView](https://developer.android.com/reference/android/widget/ListView.html) | [UITableView](https://developer.apple.com/documentation/uikit/UITableView) |
