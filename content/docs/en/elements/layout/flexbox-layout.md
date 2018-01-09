---
title: FlexboxLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
---

The FlexboxLayout container is a non-exact implementation of the [Css Flexbox Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

## Props

| name | type | description |
|------|------|-------------|
`flexDirection` | `String` | Specifies the direction of the Flex layout
`flexWrap` | `String` | Specifies how to wrap child elements
`justifyContent` | `String` | Specifies how to justify content
`alignItems` | `String` | Specifies how to align items
`alignContent` | `String` | Specifies how to align content

## Additional Children Props

When an element is a direct child of the FlexboxLayout, the following
props get a meaning:

| name | type | description |
|------|------|-------------|
`order` | `Number` | Specifies the order of the element
`flexGrow` | `Number` | Specifies if the element can grow in size
`flexShrink` | `Number` | Specifies if the element can shrink in size
`alignSelf` | `String` | Specifies the alignment of the element
`flexWrapBefore` | `Boolean` | Specifies if the element should be force to a new line



