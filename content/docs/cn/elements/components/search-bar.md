---
title: SearchBar - 搜索栏
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar
contributors: [Pythonfo]
---

**SearchBar** 组件提供一个用于搜索的用户界面。

---

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
```

**Note**: 支持使用 `v-model` 来进行双向数据绑定：

```html
<SearchBar v-model="searchQuery" />
```

[> screenshots for=SearchBar <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `hint` | `String` | 提示文本 |
| `text` | `String` | 用户输入的字符串 |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `textChange`| 组件的 `text` 属性改变时触发 |
| `submit`| 提交搜索时触发 |

## 原生组件（Native Component）

| Android | iOS |
|---------|-----|
| android.widget.SearchView	| UISearchBar |
