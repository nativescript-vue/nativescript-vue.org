---
title: Button
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
contributors: [alexhiroshi]
---

`<Button>` é um componente de UI que permite mostrar um botão que responde a um gesto do usuário.

Para mais informações sobre os gestos disponíveis, veja [Gestos na documentação oficial do NativeScript](https://docs.nativescript.org/ui/gestures).

---

```html
<Button text="Button" @tap="onButtonTap" />
```

[> screenshots for=Button <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `text` | `String` | Define o texto do botão.
| `textWrap` | `Boolean` | Obtém ou define se o widget quebra o texto do label. Útil para textos longos. Padrão é `false`.

## Eventos

| nome | descrição |
|------|-------------|
| `tap` | Emitido quando o botão é tocado.

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`android.widget.Button`](https://developer.android.com/reference/android/widget/Button.html) | [`UIButton`](https://developer.apple.com/documentation/uikit/uibutton)
