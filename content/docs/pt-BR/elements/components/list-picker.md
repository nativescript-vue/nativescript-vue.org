---
title: ListPicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
contributors: [alexhiroshi]
---

`<ListPicker>` é um componente de UI que permite o usuário selecionar um valor de um intervalo pré-configurado.

---

```html
<ListPicker :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="selectedIndexChanged" />
```

`<ListPicker>` fornece two-way data binding usando `v-model`.

```html
<ListPicker :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=ListPicker <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `items` | `Array<String>` | Obtém ou define os itens exibidos como opções no seletor de lista.
| `selectedIndex` | `Number` | Obtém ou define o index do item atualmente selecionado.

## Eventos

| nome | descrição |
|------|-------------|
| `selectedIndexChange`| Emitido quando a opção atualmente selecionada (index) é alterado.

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`android.widget.NumberPicker`](https://developer.android.com/reference/android/widget/NumberPicker.html) | [`UIPickerView`](https://developer.apple.com/documentation/uikit/uipickerview)
