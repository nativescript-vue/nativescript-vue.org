---
title: GridLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_grid_layout_
contributors: [Spice-Z]
---

`<GridLayout>`はテーブルのような方法で子要素を整列させるレイアウトコンテナです。

グリッドは行、列、セルから成り立ちます。セルは一つ以上の行と列を含みます。複数の行と列をまたぐ子要素を持つことができ、互いに重複することもできます。

デフォルトでは、`<GridLayout>`は一つの行と列を持ちます。`columns`と`rows`プロパティを使うことでそれらの追加が可能です。これらのプロパティでは、行・列の数とその幅・高さを数値で指定する必要があります。カンマで区切って列の数と幅を設定でき、同じように行の数と高さを設定できます。

列の幅と行の高さについて固定の大きさを指定できますし、個別に指定することもできます。:

* **数値の固定値:** 固定のサイズを示します。
* **auto:** 列は中の子要素の分だけ幅が広がり、行では子要素の最も高いものにあわせて高さが広がります。
* **\*:** 固定サイズの行が列を配置した後にあまった余白全てを埋めるよう広がります。

より詳しくは[Props](#props)をご覧ください。

## Examples

### Grid layout with fixed sizing固定のサイズでグリッドレイアウト

次の例ではシンプルな２×２で固定サイズの行と列からなるグリッドを生成しています。

```html
<GridLayout columns="115, 115" rows="115, 115">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout.svg" />

### スターサイジングでグリッドレイアウト

次の例では、スペースが子要素に比例して増えるレスポンシブデザインのグリッドです。

```html
<GridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_star_sizing.svg" />

### 固定サイズとautoサイズでグリッドレイアウト

次の例では一つの自動でサイズが調整されたカラムと固定サイズのカラムからなるグリッドを生成しています。

```html
<GridLayout columns="80, auto" rows="80, 80" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_fixed_auto.svg" />

### 様々なサイズとセルの結合からなるグリッドレイアウト

次の例では様々な幅と高さの設定と、結合されたセルもあるレスポンシブデザインの複雑なグリッドを生成します。

```html
<GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
  <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
  <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
  <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_complex.svg" />

## Props

| Name | Type | Description |
|------|------|-------------|
`columns` | `String` | カンマで区切った列の幅<br/>有効な値: 固定の数字、 `auto`、 `*`.<br/>数字は列の固定幅を示す。`auto`列中の子要素の分だけ幅が広がる。 `*`あまった余白全てを埋めるよう広がる。 余白は全てのThe space is proportionally divided over all star-sizedカラムで。3:5の比率を示したいときは`3*`や`5*`のように表せます。
`rows` | `String` | ンマで区切った行の高さ<br/>有効な値: 固定の数字、 `auto`、 `*`.<br/>字は行の固定の高さを示す。 `auto` makes the row as tall as its tallest child. `*` makes the row occupy all available vertical space. The space is proportionally divided over all star-sized rows. 3:5の比率を示したいときは`3*`や`5*`のように表せます。

## Additional children props

要素が`<GridLayout>`の直接の子要素のとき、次のプロパティが追加で使用できます。

| Name | Type | Description |
|------|------|-------------|
`row` | `Number` | 要素の入る行を指定します。`col`プロパティと合わせて、要素のセルを作ります。 property, specifies the cell coordinates of the element.<br/>最初の列は`0`で表されます。
`col` | `Number` | 要素の入る列を指定します。`col`プロパティと合わせて、要素のセルを作ります。<br/>最初の行は`0`で表されます。
`rowSpan` | `Number` | 要素がまたぐ列の数を指定します。
`colSpan` | `Number` | 要素がまたぐ行の数を指定します。