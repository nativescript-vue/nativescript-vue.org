---
title: SegmentedBar - 分段栏
apiRef: http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html
contributors: [Pythonfo]
---

**SegementedBar** 组件为您提供了一种简单的方法，可以显示用于离散选择的选项卡式视图的集合。
---

```html
<SegmentedBar :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="onSelectedIndexChange" />
```

**Note**: 支持使用 `v-model` 来进行双向数据绑定：

```html
<SegmentedBar :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=SegmentedBar <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `items` | `Array<SegmentedBarItem>` | 在分段栏中显示的项目数组 |
| `selectedIndex` | `Number` | 当前选择的索引 |
| `selectedBackgroundColor` | `Color` | 设置被选择的选项卡的背景颜色。如果要设置整个组件的背景颜色，可使用  `backgroundColor` |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `selectedIndexChange`| 组件的 `selectedIndex` 属性改变时触发 |

## 原生组件（Native Component）
| Android | iOS |
|---------|-----|
| android.widget.TabHost | UISegmentedControl |
