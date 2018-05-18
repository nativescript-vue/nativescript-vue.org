---
title: FlexboxLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
contributors: [rigor789]
---

The FlexboxLayout container is a non-exact implementation of the [Css Flexbox Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

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

#### Row layout with items aligned to flex-start

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

#### Reverse column, with different alignSelf

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

| name | type | description |
|------|------|-------------|
`flexDirection` | `String` | The direction in which flex items are placed in the flex container. The `flexDirection` property accepts 4 different values: `row` (same as text direction), `row-reverse` (opposite to text direction), `column` (same as row but top to bottom), and `column-reverse` (same as row-reverse top to bottom). The default value is `row`.
`flexWrap` | `String` | Sets whether the flex items are forced in a single line or can be flowed into multiple lines. If set to multiple lines, it also defines the cross-axis which determines the direction new lines are stacked in. The `flexWrap` property accepts 3 different values: `nowrap` (single-line which may cause the container to overflow), `wrap` (multi-lines, direction is defined by flexDirection), and `wrap-reverse` (multi-lines, opposite to direction defined by flexDirection). The default value is `nowrap`.
`justifyContent` | `String` |  Sets the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line. The justifyContent property accepts 5 different values: `flex-start` (items are packed toward the start line), `flex-end` (items are packed toward to end line), `center` (items are centered along the line), `space-between` (items are evenly distributed in the line; first item is on the start line, last item on the end line), and `space-around` (items are evenly distributed in the line with equal space around them). The default value is `flex-start`.
`alignItems` | `String` | Sets how flex items are laid out along the cross axis on the current line. You can think of it as the `justifyContent` version for the cross-axis (perpendicular to the main-axis). The `alignItems` property accepts 5 different values: `flex-start` (cross-start margin edge of the items is placed on the cross-start line), `flex-end` (cross-end margin edge of the items is placed on the cross-end line), `center` (items are centered in the cross-axis), `baseline` (items are aligned such as their baselines align), `stretch` (stretch to fill the container but still respect `min-width`/`max-width`). The default value is `stretch`.
`alignContent` | `String` | Sets how flex items are aligned in the flex container on the cross-axis, similar to how `justifyContent` aligns individual items within the main-axis. The `alignContent` property accepts 6 different values: `flex-start` (lines packed to the start of the container), `flex-end` (lines packed to the end of the container), `center` (lines packed to the center of the container), `space-between` (lines evenly distributed; the first line is at the start of the container while the last one is at the end), `space-around` (lines evenly distributed with equal space between them), and `stretch` (lines stretch to take up the remaining space). The default value is `stretch`. This property has no effect when the flex container has only a single line.

## Additional Children Props

When an element is a direct child of the FlexboxLayout, the following
props get a meaning:

| name | type | description |
|------|------|-------------|
`order` | `Number` | Changes the default ordering of the flex items
`flexGrow` | `Number` | Unitless value that serves as a proportion indicating whether the flex item is able to grow if necessary. It dictates what amount of the available space inside the flex container the item should take up.
`flexShrink` | `Number` | A value indicating the "flex shrink factor", which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when there is not enough space on the row. When omitted, it is set to 1 and the flex shrink factor is multiplied by the flex basis when distributing negative space.
`alignSelf` | `String` | A value that overrides the `alignItems` value for specific flex items. This property accepts the same 5 values as `alignItems`: `flex-start` (cross-start margin edge of the item is placed on the cross-start line), `flex-end` (cross-end margin edge of the item is placed on the cross-end line), `center` (item is centered in the cross-axis), `baseline` (items are aligned such as their baselines are aligned), and `stretch` (stretch to fill the container but still respect `min-width`/`max-width`). The default value is `stretch`.
`flexWrapBefore` | `Boolean` | A boolean value controlling item wrapping. Setting it to `true` will force the item to wrap onto a new line. The default value is `false`. (This property is not part of the official flexbox specification.)
