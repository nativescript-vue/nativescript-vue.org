---
title: v-template
contributors: [tai-hatake]
---

`<v-template>`は、再利用可能なテンプレートを定義できます。

## 基本的な使い方

`<v-template>`は、[ListView](/ja/docs/elements/components/list-view)コンポーネントのリスト項目の反復処理などに使われます。

## より高度な使い方

`v-template`は、1つ以上のテンプレートを必要とするカスタムコンポーネントを実装できます。

`v-template`は、テンプレート下に配置されても何もレンダリングしません。
その代わり、親要素に`$templates`プロパティを追加します。
この`$templates`プロパティは、[`TemplateBag`](https://github.com/nativescript-vue/nativescript-vue/blob/master/platform/nativescript/runtime/components/v-template.js#L36)インスタンスです。

次に、`v-template`は、親要素のそれぞれのTemplateBagインスタンスで利用可能なテンプレートとして登録されます。
親要素の既存の`TemplateBag`インスタンスは、すべて再利用されます。

### `TemplateBag` クラス

`TemplateBag`クラスは、複数のテンプレートを登録し、各テンプレートに提供されたアイテムと条件に基づいて正しいテンプレートを選択できます。

テンプレートは、[`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)インターフェイスに準拠したオブジェクトとして保存されます。

### `selectorFn` プロパティ

`selectorFn`プロパティは、単一のパラメータを持つ関数を返します。このパラメータは、テンプレートに選択されているアイテムです。
`selectorFn`で返される関数は、`TemplateBag`インスタンスに登録されているすべてのテンプレートを確認し、if条件が満たされた最初のテンプレートを返します。一致するテンプレートがない場合、`default`を返します。

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `if` | `String` | このテンプレートを使用する条件。
| `name` | `String` | テンプレートの名称。省略時は自動生成されます。

## 利用可能なmethods

| Method | 説明 |
|---|---|
| `registerTemplate(name: String, condition: String?, scopedFn: Function): void` | _内部関数_<br/>`TemplateBag`インスタンスにテンプレートを登録します。<br/>`scopedFn`は、[scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots)の描画関数である必要があります。 |
| `getConditionFn(condition: String): Function` | _内部関数._<br/>指定された条件を評価する関数を作成します。|
| `getAvailable(): Array<String>` | 利用可能な[`KeyedTemplates`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)の配列を返します。 (テンプレート名の配列を返します。) |
| `getKeyedTemplate(name: String): KeyedTemplate` | 指定された[`KeyedTemplate`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)を返します。 |
| `getKeyedTemplates(): Array<KeyedTemplate>` | `TemplateBag`に登録されているすべての[`KeyedTemplates`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate)の配列を返します。 |
| `patchTemplate(name: String, context: any, oldVnode: VNode?): View` | 指定された`context`を使用して既存の[`VNode`](https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM)にパッチを適用します。`oldVnode`がない場合、指定されたテンプレートの新しいViewインスタンスを作成します。 |
