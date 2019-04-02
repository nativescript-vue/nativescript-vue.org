---
title: Switch
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [Spice-Z]
---

`<Switch>`は2つの状態を交互に切り替えるためのUIコンポーネントです。

デフォルトの状態は`false`もしくはOFFです。

---

```html
<Switch checked="true" />
```

`<Switch>`は`v-model`による双方向バインディングを提供しています。

```html
<Switch v-model="itemEnabled" />
```

[> screenshots for=Switch <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `checked` | `Boolean` | スイッチで選択されている値を取得・設定します。<br/>デフォルトの値: `false`.

## Events

| 名前 | 型 |
|------|-------------|
| `checkedChange`| スイッチで選択されている値が変更された時に発火します。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.Switch`](https://developer.android.com/reference/android/widget/Switch.html) | [`UISwitch`](https://developer.apple.com/documentation/uikit/uiswitch)
