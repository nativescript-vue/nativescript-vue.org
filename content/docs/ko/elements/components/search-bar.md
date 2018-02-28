---
title: 검색바 (SearchBar)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar
contributors: [qgp9]
---

검색바(SearchBar) 는 검색 커리를 입력하고 검색 제공자에게 요청을 보낼수 있는 사용자 인터페이스를 제공합니다.

---

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
```

**노트**: 이 컴포넌트는 `v-model` 을 이용한 양방향(two-way) 바인딩을 지원합니다:

```html
<SearchBar v-model="searchQuery" />
```

[> screenshots for=SearchBar <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `hint` | `String` | 편집가능한 인풋 영역의 텍스트 플레이스홀더
| `text` | `String` | 검색 인풋의 value

## ## 이벤트

| 이름 | 설명 |
|------|-------------|
| `textChange`| 텍스트가 바뀔때 발생.
| `submit`| 검색 인풋이 submit 될때 발생

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.SearchView	| UISearchBar
