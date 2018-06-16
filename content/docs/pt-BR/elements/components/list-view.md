---
title: ListView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [alexhiroshi]
---

O componente ListView exibe uma lista de rolagem vertical. Você pode definir diferentes `v-template` para especificar como cada item na lista aparecerá.

---

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <Label :text="item.text" />
  </v-template>

  <v-template if="$odd">
    <Label :text="item.text" color="red" />
  </v-template>
</ListView>
```

No exemplo acima, o segundo template será usado se o index do item for ímpar.
Por conveniência, você pode usar os helpers `$index`, `$even` e `$odd`, mas conforme necessário, você pode usar qualquer expressão javascript válido para a condição `if` dos `v-template`.

Para aprender mais sobre o componente `v-template`, veja a [documentação do `v-template`](/pt-BR/docs/utilities/v-template).

O ListView não percorre os itens como é esperado usando um loop [`v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for). Em vez disso, ele só cria as views necessárias para mostrar os itens visíveis na tela, e é normalmente usado em aplicativos móveis para melhorar a performance. Isso é importante porque você não pode confiar nos eventos dentro do  `v-template`, você deve usar o evento `itemTap` que contém o index do item tocado, assim como o item real da lista.

```js
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

[> screenshots for=ListView <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `for` | `String` | Expressão para percorrer o itens, exemplo:<br>- `item in listOfItems`<br>- `(item, index) in listOfItems`<br>- `item in [1, 2, 3, 4, 5]`
| `items` | `Array<any>` | Um array de itens para mostrar na ListView. **Nota**: Essa propriedade é apenas para uso avançado, recomendamos que use a propriedade `for` na maioria dos casos.
| `separatorColor` | `Color` | Define a cor da linha de separação. Defina `transparent` para removê-la.

## Eventos

| nome | descrição |
|------|-------------|
| `itemTap`| Emitido quando um item do ListView é tocado. Para acessar o item tocado, use `event.item`.

## Componente Nativo
| Android | iOS |
|---------|-----|
| android.widget.ListView | UITableView
