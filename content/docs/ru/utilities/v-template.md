---
title: v-template component
contributors: [rigor789]
---

The `v-template` component is used for defining markup that can be reused as a template.

It is utilized internally by the [ListView Component](/en/docs/elements/components/list-view).

## Props

| name | type | description |
|------|------|-------------|
| `if` | `String` | The condition for using this template.
| `name` | `String` | The name of the template, auto-generated if omitted.

# Advanced usage

The rest of this document is meant for advanced users implementing their own components that require a template or multiple templates.

`v-template` does not render anything when placed into the template, instead it adds a `$templates` property to the parent element or component, which is a [`TemplateBag`](https://github.com/nativescript-vue/nativescript-vue/blob/master/platform/nativescript/runtime/components/v-template.js#L36) instance, and then registers itself as an available template.

### TemplateBag

The `TemplateBag` class is useful for registering multiple templates, and provides a function for selecting the correct template based on the item and the conditions provided for each template.

Templates are stored as objects conforming to the [`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) interface.

#### The `selectorFn` property

The `selectorFn` property returns a function that accepts a single parameter which should be an item whose template should be selected. It will go through all the templates registered in the `TemplateBag` and return the first one where the `if` condition returns a truthy value, and if none of the templates match it will return `default`.

#### Available Methods

##### registerTemplate(name: String, condition: String?, scopedFn: Function): void

 This method is used to register templates into the `TemplateBag` instance, it is mainly used internally. The `scopedFn` should be a render function of a [scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots)
 
##### getConditionFn(condition: String): Function
 
 This method builds a function that evaluates the given condition. This methods is used internally.

##### getKeyedTemplate(name: String): [KeyedTemplate](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)
 
This method returns the `KeyedTemplate` with the given name.

##### patchTemplate(name: String, context: any, oldVnode: VNode?): View

This method will patch an existing `VNode` using the provided `context`. If no `oldVnode` is provided, it will create a new View instance for the given template.

##### getAvailable(): Array<String>

Returns an array of available `KeyedTemplates` (returns an array of template names)

##### getKeyedTemplates(): Array<KeyedTemplate>

Returns an array of all the `KeyedTemplates` registered in the `TemplateBag`
