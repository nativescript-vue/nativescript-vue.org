---
title: ScrollView/Прокручиваемое представление
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors: [sn0wil]
---

`<ScrollView>` - визуальный компонент, отображающий область для контента, который можно прокручивать. Контент может быть прокручен как вертикально, так и горизонтально.

---

```html
<ScrollView orientation="horizontal">
  <StackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </StackLayout>
</ScrollView>
```

[> screenshots for=ScrollView <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `orientation` | `String` | Получает или задает направление, в котором контент может быть прокручен: `horizontal`(горизонтально) или `vertical`(вертикально).<br/>Значение по-умолчанию: `vertical`.
| `scrollBarIndicatorVisible` | `Boolean` | Указывает, отображается ли полоса прокрутки.<br/>Значение по-умолчанию: `true`.

## События

| Имя | Описание |
|------|-------------|
| `scroll` | Срабатывает при прокрутке.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.view`](https://developer.android.com/reference/android/view/View.html) | [`UIScrollView`](https://developer.apple.com/documentation/uikit/uiscrollview)