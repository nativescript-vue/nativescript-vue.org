---
title: FlexboxLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
contributors: [rigor789, ikoevska]
---

`<FlexboxLayout>` is layout container that provides a non-exact implementation of the [CSS Flexbox layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox). This layout lets you arrange child components both horizontally and vertically.

### Samples

#### Default flex layout

```html
<FlexboxLayout backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_stretch.svg" />

#### Column flex layout

```html
<FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_stretch.svg" />

#### Row layout with items aligned to `flex-start`

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_flex-start.svg" />

#### Row layout with custom order

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" order="2" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" order="3" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" order="1" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_custom_order.svg" />

#### Wrapping

```html
<FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <Label text="first" width="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_wrap.svg" />

#### Reverse column, with different `alignSelf`

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

## Props

| Name | Type | Description |
|------|------|-------------|
`flexDirection` | `String` | Sets the direction for placing child items in the flexbox container.<br/>Valid values: `row` (same as text direction), `row-reverse` (opposite to text direction), `column` (same as row but top to bottom), and `column-reverse` (same as `row-reverse` but top to bottom).<br/>Default value: `row`.
`flexWrap` | `String` | Sets whether child items are forced in a single line or can flow into multiple lines. If set to multiple lines, also defines the cross axis which determines the direction new lines are stacked in.<br/>Valid values: `nowrap` (single-line which may cause the container to overflow), `wrap` (multi-lines, direction is defined by `flexDirection`), and `wrap-reverse` (multi-lines, opposite to direction defined by `flexDirection`).<br/>Default value: `nowrap`.
`justifyContent` | `String` |  Sets the alignment of child items along the main axis. You can use it to distribute leftover free space when all the child items on a line are inflexible or are flexible but have reached their maximum size. You can also use it to exert some control over the alignment of items when they overflow the line.<br/>Valid values: `flex-start` (items are packed toward the start line), `flex-end` (items are packed toward the end line), `center` (items are centered along the line), `space-between` (items are evenly distributed on the line; first item is on the start line, last item on the end line), and `space-around` (items are evenly distributed on the line with equal space around them).<br/>Default value: `flex-start`.
`alignItems` | `String` | Sets the alignment of child items along the cross axis on the current line. Acts as `justifyContent` but for the cross axis.<br/>Valid values: `flex-start` (cross-start margin edge of the items is placed on the cross-start line), `flex-end` (cross-end margin edge of the items is placed on the cross-end line), `center` (items are centered in the cross axis), `baseline` (items are aligned such as their baselines align), `stretch` (stretch to fill the container but respect `min-width` and `max-width`).<br/>Default value: `stretch`.
`alignContent` | `String` | Sets how lines are aligned in the flex container on the cross axis, similar to how `justifyContent` aligns individual items within the main axis.<br/> This property has no effect when the flex container has only one line.<br/>Valid values: `flex-start` (lines are packed to the start of the container), `flex-end` (lines are packed to the end of the container), `center` (lines are packed to the center of the container), `space-between` (lines are evenly distributed; the first line is at the start of the container while the last one is at the end), `space-around` (lines are evenly distributed with equal space between them), and `stretch` (lines are stretched to take up the remaining space).<br/>Default value: `stretch`.

## Additional children props

The following props are available for elements that are direct children of a `<FlexboxLayout>`.

| Name | Type | Description |
|------|------|-------------|
`order` | `Number` | Changes the default ordering of the child items.


>>>> TO DO <<<<<

`flexGrow` | `Number` | Unitless value that serves as a proportion indicating whether the flex item is able to grow if necessary. It dictates what amount of the available space inside the flex container the item should take up.
`flexShrink` | `Number` | A value indicating the "flex shrink factor", which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when there is not enough space on the row. When omitted, it is set to 1 and the flex shrink factor is multiplied by the flex basis when distributing negative space.
`alignSelf` | `String` | A value that overrides the `alignItems` value for specific flex items. This property accepts the same 5 values as `alignItems`: `flex-start` (cross-start margin edge of the item is placed on the cross-start line), `flex-end` (cross-end margin edge of the item is placed on the cross-end line), `center` (item is centered in the cross-axis), `baseline` (items are aligned such as their baselines are aligned), and `stretch` (stretch to fill the container but still respect `min-width`/`max-width`). The default value is `stretch`.
`flexWrapBefore` | `Boolean` | A boolean value controlling item wrapping. Setting it to `true` will force the item to wrap onto a new line. The default value is `false`. (This property is not part of the official flexbox specification.)
