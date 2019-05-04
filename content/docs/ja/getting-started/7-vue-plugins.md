---
title: Vueのプラグインを使う
contributors: [Spice-Z]
---

このページではNativeScript-Vueで動く、現在サポートしているVueのプラグインについての概要説明します。

* [Vue Router](#vue-router)
* [Vuex](#vuex)

## Vue Router

> 現在、Vue Routerとの統合は**サポートされていません**。問題が解決するまで、[手動でのルーティング](/en/docs/routing/manual-routing)を行ってください。

## Vuex

Vuex は Vue.js アプリケーションのための 状態管理パターン + ライブラリです。It serves as a store for all the components in an app and implements rules to ensure that state is mutated in a predictable fashion.
これは予測可能な方法によってのみ状態の変異を行うというルールを保証し、アプリケーション内の全てのコンポーネントのための集中型のストアとして機能します。

### プラグインをインストールする

普段Vue.jsのアプリでするように、Vuexをnpmでインストールしましょう。例えばこんな感じです:

```shell
$ npm install --save vuex
```

最新のVuexのバージョンが`package.json`に追加されます。

### プラグインをインポートする

アプリのエントリーファイル(`app.js`や`main.js`など)を開いて、トップに以下のコードを追加してください:

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```

これで、通常のウェブアプリで使っていたように、モバイルアプリの状態管理にVuexが使えるようになりました。

### 使い方: ストアの作成

状態を保存してVuexのAPIを使うために、新たな定数を作成刷る必要があります。アプリのエントリーファイル中のVueインスタンスの生成後か、他のフォルダ(例えば、`/store`)で行うことができます。
以下の例では、シンプルなストアの定数にカウンターの状態とそのミューテーションが含まれています:

```js
const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
})
```

### 使い方: ストアを使う

生成したストアを呼ぶことで、状態を管理できます。以下の例では、アプリは'+'と '-'ボタンが押されたことを追跡します。状態自体を変化させず、値を変化させるためにはミューテーションを呼ぶことに注意してください。

```js
new Vue({
  computed: {
    count(){
      return store.state.count
    }
  },

  template: `
    <Page>
      <ScrollView>
        <StackLayout>
          <Button @tap="increment" text="+" />
          <Button @tap="decrement" text="-" />
          <Label :text="count" />
        </StackLayout>
      </ScrollView>
    </Page>
  `,

  methods: {
    increment() {
      store.commit('increment')
    },
    decrement() {
      store.commit('decrement')
    }
  }
}).$start()
```

Vuexについてより詳しく知りたい場合、[the Vuex documentation](https://vuex.vuejs.org)をご覧ください。

For more examples about how to manage the elements of Vuexの要素を管理する方法をもっとしりたいなら、 NativeScript-Vue Groceries サンプルの[`/store`フォルダ](https://github.com/tralves/groceries-ns-vue/tree/master/app/store/)を見てみてください。
