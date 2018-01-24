---
title: Image
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_Image._Image
contributors: [MisterBrownRSA]
---

The Image widget shows the Image from an ImageSource or from an URL.

---

```html
<Image src="~/logo.png" stretch="none" />
```

```html
<Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

```html
<Image src="res://icon" stretch="none" />
```

```html
<Image src="data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAAXNSR0IArs4c6QAAABxpRE9UAAAAAgAAAAAAAAACAAAAKAAAAAIAAAACAAAARiS4uJEAAAASSURBVBgZYvjPwABHSMz/DAAAAAD//0GWpK0AAAAOSURBVGNgYPiPhBgQAACEvQv1D5y/pAAAAABJRU5ErkJggg==" stretch="none" />
```



[> screenshots for=Image <]

## Props

| name | type | description |
|------|------|-------------|
| `src` | `String` | ImageSource file location or URL address

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.ImageView | UIImageView