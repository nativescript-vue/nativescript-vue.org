---
title: TextViews
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [sn0wil]
---

`<TextView>` - визуальный компонент, отображающий доступный для редактирования или только для чтения многострочный контейнер для текста. Вы можете использовать его для того, чтобы дать пользователю вводить объемный текст в приложении или для отображения длинного многострочного текста на экране.

`<TextView>` наследуется от [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) и [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase), которые включают в себя дополнительные свойства и события.

---

```html
<TextView text="Multi\nLine\nText" />
```

`<TextView>` обеспечивает двустороннюю привязку данных, используя `v-model`.

```html
<TextView v-model="textViewValue" />
```

### Отображение многострочного текста с различными стилями

Для применения стилей к строкам в `<TextView>` вы можете использовать `<FormattedString>`

```html
<TextView editable="false">
  <FormattedString>
    <Span text="You can use text attributes such as " />
    <Span text="bold, " fontWeight="Bold" />
    <Span text="italic " fontStyle="Italic" />
    <Span text="and " />
    <Span text="underline." textDecoration="Underline" />
  </FormattedString>
</TextView>
```

[> screenshots for=TextView <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `text` | `String` | Получает или задает значение текста.
| `hint` | `String` | Получает или задает текста для подсказки текстового поля, когда компонент доступен для редактирования.
| `editable` | `Boolean` | Когда `true`, указывает, что пользователь может редактировать текст.
| `maxLength` | `Number` | Получает или задает максимальную длинну символов, которая может быть введена.
| `keyboardType` | `KeyboardType` | Отображает пользовательскую клавиатуру для более простого ввода текста.<br/>Допустимые значения: `datetime`, `phone`, `number`, `url` или `email`.
| `returnKeyType` | Получает или задает текст для клавиши ввод (return).<br/>Допустимые значения: `done`, `next`, `go`, `search` или `send`.
| `autocorrect` | `Boolean` | Разрешает или запрещает автокоррекцию.

## События

| Имя | Описание |
|------|-------------|
| `textChange`| Срабатывает при изменени текста.
| `returnPress`| Срабатывает при нажатии клавиши ввод (return).
| `focus`| Срабатывает, когда контейнер получает фокус.
| `blur`| Срабатывает, когда контейнер теряет фокус.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)
