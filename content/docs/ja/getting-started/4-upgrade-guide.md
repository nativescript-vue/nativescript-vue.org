---
title: 更新のガイド
contributors: [Spice-Z]
outdated: false
---

> 更新にかかる時間: **10-20分**.

INativeScript-VueのアプリをVue-CLIの1.3.1バージョンのテンプレートで作成しているのなら、今こそ新しい2.0バージョンへ更新する時です。このガイドが役に立つでしょう。

## 更新の概要

新しいテンプレートは異なるフォルダ構成です:

![New folder structure](/screenshots/old-new-folder-structure.png)

単純化した更新の過程は以下を含みます:

1. 更新したテンプレートから新しいプロジェクトを作成する。
2. 古いアプリから新しいアプリへファイルをコピーする。
3. ファイルを組み換えて、いくつかファイルを追加する。
  
## ステップ1: 新しいアプリの作成

新しいアプリを作るためにVue-CLIテンプレートを使います。 古いバージョンで使えていた事前にインストールしたコマンド仕様できることを確かめてください。例えば、 もし初めにCLIでVuexをインストールしていたのなら、インストールを今一度してください。

Vue-CLIテンプレートから新しいプロジェクトを作成するために以下のコマンドを実行してください。

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

## ステップ2: `App_Resources`を入れ替える

初めに、古いアプリの`./template/app/`にある`App_Resources`フォルダをコピーして下さい。次に、新しいアプリの`app`フォルダへそれを貼り付けて下さい。新しい`App_Resources`フォルダが置き換わっていることを確認して下さい。

## ステップ3: `src`フォルダと`app`フォルダを結合する

古いアプリの`src`内の全てのフォルダをコピーして、新しいアプリのフォルダの中へ貼り付けてください。

もしカスタムフォントを使っているなら、`src/assets/fonts`フォルダの中身を`app/fonts`へ移動させてください。これで、NativeScriptがカスタムフォントを自動的にロードすることになります。

## ステップ4: `main.js`の編集

`main.js`のVue initializationブロックを以下のように編集してください block to resemble:

```js
new Vue({
  render: h => h('frame', [h(HelloWorld)]),
}).$start();
```

NativeScript4.0は2つの大きな変更があります:

* 新しい`<Frame>`エレメント
* 共通のビューエレメントをページをまたいで共有することが可能な、ルートエレメントを変更する新しい方法(ナビゲーション)。

NativeScript 4.0以前では、ルート要素はアプリがスタートする際にNativeScriptによって暗に作成される`<Frame>`エレメントでした。

最新の変更では、`<Frame>`と`<Page>`エレメントはもう自動的に作成されません。なので、NativeScript-Vue 2.0.0からは,テンプレートにこれらのエレメントを明示的に追加する必要があります。

単一のルート`<Frame>`を持つという以前の動作を維持するためのは、ルートVueインスタンスを変更し`<Frame>`と`<Page>`エレメントを持つようにすることで可能になります。

**例: `<Frame>`と`<Page>`をテンプレートに追加する**

```JavaScript
// 古いバージョンの中では
// このコードは自動的にページを作る
new Vue({
  template: `<Label text="Hello world"/>`
}).$start()
```

```JavaScript
// NativeScript-Vue 2.0.0では
// <Frame>と<Page>がテンプレートの中に存在しなければならない
new Vue({
  template: `
    <Frame>
      <Page>
        <Label text="Hello world"/>
      </Page>
    </Frame>
  `
}).$start()
```

このようにすることで、異なるページでエレメントを共通化することができます。

**例: 共通化された`<SideDrawer>`エレメントをしようする**

```js
new Vue({
  template: `
    <RadSideDrawer>
      <StackLayout ~drawerContent>...</StackLayout>
      <Frame ~mainContent>
        <Page>
          <Label text="Hello world"/>
        </Page>
      </Frame>
    </RadSideDrawer>
  `
}).$start()
```

## Step 5: パスの編集

フォルダ構成が変化したため、新しいアプリの中でスタイル、フォント、画像を指すパスを編集しなければなりません。

**例: 画像の参照を変更する**

古いアプリでは、画像の参照を以下のように行っていました。

```HTML
<Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
```

NativeScriptが画像を読み込むことを確認するため、パスを以下のように変更して下さい。

```HTML
<Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png"/>
```

## (必要な場合)ステップ6: 手動で設定したルーティングでのプロップスの修正

もしアプリで手動のルーティングを使っているのなら、プロップスを渡すためのシンタックスが変を変えます。全てのプロジェクトでこの変更が必要ではないことに注意して下さい。

古いシンタックスはこのようになっていました。

```JavaScript
this.$navigateTo(NewPage, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},

                    context: {
                        propsData: {
                            name: this.name,
                            value: this.value
                        }
                    }
                });
```

新しいアプリで手動ルーティングの挙動を保存するために、シンタックスを以下のように変えて下さい: 

```JavaScript
this.$navigateTo(NewPage, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},

                    props: {
                        name: this.name,
                        value: this.value
                    }
                });
```

## ステップ7: `package.json`を作成する

関係のある値を、古いアプリのルートにある`package.json`ファイルから、新しいアプリのルートにある`package.json`ファイルへコピーして下さい。 

おそらく`Dependencies:`ブロックのコピーと、ある場合には`package.json`のトップにある新しいアプリのバージョンとdescriptionを書き直す必要があるでしょう。

## Step 8: 削除と実行

新しいアプリのフォルダを空にして依存ファイルをインストールし直すために以下のコマンドを実行してください。

```shell
$ cd <project-name>
$ rm -rf platforms
$ npm install
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

## (オプション) ステップ8: HMRを試す

現在NativeScriptは(Hot Module Replacement)のサポートを提供しています。同じように、最新のNativeScript-Vueはすぐに使えるHMRのサポートをしていますが、NativeScript CLIを必要とします。 

最新で最高なバージョンのNativeScript CLIをインストールしてHMRのサポートを利用するために、以下のコマンドを実行してください。

```shell
$ npm install -g nativescript@next
$ cd <project-name>
$ rm -rf platforms
$ tns run android --hmr
$ # or
$ tns run ios --hmr
```
