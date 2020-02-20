---
title: DockLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_
contributors: [lex111]
---

DockLayout — это макет, обеспечивающий механизм прикрепления дочерних элементов слева (`left`), справа (`right`), сверху (`top`), снизу (`bottom`) или центра макета. Для определения стороны прикрепления дочерного элемента, используйте его свойство `dock`. Для прикрепления элемента к центру DockLayout, он должен быть **последним дочерним элементом** DockLayout, а свойство `stretchLastChild` DockLayout должно быть установлено в `true`.

### Примеры

#### Стыковка по всем сторонам без прикрепления последнего дочернего элемента

```html
<DockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_no_stretch.svg" />

#### Прикрепление с обоих сторон с растяжением последнего дочернего элемента

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" backgroundColor="#1c6b48"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_stretch.svg" />

#### Несколько дочерних элементов на одной стороне

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left 1" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="left 2" dock="left" width="40" backgroundColor="#289062"/>
  <Label text="left 3" dock="left" width="40" backgroundColor="#1c6b48"/>
  <Label text="last child" backgroundColor="#43b883"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_multiple_on_same_side.svg" />

## Свойства

| Название | Тип | Описание |
|------|------|-------------|
`stretchLastChild` | `Boolean` | Включает/отключает растяжение последнего дочернего элемента для заполнения оставшегося пространства.

## Дополнительные свойства дочерних элементов

Когда элемент — прямой дочерний элемент DockLayout, доступны следующие
свойства:

| Название | Тип | Описание |
|------|------|-------------|
`dock` | `String` | Указывает, к какой стороне состыковать элемент. Возможные значения: `top`, `right`, `bottom`, `left`
