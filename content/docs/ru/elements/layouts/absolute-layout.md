---
title: AbsoluteLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_
contributors: [lex111]
---

Контейнер AbsoluteLayout - это самый простой контейнер слоя в NativeScript. Он использует абсолютные верхние левые координаты для расположения своих дочерних элементов. AbsoluteLayout не будет применять ограничения слоя на своих дочерних элементах и не будет изменять их размер во время выполнения при изменении их размеров.

### Примеры

#### Слой, похожий на сетку

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_grid.svg" />

#### Перекрывающиеся элементы

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
  <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_overlap.svg" />


## Свойства

AbsoluteLayout не имеет свойств.

## Дополнительные свойства дочерних элементов

Когда элемент - прямой дочерний элемент AbsoluteLayout, следующие
свойства приобретают следующее значение:

| название | тип | описание |
|------|------|-------------|
| `top` | `Number` | Значение, представляющее расстояние от верхней стороны родительского AbsoluteLayout
| `left` | `Number` | Значение, представляющее расстояние с левой стороны of the parent AbsoluteLayout
