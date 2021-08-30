---
title: DockLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_
contributors: [alexhiroshi]
---

DockLayout é um layout que fornece um mecanismo de encaixe para elementos filhos para `left`, `right`, `top`, `bottom` ou no `centro` do layout. Para definir o lado do encaixe do elemento filho, use a propriedade `dock`. Para encaixar um elemento filho no centro do DockLayout, o **último filho** do DockLayout e a propriedade `stretchLastChild` do DockLayout devem ser `true`.

### Exemplos

#### Encaixe para todos os lados sem alongamento do último filho

```html
<DockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_no_stretch.svg" />

#### Encaixe para todos os lados com alongamento do último filho

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" backgroundColor="#1c6b48"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_stretch.svg" />

#### Múltiplos filhos do mesmo lado

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left 1" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="left 2" dock="left" width="40" backgroundColor="#289062"/>
  <Label text="left 3" dock="left" width="40" backgroundColor="#1c6b48"/>
  <Label text="last child" backgroundColor="#43b883"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_multiple_on_same_side.svg" />

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
`stretchLastChild` | `Boolean` | Ativa/Desativa o alongamento do último filho para ajustar o espaço restante.

## Propriedades filhas adicionais

Quando um elemento é filho direto de um DockLayout, as seguintes propriedades obtêm um significado:

| nome | tipo | descrição |
|------|------|-------------|
`dock` | `String` | Especifica qual lado para elemento dock. Valores podem ser: `top`, `right`, `bottom`, `left`
