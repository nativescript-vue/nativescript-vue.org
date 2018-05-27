---
title: Image/Изображение
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_image_.image
contributors: [sn0wil]
---

`<Image>` - визуальный компонент, отображающий изображение из [ImageSource](https://docs.nativescript.org/api-reference/modules/_image_source_) или из URL.

---

#### Отображение изображения из папки `app`

```html
<Image src="~/logo.png" stretch="none" />
```

#### Отображение изображения из URL

```html
<Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

#### Отображение изображения из `App_Resources`

```html
<Image src="res://icon" stretch="none" />
```

#### Отображение `base64`-кодированного изображения

```html
<Image src="data:Image/png;base64,iVBORw..." stretch="none" />
```

[> screenshots for=Image <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `src` | `String` или [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | Получает или задает источник для изображения как URL или путь (ор. image source).
|`imageSource` | [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | Получает или задает источник для изображения.
| `tintColor` | `Color` | (свойство стиля (Style property)) Устанавливает цвет для оттенка изображения.
| `stretch` | `Stretch` | (свойство стиля (Style property)) Получает или задает способ изменения размера изображения для заполнения доступного пространства.<br/>Возможные значения: `none`, `aspectFill`, `aspectFit` или `fill`.<br/>Для более подробной информации ознакомьтесь с [Stretch](https://docs.nativescript.org/api-reference/modules/_ui_enums_.stretch). 
| `loadMode` | | Получает или задает стратегию загрузки изображений из локальной файловой системы.<br/>Возможные значения: `sync` или `async`.<br/>Значение по умолчанию: `async`.<br/>Для более детальной информации смотрите [loadMode](https://docs.nativescript.org/api-reference/classes/_ui_image_.image#loadmode).

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.ImageView`](https://developer.android.com/reference/android/widget/ImageView.html) | [`UIImageView`](https://developer.apple.com/documentation/uikit/uiimageview)