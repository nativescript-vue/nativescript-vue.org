---
title: AbsoluteLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_
contributors: [alexhiroshi]
---

O container AbsoluteLayout é o container de layout mais simples do NativeScript. Ele usa coordenadas absolutas do topo e da esquerda do container para posicionar os filhos. O AbsoluteLayout não aplicará nenhum restrição de layout nos filhos e também não redimensionará em tempo de execução quando o seu tamanho mudar.

### Exemplos

#### Um layout de grid

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_grid.svg" />

#### Elementos sobrepostos

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
  <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_overlap.svg" />


## Propriedades

AbsoluteLayout não tem propriedades.

## Propriedades filhas adicionais

Quando um elemento é filho direto de um AbsoluteLayout, as seguintes propriedades obtêm um significado:

| nome | tipo | descrição |
|------|------|-------------|
| `top` | `Number` | Um valor representando a distância do topo do AbsoluteLayout pai
| `left` | `Number` | Um valor representando a distância da esquerda do AbsoluteLayout pai
