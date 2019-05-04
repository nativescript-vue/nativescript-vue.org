---
title: TabView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview
contributors: [Spice-Z]
---

`<TabView>`は、タブでコンテンツをにグループ化し、それらのタブを移動できるようにするためのナビゲーションコンポーネントです。

---

```html
<TabView :selectedIndex="selectedIndex">
  <TabViewItem title="Tab 1">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```

**注意:** 現在`TabViewItem`は一つの子要素を想定しています。ほとんどの場合、レイアウトで内容をラップすることになるでしょう。

[> screenshots for=TabView <]

#### タブにアイコンを追加する

```html
<TabView :selectedIndex="selectedIndex" iosIconRenderingMode="alwaysOriginal">
  <TabViewItem title="Tab 1" iconSource="~/images/icon.png">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2" iconSource="~/images/icon.png">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```
**注意:** アイコンフォントの代わりに画像を使用することもできます。アイコンのサイズを調整するための詳細については、[Working with image from resource folders](https://docs.nativescript.org/ui/image-resources)を見てください。

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `selectedIndex` | `Number` | 現在選択されているタブを取得・設定します。デフォルトの値は`0`です。
| `tabTextColor` | `Color` | (スタイルのプロパティ) タブのタイトルのテキストカラーを取得・設定します。
| `tabBackgroundColor` | `Color` | (スタイルのプロパティ) タブの背景のカラーを取得・設定します。
| `selectedTabTextColor` | `Color` | (スタイルのプロパティ) 選択されているタブのテキストカラーを取得・設定します。
| `androidTabsPosition` | `String` | Androidでのタブの位置を設定します。<br/>有効な値: `top` か `bottom`。

## Events

| 名前 | 説明 |
|------|-------------|
| `selectedIndexChange` | タップされた`<TabViewItem>`のインデクスとその中の`value`プロパティを含むイベントオブジェクトを送信します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.support.v4.view.ViewPager`](https://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller)
