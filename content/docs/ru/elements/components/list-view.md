---
title: ListView/Список
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [sn0wil]
---

`<ListView>` - визуальный комопонент, отображающий список элементов, который монжно вертикально прокручивать (скроллить). Для установки того, как будет отображаться каждый компонент, вы можете использовать `<v-template>`.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <!-- Отображает список с item label с заданными по умолчанию стилями. -->
    <Label :text="item.text" />
  </v-template>
</ListView>
```

---

[> screenshots for=ListView <]

## Использование `<ListView>` с множеством блоков `<v-template>`

[Компонент `v-template`](/ru/docs/utilities/v-template) используется для определения того, как часто каждый элемент списка отображается на экране. 

Если вам необходимо отобразить один или несколько элементов списка иначе, чем остальные, то вы можете вложить их в дополнительные блоки `<v-template>` и использовать условия. Вы можете располагать сколько угодно много блоков `<v-template>` в `<ListView>`.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap"> 
  <v-template>
    <Label :text="item.text" /> 
  </v-template>

  <v-template if="$odd">
    <!-- Для элементов с нечетным индексом отображаем красный текст. -->
    <Label :text="item.text" color="red" />
  </v-template>
</ListView>
```
Когда вы создаете условные конструкции для `<v-template>`, вы можете использовать любое корректное JavaScript-выражение или любую из следующих вспомогательных функций (helpers):

* `$index`&mdash; индекс (index) текущего элемента
* `$even`&mdash;`true`, если индекс текущего элементы четный
* `$odd`&mdash;`true`, если индекс текущего элементы четный

## Важное примечание о `v-for`

`<ListView>` не перебирает элементы списка, как вы ожидаете, если используете [`v-for`](https://ru.vuejs.org/v2/guide/list.html#%D0%9E%D1%82%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-v-for). Вместо этого `<ListView>` только создает необходимые представления для отображения текущих видимых элементов на экране и переиспользует представления, которые уже скрыты с экрана во время прокрутки. Этот концепт называется _view recycling_ и в основном используется в мобильных приложениях для улучшения производительности.

Это важно, потмоу как **вы не можете полагаться на обработчиков событий внутри `v-template`**. Вместо этого вам необходимо использовать событие `itemTap`, которые содержит в себе индекс нажатого элемента и сам элемент списка.

```javascript
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

<<<<<<< HEAD
**Примечание:** если `v-for` используется на `<ListView>`, то в консоли будет выведено предупреждение и он будет преобразован в свойство `for`.
=======
**NOTE:** If a `v-for` is used on a `<ListView>`, a warning will be printed to the console, and it will be converted to the `for` property.
>>>>>>> 2065838ec35e93d89ec64b0c5a4b8f910d3670e6

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `for` | `String` | Предоставляет выражение для итерирования по элементам.<br/>Например: <ul><li><code>item in listOfItems</code></li><li><code>(item, index) in listOfItems</code></li><li><code>item in [1, 2, 3, 4, 5]</code></li></ul>
| `items` | `Array<any>` | Массив элементов, которые отображены в `<ListView>`.<br/>**Это свойство только для продвинутого использования. Используйте вместо него свойство `for`.**
| `separatorColor` | `Color` | Задает цвет линии разделителя. Установите его в значение `transparent` для удаления.

## События

| Имя | Описание |
|------|-------------|
| `itemTap`| Срабатывает тогда, когда нажат элемент в `<ListView>`. Для получения доступа к нажатому элементу используйте `event.item`.

## Методы

| Имя | Описание |
|------|-------------|
| `refresh()` | (Скоро) Заставляет `<ListView>` перезагрузить все его элементы.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.ListView`](https://developer.android.com/reference/android/widget/ListView.html) | [`UITableView`](https://developer.apple.com/documentation/uikit/uitableview)
