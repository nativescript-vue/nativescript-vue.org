---
title: Progress
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress
contributors: [MisterBrownRSA, rigor789, eddyverbruggen, ikoevska]
---

`<Progress>`はタスクの進捗を示すバーを表示するUIコンポーネントです。 

こちらもご覧ください: [ActivityIndicator](/en/docs/elements/components/activity-indicator).

---

```html
<Progress :value="currentProgress" />
```

[> screenshots for=Progress <]

## Props

| 名前 | 型 | 説明 |
|------|------|-------------|
| `value` | `Number` | プログレスバーの現在の値を取得・設定します。値は0から`maxValue`までになる必要があります。
| `maxValue` | `Number` | プログレスバーの最高値を取得・設定します。<br/>デフォルトの値: `100`.

## Events

| 名前 | 説明 |
|------|-------------|
| `valueChange` |`value`プロパティが変更した時に発火します。

## Native Component

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = false)](https://developer.android.com/reference/android/widget/ProgressBar.html) | [`UIProgressView`](https://developer.apple.com/documentation/uikit/uiprogressview)
