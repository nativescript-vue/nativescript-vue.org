---
title: v-template
contributors: [Spice-Z]
---

`<v-template>`コンポーネントはテンプレートとして再利用できるマークアップを定義します。

## Props

| Name | Type | Description |
|------|------|-------------|
| `if` | `String` | ｌ このテンプレートを使うかどうかの条件。
| `name` | `String` | テンプレートの名前、省かれた場合自動で生成される。

## 基本的な使い方

`<v-template>`コンポーネントは[ListView component](/en/docs/elements/components/list-view)の内部で要素をイテレートする際に使われます。

## Advanced usage

You can use `v-template` to implement custom components that require a template or multiple templates.

`v-template`はテンプレートの中に配置されたときは何も描写しません。代わりに、親要素に`$templates`プロパティを追加します。この`$templates`プロパティは[`TemplateBag` instance](https://github.com/nativescript-vue/nativescript-vue/blob/master/platform/nativescript/runtime/components/v-template.js#L33)です。

次に、`v-template`は親要素の持つ個別の`TemplateBag`インスタンスに自身を利用可能なテンプレートとして登録します。 Any existing 親要素に存在する全ての`TemplateBag`インスタンスは再利用されます

### `TemplateBag`クラス

T`TemplateBag`クラスは複数のテンプレートを登録し、テンプレートに渡された要素と条件にしたがって適切なものを選択します。

テンプレートは[`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)インターフェースに対応するオブジェクトとして保存されます。

#### `selectorFn`プロパティ

`selectorFn`は一つの引数を受け取る関数(single-parameter function)を返します。この引数には選択されたテンプレートの要素が入ります。

single-parameter functionは`TemplateBag`インスタンスに登録された全てのテンプレートを見て、`if`の条件にあった初めの要素ものを返します。一致するテンプレートがない場合は`default`を返します。

#### Available methods

| Method | Description |
|---|---|
| `registerTemplate(name: String, condition: String?, scopedFn: Function): void` | _主に内部で使われます。_<br/>Registers templates in the `TemplateBag` instance.<br/>`scopedFn`は[scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots)を描写する関数である必要があります。 |
| `getConditionFn(condition: String): Function` | _内部で使われます_<br/>与えられた条件を評価する関数を生成します。 |
| `getAvailable(): Array<String>` | 利用可能な[`KeyedTemplates`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)の配列を返します。 (テンプレートの名前の配列を返します) |
| `getKeyedTemplate(name: String): KeyedTemplate` | 指定された名前の[`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)を返します。|
| `getKeyedTemplates(): Array<KeyedTemplate>` | `TemplateBag`に登録されている全ての[`KeyedTemplates`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) の配列を返します。 |
| `patchTemplate(name: String, context: any, oldVnode: VNode?): View` | 既存の[`VNode`](https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM)に対し与えられた`context`を使ってパッチ処理を行います。`oldVnode`がない場合は指定されたテンプレートで新たなVueインスタンスを生成します。|
