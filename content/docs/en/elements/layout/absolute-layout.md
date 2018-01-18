---
title: AbsoluteLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_
---

The AbsoluteLayout container is the simplest layout container in NativeScript. It uses absolute top-left coordinates to position its children. The AbsoluteLayout will not enforce any layout constraints on its children and will not resize them at runtime when its size changes.

### Samples

#### A grid-like layout

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_grid.svg" />

#### Overlapping elements

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
  <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_overlap.svg" />


## Props

AbsoluteLayout has no props.

## Additional Children Props

When an element is a direct child of the AbsoluteLayout, the following
props get a meaning:

| name | type | description |
|------|------|-------------|
| `top` | `Number` | A value representing the distance from the top of the parent AbsoluteLayout
| `left` | `Number` | A value representing the distance from the left of the parent AbsoluteLayout

