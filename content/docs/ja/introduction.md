---
title: はじめに
contributors: [Spice-Z]
---

## [NativeScript](https://www.nativescript.org/)とは?

NativeScriptは本物のモバイルネイティブアプリをJavaScriptで開発するためのオープンソースフレームワークです。

## [Vue.js](https://vuejs.org/)とは?

Vue (発音は / v j u ː / 、 view と同様）はユーザーインターフェイスを構築するためのプログレッシブフレームワークです。中核となるライブラリはview層のみに焦点を当てているので、使い始めるのも他のライブラリや既存のプロジェクに統合するのが非常に簡単です。

## NativeScript-Vueとは?

NativeScript-VueはVue.jsを使ってモバイルアプリを作成するためのNativeScriptのプラグインです。

今までにVue.jsを使ったことがあるなら、NativeScript-Vueを心地よく感じられるでしょう。

## なぜこれを使うか?

モバイルアプリを作成するには多くの方法があります。NativeScript-Vueが適していると思われるシチュエーションをいくつか示しましょう。

* **本当のネイティブiOS,ネイティブAndroidアプリが必要な時**: NativeScriptはネイティブUIコンポーネントを用いてiOSとAndroid向けのアプリを作成します。アプリはwebベースではないため、WebViewベースのアプリケーションフレームワーク固有の制限に影響を受けることはありません。また、NativeScriptは端末のネイティブ機能を結びつけるための[広範囲にわたるプラグイン](http://market.nativescript.org/)を提供しています。なので、もしiOSかAndroidのAPIや機能をアプリの一部として組み込みたい場合でも、NativeScriptによって実現することが可能です。
* **あなたがJavaScriptを大好きな場合**: NativeScriptであれば、Objective-Cでも、Swiftでも、JavaでもなくJavaScriptでモバイルアプリを作ることができます。JavaScriptが好きならば、webアプリ、Nodejsを使ったアプリと同じ言語でiOSとAndroid向けのネイティブアプリを書くことをきっと気にいるはずです。
* **あなたがVueを大好きな場合**: VueはView層へのシンプルなアプローチで知られています。Vueでwebアプリを作るのが好きならば、データバインディングやイベントハンドリングといった共通のタスクを同じシンタックスを用いることができるた、すぐにNativeScript-Vueを心地よく感じることでしょう。

## でも、何か問題があるんじゃない?

すでにVueを使った経験があるならば、NativeScript-Vueをうまく使うためには知ることは2つあります。

* **NativeScript CLIで動作するということ**: NativeScriptはiOSAndroid向けのアプリを作成するフレームワークであり、webアプリを作るものではありません。NativeScript CLIのコマンドと、iOSシミュレータやAndroidバーチャルデバイスをどのように扱うかを学ぶ必要があります。
* **NativeScript UI コンポーネントを知ること**: NativeScriptはネイティブUIコンポーネントを使用するため、HTMLのような `<div>` や `<span>`といった要素が存在しません。その代わりにインターフェースを描写するために使用できる[コンポーネント群](https://docs.nativescript.org/ui/components)を知る必要があります。

でも、心配しないでください。NativeScript-Vueで開発するには学習曲線がありますが、多くのことがiOSやAndroidについて一から学ぶよりもかなり容易であることに気づくでしょう。結局、あなたはソースコードをJavaScriptとVueで書くことになるのです。

## 関わりたい?

NativeScript-Vueはオープンソースのプロジェクトで、コントリビューターを熱烈に歓迎しています。ぜひ[project’s contributing guide](https://github.com/nativescript-vue/nativescript-vue/blob/master/CONTRIBUTING.md)を見て、 ** [NativeScript Community Slack](https://developer.telerik.com/wp-login.php?action=slack-invitation)の#vueチャンネルに入ってください。**.

## このプロジェクトはどの程度安定しているのか?

NativeScript-Vueは比較的、基本仕様の実装完了といったところです。 現在、私達は2つの事柄に焦点を当てています:

* **ドキュメンテーション**: NativeScript-Vueで行える全てのことが、このサイトのドキュメントに載っているわけではありません。私達は活発にサンプルとユースケースをこのサイトに追加していて、貢献は大歓迎です。 
* **サンプルアプリ**: 私達は、このプラグインの性能を試してフィードバックをくれる人を探しています。もし興味があれば、 [NativeScript Community Slack](https://developer.telerik.com/wp-login.php?action=slack-invitation) に入って#vueチャンネルで知らせてください。
