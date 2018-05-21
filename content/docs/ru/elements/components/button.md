---
title: Button/Кнопка
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
contributors: [sn0wil]
---

`<Button>`  - визуальный компонент, отображающий кнопку, реагирующую на действия пользователя.

Для более детальной информации о доступных действиях, ознакомьтесь с [Действиями в официальной документации NativeScript](https://docs.nativescript.org/ui/gestures).

---

```html
<Button text="Button" @tap="onButtonTap" />
```

[> screenshots for=Button <]

## Свойства

| Имя | тип | Описание |
|------|------|-------------|
| `text` | `String` | Задает текст кнопки.
| `textWrap` | `Boolean` | Получает или устанавливает влезает ли текст в кнопку. Применительно для длинных заголовков. Значение по-умолчанию - `false`.

## События

| Имя | Описание |
|------|-------------|
| `tap` | Срабатывает при нажатии на кнопку.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.Button`](https://developer.android.com/reference/android/widget/Button.html) | [`UIButton`](https://developer.apple.com/documentation/uikit/uibutton)
