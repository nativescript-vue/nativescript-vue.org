---
title: Image
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_image._image
---

The Image widget shows the image from an ImageSource or from an URL.

---

```html
<image src="~/logo.png" stretch="none" />
```

```html
<image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

```html
<image src="res://icon" stretch="none" />
```

```html
<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAAXNSR0IArs4c6QAAABxpRE9UAAAAAgAAAAAAAAACAAAAKAAAAAIAAAACAAAARiS4uJEAAAASSURBVBgZYvjPwABHSMz/DAAAAAD//0GWpK0AAAAOSURBVGNgYPiPhBgQAACEvQv1D5y/pAAAAABJRU5ErkJggg==" stretch="none" />
```



[> screenshots for=image <]

## Props

| name | type | description |
|------|------|-------------|
| `src` | `String` | ImageSource file location or URL address

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.ImageView | UIImageView

---
contributors: [MisterBrownRSA]
---