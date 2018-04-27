---
title: TimePicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker
contributors: [alexhiroshi]

---

`<TimePicker>` é um componente de UI que permite o usuário selecionar a hora.

Veja também: [DatePicker](/pt-BR/docs/elements/components/date-picker).
---

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

`<TimePicker>` suporta two-way data binding usando `v-model`:

```html
<TimePicker v-model="selectedTime" />
```

[> screenshots for=TimePicker <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `hour` | `Number` | A hora do TimePicker.
| `minute` | `Number` | O minuto do TimePicker.
| `time` | `Date` | O tempo do TimePicker.
| `minHour` | `Number` | A hora mínima selecionável.
| `maxHour` | `Number` | A hora máxima selecionável.
| `minMinute` | `Number` | O minuto mínimo selecionável.
| `maxMinute` | `Number` | O minuto máximo selecionável.
| `minuteInterval` | `Number` | O intervalo entre os minutos selecionáveis. Por exemplo: 5 ou 15 minutos.<br>Valor padrão: `1`.

## Eventos

| nome | descrição |
|------|-------------|
| `timeChanged` | Emitido quando o tempo selecionado é alterado.

## Componente Nativo
| Android | iOS |
|---------|-----|
| [`android.widget.TimePicker`](https://developer.android.com/reference/android/widget/TimePicker) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)
