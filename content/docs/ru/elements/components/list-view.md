---
title: ListView/Список
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [sn0wil]
---

`<ListView>` - визуальный комопонент, показывающий список элементов, который монжно вертикально прокручивать (скроллить). Для задания того, как будет отображаться каждый компонент, вы можете использовать `<v-template>`.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <!-- Показывает список с item label с заданными по умолчанию стилями. -->
    <Label :text="item.text" />
  </v-template>
</ListView>
```

---

[> screenshots for=ListView <]

## Использование `<ListView>` с множеством блоков `<v-template>`

[Компонент `v-template`](/ru/docs/utilities/v-template) используется для определения того, как часто каждый элемент листа показывается на экране. 

Если вам необходимо отобразить один или несколько элементов списка иначе, чем остальные, товы можете вложить их в дополнительные блоки `<v-template>` и использовать условия. Вы можете располагать сколько угодно много `<v-template>` блоков в `<ListView>`.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap"> 
  <v-template>
    <Label :text="item.text" /> 
  </v-template>

  <v-template if="$odd">
    <!-- Для элементов с нечетным индексом показываем красный текст. -->
    <Label :text="item.text" color="red" />
  </v-template>
</ListView>
```
Когда вы создаете условные конструкции для `<v-template>`, вы можете использовать любое верное JavaScript выражение или любую из следующих вспомогательных функций(helpers):

* `$index`&mdash; индекс (index) текущего элемента
* `$even`&mdash;`true`, если индекс текущего элементы четный
* `$odd`&mdash;`true`, если индекс текущего элементы четный

## Важная заметка о `v-for`

`<ListView>` не перебирает элементы списка, как вы ожидаете, если используете [`v-for`](https://ru.vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for). Вместо этого `<ListView>` только создает необдходимые представления для отображения текущих видимых элементов на экране и переиспользует представления, которые уже скрыны с экрана во время прокрутки. Этот концеп называется _view recycling_ и в основном используется в мобильных приложениях для улучшения производительности.

Это важно, потмоу как **вы не можете полагаться на обработчиков событий внутри `v-template`**. Вместо этого вам необходимо использовать событие `itemTap`, которые содержит в себе индекс нажатого элемента и сам элемент списка.

```javascript
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

**Пометка:** если `v-for` используется на `<ListView>`, то в консоли будет написано предупреждение и он будет преобразован в свойство `for`.

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `for` | `String` | Предоставляет выражение для итерирования по элементам.<br/>Например: <ul><li><code>item in listOfItems</code></li><li><code>(item, index) in listOfItems</code></li><li><code>item in [1, 2, 3, 4, 5]</code></li></ul>
| `items` | `Array<any>` | Массив элементов, которые показанных в `<ListView>`.<br/>**Это свойство только для продвинутого использования. Используйте вместо него свойство `for`.**
| `separatorColor` | `Color` | Задает цвет линии разделителя. Установите его в значение `transparent` для удаления.

## События

| Имя | Описание |
|------|-------------|
| `itemTap`| Срабатывает тога, когда нажат элемент в `<ListView>`. Для получения доступа к нажатому элементу используйте `event.item`.

## Методы

| Имя | Описание |
|------|-------------|
| `refresh()` | (Скоро) Заставляет `<ListView>` перезагрузить все его элементы.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.ListView`](https://developer.android.com/reference/android/widget/ListView.html) | [`UITableView`](https://developer.apple.com/documentation/uikit/uitableview)
