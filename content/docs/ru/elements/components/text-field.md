---
title: TextField/Текстовое поле
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [sn0wil]

---

`<TextField>` - компонент ввода, который создает доступный для редактирования однострочное текстовое поле.

`<TextField>` расширяет [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) и [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase) , добавляя дополнительные свойства и события.

---

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

`<TextField>` обеспечивает двустороннюю привязку данных, используя `v-model`.

```html
<TextField v-model="textFieldValue" />
```

[> screenshots for=TextField <]

## Свойства

| Имя | Type | Описание |
|------|------|-------------|
| `text` | `String` | Получает или задает значение текстового поля.
| `hint` | `String` | Получает или задает текст для подсказки текстового поля.
| `editable` | `Boolean` | Когда `true`, указывает, что пользователь может редактировать значение поля.
| `maxLength` | `Number` | Ограничивает количество символов.
| `secure` | `Boolean` | Скрывает введенный текст, если `true`. Используйте это свойство для создания поля для ввода пароля.<br/>Значение по умолчанию: `false`.
| `keyboardType` | `KeyboardType` | Отображает пользовательскую клавиатуру для более простого ввода.<br/>Возможные значения: `datetime`, `phone`, `number`, `url` или `email`.
| `returnKeyType` | `ReturnKeyType` | Получает или задает заголовок клавиши ввода.<br/>Возможные значения: `done`, `next`, `go`, `search` или `send`.
| `autocorrect` | `Boolean` | Разрешает или запрешает автокорекцию.

## События

| Имя | Описание |
|------|-------------|
| `textChange` | Срабатывает при изменении текста.
| `returnPress` | Срабатывает при нажатии на клавишу ввода.
| `focus` | Срабатывает при получении фокуса полем ввода.
| `blur` | Срабатывает при потрере фокуса полем ввода.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield)
