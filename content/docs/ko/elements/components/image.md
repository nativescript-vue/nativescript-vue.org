---
title: 이미지 (Image)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_image_.image
contributors: [qgp9]
---

이미지(Image) 컴포넌트는 [ImageSource](https://docs.nativescript.org/api-reference/modules/_image_source_) 나 URL 로부터 이미지를 표시합니다.

---

#### `app` 디렉토리로부터 상대경로로 이미지 표시

```html
<Image src="~/logo.png" stretch="none" />
```

#### URL 로 부터 이미지 표시

```html
<Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

#### `App_Resources` 로 부터 이미지 표시

```html
<Image src="res://icon" stretch="none" />
```

#### `base64` 인코딩 이미지

```html
<Image src="data:Image/png;base64,iVBORw..." stretch="none" />
```

[> screenshots for=Image <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `src` | `String`, [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | 이미지 소스.

## 네이티브 컴포넌트

| Android | iOS |
|---------|-----|
| android.widget.ImageView | UIImageView
