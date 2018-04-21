---
title: FlexboxLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
contributors: [alexhiroshi]
---

O container FlexboxLayout não é uma implementação exata do [Layout Css Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

### Exemplos

#### Flex layout padrão

```html
<FlexboxLayout backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_stretch.svg" />

#### Layout de coluna flex

```html
<FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_stretch.svg" />

#### Layout de linha com itens alinhados no início

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_flex-start.svg" />

#### Layout de linhas com ordem personalizada

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" order="2" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" order="3" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" order="1" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_custom_order.svg" />

#### Wrapping

```html
<FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <Label text="first" width="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_wrap.svg" />

#### Coluna invertida, com diferente alignSelf

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

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
`flexDirection` | `String` | A direção em que os itens são colocados no container flex. A propriedade `flexDirection` aceita 4 valores diferentes: `row` (igual a direção do texto), `row-reverse` (oposto a direção do texto), `column` (como o row, mas de cima para baixo), e `column-reverse` (como a linha reversa de cima para baixo). O valor padrão é `row`.
`flexWrap` | `String` | Define se os itens flex são forçados para ficar em uma única linha ou podem ficar em múltiplas linhas. Se definir para múltiplas linhas, também irá definir o cross-axis que determina a direção em que as novas linhas são empilhadas. A propriedade `flexWrap` aceita 3 valores diferentes: `nowrap` (linha única que pode causar o transbordamento do container), `wrap` (múltiplas linhas, a direção é definida por flexDirection), e `wrap-reverse` (múltiplas linhas, oposto a direção definida por flexDirection). O valor padrão é `nowrap`.
`justifyContent` | `String` | Sets the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line. A propriedade justifyContent aceita 5 valores diferentes: `flex-start` (items are packed toward the start line), `flex-end` (items are packed toward to end line), `center` (items are centered along the line), `space-between` (items are evenly distributed in the line; first item is on the start line, last item on the end line), and `space-around` (items are evenly distributed in the line with equal space around them). O valor padrão é `flex-start`.
`alignItems` | `String` | Define como os flex itens são colocados ao longo do cross-axis na linha atual. Você pode pensar nisso como a versão `justifyContent` para o cross-axis (perpendicular ao main-axis). A propriedade `alignItems` aceita 5 valores diferentes: `flex-start` (cross-start margin edge of the items is placed on the cross-start line), `flex-end` (cross-end margin edge of the items is placed on the cross-end line), `center` (items are centered in the cross-axis), `baseline` (items are aligned such as their baselines align), `stretch` (stretch to fill the container but still respect `min-width`/`max-width`). O valor padrão é `stretch`.
`alignContent` | `String` | Define como os flex itens são alinhados no container flex no cross-axis. A propriedade `alignContent` aceita 6 valores diferentes: `flex-start` (lines packed to the start of the container), `flex-end` (lines packed to the end of the container), `center` (lines packed to the center of the container), `space-between` (linhas uniformemente distribuidas; a primeira linha no início do container enquanto a última no final), `space-around` (linhas uniformemente distribuidas com espaços iguais entre eles), e `stretch` (linhas que esticam para ocupar o espaço restante). O valor padrão é `stretch`. Essa propriedade não tem efeito quando o container flex tem uma única linha.

## Propriedades filhas adicionais

Quando um elemento é filho direto de um AbsoluteLayout, as seguintes propriedades obtêm um significado:

| nome | tipo | descrição |
|------|------|-------------|
`order` | `Number` | Muda a ordem padrão dos itens flex
`flexGrow` | `Number` | Unitless value that serves as a proportion indicating whether the flex item is able to grow if necessary. It dictates what amount of the available space inside the flex container the item should take up.
`flexShrink` | `Number` | A value indicating the "flex shrink factor", which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when there is not enough space on the row. When omitted, it is set to 1 and the flex shrink factor is multiplied by the flex basis when distributing negative space.
`alignSelf` | `String` | A value that overrides the `alignItems` value for specific flex items. This property accepts the same 5 values as `alignItems`: `flex-start` (cross-start margin edge of the item is placed on the cross-start line), `flex-end` (cross-end margin edge of the item is placed on the cross-end line), `center` (item is centered in the cross-axis), `baseline` (items are aligned such as their baselines are aligned), and `stretch` (stretch to fill the container but still respect `min-width`/`max-width`). O valor padrão é `stretch`.
`flexWrapBefore` | `Boolean` | A boolean value controlling item wrapping. Setting it to `true` will force the item to wrap onto a new line. O valor padrão é `false`. (Essa propriedade não faz parte da especificação ofical do flexbox.)
