---
title: Page
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_page_.page
contributors: [Spice-Z]
---

`<Page>`はアプリの画面となるUIコンポーネントです。NativeScriptのアプリは普通[`<ActionBar>`](/en/docs/elements/action-bar/action-bar)や他のUIウィジェットなどの内容をラップした一つ以上の`<Page>`コンポーネントを持ちます。

---

```html
<Page>
  <ActionBar title="My App" />
  <GridLayout>
    <Label text="My Content"/>
  </GridLayout>
</Page>
```

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `actionBarHidden` | `Boolean` | ページに`<ActionBar>`を表示するか否かを設定します。<br/>デフォルトの値: `false`.
| `backgroundSpanUnderStatusBar` | `Boolean` | ページの背景がステータスバーの下まで跨るかを取得・設定します。<br/>デフォルトの値: `false`.
| `androidStatusBarBackground` | `Color` | (Androidのみ)Androidデバイスでのステータスバーの色を取得・設定します。
| `enableSwipeBackNavigation` | `Boolean` | (iOSのみ) iOSデバイスにてページがスワイプで戻ることができるか取得・設定します。<br/>デフォルトの値: `true`.
| `statusBarStyle` | `String` | ステータスバーのスタイルを取得・設定します。<br/>有効な値:<br/>`light`,<br/>`dark`.

## Events

| 名前 | 説明 |
|------|-------------|
| `navigatedFrom` | アプリが現在のページから他のページへ遷移した際に発火します。
| `navigatedTo` | アプリが現在のページに遷移した際に発火します。
| `navigatingFrom` | アプリが現在のページから他のページへ遷移する前に発火します。
| `navigatingTo` | アプリが現在のページに遷移する前に発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.GridLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/GridLayout.java) | [`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller)