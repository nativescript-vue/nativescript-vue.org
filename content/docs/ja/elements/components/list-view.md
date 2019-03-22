---
title: ListView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [Spice-Z]
---

`<ListView>`は要素を垂直方向にスクロールができるよう表示するUIコンポーネントです。リストが個別の要素をどのように表示するかは、 `<v-template>`コンポーネントを使って設定できます。

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <!-- Shows the list item label in the default color and style. -->
    <Label :text="item.text" />
  </v-template>
</ListView>
```

---

[> screenshots for=ListView <]

## `<ListView>`を複数の`<v-template>`ブロックと使う

[`v-template`コンポーネント](/en/docs/utilities/v-template)それぞれのリストの要素が画面にどのように表示されるかを設定するために使われます。

もしリストの要素を他とは別の見た目にしたい場合、追加の`<v-template>`ブロックで囲って調節できます。`<ListView>`の中では必要な数だけ`<v-template>`ブロックを使用できます。

```html
<ListView for="item in listOfItems" @itemTap="onItemTap"> 
  <v-template>
    <Label :text="item.text" /> 
  </v-template>

  <v-template if="$odd">
    <!-- For items with an odd index, shows the label in red. -->
    <Label :text="item.text" color="red" />
  </v-template>
</ListView>
```

`<v-template>`で分岐を使う場合、正当なJavaScriptの表現か以下のヘルパーが使えます:

* `$index`&mdash; 現在の要素のインデックス
* `$even`&mdash; 現在の要素のインデックスが偶数の時`true`
* `$odd`&mdash;現在の要素のインデックスが奇数の時`true`

## `v-for`についての重要な注意

`<ListView>`は[`v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for)の挙動のように要素のリストをループしません。その代わりに`<ListView>`は現在スクリーンで見える要素のみを描写し、スクロールで画面外に出たviewを再利用します。これは_view recycling_と呼ばれるコンセプトで、モバイルアプリのパフォーマンスを改善するために用いられているものです。

**`v-template`内で紐付けられたイベントリスナーに頼ることができない**ので、これは重要なことです。代わりに、 タップされた要素のインデクスと、リストから取得する本当の要素を内包する`itemTap`イベントを利用する必要があります。

```javascript
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

**注意:** `v-for`が`<ListView>`の中で使われた場合コンソールに注意が表示され、`for`プロパティに書き換えられます。

## Props

| Name | Type | Description |
|------|------|-------------|
| `for` | `String` | 要素をいてレートするための表現が入ります。<br/>例えば: <ul><li><code>item in listOfItems</code></li><li><code>(item, index) in listOfItems</code></li><li><code>item in [1, 2, 3, 4, 5]</code></li></ul>
| `items` | `Array<any>` | `<ListView>`内で表示される要素の配列<br/>**このプロパティは発展的な利用の際に使います。`for`プロパティを変わりに使用してください。**
| `separatorColor` | `Color` | 線の色を設定します。線を消すには `transparent`を使ってください。

## Events

| Name | Description |
|------|-------------|
| `itemTap`| `<ListView>`の中の要素がタップされたときに発火します。タップされた要素は`event.item`で操作できます。

## Methods

| 名前 | 説明 |
|------|-------------|
| `refresh()` | (Coming soon) `<ListView>`がすべての要素を読み込むように強制します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.ListView`](https://developer.android.com/reference/android/widget/ListView.html) | [`UITableView`](https://developer.apple.com/documentation/uikit/uitableview)
