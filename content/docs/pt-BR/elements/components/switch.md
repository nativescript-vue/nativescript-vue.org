---
title: Switch
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [alexhiroshi]
---

O componente Switch permite o usuário escolher entre dois estados.
O estado padrão é `false` ou "off".

---

```html
<Switch checked="true" />
```

**Nota**: Esse componente suporta two-way data binding usando `v-model`:

```html
<Switch v-model="itemEnabled" />
```

[> screenshots for=Switch <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `checked` | `Boolean` | Valor boleano representando o estado do switch.

## Eventos

| nome | descrição |
|------|-------------|
| `checkedChange`| Emitido quando o valor do switch é alterado.

## Componente Nativo
| Android | iOS |
|---------|-----|
| android.widget.Switch | UISwitch
