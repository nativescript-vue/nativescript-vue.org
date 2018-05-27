---
title: SegmentedBar/Разделенная область
apiRef: http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html
contributors: [sn0wil]
---

`<SegmentedBar>` - это визуальный компонент, отображающий набор кнопок для разделенных областей. Также может отображать текст или изображения.

В отличие от `<TabView>`:
* Положение `<SegmentedBar>` не фиксировано.
* Вы можете располагать и изменять стили так, как необходимо на странице или внутри дополнительных элементов (например, гамбургер-меню).
<<<<<<< HEAD
* Вам нужно отдельно обрабатывать содержимое, отображаемое после выбора, отдельно.
=======
* Вам нужно отдельно обрабатывать содержимое, отображаемые после выбора, отдельно.
>>>>>>> fixes lex111

---
```html
<SegmentedBar>
  <SegmentedBarItem title="First" />
  <SegmentedBarItem title="Second" />
  <SegmentedBarItem title="Third" />
</SegmentedBar>
```

```html
<SegmentedBar :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="onSelectedIndexChange" />
```

`<SegmentedBar>` обеспечивает двустороннюю привязку данных, используя `v-model`.

```html
<SegmentedBar :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=SegmentedBar <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `items` | `Array<SegmentedBarItem>` | Массив элементов, которые отображаются в segmented bar. Представляют собой заголовки кнопок или иконки.<br/>Массив должен быть создан заранее. 
| `selectedIndex` | `Number` | Получает или задает индекс выбранного элемента.
| `selectedBackgroundColor` | `Color` | (Стилевое свойство) Получает или задает цвет фона выбранного элемент. Для задания цвета фона всего компонента используйте `backgroundColor`.

## События

| Имя | Описание |
|------|-------------|
| `selectedIndexChange`| Срабатывает при нажатии на элемент в области.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.TabHost`](https://developer.android.com/reference/android/widget/TabHost.html) | [`UISegmentedControl`](https://developer.apple.com/documentation/uikit/uisegmentedcontrol)
