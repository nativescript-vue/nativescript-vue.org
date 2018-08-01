---
title: v-template
contributors: [ianaya89]
---

El componente `<v-template>` permite definir una plantilla reutilizable con componentes y/o contenido.

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `if` | `String` | La condición mediante la cual se usará el *template*.
| `name` | `String` | El nombre del *template* (si no es especificado, se autogenera).

## Uso básico

El componente `<v-template>` es utilizado internamente por el componente [ListView](/es/docs/elements/components/list-view) para iterar los elementos de la lista.

## Uso avanzado

Puedes usar el componente `v-template` para implementar componentes perzonalizados que requieran una o múltiples plantillas.

`v-template` no renderiza nada cuando es colocado dentro en un elemento. En cambio, lo que hace es agregar una propiedad llamada `$templates` al elemento padre. Esta propiedad `$templates` es una instancia de [`TemplateBag`](https://github.com/nativescript-vue/nativescript-vue/blob/master/platform/nativescript/runtime/components/v-template.js#L36).

Luego, el componente `v-template` se registra a si mismo como un *template* disponible dentro de la instancia de `TemplateBag` del componente padre correspondiente. Cualquier instancia existente de `TemplateBag` en el elemento padre es reutilizada.

### La clase `TemplateBag`

La clase `TemplateBag` permite registrar multiples *templates* y seleccionar el indicado basado en el elemento y la condición de cada *template*.

Los *templates* son almacenados como objetos, conforme a lo que indica la interfaz [`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate).

#### La propiedad `selectorFn`

La propiedad `selectorFn` retorna una función que acepta una solo parametro. Este parametro representa al item cuyo template es seleccionado.

Lo que hace esta función es recorrer todos los *templates* registrados en la instancia `TemplateBag` y delvolver el primero que cumple con la condición `if` especificada. En caso de no encontrar una coincidencia, devuelve `default`.

#### Métodos disponibles

| Método | Descripción |
|---|---|
| `registerTemplate(name: String, condition: String?, scopedFn: Function): void` | _Mayormente usado de forma interna._<br/>Registra un template en la instancia `TemplateBag`.<br/>El parametro `scopedFn` debe ser una función *render* de un [*scoped slot*](https://vuejs.org/v2/guide/components.html#Scoped-Slots) |
| `getConditionFn(condition: String): Function` | _Usado de forma interna._<br/>Construye una función que evalua la condición dada. |
| `getAvailable(): Array<String>` | Retorna una coleccion de los [`KeyedTemplates`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) disponibles. (Devuelve un arreglo con los nombres de los templates) |
| `getKeyedTemplate(name: String): KeyedTemplate` | Retorna el [`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) con el nombre dado. |
| `getKeyedTemplates(): Array<KeyedTemplate>` | Retorna una colección de todos los [`KeyedTemplates`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) registrados en la instancia `TemplateBag`. |
| `patchTemplate(name: String, context: any, oldVnode: VNode?): View` | Emparcha un [`VNode`](https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM) existente, usando el `context` dado. Si no se provee un `oldVnode`, se crea una nueva instancia de `View` para el template especificado. |
