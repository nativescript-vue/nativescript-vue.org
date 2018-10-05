---
title: DockLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_
contributors: [nuochong]
---

`<DockLayout>` 是一个布局容器，可以将子元素停靠到布局的边或中心。

`<DockLayout>` 有以下行为：

* 使用 `dock` 属性及其子元素停靠到布局的 `left`, `right`, `top`, `bottom` 或布局的中心。<br/>要将子元素停靠到中心，它必须是容器的 **最后** 一个子元素，并且必须将 `stretchLastChild` 父元素的属性设置为 `true`。
* 强制对其子项进行布局约束。
* 当其大小发生变化时，将在运行时调整其子元素的大小。

## 例子

### 在不拉伸最后一个元素的情况下停靠在每一侧

以下示例创建一个由4个元素组成的框架式布局，位于屏幕的4个边缘。

```html
<DockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_no_stretch.svg" />

### 停靠在每一边，伸展最后一个元素

以下示例显示了 `stretchLastChild` 如何影响 `DockLayout` 容器中子元素的位置。在 (`bottom`) 放置前三个元素后被拉伸以占用所有剩余空间。

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" backgroundColor="#1c6b48"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_stretch.svg" />

### 停靠在每一侧和中心

以下示例在 `<DockLayout>` 中创建了5个元素。前四个将中心元素包裹在一个框架中。

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
  <Label text="center" backgroundColor="#1c6b48" />
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_all_sides_and_stretch.svg" />

### 将多个孩子停靠在同一侧

以下示例创建一个包含4个元素的行，这些元素在屏幕的整个高度和宽度上延伸。
 
```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left 1" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="left 2" dock="left" width="40" backgroundColor="#289062"/>
  <Label text="left 3" dock="left" width="40" backgroundColor="#1c6b48"/>
  <Label text="last child" backgroundColor="#43b883"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_multiple_on_same_side.svg" />

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `stretchLastChild` | `Boolean` | 启用或禁用拉伸最后一个子项以适合剩余空间。

## 额外的儿童道具

当元素是直接子元素时 `<DockLayout>`，您可以使用以下附加属性。

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `dock` | `String` | 指定将元素停靠到哪一侧。<br/>有效值： `top`, `right`, `bottom`, 或 `left`。
