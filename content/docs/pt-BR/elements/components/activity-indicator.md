---
title: ActivityIndicator
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator
contributors: [alexhiroshi]
---

`<ActivityIndicator>` é um componente de UI que exibe um indicador de progresso que sinaliza para o usuário uma operação executando em background.

---

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

[> screenshots for=ActivityIndicator <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `busy` | `Boolean` | Obtém ou define se o indicador está ativo. Quando `true`, o indicador está ativo.

## Eventos

| nome | descrição |
|------|-------------|
| `busyChange`| Emitido quando a propriedade `busy` é alterada.

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = true)](https://developer.android.com/reference/android/widget/ProgressBar.html)	| [`UIActivityIndicatorView`](https://developer.apple.com/documentation/uikit/uiactivityindicatorview)