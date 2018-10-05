---
title: StackLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_stack_layout_
contributors: [nuochong]
---

`<StackLayout>` 是一个布局容器，允许您垂直（默认）或水平堆叠子元素。

## 例子

### 默认堆叠

以下示例创建一个由3个大小相等的元素组成的垂直堆栈。拉伸项目以覆盖整个屏幕宽度。项目按其声明的顺序放置。

```html
<StackLayout backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#289062"/>
  <Label text="third" height="70" backgroundColor="#1c6b48"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_vertical.svg" />

### 水平堆叠

以下示例创建一个由3个大小相等的元素组成的水平堆栈。拉伸项目以覆盖整个屏幕高度。项目按其声明的顺序放置。

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#289062"/>
  <Label text="third" width="70" backgroundColor="#1c6b48"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_horizontal.svg" />

### 堆叠布局与水平对齐的孩子

以下示例创建具有响应大小的对角堆栈项。物品垂直堆放。

```html
<StackLayout backgroundColor="#3c495e">
  <Label text="left" horizontalAlignment="left"
         width="33%" height="70" backgroundColor="#43b883"/>
  <Label text="center" horizontalAlignment="center"
         width="33%" height="70" backgroundColor="#289062"/>
  <Label text="right" horizontalAlignment="right"
         width="33%" height="70" backgroundColor="#1c6b48"/>
  <Label text="stretch" horizontalAlignment="stretch"
         height="70" backgroundColor="#43b883"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_vertical_align_children.svg" />

### 水平堆栈布局与垂直对齐的孩子

以下示例创建具有响应大小的对角堆栈项。物品是水平堆放的。

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="top" verticalAlignment="top"
         width="70" height="33%" backgroundColor="#43b883"/>
  <Label text="center" verticalAlignment="center"
         width="70" height="33%" backgroundColor="#289062"/>
  <Label text="bottom" verticalAlignment="bottom"
         width="70" height="33%" backgroundColor="#1c6b48"/>
  <Label text="stretch" verticalAlignment="stretch"
         width="70" backgroundColor="#43b883"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_horizontal_align_children.svg" />

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
`orientation` | `String` | 指定堆叠方向。<br/>有效值： `vertical` 和 `horizontal`。<br/>默认值： `vertical`。

## 额外的儿童道具

没有。