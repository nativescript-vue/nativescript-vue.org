---
title: GridLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_grid_layout_
contributors: [nuochong]
---

`<GridLayout>`  是一个布局容器，它允许您以类似表格的方式排列其子元素。

网格由行，列和单元格组成。单元格可以跨越一行或多行以及一列或多列。它可以包含多个子元素，这些子元素可以跨越多个行和列，甚至可以相互重叠。

默认情况下， `<GridLayout>` 有一列和一行。您可以通过配置 `columns` 和 `rows` 属性来添加列和行。在这些属性中，您需要设置列数和行数以及它们的宽度和高度。您可以通过列出它们的宽度来设置列数，用逗号分隔。您可以通过列出其高度来设置行数，以逗号分隔。

您可以为列宽和行高设置固定大小，也可以以响应方式创建它们：

* **绝对数字：** 表示固定大小。
* **auto:** 使列与其最宽的子项一样宽，或使该行与其最高的子项一样高。
* **\*:** 填充所有自动和固定大小的列或行后，占用的空间尽可能多。

有关更多信息，请参阅 [Props](#props) 。

## 例子

### 具有固定大小的网格布局

以下示例创建一个简单的2 x 2网格，其中包含固定的列宽和行高。

```html
<GridLayout columns="115, 115" rows="115, 115">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout.svg" />

### 网格布局与星大小

以下示例创建一个具有响应式设计的网格，其中空间与子元素成比例。

```html
<GridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_star_sizing.svg" />

### 具有固定和自动调整大小的网格布局

以下示例使用一个自动调整大小的列和一个具有固定大小的列创建一个网格。行具有固定的高度。

```html
<GridLayout columns="80, auto" rows="80, 80" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_fixed_auto.svg" />

### 具有混合大小和合并单元格的网格布局

以下示例创建一个具有响应式设计，混合宽度和高度设置以及一些合并单元格的复杂网格。

```html
<GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
  <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
  <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
  <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_complex.svg" />

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
`columns` | `String` | 一个字符串值，表示用逗号分隔的列宽。<br/>有效值：绝对数字 `auto`或 `*`。<br/>数字表示绝对列宽。 `auto` 使列与其最宽的子项一样宽。 `*` 使列占据所有可用的水平空间。该空间按比例划分为所有星形柱。您可以设置诸如 `3*` 和之类的值， `5*` 以指示尺寸的比例为3：5。
`rows` | `String` | 表示用逗号分隔的行高的字符串值。<br/>有效值：绝对数字 `auto`, 或 `*`。<br/>数字表示绝对行高。 `auto` 使行与其最高的孩子一样高。 `*` 使行占用所有可用的垂直空间。该空间按比例划分为所有星形行。您可以设置诸如 `3*` 和 `5*` 和之类的值，以指示尺寸的比例为3：5。

## 额外的儿童道具

当元素是直接子元素时 `<GridLayout>`，您可以使用以下附加属性。

| 名称 | 类型 | 描述 |
|------|------|-------------|
`row` | `Number` | 指定此元素的行。与 `col` 属性结合使用，指定元素的单元格坐标。<br/>第一行用表示 `0`。
`col` | `Number` | 指定元素的列。与 `row` 属性结合使用，指定元素的单元格坐标。<br/>第一列用表示 `0`。
`rowSpan` | `Number` | 指定此元素跨越的行数。
`colSpan` | `Number` | 指定此元素跨越的列数。