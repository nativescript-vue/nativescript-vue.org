---
title: クイックスタート
contributors: [Spice-Z]
---

もしNativeScript-Vueを扱う前にインストールと設定で煩わされたくないのなら、[NativeScript Playground](/en/docs/getting-started/playground-tutorial)がぴったりです。

ですがもし、[すでにあなたの開発環境をネイティブアプリの開発向けに準備している](/ja/docs/getting-started/installation)のなら、[vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)を使うことによって始めることができます:

**サポートしている機能**

-   `.vue` 単一ファイルコンポーネント
-   Vuex&mdash;状態管理 (必要ならば)
-   NativeScriptのテーマ
-   プリセットアプリケーション

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$
$ npm install
$ # もしくは
$ yarn install
$
$ tns run android --bundle
$ # もしくは
$ tns run ios --bundle
$
$ # 新しいHMRモードを、--bundle を --hmrに書き換えることによって試すことができます。
$ # ただ、ベータ版の機能だと気を留めておいてください。
```

この一連のコマンドは、システム上で以下のオペレーションを実行します。

1. 最新のVue CLIをインストールして、Vue CLI 2.xのテンプレートを`@vue/cli-init`アドオンを通してサポート
2. [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)を使ったプロジェクトの作成
3. 新しく作られたプロジェクトのディレクトリに移動
4. npmの依存ファイルをローカルインストール
5. プロジェクトをビルドして、指定したプラットフォームの任意の繋がれた実機かインストール済みのエミュレータで実行する。`--bundle` オプションは`.vue`ファイルをコンパイルして変更を監視するwebpack buildのトリガーとなります。
