---
title: SearchBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar
contributors: [Spice-Z]
---

`<SearchBar>`ユーザーが検索ワードを入力して検索エンジンにリクエストを送信するためのUIコンポーネントです。

---

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
```

`<SearchBar>`は`v-model`による双方向バインディングを提供します。

```html
<SearchBar v-model="searchQuery" />
```

[> screenshots for=SearchBar <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `hint` | `String` | インプットエリアにプレースホルダーを取得・設定します。
| `text` | `String` | 検索クエリの値を取得・設定します。
| `textFieldBackgroundColor` | `Color` | インプットエリアの背景色を取得・設定します。
| `textFieldHintColor` | `Color` | プレースホルダーのテキストの色を取得・設定します。

## Events

| 名前 | 説明 |
|------|-------------|
| `textChange` | テキストが変更された際に発火します。
| `submit` | クエリが送信された際に発火します。
| `clear` | 現在の検索クエリが検索バーの**X**ボタンによって消去されたときに発火します。

## Native Component

| Android | iOS |
|---------|-----|
| [`android.widget.SearchView`](https://developer.android.com/reference/android/widget/SearchView.html)	| [`UISearchBar`](https://developer.apple.com/documentation/uikit/uisearchbar)
