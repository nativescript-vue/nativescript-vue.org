---
title: Label/Текст
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_label_.label
contributors: [sn0wil]
---

`<Label>`- это визуальный компонент, отображающий текст, доступный только в режиме для чтения.

**ВАЖНО**: Этот `<Label>` **не** то же самое, что HTML `<Label>`.

---

```html
<Label text="Label" />
```

[> screenshots for=Label <]

### Стилизация элемента label

Если вам необходимо применить стили, то вы можете использовать комбинацию элементов [`FormattedString`](https://docs.nativescript.org/cookbook/formatted-string-ng) и [`Span`](https://docs.nativescript.org/api-reference/classes/_text_span_.span).

```html
<Label textWrap="true">
  <FormattedString>
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</Label>
```

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `text` | `String` | Задает или получает текст для отображения.
| `textWrap` | `Boolean` | Задает или получает значение, оборачивет текст элемент label.<br/>Значение по умолчанию: `false`.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UILabel`](https://developer.apple.com/documentation/uikit/uilabel)
