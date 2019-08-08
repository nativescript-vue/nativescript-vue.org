---
title: AbsoluteLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_
docRef: https://docs.nativescript.org/ui/layouts/layout-containers#absolutelayout
contributors: [Spice-Z]
---

`<AbsoluteLayout>`コンテナはNativeScriptで最もシンプルなレイアウトコンテナです。 

`<AbsoluteLayout>`の特徴は以下の通りです:

* 子要素の位置を調節するためにleft/top属性を持ちます。
* 子要素にレイアウト上の成約を課しません。
* ランタイム上で子要素のサイズに変更があった時にそれを自動でリサイズはしません。

## 例

### グリッドのようなレイアウト

次の例ではシンプルなグリッドを作成しています。グリッドレイアウトを作成するためのより詳しい情報は、こちら[GridLayout](/ja/docs/elements/layouts/grid-layout)をご覧ください。

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_grid.svg" />

### エレメントを重ねて表示する

次の例では要素を重ねて表示しています。

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
  <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_overlap.svg" />

## Props

ないよ！

## 子要素に追加されるプロップス

要素が`<AbsoluteLayout>`の直接の子要素である場合、子要素では次のプロパティが使えるようになります。

| 名前 | 型 | 説明 |
|------|------|-------------|
| `top` | `Number` | 子要素の上端と親要素の上端との距離を距離をピクセルで取得・設定します。
| `left` | `Number` | 子要素の左端と親要素の左端との距離を距離をピクセルで取得・設定します。
