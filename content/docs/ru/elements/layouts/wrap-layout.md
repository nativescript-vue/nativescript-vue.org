---
title: WrapLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_wrap_layout_
contributors: [rigor789]
---

The WrapLayout container positions its children in rows or columns, based on the orientation property, until the space is filled and then wraps them onto a new row or column.

### Samples

#### Default WrapLayout

```html
<WrapLayout backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_horizontal.svg" />

#### Vertical WrapLayout

```html
<WrapLayout orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_vertical.svg" />

## Props

| name | type | description |
|------|------|-------------|
`orientation` | `String` | A value indicating the flow direction. If orientation is `horizontal`, items are arranged in rows. If orientation is `vertical`, items are arranged in columns. The default value is `horizontal`.
`itemWidth` | `Number` | The width used to measure and layout each child. Default value is `Number.NaN`, which does not restrict children.
`itemHeight` | `Number` | The height used to measure and layout each child. Default value is `Number.NaN`, which does not restrict children.


## Additional Children Props

There are no additional properties for child elements.
