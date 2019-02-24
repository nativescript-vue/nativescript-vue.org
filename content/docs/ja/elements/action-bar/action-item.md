---
title: ActionItem
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem
contributors: [Spice-Z]
---

`<ActionItem>`は、`<ActionBar>`コンポーネントにアクションボタンを追加するためのUIコンポーネントです。

---

#### 基本的な使い方

```HTML
<ActionBar title="My App">
  <ActionItem @tap="onTapShare"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" />
  <ActionItem @tap="onTapDelete"
    ios.systemIcon="16" ios.position="right"
    text="delete" android.position="popup" />
</ActionBar>
```

#### 状況に応じてアクションアイテムを表示する

状況に応じて`<ActionItem>`コンポーネントを表示するために`v-show`ディレクティブが使用できます。

```HTML
<ActionBar title="My App">
  <ActionItem @tap="onTapEdit"
    v-show="!isEditing"
    ios.systemIcon="2" ios.position="right"
    android.systemIcon="ic_menu_edit" />
  <ActionItem @tap="onTapSave"
    v-show="isEditing"
    ios.systemIcon="3" ios.position="right"
    android.systemIcon="ic_menu_save" />
  <ActionItem @tap="onTapCancel"
    v-show="isEditing"
    ios.systemIcon="1"
    android.systemIcon="ic_menu_close_clear_cancel" />
</ActionBar>
```

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `ios.systemIcon` | `Number` | iOSで、`ActionItem`のアイコンを取得・設定します。値は[`UIBarButtonSystemItem` enumeration](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIBarButtonItem_Class/#//apple_ref/c/tdef/UIBarButtonSystemItem)で指定されている数字でなければいけません。
| `android.systemIcon` | `String` | Androidで、`ActionItem`のアイコンを取得・設定します。値は [drawable resource](http://androiddrawables.com)で指定されている名前でなければいけません。
| `ios.position` | `String` | iOSの`ActionBar`内で`ActionItem`の位置を取得・設定します。 <br/>使用できる値は: `left` が `right`です。<br/>デフォルトの値は`left`です。
| `android.position` | `String` | Androidの`ActionBar`内で`ActionItem`の位置を取得・設定します。<br/>使用できる値:<br/>`actionBar` (アイテムをアクションバー内に設置して下さい)<br/>`popup` (アイテムをオプションメニューの中に設定して下さい、テキストとして描写されます。)<br/>`actionBarIfRoom` (十分なスペースがあるなら、`ActionBar`の中にアイテムを設置してください。そうでなければ、オプションメニューの中に設置してください。)<br/>デフォルトの値は`actionBar`です。

## Events

| 名前 | 説明 |
|------|-------------|
| `tap`| `ActionItem`がタップされたときに通達されます。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html) | [`UINavigationItem`](https://developer.apple.com/documentation/uikit/uinavigationitem)