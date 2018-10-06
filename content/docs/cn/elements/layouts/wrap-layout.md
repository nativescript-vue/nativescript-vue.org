---
title: WrapLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_wrap_layout_
contributors: [nuochong]
---

`<WrapLayout>` 是一个布局容器，允许您根据 `orientation` 属性在行或列中定位项目。空间填满后，容器会自动将项目包装到新行或列上。

### 例子

### 默认换行布局

以下示例创建一行大小相同的项目。当行空间不足时，容器将最后一项包装在新行上。

```html
<WrapLayout backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_horizontal.svg" />

### 垂直包裹布局

以下示例创建一个大小相同的项目列。当行空间不足时，容器将最后一项包装在新列上。

```html
<WrapLayout orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_vertical.svg" />

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
`orientation` | `String` | 指定堆叠方向。<br/>有效值: `horizontal` (按行排列项目）和 `vertical` （按列排列项目）。<br/>默认值： `horizontal`。
`itemWidth` | `Number` | 设置用于测量和布局每个子项的宽度。<br/>默认值： `Number.NaN`，不限制儿童。
`itemHeight` | `Number` | 设置用于测量和布局每个子项的高度。<br/>默认值为 `Number.NaN`，不限制子项。

## 额外的儿童道具

没有。