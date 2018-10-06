---
title: FlexboxLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
contributors: [nuochong]
---

`<FlexboxLayout>` 是一个布局容器，它提供了 [CSS Flexbox 布局](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)的非精确实现。此布局允许您水平和垂直排列子组件。

## 例子

### 默认的flex布局

以下示例创建一行，包含三个大小相等的元素，这些元素跨越整个屏幕高度。

```html
<FlexboxLayout backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_stretch.svg" />

### 列flex布局

以下示例创建一个包含三个大小相等的元素的列，这些元素跨越整个屏幕宽度。

```html
<FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_stretch.svg" />

### 将项目对齐的行flex布局 `flex-start`

以下示例创建一个位于屏幕顶部的三个项目的行。项目按其声明的顺序放置。

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_flex-start.svg" />

### 具有自定义顺序的行flex布局

以下示例创建一个位于屏幕顶部的三个项目的行。项目按自定义顺序放置。

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" order="2" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" order="3" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" order="1" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_custom_order.svg" />

### 行flex布局与包装

以下示例创建了四个启用换行的项目。当行空间不足时，容器将最后一项包装在新行上。

```html
<FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <Label text="first" width="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_wrap.svg" />

### 具有相反顺序的列flex布局和具有不同的项目 `alignSelf`

以下示例显示如何使用：

* `flexDirection` 从底部开始将项目放在列中。
* `justifyContent` 在垂直放置的项目之间创建相等的间距。
* `alignSelf` 修改主轴上的项目位置。

```html
<FlexboxLayout flexDirection="column-reverse"
               justifyContent="space-around" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third\nflex-end" alignSelf="flex-end" width="70" height="70" backgroundColor="#289062"/>
  <Label text="fourth" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_reverse_space_around_align_self.svg" />

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
`flexDirection` | `String` | 设置将子元素放置在Flexbox容器中的方向。<br/>有效值:<br/>`row` （水平，从左到右），<br/>`row-reverse` （水平，从右到左），<br/>`column` （垂直，从上到下）和<br/>`column-reverse` （垂直，从下到上）。<br/>默认值： `row`。
`flexWrap` | `String` | 设置子元素是强制在一行中还是可以流入多行。如果设置为多行，还定义了确定新行堆叠方向的横轴。<br/>有效值:<br/>`nowrap` （可能导致容器溢出的单行），<br/>`wrap` （多行，方向定义 `flexDirection`）和<br/>`wrap-reverse` （多行） ，与（ `flexDirection`)）定义的方向相反。<br/>默认值：`nowrap`。
`justifyContent` | `String` |  设置子元素沿主轴的对齐方式。当一行中的所有子元素不灵活或灵活但已达到其最大大小时，您可以使用它来分配剩余空间。您还可以使用它来控制项目溢出线时的对齐方式。<br/>有效值:<br/>`flex-start` （项目朝向起始行打包），<br/>`flex-end` （项目朝向结束行打包），<br/>`center` （项目沿着行居中），<br/>`space-between` （项目均匀分布在行上;第一项目位于起始行，最后一行结束线上的<br/>`space-around` 项目）和（项目均匀分布在线上，周围空间相等）。<br/>默认值：`flex-start`。
`alignItems` | `String` | （仅限Android）设置子元素沿当前行的横轴的对齐方式。作用 `justifyContent` 于横轴。<br/>有效值:<br/>`flex-start` (交叉开始边缘边缘放置在交叉起始线上），<br/>`flex-end` （项目的交叉边缘边缘放置在交叉起始线上），<br/>`center` （项目在横轴上居中） ，<br/>`baseline` （项目基线是对齐的），和<br/>`stretch` （项目被拉伸以填充容器，但尊重 `min-width` 和 `max-width`）。<br/>默认值： `stretch`。
`alignContent` | `String` | 设置线在横轴上的Flex容器中的 `justifyContent` 对齐方式，类似于在主轴内对齐各个项目的方式。<br/> 当flex容器只有一行时，此属性无效。<br/>有效值:<br/>`flex-start` （行打包到容器的开头），<br/>`flex-end` （行打包到容器的末尾），<br/>`center` （行打包到容器的中心），<br/>`space-between` （行均匀分布;第一行是容器的开始，而最后一个是在末尾），<br/>`space-around` （线条均匀分布，它们之间的空间相等），<br/>`stretch` （线条被拉伸以占据剩余空间）。<br/>默认值：`stretch`。

## 额外的儿童道具

当元素是直接子元素时 `<FlexboxLayout>`，您可以使用以下附加属性。

| 名称 | 类型 | 描述 |
|------|------|-------------|
`order` | `Number` | 设置子元素相对于彼此显示的顺序。
`flexGrow` | `Number` | 表示如有必要，孩子的体型会增大。设置子项与Flex容器中其余子元素成比例增长的程度。
`flexShrink` | `Number` | 表示当行空间不足时，子项应缩小。设置弹性项目将与Flex容器中其余子元素成比例缩小的程度。未指定时，其值设置为 `1`。
`alignSelf` | `String` | （仅限Android）覆盖子项的 `alignItems` 值。<br/>有效值:<br/>`flex-start` （交叉开始边缘边缘放置在交叉起始线上），<br/>`flex-end` （项目的交叉边缘边缘放置在交叉起始线上），<br/>`center` （项目以十字轴为中心） ，<br/>`baseline` （项目基线对齐），<br/>`stretch` （项目被拉伸以填充容器，但尊重 `min-width` 和 `max-width`）。<br/>默认值： `stretch`。
`flexWrapBefore` | `Boolean` | 何时 `true`，强制项目换行到新行。此属性不是官方Flexbox规范的一部分。<br/>默认值： `false`。