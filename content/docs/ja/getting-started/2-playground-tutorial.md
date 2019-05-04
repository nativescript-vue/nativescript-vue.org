---
title: Playgroundのチュートリアル
contributors: [Spice-Z]
---

[NativeScript Playground](https://play.nativescript.org?template=play-vue)はクラウド環境です。基礎を理解するまで、ブラウザ上でNativeScriptとVue.jsに触れることができます。リンクから飛んで、ドラッグ・ドロップ操作でコンポーネントのコードを生成してみてください。

Playgroundは好きなだけ使うことができます。その中では、NativeScriptでの開発を試すこともできますし、プロジェクト全ての開発を行うこともできます。しかし、アプリをPlaygroundの外に出したくなったならば、次の段階に進んで[NativeScriptのツールをローカル環境にインストール](/en/docs/getting-started/installation)し、[テンプレートを選んで始める](/en/docs/getting-started/templates)必要があります。

**このページは2つのパートを含んでいます:**
- [パート1: Playgroundに親しむ](#%E3%83%91%E3%83%BC%E3%83%881-playground%E3%81%AB%E8%A6%AA%E3%81%97%E3%82%80)
    - [始める前に](#%E5%A7%8B%E3%82%81%E3%82%8B%E5%89%8D%E3%81%AB)
    - [画面構成](#%E7%94%BB%E9%9D%A2%E6%A7%8B%E6%88%90)
    - [ドラッグ&ドロップでコードの変更](#%E3%83%89%E3%83%A9%E3%83%83%E3%82%B0%E3%83%89%E3%83%AD%E3%83%83%E3%83%97%E3%81%A7%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%A4%89%E6%9B%B4)
    - [リアルタイムで確認する](#%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E3%81%A7%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B)
    - [Configure your codeコードの設定](#configure-your-code%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E8%A8%AD%E5%AE%9A)
- [Part 2: Building an appアプリをビルドする](#part-2-building-an-app%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E3%83%93%E3%83%AB%E3%83%89%E3%81%99%E3%82%8B)
  - [空のVue.jsテンプレート](#%E7%A9%BA%E3%81%AEvuejs%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)
  - [基本的なデザイン](#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3)
    - [このセクションでの進捗](#%E3%81%93%E3%81%AE%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A7%E3%81%AE%E9%80%B2%E6%8D%97)
    - [NativeScriptの基本を少し](#nativescript%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%82%92%E5%B0%91%E3%81%97)
    - [Requirement implementation必要要件](#requirement-implementation%E5%BF%85%E8%A6%81%E8%A6%81%E4%BB%B6)
  - [基本機能: タスクの追加](#%E5%9F%BA%E6%9C%AC%E6%A9%9F%E8%83%BD-%E3%82%BF%E3%82%B9%E3%82%AF%E3%81%AE%E8%BF%BD%E5%8A%A0)
    - [このセクションでの進捗](#%E3%81%93%E3%81%AE%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A7%E3%81%AE%E9%80%B2%E6%8D%97-1)
    - [NativeScriptの基本を少し](#nativescript%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%82%92%E5%B0%91%E3%81%97-1)
    - [Requirement implementation](#requirement-implementation)
  - [基本的な機能: 閲覧、完了、To Do タブからタスクを削除する。](#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%A9%9F%E8%83%BD-%E9%96%B2%E8%A6%A7%E5%AE%8C%E4%BA%86to-do-%E3%82%BF%E3%83%96%E3%81%8B%E3%82%89%E3%82%BF%E3%82%B9%E3%82%AF%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B)
    - [このセクションでの進捗](#%E3%81%93%E3%81%AE%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A7%E3%81%AE%E9%80%B2%E6%8D%97-2)
    - [NativeScriptの基本を少し](#nativescript%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%82%92%E5%B0%91%E3%81%97-2)
    - [Requirement implementation](#requirement-implementation-1)
  - [Basic functionality: View, return to active tasks, and delete tasks from the Completed tab](#basic-functionality-view-return-to-active-tasks-and-delete-tasks-from-the-completed-tab)
    - [このセクションでの進捗](#%E3%81%93%E3%81%AE%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A7%E3%81%AE%E9%80%B2%E6%8D%97-3)
    - [NativeScriptの基本を少し](#nativescript%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%82%92%E5%B0%91%E3%81%97-3)
    - [Requirement implementation](#requirement-implementation-2)
  - [Advanced design: Styled input field and button](#advanced-design-styled-input-field-and-button)
    - [このセクションでの進捗](#%E3%81%93%E3%81%AE%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A7%E3%81%AE%E9%80%B2%E6%8D%97-4)
    - [NativeScriptの基本を少し](#nativescript%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%82%92%E5%B0%91%E3%81%97-4)
    - [Requirement implementation](#requirement-implementation-3)
      - [Style the input field](#style-the-input-field)
      - [Style the button](#style-the-button)
  - [Advanced design: Styled tab navigation](#advanced-design-styled-tab-navigation)
    - [このセクションでの進捗](#%E3%81%93%E3%81%AE%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A7%E3%81%AE%E9%80%B2%E6%8D%97-5)
    - [NativeScriptの基本を少し](#nativescript%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%82%92%E5%B0%91%E3%81%97-5)
    - [Requirement implementation](#requirement-implementation-4)
      - [Change color and font size of selected tab title](#change-color-and-font-size-of-selected-tab-title)
      - [Transform text](#transform-text)
  - [Advanced design: Styled active tasks](#advanced-design-styled-active-tasks)
    - [NativeScriptの基本を少し](#nativescript%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%82%92%E5%B0%91%E3%81%97-6)
    - [Requirement implementation](#requirement-implementation-5)
  - [Advanced design: Styled completed tasks](#advanced-design-styled-completed-tasks)
    - [NativeScriptの基本を少し](#nativescript%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%82%92%E5%B0%91%E3%81%97-7)
    - [Requirement implementation](#requirement-implementation-6)


# パート1: Playgroundに親しむ

[このリンク](https://play.nativescript.org/?template=play-vue)から飛んで、NativeScript + Vue.jsのとても基本的なテンプレートが予め読み込まれている、クラウド環境のシンプルなエディターを開いてください。

> **ヒント:** Head to [Sample Tasks for the Playground](/en/docs/getting-started/playground-tutorial) for ideas about how to get started in the Playgroundでどのように始めるかの考えとして向かってください？？？？.

### 始める前に

![playground welcome screen](/screenshots/ns-playground/playground-home.png)

Playgroundを初めて開く場合,2つのモバイルアプリ&mdash;the NativeScript Playground and the NativeScript Preview　をインストールするように促されます。両者ともコードの変更をリアルタイムで実機に反映することを可能にするものです。コードのビルドは必要ありません。

アプリのインストールを飛ばすこともできますが、Vue.jsとNativeScriptで遊ぶ多くの楽しみを失うことになってしまいます。

コードを動かしているときは、アプリは起動したままにしてください。

### 画面構成

![](/screenshots/ns-playground/playground-layout.png)

左側のサイドバーはファイルエクスプローラーと**Component**パネルを提供します。アプリ上の多くの作業は、UIとロジックを作成する`components`>`HelloWorld.vue`ファイルで行われます。今の所は、より深い階層を編集する必要はないでしょう。 

**Components**パネルでは設定が済んでいる全ての使用可能なNativeScript UIコンポーネントへの素早いアクセスを提供しています。

ページのトップから、あなたのデバイスのプレビューアプリへ変更の反映と、コードの保存、ダウンロードが可能です。

ページ下部には、リアルタイムのエラーレポートとデバイスログを提供する一番の親友がいますよ？？？。 

### ドラッグ&ドロップでコードの変更

![](/screenshots/ns-playground/playground-drag-and-drop.gif)

**Components**パネルのコンポーネントをクリックして、コードエディターで`components`>`HelloWorld.vue`ファイルの中にある、`<template>`ブロックのどこかへドラッグしてみてください。Releasing the mouse button inserts some pre-written sample code for the respective component. Any methods that go with it (such as what happens on button or item tap) are automatically added right below in the `<script>` block. 

> **ヒント:** 利用したいコンポーネントを見つけるためのに、**Components**パネルの検索機能を使ってみてください。検索機能はコンポーネントのタイトルのみに使用でき、コードの中で使われている本当の名前には使用できません。例: *text field*だと検索にヒットしますが、*textfield*だと何もヒットしません。
>
> ![](/screenshots/ns-playground/playground-component-search.gif)

多くのUIコンポーネントにおいて、それを動かすためにはyou need to drop them inside the `<Page>`ブロックの中、できればレイアウト用コンポーネントの中へドロップしないといけませんLayoutsがUIコンポーネントを画面のどの位置に設置するかを伝達してくれます。 tell your app how to position the UI components on the screen.

> **注意:** 今の所、アプリのクラッシュもしくはロードされない場所へのドロップを止める機能はありません。このような場合に、より情報を得るためには**Errors**と**Device Logs**タブを確認してください。

### リアルタイムで確認する

![](/screenshots/ns-playground/playground-preview.gif)

正常な場所へコードを設置した後、**Preview**をクリック(もしくは`Ctrl+S`か`Cmd+S`) して、一瞬のうちにあなたのデバイス上の画面がリフレッシュされることを確認してください。

アプリと結びつけて動作させている場合において、当然アプリが閉じる場合があります。そんなときは、アプリを立ち上げなおしてクラッシュレポートを確認してください。

コードの変更がデバイスに反映されなくなった場合には、**QR code**をクリックして*Playground*アプリでもう一度QRコードを読み込んでください。

### Configure your codeコードの設定

これで、画面上ではコンポーネントが実行され、表示されるようになっています。You're excited but you want to make it your own自分の思い通りの形にしたいはずです。 Hack away at the default code suggested by the Playground. Fix sizes and labels, remove or add elements.

`<style scoped>`ブロックを下へスクロールして、スタイルを少し切り替えてみましょう。色とフォントサイズの変更を実験してみてください。

# Part 2: Building an appアプリをビルドする

[NativeScript Playground](https://play.nativescript.org?template=play-vue)に目を通したならば、次の要件を満たすTODOアプリを作成するところから始められます:

* 基本的なデザイン
  * 2つのタブによるレイアウト
  * タブの1つで、アクティブなタスクを表示し、新しいタスクを作成
  * 2つ目のタブで、完了したタスクのリストを表示
* 基本的な機能
  * タスクの追加: タスクをテキストで追加
  * タスクを見る: 新しく加えられたタスクはアクティブなものとして表示され、タップすることができる
  * タスクを終える: アクティブなタスクをタップするとオプションを選択するアクションダイアログが表示されます。
  * タスクを消す: 完了したタスクをタップするとオプションを選択するアクションダイアログが表示されます。
* Advanced design
  * Input and button for adding tasks are styled
  * Tabs are styled
  * Active tasks are styled
  * Completed tasks are styled

> **ヒント:** このチュートリアルの全てのセクションは、*NativeScriptの基本がいくつか*と*Requirement implementation* sub-sections. You can skip the basics sub-section and jump straight to the implementation for a more hands-on approachよりハンズオン的に進めるなら.

## 空のVue.jsテンプレート

![](/screenshots/ns-playground/playground-home.png)

このチュートリアルの全ての開発は`components` > `HelloWorld.vue`で行われ、フロントエンド、ロジック、スタイリングのコーディングが含まれています。

`HelloWorld.vue` は、ロジックと結びついていないいくつかのラベルを中に含む、シンプルな`<template>`ブロックで始まっています。UIコンポーネントをドラッグ・ドロップするのにしたがって、Playgroundは`<script>`ブロックにコードを追加します。

`<template>`ブロックの中ではUIをデザインするために作業し、`<script>`ブロックの中ではアプリの機能を組み上げるために作業をします。`<template>`ブロックはNativeScriptと相性の良いXMLを記述する必要ああります。`<script>`ブロックではVue.jsとNativeScript JavaScriptの両者で記述できます。

## 基本的なデザイン

### このセクションでの進捗

このセクションを開始した時と終了したときの画面は以下の通りになります。

| 初期状態の画面 | タブ1 | タブ2 |
|-------|-----|-----|
| ![Bare Vue.js template](/screenshots/ns-playground/two-tabs-start.jpg) | ![First tab](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![Second tab](/screenshots/ns-playground/two-tabs-tab-2.jpg) |

### NativeScriptの基本を少し

`<Page>`エレメントは全てのNativeScript-Vueアプリにおいて、最上位層top-levelのUIエレメントです。他のすべてのUIエレメントはこの中にネストされます。

`<ActionBar>`エレメントは`<Page>`の中にアクションバーを表示します。`<Page>`の中では2つ以上の`<ActionBar>`を含むことはできません。

Typically, after the `<ActionBar>`, you will have navigation components (such as a drawer or a tab view) or layout components. これらのエレメントはアプリのレイアウトを管理し、その中に他のUIエレメントをどのように配置するのかを決定できるようにします。

### Requirement implementation必要要件

2つのタブを持つアプリを作成するため、`<TabView>`コンポーネントを利用します。

1. `<ActionBar>`のtitleをアプリの目的に沿うよう変更します。
2. テンプレートを作成した際にデフォルトで記述される、`<ScrollView>`ブロックとその中の全てのコンテンツを消去します。<br/>`<ScrollView>`コンポーネントはスクロールができるコンテンツの中で最上位層top-levelのUIエレメントになります。
3. Drag and drop the その中に`<TabView>`コンポーネントをドラッグ・ドロップします。 component in its place.<br/>Playgroundはインデントを考慮したコードフォーマットを行います。 applies some code formatting, including taking care of indentation. However,フォーマとはコードの追加ノアとに行われうので、ブラウザの戻る機能ではフォーマットを消しますが追加されたコード自体には反映されません。 the formatting is applied after the insertion and using the browser's undo feature only reverts the formatting and not the insertion of code.
4. `<TabView>`のheightを画面を満たすように設定します(100%に設定してください)。 <br/>Androidデバイス向けには,`androidTabsPosition`を追加して、その値を`bottom`にすることを考慮して下さい。そうしないと、タブが画面上部に表示されてしまいます。
5. `<TabViewItem>`エレメントのタイトルを目的に装用に変更してください。<br/>ここで大切なのは、タブのテキストの内容が`<Label>` コンポーネントにスタイリングもフォーマッティングもされず表示されることです。それぞれの`<Label>`コンポーネントで`textWrap="true"`プロパティを適用することでテキストを見やすくしましょう。

このステージの最後では、`<HelloWorld.vue>`が以下のようになるはずです:

```HTML
<template>
  <Page class="page">
    <ActionBar title="My Tasks" class="action-bar" />
    
    <TabView height="100%" androidTabsPosition="bottom">
      <TabViewItem title="To Do">
        <Label text="This tab will list active tasks and will let users add new tasks." textWrap="true" />
      </TabViewItem>
      
      <TabViewItem title="Completed">
        <Label text="This tab will list completed tasks for tracking." textWrap="true" />
      </TabViewItem>
    
    </TabView>
  </Page>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>
```

## 基本機能: タスクの追加

### このセクションでの進捗

このセクションを開始した時と終了したときの画面は以下の通りになります。

| Initial screen | タブ1 - タスクがない時 | タブ1 - タスクがある時 |
|-------|-----|-------------|
| ![First tab before changes](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![First tab without any tasks](/screenshots/ns-playground/input-field.jpg) | ![First tab with added tasks](/screenshots/ns-playground/added-tasks.jpg)

### NativeScriptの基本を少し

layoutコンポーネントによって様々なUIウィジェットを整える事ができます。一つ以上のUIウィジェットを画面に配置する時ならいつも、使用可能なlayoutオプションを使いそうになるでしょう。`<StackLayout>`と`<GridLayout>`は基本なものですが、要素を個別に縦に並べたりテーブルのように並べたりすることを可能にする多くのオプションを持っています。 While the 
`<StackLayout>`は要素を一定の方向で並べる一方、`<GridLayout>`はグリッドの中で要素を表示する位置を直接指定します。

### Requirement implementation

ページ上で`<GridLayout>`を、`<TextField>`と`<Button>`を整理するために使ってみましょう。The latter two form the input functionality of the app.

入力フィールドの下でタスクを表示するために`<ListView>`を用いましょう。

1. 最初のタブの初めの`<TabViewItem>`ブロックから`<Label>`コンポーネントを削除します。
2. 最初のタブの`<TabViewItem>`ブロックの中へ`<StackLayout>`コンポーネントをドラッグ&ドロップします。 <br/>デフォルトのコードだとカラフルな縦並びのスタックが作成されます。
3. `<StackLayout>`ブロックから全ての`<Label>`コンポーネントを削除します。
4. 最初のタブの`<StackLayout>`ブロックの中に`<GridLayout>`コンポーネントをドラッグ&ドロップしてください。<br/>デフォルトのコードだと、要素の位置指定とグリッドセルの結合方法を示すカラフルなテーブルが表示されます。
5. `<GridLayout>`ブロック内の全ての`<Label>`コンポーネントを削除します。
6. `<StackLayout>`の設定をします。
    * background colorを削除します。
    * widthとheightを`100%`にします。
7. `<GridLayout>`の設定をします。
    * 初めのカラムが二番目のカラムの二倍になるような、二行×一列のグリッドを保つように指定します。
    * 画面横幅を全て覆うようにグリッドのwidthに100%を指定します。
    * グリッドのheightを25%に指定します。そうしないと、あとで追加する`<ListView>`が`<GridLayout>`の上に覆いかぶさってしまいます。
    * その他のグリッドに関する設定を消去します。
8. `<GridLayout>`ブロックの中に`<TextField>`と`<Button>`をドラッグ&ドロップします。 <br/>ここで初めてPlaygroundがJavaScriptのコードをソースコードに追加します。`data()`と`methods`ブロックが`<script>`の下に追加されることに注意してください。次のステップで、これらの部分にいくつかのアプリの機能を実装するためのコードを追加することになります。
9.  グリッドの下に`<ListView>`をドラッグ&ドロップして下さい。<br/>デフォルトのコードだと、`<FlexboxLayout>`の中に国と国旗アイコンのリストを生成します。
10. グリッドの中のエレメントの位置を設定する。
    * 初めの行の初めの列の中に`<TextField>`が設置されるように指定します。
    * 二番目の行の初めの列の中に`<Button>`が設置されるように指定します。
11. `<TextField>`の設定
    * テキストフィールドを編集可能にします。
    * キーボードのエンターキーでタスクを追加できるようにします。
12. `<ListView>`をクリーンアップして設定する。
    * この中にある`<Label>`以外のネストしている全てのブロックを消去します。
    * heightを75%に指定します。そうしない場合`<ListView>`が`<GridLayout>`の上にかぶさります。
    * Replace the `countries`-related binding with a binding to タクティブなタスクの配列.
    * `<script>`ブロック内で、国の配列を削除してアクティブなタスクのための空の配列を作成します。
13. `<scripts>`ブロック内で、ボタンのタップと以下のようなロジックを結びつけます。
    * 入力が空の文字列かどうかをチェックします。
    * 新たに追加されたタスクのログをコンソールに出力します
    * 新たに追加されたタスクをアクティブなタスクの配列に追加します。`unshift`を使ってページのトップに新たな要素を配置しましょう。
    * 入力が終わったらテキストフィールドを空にします。
14. 新たに追加されたタスクを画面に配置するために、`<ListView>`の中で`<Label>`を使いましょう。

このstageの最後では、`<HelloWorld.vue>`は以下のさpンプルのようになっているはずです:

```HTML
<template>
  <Page class="page">
    <ActionBar title="My Tasks" class="action-bar" />

    <TabView height="100%" androidTabsPosition="bottom">
      <TabViewItem title="To Do">
        <!-- Positions an input field, a button, and the list of tasks in a vertical stack. -->
        <StackLayout orientation="vertical" width="100%" height="100%">

          <GridLayout columns="2*,*" rows="*" width="100%" height="25%">
            <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
            <TextField col="0" row="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> 

            <Button col="1" row="0" text="Add task" @tap="onButtonTap" />
          </GridLayout>

          <ListView class="list-group" for="todo in todos" @itemTap="onItemTap" style="height:75%">
            <v-template>
              <Label :text="todo.name" class="list-group-item-heading" textWrap="true" />
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Completed">
        <Label text="This tab will list completed tasks for tracking." textWrap="true" />
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
export default {
  methods: {
    onItemTap: function(args) {
      console.log('Item with index: ' + args.index + ' tapped');
    },

    onButtonTap() {
      if (this.textFieldValue === "") return; // Prevents users from entering an empty string.
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.unshift({ name: this.textFieldValue }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
    },
  },

  data() {
    return {
      todos: [],

      textFieldValue: "",

    };
  },
}
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>
```

## 基本的な機能: 閲覧、完了、To Do タブからタスクを削除する。

### このセクションでの進捗

このセクションを開始した時と終了したときの画面は以下の通りになります。

| Tab 1 - Added tasks | Tab 1 - Item tapped | Tab 2 - Completed tasks
|-----|-------------|-------|
| ![First tab with added tasks](/screenshots/ns-playground/added-tasks.jpg) | ![Action dialog toggled](/screenshots/ns-playground/active-task-dialog.jpg) | ![Second tab with completed tasks](/screenshots/ns-playground/completed-tasks.jpg) |

### NativeScriptの基本を少し

Out-of-the-box, the `<ListView>`コンポーネントは毎回のタップを判定してイベントを発火させました。 component detects a tap gesture for every item and emits an event for it. そのイベントは配列の中でタップされた要素とそのインデクスを伝達します。To let the user choose the outcome of a tap gesture and expand the functionality of your app, you can tie a dialog to the event.

[`dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_) is a globablly available module that provides several configurable dialog types for apps: alert, action, prompt, login, confirmation. This implementation relies on [`action()`](/en/docs/elements/dialogs/action) to let the user choose if they want to mark a task as completed or delete it from the list of active tasks.

### Requirement implementation

1. In the second `<TabViewItem>` block, remove the `<Label>` element. Drag and drop a `<ListView>` element, clean up its contents and set a height for it.
2. In the newly added `<ListView>` element show items from an array of completed tasks (`dones`).

  ```HTML
  <ListView class="list-group" for="done in dones" @itemTap="onDoneTap" style="height:75%">
    <v-template>
      <Label :text="done.name" class="list-group-item-heading" textWrap="true" />
    </v-template>
  </ListView>
  ```
1. Modify the `onItemTap` method.
  * Method shows an `action()` dialog.
  * Method logs user selection in the console for debugging.
  * Based on user selection, the method moves elements from the `todos` array to the `dones` array, deletes elements from the `todos` array, or dismisses the dialog. Use `splice()` to avoid leaving holes in the array and `unshift()` to make sure that recently completed tasks are shown on top.

  ```JavaScript
  onItemTap: function(args) {
    action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever']) 
      .then(result => { 
        console.log(result); // Logs the selected option for debugging.
        switch (result) {
          case 'Mark completed': 
            this.dones.unshift(args.item); // Places the tapped active task at the top of the completed tasks.
            this.todos.splice(args.index, 1); // Removes the tapped active  task.
            break;
          case 'Delete forever':
            this.todos.splice(args.index, 1); // Removes the tapped active task.
            break; 
          case 'Cancel' || undefined: // Dismisses the dialog
            break; 
        }
      })
  },
  ```

At the end of this stage, your `<HelloWorld.vue>` should resemble this sample:

```HTML
<template>
  <Page class="page">
    <ActionBar title="My Tasks" class="action-bar" />

    <TabView height="100%" androidTabsPosition="bottom">
      <TabViewItem title="To Do">
        <!-- Positions an input field, a button, and the list of tasks in a vertical stack. -->
        <StackLayout orientation="vertical" width="100%" height="100%">

          <GridLayout columns="2*,*" rows="*" width="100%" height="25%">
            <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
            <TextField col="0" row="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" />
            <Button col="1" row="0" text="Add task" @tap="onButtonTap" />
          </GridLayout>

          <ListView class="list-group" for="todo in todos" @itemTap="onItemTap" style="height:75%">
            <v-template>
              <Label :text="todo.name" class="list-group-item-heading" textWrap="true" />
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Completed">
        <ListView class="list-group" for="done in dones" @itemTap="onDoneTap" style="height:75%">
          <v-template>
            <Label :text="done.name" class="list-group-item-heading" textWrap="true" />
          </v-template>
        </ListView>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
export default {
  methods: {
    onItemTap: function(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever']) 
        .then(result => { 
          console.log(result); // Logs the selected option for debugging.
          switch (result) {
            case 'Mark completed': 
              this.dones.unshift(args.item); // Places the tapped active task at the top of the completed tasks.
              this.todos.splice(args.index, 1); // Removes the tapped active  task.
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Removes the tapped active task.
              break; 
            case 'Cancel' || undefined: // Dismisses the dialog.
              break; 
          }
        })
    },

    onButtonTap() {
      if (this.textFieldValue === "") return; // Prevents users from entering an empty string.
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.unshift({
          name: this.textFieldValue
      }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
    },
  },

  data() {
    return {
      dones: [],
      todos: [],
      textFieldValue: "",
    };
  },
}
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>
```

## Basic functionality: View, return to active tasks, and delete tasks from the Completed tab

### このセクションでの進捗

このセクションを開始した時と終了したときの画面は以下の通りになります。

| Tab 2 - Completed tasks | Tab 2 - Item tapped | Tab 1 - Active tasks
|-----|-------------|-----|
| ![Second tab with completed tasks](/screenshots/ns-playground/completed-tasks-2.jpg) | ![Action dialog toggled](/screenshots/ns-playground/completed-tasks-dialog.jpg) | ![First tab with active tasks](/screenshots/ns-playground/completed-tasks-moved-to-active.jpg)

### NativeScriptの基本を少し

This implementation step does not require any additional knowledge.

### Requirement implementation

For the second tab, create and modify the `onDoneTap` method:

* Method shows an `action()` dialog.
* Method logs user selection in the console for debugging.
* Based on user selection, the method moves elements from the `dones` array to the `todos` array, deletes elements from the `dones` array, or dismisses the dialog. Use `splice()` to avoid leaving holes in the array and `unshift()` to make sure that recently completed tasks are shown on top.

  ```JavaScript
  onDoneTap: function(args) { 
    action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
      .then(result => { 
        console.log(result); // Logs the selected option for debugging. 
        switch (result) { 
          case 'Mark to do':
            this.todos.unshift(args.item); // Places the tapped completed task at the top of the to do tasks. 
            this.dones.splice(args.index,1); // Removes the tapped completed task. 
            break; 
          case 'Delete forever': 
            this.dones.splice(args.index, 1); // Removes the tapped completed task. 
            break; 
          case 'Cancel' || undefined: // Dismisses the dialog 
            break; 
        } 
      }) 
  },
  ```

At the end of this stage, your `<HelloWorld.vue>` should resemble this sample:

```HTML
<template>
  <Page class="page">
    <ActionBar title="My Tasks" class="action-bar" />

    <TabView height="100%" androidTabsPosition="bottom">
      <TabViewItem title="To Do">
        <!-- Positions an input field, a button, and the list of tasks in a vertical stack. -->
        <StackLayout orientation="vertical" width="100%" height="100%">

          <GridLayout columns="2*,*" rows="*" width="100%" height="25%">
            <TextField col="0" row="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" />
            <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
            <Button col="1" row="0" text="Add task" @tap="onButtonTap" />
          </GridLayout>

          <ListView class="list-group" for="todo in todos" @itemTap="onItemTap" style="height:75%">
            <v-template>
              <Label :text="todo.name" class="list-group-item-heading" textWrap="true" />
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Completed">
        <ListView class="list-group" for="done in dones" @itemTap="onDoneTap" style="height:75%">
          <v-template>
            <Label :text="done.name" class="list-group-item-heading" textWrap="true" />
          </v-template>
        </ListView>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
export default {
  methods: {
    onItemTap: function(args) {
     action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever']) 
      .then(result => { 
        console.log(result); // Logs the selected option for debugging.
        switch (result) {
          case 'Mark completed': 
            this.dones.unshift(args.item); // Places the tapped active task at the top of the completed tasks.
            this.todos.splice(args.index, 1); // Removes the tapped active  task.
            break;
          case 'Delete forever':
            this.todos.splice(args.index, 1); // Removes the tapped active task.
            break; 
          case 'Cancel' || undefined: // Dismisses the dialog
            break; 
        }
      })
    },

   onDoneTap: function(args) { 
    action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
      .then(result => { 
        console.log(result); // Logs the selected option for debugging. 
        switch (result) { 
          case 'Mark to do':
            this.todos.unshift(args.item); // Places the tapped completed task at the top of the to do tasks. 
            this.dones.splice(args.index,1); // Removes the tapped completed task. 
            break; 
          case 'Delete forever': 
            this.dones.splice(args.index, 1); // Removes the tapped completed task. 
            break; 
          case 'Cancel' || undefined: // Dismisses the dialog 
            break; 
        } 
      }) 
    },

    onButtonTap() {
      if (this.textFieldValue === "") return; // Prevents users from entering an empty string.
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.unshift({
        name: this.textFieldValue
      }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
    },
  },

  data() {
    return {
      dones: [],
      todos: [],
      textFieldValue: "",
    };
  },
}
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>
```

## Advanced design: Styled input field and button

### このセクションでの進捗

このセクションを開始した時と終了したときの画面は以下の通りになります。

| Tab 1 - No style | Tab 1 - Styled | Tab 1 - Styled |
|-----|-------------|----|
| ![Unstyled input](/screenshots/ns-playground/input-field.jpg) | ![Styled button](/screenshots/ns-playground/styled-button.jpg) | ![Styled input](/screenshots/ns-playground/styled-input.jpg) |

### NativeScriptの基本を少し

When you work with NativeScript and Vue.js, you can use application-wide CSS, scoped CSS, or inline CSS to style your app. Application-wide CSS is applied first and is handled in `app.css` in the root of your project. This tutorial does not explore application-wide CSS. See also: [Styling](https://docs.nativescript.org/ui/styling).

Scoped CSS is applied to the current component only and is handled in `HelloWorld.vue` in the `<style scoped>` block. This tutorial relies almost exclusively on scoped CSS and inline CSS. See also: [Scoped CSS](https://vue-loader.vuejs.org/guide/scoped-css.html).

With type selectors, you can select a UI component and apply styling to it. To select a type, use the component name as provided in the code. For example, to select the tab view, use `TabView`.

### Requirement implementation

#### Style the input field

In `HelloWorld.vue` > `<style scoped>`, change the font size, the color, and the margins around the `<TextField>`.

```CSS
TextField {
  font-size: 20;
  color: #53ba82;
  margin-top: 10;
  margin-bottom: 10;
  margin-right: 5;
  margin-left: 20;
}
```

#### Style the button

In the `<style scoped>` block, create a style for the button. Modify the style to create a colorful button with rounded corners.

  ```CSS
  Button { 
    font-size: 20; 
    font-weight: bold; 
    color: white; 
    background-color: #53ba82; 
    height: 40;
    margin-top: 10; 
    margin-bottom: 10; 
    margin-right: 10; 
    margin-left: 10; 
    border-radius: 20px; 
  }
  ```
  
## Advanced design: Styled tab navigation

### このセクションでの進捗

このセクションを開始した時と終了したときの画面は以下の通りになります。

| Tabs - No style | Tabs Styled 
|-----|-------------|
| ![Unstyled tabs](/screenshots/ns-playground/styled-button.jpg) | ![Styled tabs](/screenshots/ns-playground/styled-tabs.jpg) |

### NativeScriptの基本を少し

`<TabView>` provides some styling properties out of the box. You can apply a text transform to each tab title (`textTransform`) and change the font size and color globally (`tabTextFontSize`, `tabTextColor`, `selectedTabTextColor`). You can also change the background color of your tabs (`tabBackgroundColor`).

### Requirement implementation

#### Change color and font size of selected tab title

In `HelloWorld.vue`, add the `selectedTabTextColor` and `tabTextFontSize` property to the `<TabView>`.

```HTML
<TabView height="100%" androidTabsPosition="bottom" selectedTabTextColor="#53ba82" tabTextFontSize="15" >
```

#### Transform text

Apply the `textTransform` property to the separate tabs. You can use this property only on the `<TabViewItem>` level.

```HTML
<TabViewItem title="To Do" textTransform="uppercase" >
```

```HTML
<TabViewItem title="Completed" textTransform="uppercase">
```

## Advanced design: Styled active tasks

このセクションを開始した時と終了したときの画面は以下の通りになります。

| Active tasks - No style | Active tasks - no separator | Active tasks - styled active tasks |
|-----|-------------|---|
| ![Unstyled active tasks](/screenshots/ns-playground/styled-tabs.jpg) | ![No separator](/screenshots/ns-playground/styled-list-view-no-separator.jpg) | ![Styled list](/screenshots/ns-playground/styled-list-view-added-tasks.jpg) |

### NativeScriptの基本を少し

`<ListView>` and `<Label>` have out-of-the-box style properties that you can use to control elements such as the list separator or the text wrap within the `<template>` block. To change the font style, color, and positioning of text, you need to use CSS in the `<style scoped>` block.

To implement a style particularly for the text of active tasks, you can set an `id` for the `<Label>` element.

### Requirement implementation

1. Set an `id` for the `<Label>` that represents active tasks and enable text wrapping. Enabling text wrapping ensures that longer text shows properly in your list

  ```HTML
  <Label id="active-task" :text="todo.name" class="list-group-item-heading" textWrap="true" />
  ```
1. Add the `separatorColor` property and set it to `transparent` for the `<ListView>` that shows active tasks. This way, the separator will no longer appear in your list.

  ```HTML
  <ListView class="list-group" for="todo in todos" @itemTap="onItemTap" style="height:75%" separatorColor="transparent" >
  ```
1. In `<style scoped>`, create the style for active tasks. Set font size, color, and some padding to position the text on the page. Play with margins and paddings until you get a result that works for you.

  ```CSS
  #active-task {
    font-size: 20;
    font-weight: bold;
    color: #53ba82;
    margin-left: 20;
    padding-top: 5;
    padding-bottom: 10;
  }
  ```

## Advanced design: Styled completed tasks

このセクションを開始した時と終了したときの画面は以下の通りになります。

| Completed tasks - No style | Completed tasks - Styled | 
|-----|-------------|
| ![Unstyled completed tasks](/screenshots/ns-playground/completed-tasks-unstyled.jpg) | ![Styled completed tasks](/screenshots/ns-playground/completed-tasks-styled.jpg) |

### NativeScriptの基本を少し

This section applies the basic NativeScript knowledge from [Advanced design: Styled active tasks](#advanced-design-styled-active-tasks).

### Requirement implementation

1. Set an `id` for the `<Label>` that represents completed tasks and enable text wrapping. Enabling text wrapping ensures that longer text shows properly in your list

  ```HTML
  <Label id="completed-task" :text="done.name" class="list-group-item-heading" textWrap="true" />
  ```
1. Add the `separatorColor` property, and set it to `transparent` for the `<ListView>` that represents completed tasks. This way, the separator will no longer appear in your list.

  ```HTML
  <ListView class="list-group" for="done in dones" @itemTap="onDoneTap" style="height:75%" separatorColor="transparent">
  ```

1. In `<style scoped>`, create the style for completed tasks. Set font size, color, text decoration, and some padding to position the text on the page. Play with margins and paddings until you get a result that works for you.

  ```CSS
  #completed-task {
    font-size: 20;
    color: #d3d3d3;
    margin-left: 20;
    padding-top: 5;
    padding-bottom: 10;
    text-decoration: line-through;
  }
  ```