---
title: v-template
contributors: [nuochong]
---

该 `<v-template>` 组件允许您定义可以作为模板重用的标记。

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `if` | `String` | 使用此模板的条件。
| `name` | `String` | 模板的名称，如果省略则自动生成。

## 基本用法

该 `<v-template>` 组件由内部使用的 [ListView组件](/en/docs/elements/components/list-view) 遍历其列表项。

## 高级用法

您可以使用 `v-template` 来实现需要模板或多个模板的自定义组件。

`v-template` 放置在模板中时不会渲染任何内容。相反，它向父元素添加了 `$templates` 属性。 `$templates` 属性是一个 [`TemplateBag` 实例](https://github.com/nativescript-vue/nativescript-vue/blob/master/platform/nativescript/runtime/components/v-template.js#L36)。

接下来， `v-template` 将自身注册为父元素 `TemplateBag` 相应实例中的可用模板。 父元素上的任何现有 `TemplateBag` 实例都将被重用。

###  `TemplateBag` 类

 `TemplateBag` 类允许注册多个模板，并根据项目和为每个模板提供的条件选择正确的模板。

模板存储为符合 [`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) 接口的对象。

####  `selectorFn` 属性

 `selectorFn` 属性返回一个接受单个参数的函数。此参数是其模板已选中的项目。

单参数函数遍历 `TemplateBag` 实例中注册的所有模板，并返回满足 `if` 条件的第一个模板。如果没有模板匹配，则返回 `default`。

#### 可用方法

| 方法 | 描述 |
|---|---|
| `registerTemplate(name: String, condition: String?, scopedFn: Function): void` | 主要用于内部。<br/>在 `TemplateBag` 实例中注册模板。<br/>这个 `scopedFn` 应该是一个渲染的功能 [作用域插槽](https://vuejs.org/v2/guide/components.html#Scoped-Slots) |
| `getConditionFn(condition: String): Function` | 在内部使用<br/>构建一个评估给定条件的函数。 |
| `getAvailable(): Array<String>` | 返回可用的数组 [`KeyedTemplates`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)。（返回模板名称数组。） |
| `getKeyedTemplate(name: String): KeyedTemplate` | 返回带有指定名称的 [`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) 。 |
| `getKeyedTemplates(): Array<KeyedTemplate>` | 返回所有 [`KeyedTemplates`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) 注册的数组 `TemplateBag`。 |
| `patchTemplate(name: String, context: any, oldVnode: VNode?): View` | 使用提供的上下文修补现有 [`VNode`](https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM) `context`。如果没有提供 `oldVnode` ，则为指定的模板创建新的View实例。 |
