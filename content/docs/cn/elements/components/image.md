---
title: Image - 图片
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_image_.image
contributors: [Pythonfo]
---

**Image** 组件用于显示来自 [ImageSource](https://docs.nativescript.org/api-reference/modules/_image_source_) 或者 URL 的图片。

---

#### 相对于 `app` 文件夹

```html
<Image src="~/logo.png" stretch="none" />
```

#### URL

```html
<Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

#### `App_Resources` 文件夹

```html
<Image src="res://icon" stretch="none" />
```

#### base64

```html
<Image src="data:Image/png;base64,iVBORw..." stretch="none" />
```

[> screenshots for=Image <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `src` | `String`, [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | 图片源|

## 原生组件（Native Component）

| Android | iOS |
|---------|-----|
| [android.widget.ImageView](https://developer.android.com/reference/android/widget/ImageView.html) | [UIImageView](https://developer.apple.com/documentation/uikit/UIImageView) |
