---
title: WrapLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_wrap_layout_
contributors: [Spice-Z]
---

`<WrapLayout>`は`orientation`プロパティに基づいて、行か列の中に要素を配置するレイアウトコンテナです。スペースが埋まった時には、コンテナは新しい行か列を自動でつくります。

### 例

### デフォルトのラップレイアウト

次の例では等しい大きさの要素からなる行を生成します。行がスペースからはみ出た時、コンテナは最後のアイテムで新しい行を作ります。

```html
<WrapLayout backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```

<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_horizontal.svg" />

### 垂直方向のラップレイアウト

次の例では等しい大きさの要素からなる列を生成します。行がスペースからはみ出た時、コンテナは最後のアイテムで新しい列を作ります。

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

| Name | Type | Description |
|------|------|-------------|
`orientation` | `String` | 積み重なる方向を指定します。<br/>有効な値: `horizontal` (要素を行で整列させる)、 `vertical` (要素を列で整列させる)。<br/>デフォルトの値: `horizontal`。
`itemWidth` | `Number` | それぞれの子要素の大きさを取得し配置するために使われる幅を設定します。<br/>デフォルトの値: `Number.NaN`、これは子要素を制限するものではありません。
`itemHeight` | `Number` | それぞれの子要素の大きさを取得し配置するために使われる高さを設定します。<br/>デフォルトの値 is `Number.NaN`、これは子要素を制限するものではありません。

## Additional children props

なし.