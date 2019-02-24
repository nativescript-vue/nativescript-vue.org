---
title: NavigationButton
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton
contributors: [Spice-Z]
---

`<NavigationButton>`はAndroidのナビゲーションボタンとiOSのバックボタンを提供するUIコンポーネントです。

詳しく [`<ActionItem>`](/en/docs/elements/action-bar/action-item).

---

```html
<ActionBar title="My App">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
</ActionBar>
```

## Props

| 名前 | 型 |説明 |
|------|------|-------------|
| `text` | `String` | (iOS-only) ボタンのテキストを設定する。
| `android.systemIcon` | `String` | (Androidのみ) ボタン内で表示されるアイコン。`ic_`というプリフェクスで始まるシステムアイコンを指定できる。使用可能なアイコンのすべてのリストは [the `R.drawable` Android class](https://developer.android.com/reference/android/R.drawable.html)に書いてあります。

## Events

| 名前 | 説明 |
|------|-------------|
| `tap`| `<NavigationButton>`がタップされたときに発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html) | [`UINavigationItem`](https://developer.apple.com/documentation/uikit/uinavigationitem)