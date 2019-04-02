---
title: Slider
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider
contributors: [Spice-Z]

---

`<Slider>`は指定された数値の範囲内で値をスライダー式で入力するためのUIコンポーネントです。

---

```html
<Slider value="80" @valueChange="onValueChanged" />
```

`<Slider>`は`v-model`による双方向バインディングを提供しています:

```html
<Slider v-model="value" />
```

[> screenshots for=Slider <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `value` | `Number` | 現在選択sれているスライダーの値を取得・設定します。<br/>デフォルトの値: `0`。
| `minValue` | `Number` | スライダーの値の最小値を取得・設定します。<br/>デフォルトの値: `0`。
| `maxValue` | `Number` | スライダーの値の最大値を取得・設定します。<br/>デフォルトの値: `100`。

## Events

| 名前 | 型 |
|------|-------------|
| `valueChange`| スライダーの値が変更されたときに発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.SeekBar`](https://developer.android.com/reference/android/widget/SeekBar.html) | [`UISlider`](https://developer.apple.com/documentation/uikit/uislider)
