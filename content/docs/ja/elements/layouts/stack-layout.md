---
title: StackLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_stack_layout_
contributors: [Spice-Z]
---

`<StackLayout>`は子要素を垂直(これがデフォルト)か平行方向へ積み重ねるレイアウトコンテナです。

## 例

### デフォルトの積み重ね

次の例では3つの等しい大きさの要素を垂直方向へ積み重ねています。要素は全体の幅を覆うように引き伸ばされます。要素は記述された順に配置されます。

```html
<StackLayout backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#289062"/>
  <Label text="third" height="70" backgroundColor="#1c6b48"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_vertical.svg" />

### 並行方向への積み重ね

次の例では3つの等しい大きさの要素を平行方向へ積み重ねています。要素は全体の高さを覆うように引き伸ばされます。要素は記述された順に配置されます。

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#289062"/>
  <Label text="third" width="70" backgroundColor="#1c6b48"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_horizontal.svg" />

### 並行方向の整列を調節して積み重ねる

次の例ではレスポンシブなサイズ指定で対角線上に要素を積み重ねています。要素は垂直方向に積み重なっています。

```html
<StackLayout backgroundColor="#3c495e">
  <Label text="left" horizontalAlignment="left"
         width="33%" height="70" backgroundColor="#43b883"/>
  <Label text="center" horizontalAlignment="center"
         width="33%" height="70" backgroundColor="#289062"/>
  <Label text="right" horizontalAlignment="right"
         width="33%" height="70" backgroundColor="#1c6b48"/>
  <Label text="stretch" horizontalAlignment="stretch"
         height="70" backgroundColor="#43b883"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_vertical_align_children.svg" />

### ついちょく方向の整列を調節して積み重ねる

次の例ではレスポンシブなサイズ指定で対角線上に要素を積み重ねています。要素は平行方向に積み重なっています。

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="top" verticalAlignment="top"
         width="70" height="33%" backgroundColor="#43b883"/>
  <Label text="center" verticalAlignment="center"
         width="70" height="33%" backgroundColor="#289062"/>
  <Label text="bottom" verticalAlignment="bottom"
         width="70" height="33%" backgroundColor="#1c6b48"/>
  <Label text="stretch" verticalAlignment="stretch"
         width="70" backgroundColor="#43b883"/>
</StackLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/stack_layout_horizontal_align_children.svg" />

## Props

| Name | Type | Description |
|------|------|-------------|
`orientation` | `String` | 積み重ねる方向を指定します。<br/>有効な値: `vertical` and `horizontal`。<br/>デフォルトの値: `vertical`.

## Additional children props

なし。