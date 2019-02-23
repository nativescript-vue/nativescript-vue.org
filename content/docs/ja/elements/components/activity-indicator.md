---
title: Aアクティビティインディケーター
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator
contributors: [Spice-Z]
---

`<ActivityIndicator>`はバックグランドで処理中であることをユーザーに示すUIコンポーネントです。

---

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

[> screenshots for=ActivityIndicator <]

## プロップス

| 名前 | 型 |説明 |
|------|------|-------------|
| `busy` | `Boolean` | インディケーターがアクティブかどうかを取得したり設定します。値が`true`のときにインディケーターがアクティブになります。

## イベント

| 名前 | 説明 |
|------|-------------|
| `busyChange`| `busy`プロパティが変更されたときに通達されます。

## ネイティブコンポーネント

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = true)](https://developer.android.com/reference/android/widget/ProgressBar.html)	| [`UIActivityIndicatorView`](https://developer.apple.com/documentation/uikit/uiactivityindicatorview)