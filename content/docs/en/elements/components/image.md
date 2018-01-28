---
title: Image
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_image_.image
contributors: [MisterBrownRSA, rigor789]
---

The Image component displays an Image from an [ImageSource](https://docs.nativescript.org/api-reference/modules/_image_source_), or from a URL.

---

#### Displaying an image relative to the `app` directory

```html
<Image src="~/logo.png" stretch="none" />
```

#### Displaying an image from a URL

```html
<Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

#### Displaying an image from `App_Resources`

```html
<Image src="res://icon" stretch="none" />
```

#### Displaying a `base64` encoded image

```html
<Image src="data:Image/png;base64,iVBORw..." stretch="none" />
```

[> screenshots for=Image <]

## Props

| name | type | description |
|------|------|-------------|
| `src` | `String`, [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | Source of the image.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.ImageView | UIImageView
