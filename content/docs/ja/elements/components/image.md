---
title: Image
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_image_.image
contributors: [Spice-Z]
---

`<Image>`は[ImageSource](https://docs.nativescript.org/api-reference/modules/_image_source_)かURLからの画像を表示するUIコンポーネントです。

---

#### `app`ディレクトリの相対パスで画像を表示する

```html
<Image src="~/logo.png" stretch="none" />
```

#### URLで画像を表示する

```html
<Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

#### `App_Resources`で画像を表示する

```html
<Image src="res://icon" stretch="none" />
```

#### `base64`でエンコードされた画像を表示する

```html
<Image src="data:Image/png;base64,iVBORw..." stretch="none" />
```

[> screenshots for=Image <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `src` | `String`か[`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | 画像のソースをURLか画像へのパスの形式で取得・設定します。
|`imageSource` | [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | 画像のソースを取得・設定します。
| `tintColor` | `Color` | (スタイルの設定)テンプレートの画像として、画像に適応させる色を設定します。
| `stretch` | `Stretch` | (スタイルの設定)画像が余白を埋める方法を取得・設定します。<br/>使用できる値は: `none`、 `aspectFill`、`aspectFit`、`fill`<br/>より詳しくは[Stretch](https://docs.nativescript.org/api-reference/modules/_ui_enums_.stretch)を参照してください。
| `loadMode` | | ローカルファイル上の画像の読み込み方法を取得・設定します。<br/>使用できる値: `sync`か`async`.<br/>デフォルトの値: `async`.<br/>より詳しくは[loadMode](https://docs.nativescript.org/api-reference/classes/_ui_image_.image#loadmode)を参照してください。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.ImageView`](https://developer.android.com/reference/android/widget/ImageView.html) | [`UIImageView`](https://developer.apple.com/documentation/uikit/uiimageview)