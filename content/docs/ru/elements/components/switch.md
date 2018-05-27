---
title: Switch
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [sn0wil]
---

`<Switch>` - визуальный компонент, дающий пользователю возможность переключения между двумя состояниями.

Значение по умолчанию `false` или OFF.

---

```html
<Switch checked="true" />
```

`<Switch>` обеспечивает двустороннюю привязку данных, используя `v-model`.

```html
<Switch v-model="itemEnabled" />
```

[> screenshots for=Switch <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `checked` | `Boolean` | Получает или задает значение переключателя.<br/>Значение по умолчанию: `false`.

## События

| Имя | Описание |
|------|-------------|
| `checkedChange`| Срабатывает при переключении.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.Switch`](https://developer.android.com/reference/android/widget/Switch.html) | [`UISwitch`](https://developer.apple.com/documentation/uikit/uiswitch)
