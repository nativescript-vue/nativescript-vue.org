---
title: Switch
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [alexhiroshi]
---

`<Switch>` é um componente de UI que permite o usuário escolher entre dois estados.

O estado padrão é `false` ou OFF.

---

```html
<Switch checked="true" />
```

`<Switch>` suporta two-way data binding usando `v-model`:

```html
<Switch v-model="itemEnabled" />
```

[> screenshots for=Switch <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `checked` | `Boolean` | Obtém ou define o valor do estado do switch.<br/>Valor padrão: `false`.

## Eventos

| nome | descrição |
|------|-------------|
| `checkedChange`| Emitido quando o valor do switch é alterado.

## Componente Nativo
| Android | iOS |
|---------|-----|
[`android.widget.Switch`](https://developer.android.com/reference/android/widget/Switch.html) | [`UISwitch`](https://developer.apple.com/documentation/uikit/uiswitch)
