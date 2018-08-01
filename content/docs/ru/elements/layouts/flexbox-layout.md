---
title: FlexboxLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
contributors:
  - rigor789
  - ikoevska
---
`<FlexboxLayout>` is a layout container that provides a non-exact implementation of the [CSS Flexbox layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox). This layout lets you arrange child components both horizontally and vertically.

### Examples

#### Default flex layout

The following example creates a row of three equally-sized elements that span across the entire height of the screen.

```html
<FlexboxLayout backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" backgroundColor="#289062"/>
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_stretch.svg" />

#### Column flex layout

The following example creates a column of 3 equally-sized elements that span across the entire width of the screen.

```html
<FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_stretch.svg" />

#### Row flex layout with items aligned to `flex-start`

The following example creates a row of 3 items placed at the top of the screen. Items are placed in the order they were declared in.

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_flex-start.svg" />

#### Row flex layout with custom order

The following example creates a row of 3 items placed at the top of the screen. Items are placed in a customized order.

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" order="2" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" order="3" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" order="1" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_custom_order.svg" />

#### Row flex layout with wrapping

The following example creates four items with enabled line wrapping. When the row runs out of space, the container wraps the last item on a new line.

```html
<FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <Label text="first" width="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" backgroundColor="#289062"/>
</FlexboxLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_wrap.svg" />

#### Column flex layout with reverse order and items with a different `alignSelf`

The following example shows how to use:

* `flexDirection` to place items in a column, starting from the bottom.
* `justifyContent` to create equal spacing between the vertically placed items.
* `alignSelf` to modify the position of items across the main axis.

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

| Name | Type | Description | |\---\---|\---\---|\---\---\---\----| `flexDirection` | `String` | Sets the direction for placing child elements in the flexbox container.  
Valid values:  
`row` (horizontal, left to right),  
`row-reverse` (horizontal, right to left),  
`column` (vertical, top to bottom), and  
`column-reverse` (vertical, bottom to top).  
Default value: `row`. `flexWrap` | `String` | Sets whether child elements are forced in a single line or can flow into multiple lines. If set to multiple lines, also defines the cross axis which determines the direction new lines are stacked in.  
Valid values:  
`nowrap` (single line which may cause the container to overflow),  
`wrap` (multiple lines, direction is defined by `flexDirection`),and  
`wrap-reverse` (multiple lines, opposite to the direction defined by `flexDirection`).  
Default value: `nowrap`. `justifyContent` | `String` | Sets the alignment of child elements along the main axis. You can use it to distribute leftover space when all the child elements on a line are inflexible or are flexible but have reached their maximum size. You can also use it to control the alignment of items when they overflow the line.  
Valid values:  
`flex-start` (items are packed toward the start line),  
`flex-end` (items are packed toward the end line),  
`center` (items are centered along the line),  
`space-between` (items are evenly distributed on the line; first item is on the start line, last item on the end line), and  
`space-around` (items are evenly distributed on the line with equal space around them).  
Default value: `flex-start`. `alignItems` | `String` | (Android-only) Sets the alignment of child elements along the cross axis on the current line. Acts as `justifyContent` for the cross axis.  
Valid values:  
`flex-start` (cross-start margin edge of the items is placed on the cross-start line),  
`flex-end` (cross-end margin edge of the items is placed on the cross-end line),  
`center` (items are centered оn the cross axis),  
`baseline` (the item baselines are aligned), and  
`stretch` (items are stretched to fill the container but respect `min-width` and `max-width`).  
Default value: `stretch`. `alignContent` | `String` | Sets how lines are aligned in the flex container on the cross axis, similar to how `justifyContent` aligns individual items within the main axis.  
This property has no effect when the flex container has only one line.  
Valid values:  
`flex-start` (lines are packed to the start of the container),  
`flex-end` (lines are packed to the end of the container),  
`center` (lines are packed to the center of the container),  
`space-between` (lines are evenly distributed; the first line is at the start of the container while the last one is at the end),  
`space-around` (lines are evenly distributed with equal space between them), and  
`stretch` (lines are stretched to take up the remaining space).  
Default value: `stretch`.

## Additional children props

When an element is a direct child of `<FlexboxLayout>`, you can work with the following additional properties.

| Name | Type | Description | |\---\---|\---\---|\---\---\---\----| `order` | `Number` | Sets the order in which child element appear in relation to one another. `flexGrow` | `Number` | Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container. `flexShrink` | `Number` | Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to `1`. `alignSelf` | `String` | (Android-only) Overrides the `alignItems` value for the child.  
Valid values:  
`flex-start` (cross-start margin edge of the item is placed on the cross-start line),  
`flex-end` (cross-end margin edge of the item is placed on the cross-end line),  
`center` (item is centered on the cross axis),  
`baseline` (the item baselines are aligned), and  
`stretch` (items is stretched to fill the container but respects `min-width` and `max-width`).  
Default value: `stretch`. `flexWrapBefore` | `Boolean` | When `true`, forces the item to wrap onto a new line. This property is not part of the official Flexbox specification.  
Default value: `false`.