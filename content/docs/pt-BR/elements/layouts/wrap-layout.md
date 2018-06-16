---
title: WrapLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_wrap_layout_
contributors: [alexhiroshi]
---

O container WrapLayout posiciona os filhos em linhas ou colunas, baseado na propriedade orientation até o espaço ser preenchido, e então e ele os coloca em uma nova linha ou coluna.

### Exemplos

#### WrapLayout padrão

```html
<WrapLayout backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_horizontal.svg" />

#### WrapLayout Vertical

```html
<WrapLayout orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_vertical.svg" />

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
`orientation` | `String` | Valor indicando a direção do fluxo. Se o valor de orientation é `horizontal`, os itens são organizados em linhas. Se o valor de orientation é `vertical`, os itens são organizados em colunas. O valor padrão é `horizontal`.
`itemWidth` | `Number` | A largura usada para medir e desenhar cada filho. Valor padrão é `Number.NaN`, que não restrige aos filhos.
`itemHeight` | `Number` | A altura usado para medir e desenhar cada filho. Valor padrão é `Number.NaN`, que não restrige aos filhos.


## Propriedades filhas adicionais

Não existem propriedades adicionais para elementos filhos.
