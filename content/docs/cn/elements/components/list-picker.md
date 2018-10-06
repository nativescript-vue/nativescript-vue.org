---
title: ListPicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
contributors: [nuochong]
---

`<ListPicker>` 是一个UI组件，允许用户从预配置列表中选择一个值。

---

```html
<ListPicker :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="selectedIndexChanged" />
```

`<ListPicker>` 使用提供双向数据绑定 `v-model`。

```html
<ListPicker :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=ListPicker <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `items` | `Array<String>` | 获取或设置列表选择器中显示为选项的项。
| `selectedIndex` | `Number` | 获取或设置当前所选项的索引。

## 活动

| 名称 | 描述 |
|------|-------------|
| `selectedIndexChange`| 当前选定的选项（索引）更改时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.NumberPicker`](https://developer.android.com/reference/android/widget/NumberPicker.html) | [`UIPickerView`](https://developer.apple.com/documentation/uikit/uipickerview)
