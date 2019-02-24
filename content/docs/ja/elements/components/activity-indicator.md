---
title: ActivityIndicator
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator
contributors: [Spice-Z]
---

`<ActivityIndicator>`はバックグランドで処理中であることをユーザーに示すUIコンポーネントです。

---

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

[> screenshots for=ActivityIndicator <]

## Props

| 名前 | 型 |説明 |
|------|------|-------------|
| `busy` | `Boolean` | インディケーターがアクティブかどうかを取得・設定します。値が`true`のときにインディケーターがアクティブになります。

## Events

| 名前 | 説明 |
|------|-------------|
| `busyChange`| `busy`プロパティが変更されたときに通達されます。

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = true)](https://developer.android.com/reference/android/widget/ProgressBar.html)	| [`UIActivityIndicatorView`](https://developer.apple.com/documentation/uikit/uiactivityindicatorview)