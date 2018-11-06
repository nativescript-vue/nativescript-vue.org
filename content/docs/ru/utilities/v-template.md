---
title: Компонент v-template
contributors: [sn0wil]
---

Компонент `v-template` используется для определения разметки, которая может быть переиспользована как шаблон.

Он используется внутри [Компонента ListView](/ru/docs/elements/components/list-view).

## Свойства

| имя | тип | описание |
|------|------|-------------|
| `if` | `String` | Условие для использования этого шаблона.
| `name` | `String` | Имя шаблона, которое будет автоматически сгенерировано или опущено.

# Продвинутое использование

Остальная часть этого документа предназначена для продвинутых пользователей, реализующих свои собственные компоненты, для которых требуется шаблон или несколько шаблонов.

`v-template` ничего не отображает при размещении в шаблоне, вместо этого он добавляет свойство `$templates` к родительскому элементу или компоненту, который является [`TemplateBag`](https://github.com/nativescript-vue/nativescript-vue/blob/master/platform/nativescript/runtime/components/v-template.js#L36), а затем регистрируется как доступный шаблон.

### TemplateBag

Класс `TemplateBag` полезен для регистрации нескольких шаблонов и предоставляет функцию для выбора правильного шаблона на основе элемента и условий, предоставляемых для каждого шаблона.

Шаблоны хранятся как объекты, соответствующие интерфейсу [`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate).

#### Свойство `selectorFn`

Свойство `selectorFn` возвращает функцию, которая принимает единственный параметр, который должен быть элементом, шаблон которого должен быть выбран. Он пройдет через все шаблоны, зарегистрированные в `TemplateBag`, и вернет первый, где условие `if` возвращает истинное значение, и если ни один из шаблонов не соответствует ему, он вернет `default`.

#### Доступные метода

##### registerTemplate(name: String, condition: String?, scopedFn: Function): void

Этот метод используется для регистрации шаблонов в сущности `TemplateBag`. `scopedFn` должен быть функцией ренедера [слота с ограниченной областью видимости](https://ru.vuejs.org/v2/guide/components-slots.html#%D0%A1%D0%BB%D0%BE%D1%82%D1%8B-%D1%81-%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%D1%8E-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8)
 
##### getConditionFn(condition: String): Function
 
Этот метод строит функцию, которая оценивает данное условие. Эти методы используются внутренне.

##### getKeyedTemplate(name: String): [KeyedTemplate](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)
 
Этот метод возвращает `KeyedTemplate` с заданным именем.

##### patchTemplate(name: String, context: any, oldVnode: VNode?): View

Этот метод будет исправлять существующий `VNode`, используя предоставленный `context`. Если `oldVnode` не предоставлен, он создаст новый экземпляр View для данного шаблона.

##### getAvailable(): Array<String>

Возвращает массив доступных `KeyedTemplates` (возвращает массив имен шаблонов).

##### getKeyedTemplates(): Array<KeyedTemplate>

Возвращает массив всех `KeyedTemplates`, зарегистрированных в` TemplateBag`
