---
title: Progress
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress
contributors: [alexhiroshi]
---

`<Progress>` é um componente de UI que mostra uma barra para indicar o progresso de uma tarefa.

Veja também: [ActivityIndicator](activity-indicator).

---

```html
<Progress :value="currentProgress" />
```

[> screenshots for=Progress <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `value` | `Number` | Obtém ou define o valor atual da barra de progresso. Deve estar entre 0 e o valor de `maxValue`.
| `maxValue` | `Number` | Obtém ou define o valor máximo para a barra de progresso.<br/>Valor padrão: `100`.

## Eventos

| nome | descrição |
|------|-------------|
| `valueChange` | Emitido quando a propriedade `value` é alterada.

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = false)](https://developer.android.com/reference/android/widget/ProgressBar.html) | [`UIProgressView`](https://developer.apple.com/documentation/uikit/uiprogressview)
