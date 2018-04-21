---
title: GridLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_grid_layout_
contributors: [alexhiroshi]
---

`<GridLayout>` é um componenete de layout que organiza seus elementos filhos semelhante a uma tabela.

A grid consiste em linhas, colunas e células. Uma célula pode ocupar uma ou mais linhas e colunas. Pode conter múltiplos elementos filhos que podem ocupar múltiplas linhas e colunas, até uma sobrepor a outra.

Por padrão, o `<GridLayout>` tem uma coluna e uma linha. Você pode adicionar colunas e linhas configurando as propriedades `columns` e `rows`. Nessas propriedades, você precisa definir o número de colunas e linha, e a sua largura e altura. Você define o número de colunas e linhas, listando, respectivamente, suas larguras e alturas, separadas por vírgula.

Você pode definir um tamanho fixo para largura da coluna e a altura da linha, ou pode criá-los de maneira responsiva.

* **Um número absoluto:** Indica um tamanho fixo.
* **auto:** Deixa a coluna larga como o filho mais largo, ou deixa a linha alta como o filho mais alto.
* **\*:** Pega todo o espaço disponível depois de preencher todos os tamanhos automáticos e fixos das colunas ou linhas.

Veja [Propriedades](#propriedades) para mais informações.

### Exemplos

#### Layout de Grid com tamanho fixo

O exemplo sguinte cria um simples grid 2 por 2 com larguras de colunas fixas e altura de linhas.

```html
<GridLayout columns="115, 115" rows="115, 115">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout.svg" />

#### Layout de Grid com tamanho proporcional

O exemplo sguinte cria um grid com design responsivo, onde o espaço é alocado proporcionalmente aos elementos filhos.

```html
<GridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_star_sizing.svg" />

#### Layout de Grid com tamanho fixo e automático

```html
<GridLayout columns="80, auto" rows="80, 80" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_fixed_auto.svg" />

#### Layout de Grid com mistura de tamanho e células mescladas

O exemplo sguinte cria um grid complexo com design responsivo, configurações de largura e altura diferentes, e algumas células mescladas.

```html
<GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
  <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
  <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
  <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_complex.svg" />

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
`columns` | `String` | Um valor em texto representando as larguras das colunas delimitada por vírgula.<br/>Valores válidos: um número absoluto, `auto` ou `*`.<br/>Um número indica a largura absoluta da coluna. `auto` faz a coluna larga como o filho mais largo. `*` faz a coluna ocupar todo espaço disponível na horizontal. O espaço é proporcionalmente dividido com todas as colunas com asterisco. Você pode definir valores como `3*` e `5*` para indicar uma proporção de 3:5
`rows` | `String` |Um valor em texto representando as alturas das linhas delimitada por vírgula.<br/>Valores válidos: um número absoluto, `auto` ou `*`.<br/>Um número indica a altura absoluta da linha. `auto` faz a linha alta como o filho mais alto. `*` faz a linha ocupar todo espaço na vertical. O espaço é proporcionalmente dividido com todoas as linhas com asterisco. Você pode definir valores como `3*` e `5*` para indicar uma proporção de 3:5

## Propriedades filhas adicionais

Quando um elemento é filho direto de um GridLayout, você pode trabalhar com as seguintes propriedades adicionais:

| nome | tipo | descrição |
|------|------|-------------|
`row` | `Number` | Especifica a linha para este elemento. Combinado com uma propriedade `column`, especifica a coordenada da célula do elemento.<br/>A primeira linha é indicada por `0`.
`column` | `Number` | Especifica a coluna para o elemente. Combinado com uma propriedade `row`, especifica a coordenada da célula do elemento.<br/>A primeira coluna é indica por `0`.
`rowSpan` | `Number` | Especifica o número de linhas que o elemento ocupa.
`colSpan` | `Number` | Especifica o número de colunas que o elemento ocupa.
