---
title: SegmentedBar
apiRef: http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html
contributors: [alexhiroshi]
---

O componente SegementedBar oferece uma maneira simples de mostrar uma coleção de abas para seleção.

---

```html
<SegmentedBar :items="listOfItems" selectedIndex="0"
    @selectedIndexChanged="onSelectedIndexChange" />
```

**Nota**: Esse componente suporta two-way data binding usando `v-model`:

```html
<SegmentedBar :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=SegmentedBar <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `items` | `Array<SegmentedBarItem>` | Uma lista de itens para mostrar na barra segmentada.
| `selectedIndex` | `Number` | O index do item selecionado.
| `selectedBackgroundColor` | `Color` | Define a cor de fundo do item selecionado. Para definir a cor de fundo da barra inteira, use `backgroundColor`.

## Eventos

| nome | descrição |
|------|-------------|
| `selectedIndexChanged`| Emitido quando um item da barra segmentada é tocado

## Componente Nativo
| Android | iOS |
|---------|-----|
| android.widget.TabHost | UISegmentedControl
