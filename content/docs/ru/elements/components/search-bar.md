---
title: SearchBar/Строка поиска
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar
contributors: [MisterBrownRSA, rigor789, ikoevska]
---

`<SearchBar>` - визуальный компонент, который позволяет пользовательский интерфейс для ввода поисковых запросов и отправки запросы поисковому провайдеру.

---

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
```

`<SearchBar>` обеспечивает двустороннее связывание, используя `v-model`.

```html
<SearchBar v-model="searchQuery" />
```

[> screenshots for=SearchBar <]

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `hint` | `String` | Получает или задает текст placeholder'a для поля ввода.
| `text` | `String` | Получает или задает значение поискового запроса.
| `textFieldBackgroundColor` | `Color` | Получает или задает цвет фона для поля ввода.
| `textFieldHintColor` | `Color` | Получает или задает цвет текста для placeholder.

## События

| Имя | Описание |
|------|-------------|
| `textChange` | Срабатывает для изменении текста.
| `submit` | Срабатывает при подтверждении (submit) в поле ввода.
| `clear` | Срабатывает, когда текущее значение поля ввода очищено с помощью кнопки **X**, расположенно в поле ввода .

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.SearchView`](https://developer.android.com/reference/android/widget/SearchView.html)	| [`UISearchBar`](https://developer.apple.com/documentation/uikit/uisearchbar)
