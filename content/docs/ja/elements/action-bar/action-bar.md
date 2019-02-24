---
title: ActionBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar
contributors: [Spice-Z]
---

`<ActionBar>`は画面上部にツールバーを提供するためのUIコンポーネントです。

このコンポーネントはAndroidの[app bar](https://developer.android.com/training/appbar/)、iOSの[navigation bar](https://developer.apple.com/design/human-interface-guidelines/ios/bars/navigation-bars/)をNativeScriptが抽象化したものです。

---

#### タイトルを使う

```html
<ActionBar title="MyApp" />
```

#### タイトルの見た目をカスタマイズして使う

```html
<ActionBar>
  <StackLayout orientation="horizontal">
    <Image src="res://icon" width="40" height="40" verticalAlignment="center" />
    <Label text="NativeScript" fontSize="24" verticalAlignment="center" />
  </StackLayout>
</ActionBar>
```

#### Android用にアプリのアイコンを設定する

```html
<ActionBar title="My App" android.icon="res://icon" android.iconVisibility="always" />
```

#### 枠線を無くす

デフォルトでは、枠線が`<ActionBar>`の下に描かれています。 枠線に加えて、iOSデバイスでは透過フィルターが`<ActionBar>`に適用されています。

このスタイリングを無くすには、 `flat`プロパティを`true`に設定します。

```html
<ActionBar title="My App" flat="true" />
```

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `title` | `String` | バーに表示されるタイトルを設定します。
| `android.icon` | `String` | Androidデバイス上で表示されるアイコンを設定します。
| `android.iconVisibility` | `String` | Androidデバイス上でのアイコンの表示/非表示を設定します。
| `flat` | `boolean` | Androidでは枠線を無くし、iOSでは透過フィルターを無くします。. デフォルトの値は`false`です。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html)	| [`UINavigationBar`](https://developer.apple.com/documentation/uikit/uinavigationbar)