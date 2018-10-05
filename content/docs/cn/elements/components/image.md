---
title: Image
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_image_.image
contributors: [nuochong]
---

`<Image>` 是一个UI组件，它显示来自 [ImageSource](https://docs.nativescript.org/api-reference/modules/_image_source_) 或URL 的图像。

---

#### 显示相对于 `app` 目录的图像

```html
<Image src="~/logo.png" stretch="none" />
```

#### 显示URL中的图像

```html
<Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

#### 显示图像 `App_Resources`

```html
<Image src="res://icon" stretch="none" />
```

#### 显示已 `base64`编码的图像

```html
<Image src="data:Image/png;base64,iVBORw..." stretch="none" />
```

[> screenshots for=Image <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `src` | `String` 或 [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | 获取或设置图像的源作为URL或图像源。
|`imageSource` | [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | 获取或设置图像的图像源。
| `tintColor` | `Color` | （样式属性）将颜色设置为色调模板图像。
| `stretch` | `Stretch` | （Style属性）获取或设置调整图像大小以填充其分配空间的方式。<br/>有效值： `none`, `aspectFill`, `aspectFit`, 或 `fill`。<br/>有关更多信息，请参阅 [Stretch](https://docs.nativescript.org/api-reference/modules/_ui_enums_.stretch)。 
| `loadMode` | | 获取或设置本地文件系统上图像的加载策略。<br/>有效值： `sync` 或 `async`。<br/>默认值： `async`。<br/>有关更多信息，请参阅 [loadMode](https://docs.nativescript.org/api-reference/classes/_ui_image_.image#loadmode)。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.ImageView`](https://developer.android.com/reference/android/widget/ImageView.html) | [`UIImageView`](https://developer.apple.com/documentation/uikit/uiimageview)