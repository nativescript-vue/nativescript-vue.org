---
title: SegmentedBar
apiRef: http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html
contributors: [nuochong]
---

`<SegmentedBar>` 是一个UI栏组件，显示一组用于离散选择的按钮。可以显示文字或图像。

相反 `<TabView>`:
* 位置 `<SegmentedBar>` 不固定。
* 您可以根据需要在页面上或在其他应用程序元素（如汉堡菜单）内放置和设置样式。
* 您需要单独处理选择后显示的内容。

---
```html
<SegmentedBar>
  <SegmentedBarItem title="First" />
  <SegmentedBarItem title="Second" />
  <SegmentedBarItem title="Third" />
</SegmentedBar>
```

```html
<SegmentedBar :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="onSelectedIndexChange" />
```

`<SegmentedBar>` 使用提供双向数据绑定 `v-model`。

```html
<SegmentedBar :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=SegmentedBar <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `items` | `Array<SegmentedBarItem>` | 要在分段栏中显示的项目数组。表示分段条的按钮标签或图标。<br/>必须提前创建阵列。
| `selectedIndex` | `Number` | 获取或设置所选项的索引。
| `selectedBackgroundColor` | `Color` | （样式属性）获取或设置所选项目的背景颜色。要设置整个条的背景颜色，请使用`backgroundColor`。

## 活动

| 名称 | 描述 |
|------|-------------|
| `selectedIndexChange`| 点击分段栏上的项目时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.TabHost`](https://developer.android.com/reference/android/widget/TabHost.html) | [`UISegmentedControl`](https://developer.apple.com/documentation/uikit/uisegmentedcontrol)
