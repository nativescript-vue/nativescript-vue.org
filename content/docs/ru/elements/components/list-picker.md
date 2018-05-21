---
title: ListPicker/Выбор из списка
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
contributors: [MisterBrownRSA, rigor789, ikoevska]
---

`<ListPicker>` - визуальный компонент, позволяющий пользователю выбирать значение из заранее заданного списка.

---

```html
<ListPicker :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="selectedIndexChanged" />
```

`<ListPicker>`  - обеспечивает двунаправляенние связывание, используя `v-model`.

```html
<ListPicker :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=ListPicker <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `items` | `Array<String>` | Задает или получает элементы, которые будут отобрадатсья в списке.
| `selectedIndex` | `Number` | Задает или получает индекс выбранного элемента.

## События

| Имя | Описание |
|------|-------------|
| `selectedIndexChange`| Срабатывает, когда выбранное значение (индекс) изменяется.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.NumberPicker`](https://developer.android.com/reference/android/widget/NumberPicker.html) | [`UIPickerView`](https://developer.apple.com/documentation/uikit/uipickerview)
