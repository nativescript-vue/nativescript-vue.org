---
title: FlexboxLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
contributors: [lex111]
---

Контейнер FlexboxLayout — это неточная реализация [Css Flexbox Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

### Примеры

#### По умолчанию flex-макет

```html
<FlexboxLayout backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_stretch.svg" />

#### Колоночный flex-макет

```html
<FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_stretch.svg" />

#### Макет в одну строку с элементами, выровненными до flex-start

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_flex-start.svg" />

#### Макет в одну строку с произвольном порядком

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" order="2" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" order="3" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" order="1" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_custom_order.svg" />

#### Многострочная расстановка (Wrapping)

```html
<FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <Label text="first" width="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_wrap.svg" />

#### Колоночный макет в обратном порядке с различным alignSelf

```html
<FlexboxLayout flexDirection="column-reverse"
               justifyContent="space-around" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third\nflex-end" alignSelf="flex-end" width="70" height="70" backgroundColor="#289062"/>
  <Label text="fourth" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_reverse_space_around_align_self.svg" />

## Свойства

| Название | Тип | Описание |
|------|------|-------------|
`flexDirection` | `String` | Направление, в котором flex-элементы помещаются в flex-контейнере. Свойство `flexDirection` принимает 4 разных значения: `row` (такое же, как у тестового направления), `row-reverse` (противоположность к направлению текста), `column` (то же, что и строка, но сверху вниз), и `column-reverse` (то же самое, что и row-reverse сверху вниз). Значение по умолчанию - `row`.
`flexWrap` | `String` | Устанавливает, должны ли  flex-элементы принудительно располагаться на одной строке или могут быть на нескольких строк. Если задано несколько строк, то также определяется поперечная ось (cross-axis), которая определяет направление добавляемых новых строк. Свойство `flexWrap` принимает 3 разных значения: `nowrap` (одна строка, которая может вызвать переполнение контейнера), `wrap` (несколько строк, чьё направление определяется свойством flexDirection) и `wrap-reverse` (несколько строк, в противоположность направлению, заданному свойством flexDirection). По умолчанию - `nowrap`.
`justifyContent` | `String` |  Устанавливает выравнивание вдоль основной оси (main axis). Это помогает распределить дополнительное свободное место, оставшееся после того, как все flex-элементы в строке не являются flex-элементами или если flex-элементы достигли своего максимального размера. Это свойство также оказывает некоторый контроль над выравниванием элементов, когда они переполняют строку. Свойство justifyContent property принимает 5 разных значений: `flex-start` (элементы заполняются к началу строки), `flex-end` (элементы заполняются к концу строки), `center` (элементы центрируются вдоль строки), `space-between` (элементы равномерно заполняются по строке; первый элемент находится в начале строки, последний элемент в конце), и `space-around` (элементы равномерно заполняются по строке с равным расстоянием вокруг них). Значение по умолчанию - `flex-start`.
`alignItems` | `String` | Устанавливает, как flex-элементы располагаются поперечной оси (cross axis) на текущей строке. Вы можете думать об этом, как версия `justifyContent` для поперечной оси (перпендикулярно основной оси). Свойство `alignItems` принимает 5 разных значений: `flex-start` (отступ края cross-start элементов располагается в строке cross-start), `flex-end` (отступ края cross-end элементов располагается в строке cross-end), `center` (элементы выравниваются по центру по поперечной оси), `baseline` (элементы выравниваются по аналогии с выравниванием по базовой линии), `stretch` (растягиваются для заполнения, но всё ещё учитывают `min-width`/`max-width`). Значение по умолчанию - `stretch`.
`alignContent` | `String` | Устанавливает, как flex-элементы выравниваются в flex-контейнере по поперечной линии, аналогично тому, как  `justifyContent` выравнивает отдельные элементы внутри основной оси. Свойство `alignContent` принимает 6 разных значений: `flex-start` (строки располагаются к началу контейнера), `flex-end` (строки располагаются к концу контейнера), `center` (строки располагаются по центру контейнера), `space-between` (строки распределены равномерно; первая строка находится в начала контейнера, в то время как последняя - в конце), `space-around` (строки распределены равномерно с равным пространством между ними) и `stretch` (строки растягиваются, чтобы занять всё оставшиеся место). Значение по умолчанию - `stretch`. Это свойство не работает, когда flex-контейнер содержит только одну строку.

## Дополнительные свойства дочерних элементов

Когда этот элемент — прямой дочерний элемент FlexboxLayout, доступны следующие свойства:

| Название | Тип | Описание |
|------|------|-------------|
`order` | `Number` | Изменяет порядок сортировки элементов по умолчанию
`flexGrow` | `Number` | Значение без единиц измерения, которое служит пропорцией, указывающей, может ли flex-элемент расти, если это необходимо. Он определяет, какое количество свободного пространства внутри flex-контейнера должно заняться.
`flexShrink` | `Number` | Значение, указывающее "фактор сжатия flex-элементов" ("flex shrink factor"), который определяет, насколько flex-элемент будет уменьшаться относительно остальных flex-элементов в flex-контейнере, когда в строке недостаточно места. При опускании этого свойства, его значение устанавливается равным 1, а фактор сжатия flex-элементов умножается на базовый размер flex-элемента (flex basis) при распределении отрицательного пространства.
`alignSelf` | `String` | Устанавливает, как flex-элементы располагаются поперечной оси (cross axis) на текущей строке. Вы можете думать об этом, как версия `justifyContent` для поперечной оси (перпендикулярно основной оси). Свойство `alignItems` принимает 5 разных значений: `flex-start` (отступ края cross-start элементов располагается в строке cross-start), `flex-end` (отступ края cross-end элементов располагается в строке cross-end), `center` (элементы выравниваются по центру по поперечной оси), `baseline` (элементы выравниваются по аналогии с выравниванием по базовой линии), `stretch` (растягиваются для заполнения, но всё ещё учитывают `min-width`/`max-width`). Значение по умолчанию - `stretch`.
`flexWrapBefore` | `Boolean` | Логическое значение, контролирующее правила вывода элемента. Установка его в `true` заставит элемент "обёртываться" в новую строку. Значение по умолчанию `false` . (Это свойство не является частью официальной спецификации Flexbox.)
