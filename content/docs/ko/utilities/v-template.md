---
title: v-template 컴포넌트
contributors: [qgp9]
---

`v-template` 컴포넌트는 템플릿으로 재사용될 수 있는 마크업을 정의하는데 사용됩니다.

이 것은 [ListView 컴포넌트](/ko/docs/elements/components/list-view) 에 의해 내부적으로 활용됩니다.

## Props

|이름   | 타입  | 설명 |
|------|------|-------------|
| `if` | `String` | 이 템플릿이 사용되는 컨디션(condition)
| `name` | `String` | 템플릿 이름. 생략되면 자동 생성됨.

# 고급 사용법 (Advanced usage)

이 문서의 나머지 부분은 하나 혹은 복수의 템플릿을 필요로 하는 자신의 컴포넌트를 만들기를 원하는 고금사용자를 위한 내용입니다.

`v-template` 는 템플릿 안에 위치할때 아무것도 렌더링하지 않습니다. 대신 [`TemplateBag`](https://github.com/nativescript-vue/nativescript-vue/blob/master/platform/nativescript/runtime/components/v-template.js#L36) 인스턴스인 `$templates` 프로퍼티를 부모 요소나 컴포넌트에 추가하고 자신을 사용가능한 템플릿으로 등록합니다.

### TemplateBag

`TemplateBag` 클래스는 여러 템플릿을 등록할때 유용하며 아이템과 각 템플릿에 제공되는 조건들에 기초하여 올바른 템플릿을 선택하기 위한 함수를 제공합니다.

템플릿들은 [`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) 인터페이스를 따르는 객체로 저장됩니다.

#### `selectorFn` 프로퍼티

The `selectorFn` property returns a function that accepts a single parameter which should be an item whose template should be selected. It will go through all the templates registered in the `TemplateBag` and return the first one where the `if` condition returns a truthy value, and if none of the templates match it will return `default`.

#### 가능한 메소드

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
