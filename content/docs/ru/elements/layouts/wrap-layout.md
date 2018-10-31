---
title: WrapLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_wrap_layout_
contributors: [lex111]
---

Контейнер WrapLayout помещает свои дочерние элементы в строки или столбцы, основываясь на свойство ориентации, пока пространство не будет заполнено, а затем оборачивает их в новую строку или столбец.

### Примеры

#### WrapLayout по умолчанию

```html
<WrapLayout backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_horizontal.svg" />

#### Вертикальный WrapLayout

```html
<WrapLayout orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_vertical.svg" />

## Свойства

| Название | Тип | Описание |
|------|------|-------------|
`orientation` | `String` | Значение, указывающее направление потока. Если ориентация горизонтальная (`horizontal`), то элементы располагаются в столбцах. Если ориентация вертикальная (`vertical`), элементы располагаются в столбцах. Значение по умолчанию — `horizontal`.
`itemWidth` | `Number` | Ширина, используемая для измерения и расположения каждого дочернего элемента. Значение по умолчанию — `Number.NaN`, которое не ограничивает дочерние элементы.
`itemHeight` | `Number` | Высота, используемая для измерения и расположения каждого дочернего элемента. Значение по умолчанию — `Number.NaN`, которое не ограничивает дочерние элементы.


## Дополнительные свойства дочерних элементов

Дополнительных свойств для дочерних элементов нет.
