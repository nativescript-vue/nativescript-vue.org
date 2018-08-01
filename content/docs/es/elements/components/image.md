---
title: Image
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_image_.image
contributors: [ianaya89]
---

`<Image>` es un componente de UI que permite mostrar una imagen a partir de un [ImageSource](https://docs.nativescript.org/api-reference/modules/_image_source_) o de una URL.

---

#### Mostrando una imagen relativa al directorio de la aplicación

```html
<Image src="~/logo.png" stretch="none" />
```

#### Mostrando una imagen desde una URL

```html
<Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

#### Mostrando una imagen desde `App_Resources`

```html
<Image src="res://icon" stretch="none" />
```

#### Mostrando una imagen en formato `base64`

```html
<Image src="data:Image/png;base64,iVBORw..." stretch="none" />
```

[> screenshots for=Image <]

## Propiedades

| Nombre | Tipo | Descripcioón |
|------|------|-------------|
| `src` | `String` o [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | Obtiene o establece el origen de una imagen, sea como URL o *ImageSource*
|`imageSource` | [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | Obtiene o establece el *ImageSource* de una imagen.
| `tintColor` | `Color` | (Style property) Establece un color para teñir la imagen.
| `stretch` | `Stretch` | (Style property) Obtiene o establece la forma en la que la imagen se acomoda para rellenar el elemento que la contiene. <br/>Posibles valores: `none`, `aspectFill`, `aspectFit`, o `fill`.<br/>Para mas información, puedes ver [Stretch](https://docs.nativescript.org/api-reference/modules/_ui_enums_.stretch).
| `loadMode` | | Obtiene o establece la estrategia de carga para imágenes en el sistema de archivos local.<br/>Posibles valores: `sync` o `async`.<br/>Valor por defecto: `async`.<br/>Para mas información, puedes ver [loadMode](https://docs.nativescript.org/api-reference/classes/_ui_image_.image#loadmode).

## Componente nativo

| Android | iOS |
|---------|-----|
| [`android.widget.ImageView`](https://developer.android.com/reference/android/widget/ImageView.html) | [`UIImageView`](https://developer.apple.com/documentation/uikit/uiimageview)