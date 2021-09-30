---
title: SegmentedBar
apiRef: http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html
contributors: [Spice-Z]
---

`<SegmentedBar>`は複数のボタン中から一つだけ選択するために使うUIバーのコンポーネントです。テキストか画像を表示できます。

`<TabView>`と対象的な点:
* `<SegmentedBar>`の位置は固定されていません。
* このコンポーネントはページ上かハンバーガーメニューのようなページに追加されたエレメンの中に配置し、スタイリングをすることができます。
* 選択後に表示されるコンテンツについては別に管理する必要があります。

---
```html
<SegmentedBar>
  <SegmentedBarItem title="First" />
  <SegmentedBarItem title="Second" />
  <SegmentedBarItem title="Third" />
</SegmentedBar>
```

```html
<SegmentedBar :items="listOfItems" selectedIndex="0"
    @selectedIndexChanged="onSelectedIndexChange" />
```

`<SegmentedBar>`は`v-model`による双方向バインディングを提供します。

```html
<SegmentedBar :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=SegmentedBar <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `items` | `Array<SegmentedBarItem>` | セグメントバーの中に表示される要素の配列。セグメントバー内のボタンのラベルかアイコンとなります。<br/>配列はあらかじめ生成されている必要があります。
| `selectedIndex` | `Number` | 選択された要素のインデクスを取得・設定します。
| `selectedBackgroundColor` | `Color` | (スタイルのプロパティ) 選択された要素の背景色を取得・設定します。バーの全体に背景色を設定するには`backgroundColor`を使ってください。

## Events

| 名前 | 説明 |
|------|-------------|
| `selectedIndexChanged`| セグメントバーの要素がタップされたときに発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.TabHost`](https://developer.android.com/reference/android/widget/TabHost.html) | [`UISegmentedControl`](https://developer.apple.com/documentation/uikit/uisegmentedcontrol)
