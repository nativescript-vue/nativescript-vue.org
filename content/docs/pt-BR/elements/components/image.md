---
title: Image
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_image_.image
contributors: [alexhiroshi]
---

`<Image>` é um componente de UI que exibe uma imagem a partir de um [ImageSource](https://docs.nativescript.org/api-reference/modules/_image_source_) ou de uma URL.

---

#### Exibindo uma imagem relativa ao diretório `app`

```html
<Image src="~/logo.png" stretch="none" />
```

#### Exibindo uma imagem de uma URL

```html
<Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

#### Exibindo uma imagem do `App_Resources`

```html
<Image src="res://icon" stretch="none" />
```

#### Exibindo um imagem codificada em `base64`

```html
<Image src="data:Image/png;base64,iVBORw..." stretch="none" />
```

[> screenshots for=Image <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `src` | `String` or [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | Obtém ou define o fonte da imagem como uma URL ou uma fonte de imagem.
|`imageSource` | [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | Obtém ou define a fonte da imagem.
| `tintColor` | `Color` | (Propriedade de estilo) Define uma cor para o template das imagens.
| `stretch` | `Stretch` | (Propriedade de estilo) Obtém ou define a maneira como a imagem é redimensionada para preencher o espaço alocado.<br/>Valores válidos: `none`, `aspectFill`, `aspectFit` ou `fill`.<br/>Para mais informações, veja [Stretch](https://docs.nativescript.org/api-reference/modules/_ui_enums_.stretch).
| `loadMode` | | Obtém ou define a estratégia de carregamento para as imagens no sistema de arquivos local.<br/>Valores válidos: `sync` ou `async`.<br/>Padrão: `async`.<br/>Para mais informações, veja [loadMode](https://docs.nativescript.org/api-reference/classes/_ui_image_.image#loadmode).

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`android.widget.ImageView`](https://developer.android.com/reference/android/widget/ImageView.html) | [`UIImageView`](https://developer.apple.com/documentation/uikit/uiimageview)