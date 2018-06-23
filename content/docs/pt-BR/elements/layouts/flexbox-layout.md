---
title: FlexboxLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
contributors: [alexhiroshi, WesleiRamos]
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
`justifyContent` | `String` | Define o alinhamento ao longo do eixo principal. Ajuda a distribuir o espaço livre extra restante quando todos os itens flexiveis em uma linha estão inflexiveis ou já atingiram seu tamanho máximo. Também exerce algum controle sobre o alinhamento dos itens quando eles transbordam a linha. A propriedade `justifyContent` aceita 5 valores diferentes: `flex-start` (os itens serão centralizados ao longo da linha), `space-between` (os itens são distrbuidos na linha de maneira uniforme; o primeiro item ficará no começo da linha, o ultimo no final da linhaa), e `space-around` (os itens são distribuidos de forma uniforme na linha com espaços iguais entre eles). O valor padrão é `flex-start`.
`alignItems` | `String` | Define como os flex itens são colocados ao longo do cross-axis na linha atual. Você pode pensar nisso como a versão `justifyContent` para o cross-axis (perpendicular ao main-axis). A propriedade `alignItems` aceita 5 valores diferentes: `flex-start` (cross-start margin edge of the items is placed on the cross-start line), `flex-end` (cross-end margin edge of the items is placed on the cross-end line), `center` (items are centered in the cross-axis), `baseline` (items are aligned such as their baselines align), `stretch` (stretch to fill the container but still respect `min-width`/`max-width`). O valor padrão é `stretch`.
`alignContent` | `String` | Define como os flex itens são alinhados no container flex no cross-axis. A propriedade `alignContent` aceita 6 valores diferentes: `flex-start` (lines packed to the start of the container), `flex-end` (lines packed to the end of the container), `center` (lines packed to the center of the container), `space-between` (linhas uniformemente distribuidas; a primeira linha no início do container enquanto a última no final), `space-around` (linhas uniformemente distribuidas com espaços iguais entre eles), e `stretch` (linhas que esticam para ocupar o espaço restante). O valor padrão é `stretch`. Essa propriedade não tem efeito quando o container flex tem uma única linha.

## Propriedades filhas adicionais

Quando um elemento é filho direto de um AbsoluteLayout, as seguintes propriedades obtêm um significado:

| nome | tipo | descrição |
|------|------|-------------|
`order` | `Number` | Muda a ordem padrão dos itens flex
`flexGrow` | `Number` | Valor sem unidade que serve como uma proporção indicando se o item flexível é capaz de crescer se necessário. Determina a quantidade de espaço disponível dentro do contêiner flexível o item pode ocupar.
`flexShrink` | `Number` | Valor que indica que o "fator de contração flexível", o qual determina o quanto o item flexível diminuirá em relação aos outros itens flexíveis no contêiner quando não houver espaço suficiente na linha. Quando omitido, é definido como 1 e o fator de contração é multiplicado pela base flexível ao distribuir o espaço negativo.
`alignSelf` | `String` | Um valor que sobrepõe o valor de `alignItems` para itens flexíveis especificos. Esta propriedade aceita os mesmos 5 valores como `alignItems`: `flex-start` (cross-start margin edge of the item is placed on the cross-start line), `flex-end` (cross-end margin edge of the item is placed on the cross-end line), `center` (item is centered in the cross-axis), `baseline` (items are aligned such as their baselines are aligned), and `stretch` (stretch to fill the container but still respect `min-width`/`max-width`). O valor padrão é `stretch`.
`flexWrapBefore` | `Boolean` | Valor booleano que controla o agrupamento de itens. Definindo como `true` forçará o item a agrupar em uma nova linha. O valor padrão é `false`. (Essa propriedade não faz parte da especificação ofical do flexbox.)