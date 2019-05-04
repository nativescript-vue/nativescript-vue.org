---
title: ListPicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
contributors: [Spice-Z]
---

`<ListPicker>`は予め設定したリストからユーザーが値を選択するUIコンポーネントです。

---

```html
<ListPicker :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="selectedIndexChanged" />
```

`<ListPicker>`は`v-model`による双方向バインディングを提供します。

```html
<ListPicker :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=ListPicker <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `items` | `Array<String>` | オプションとして表示される要素を取得・設定します。
| `selectedIndex` | `Number` | 現在選択されている要素のインデクスを取得・設定します。

## Events

| 名前 | 説明 |
|------|-------------|
| `selectedIndexChange`| Emitted when the currently selected option (index) changes.

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.NumberPicker`](https://developer.android.com/reference/android/widget/NumberPicker.html) | [`UIPickerView`](https://developer.apple.com/documentation/uikit/uipickerview)
