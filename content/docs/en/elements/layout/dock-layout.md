---
title: DockLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_
---

DockLayout is a layout that provides a docking mechanism for child elements to the `left`, `right`, `top`, `bottom` or center of the layout. To define the docking side of a child element, use its `dock` property. To dock a child element to the center of the DockLayout, it must be the **last child** of the DockLayout and the `stretchLastChild` property of the DockLayout must be set to `true`.

### Samples

#### Dock to every side without stretching last child

```html
<DockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_no_stretch.svg" />

#### Dock to every side with stretching last child

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" backgroundColor="#1c6b48"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_stretch.svg" />

#### Multiple children on the same side

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left 1" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="left 2" dock="left" width="40" backgroundColor="#289062"/>
  <Label text="left 3" dock="left" width="40" backgroundColor="#1c6b48"/>
  <Label text="last child" backgroundColor="#43b883"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_multiple_on_same_side.svg" />

## Props

| name | type | description |
|------|------|-------------|
`stretchLastChild` | `Boolean` | Enables/Disables stretching the last child to fit the remaining space.

## Additional Children Props

When an element is a direct child of the DockLayout, the following
props get a meaning:

| name | type | description |
|------|------|-------------|
`dock` | `String` | Specifies which side to dock the element to. Values can be: `top`, `right`, `bottom`, `left`
