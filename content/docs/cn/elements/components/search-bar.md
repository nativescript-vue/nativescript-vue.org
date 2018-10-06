---
title: SearchBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar
contributors: [nuochong]
---

`<SearchBar>` 是一个UI组件，提供用户界面，用于输入搜索查询和向搜索提供程序提交请求。

---

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
```

`<SearchBar>` 使用提供双向数据绑定 `v-model`。

```html
<SearchBar v-model="searchQuery" />
```

[> screenshots for=SearchBar <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `hint` | `String` | 获取或设置输入区域的占位符文本。
| `text` | `String` | 获取或设置搜索查询的值。
| `textFieldBackgroundColor` | `Color` | 获取或设置输入区域的背景颜色。
| `textFieldHintColor` | `Color` | 获取或设置占位符文本的颜色。

## 活动

| 名称 | 描述 |
|------|-------------|
| `textChange` | 文本更改时发出。
| `submit` | 提交搜索输入时发出。
| `clear` | 通过输入区域中的 **X** 按钮清除当前搜索输入时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.SearchView`](https://developer.android.com/reference/android/widget/SearchView.html)	| [`UISearchBar`](https://developer.apple.com/documentation/uikit/uisearchbar)
