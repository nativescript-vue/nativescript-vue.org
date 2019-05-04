---
title: NativeScriptのプラグインを使う
contributors: [Spice-Z]
---

プラグインは[どんなNativeScriptのアプリでも](https://docs.nativescript.org/plugins/plugins)機能しますが、_UI_のプラグインがどのようにVueで機能するのか気になることでしょう。

UIのプラグインは、AngularのアプリでNativeScriptのUIプラグインを用いていたのとほとんど同じように機能します。

## 例えば: nativescript-gradient

どのように[nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient)を使うことができるか見てみましょう。こちらの[listview sample](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js)でも使い方を確認できます。

### NativeScript CLIを使ってプラグインをインストールする

[NativeScriptの開発環境のセットアップ](/ja/docs/getting-started/installation)を終えてから、次のコマンドを実行して下さい:

```shell
$ npm install --save nativescript-gradient
```

> **注意:** もしプラグインがすぐに動かない場合、プラットフォームのフォルダを消去してプロジェクトをクリーンする必要があります:

```shell
$ rm -rf platforms
```

### アプリにプラグインを登録する

アプリのエントリーファイル(`app.js`や`main.js`など)を開き、次の行をトップに追加して下さい:

```JavaScript
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

ここでは`Vue`インスタンスにプラグインを読み込んで登録しています。`registerElement`関数は第一引数に`<Element>`の名前を、第二引数にプラグインを返す関数を要求します。コードの中では、呼び出そうとするエレメントの名前を正確に渡してください。プラグインの名前はnpmのパッケージ名のように正確に渡してください。

### アプリでプラグインを使う

```HTML
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
