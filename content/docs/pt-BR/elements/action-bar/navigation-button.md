---
title: NavigationButton
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton
contributors: [alexhiroshi, WesleiRamos]
---

O componente NavigationButton, é uma abstração do NativeScript para o botão de navegação do Android e o botão de voltar do iOS.

---

```html
<ActionBar title="My App">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
</ActionBar>
```

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `text` | `String` | Define o texto que será mostrado no iOS.
| `android.systemIcon` | `String` | O ícone que será mostrado no Android.

*A lista de ícones para Android podem ser encontradas em <https://developer.android.com/reference/android/R.drawable.html>, os ícones são os que começam com o prefixo `ic_`.*

## Eventos

| nome | descrição |
|------|-------------|
| `tap`| Emitido quando o NavigationButton é tocado.
