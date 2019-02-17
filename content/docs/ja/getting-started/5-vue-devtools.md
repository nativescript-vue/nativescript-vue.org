---
title: Vue DevToolsの使用
contributors: [Spice-Z]
outdated: false
---

独立したバージョンのVue DevToolsを用いてNativeScript-Vueのアプリをデバッグすることができます。

統合を簡単にするためには、アプリとVue DevToolsの連携を助けてくれる[`nativescript-vue-devtools`](https://github.com/nativescript-vue/nativescript-vue-devtools)プラグインを使用できます。

## ステップ1: 依存ファイルのインストール

以下のコマンドを実行してください:

```shell
$ cd <project-folder>
$ npm install --save @vue/devtools@beta nativescript-toast nativescript-socket.io nativescript-vue-devtools
```

## (オプション) ステップ2: Vue DevToolsのグローバルインストール

Vue DevToolsへのアクセスを簡単にするために、パッケージをグローバルにインストールすることもできます。

以下のコマンドを実行してください:

```shell
$ npm install -g @vue/devtools@beta
```

インストール終了後、開発に使用している機械のどこからでも`vue-devtools`コマンドを実行することができます。

## ステップ3: `nativescript-vue-devtools`プラグインをアプリにインストールする

アプリとVue DevToolsを連携するため、`main.js`を修正する必要があります。

ソースコードの中で、`nativescript-vue-devtools`をインポートし、`Vue.use()`でNativeScript-Vueに知らせてください。

```JavaScript
import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools)
```

もしエミュレータの代わりに実機を使用している場合、`host`オプション実機？のIPアドレスを指すように設定してください。 そうしなければ、実機でホスト機器に接続できません。

```JavaScript
Vue.use(VueDevtools, { host: '192.168.1.42' })
```

## ステップ4: Vue DevToolsの起動

Vue DevToolsを立ち上げるために以下のコマンドを実行してください:

```shell
$ # if installed globally
$ vue-devtools
$ # or
$ npx vue-devtools
```

## ステップ5: アプリをビルドし直して起動する

以下のコマンドを実行してください:

```shell
$ rm -rf platforms
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

機器とアプリを正しく設定しているのなら、Vue DevToolsのコンポーネントツリーの中にいくつかコンポーネントが表示されているはすです。