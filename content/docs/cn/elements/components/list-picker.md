---
title: ListPicker - 列表选择器
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
contributors: [Pythonfo]
---

**ListPicker** 组件允许用户从列表中选择一个值。

---

```html
<ListPicker :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="selectedIndexChanged" />
```

**Note**: 支持使用 `v-model` 来进行双向数据绑定：

```html
<ListPicker :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=ListPicker <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `items` | `Array<String>` | 需要被选择的字符串数组 |
| `selectedIndex` | `Number` | 当前选择的索引 |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `selectedIndexChange`| 组件的 `selectedIndex` 属性改变时触发 |

## 原生组件（Native Component）

| Android | iOS |
|---------|-----|
| [android.widget.NumberPicker](https://developer.android.com/reference/android/widget/NumberPicker.html) | [UIPickerView](https://developer.apple.com/documentation/uikit/UIPickerView) |
