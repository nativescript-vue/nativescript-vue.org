---
title: AbsoluteLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_
docRef: https://docs.nativescript.org/ui/layouts/layout-containers#absolutelayout
contributors: [nuochong]
---

 `<AbsoluteLayout>` 容器是NativeScript最简单的布局容器。

`<AbsoluteLayout>` 有以下行为：

* 使用一对绝对左/上坐标来定位其子项。
* 不对其子项强制执行任何布局约束。
* 在大小更改时，不会在运行时调整其子项的大小。

## 例子

### 网格状布局

以下示例创建一个简单的网格。有关创建网格布局的更多信息，请参阅 [GridLayout](/en/docs/elements/layouts/grid-layout).

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_grid.svg" />

### 重叠元素

以下示例创建一组重叠项。

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
  <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_overlap.svg" />

## 道具

没有。

## 额外的子道具

当元素是 `<AbsoluteLayout>`直接子元素时，您可以使用以下附加属性。

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `top` | `Number` | 获取或设置子项的上边缘与其父项的上边缘之间的距离（以像素为单位）。
| `left` | `Number` | 获取或设置子项左边缘与其父项左边缘之间的距离（以像素为单位）。
