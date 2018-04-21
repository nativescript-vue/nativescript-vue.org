---
title: componente v-template
contributors: [alexhiroshi]
---

O componente `v-template` é usado para demarcar uma parte do código que pode ser reutilizada como um template.

Isso é utilizado internamente pelo [Componente ListView](/pt-BR/docs/elements/components/list-view).

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `if` | `String` | A condição para usar este template.
| `name` | `String` | O nome do template, se for omitido, ele será gerado automaticamente.

# Uso avançado

O restante desse documento é destinado para o usuários avançados que implementam seus próprios componentes que necessitam de um template ou vários templates.

`v-template` does not render anything when placed into the template, instead it adds a `$templates` property to the parent element or component, which is a [`TemplateBag`](https://github.com/nativescript-vue/nativescript-vue/blob/master/platform/nativescript/runtime/components/v-template.js#L36) instance, and then registers itself as an available template.

### TemplateBag

A classe `TemplateBag` é útil para registar vários templates e fornece uma função para selecionar o template correto baseado no item e nas condições fornecidas para cada template.

Os templates são armazenados como objetos conforme a interface [`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate).

#### A propriedade `selectorFn`

A propriedade `selectorFn` retorna uma função que aceita um parâmetro único que deve ser um item do qual o template deve ser selecionado. Ele passará ao longo de todos os templates registrados no `TemplateBag` e retornará o primeiro onde a condição `if` retornar um valor verdadeiro, e se nenhum template corresponder, retornará `default`.

#### Métodos disponíveis

##### registerTemplate(name: String, condition: String?, scopedFn: Function): void

O método é usado para registar templates na interface `TemplateBag`, é usado principalmente internamente. O parâmetro `scopedFn` é uma função de renderização de um [scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots)

##### getConditionFn(condition: String): Function

Esse método contrói uma função que avalia a condição data. O método é usado internamente.

##### getKeyedTemplate(name: String): [KeyedTemplate](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)

O método retorna o `KeyedTemplate` com o nome dado.

##### patchTemplate(name: String, context: any, oldVnode: VNode?): View

Esse método irá corrigir um `VNode` existente usando o `context` fornecido. Se nenhum `oldVnode` for fornecido, ele irá criar uma nova instância de View para o template informado.

##### getAvailable(): Array<String>

Retorna um array dos `KeyedTemplates` disponíveis (retorna um array com os nomes dos templates)

##### getKeyedTemplates(): Array<KeyedTemplate>

Retorna um array com todos os `KeyedTemplates` registrado no `TemplateBag`
