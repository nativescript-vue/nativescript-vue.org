---
title: ActivityIndicator
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator
contributors: [MisterBrownRSA, rigor789]
---

The ActivityIndicator component adds a progress indicator that indicates that something is running in the background, prompting the user to pause.

---

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

[> screenshots for=ActivityIndicator <]

## Props

| name | type | description |
|------|------|-------------|
| `busy` | `Boolean` | When `true`, the indicator is active.

## Events

| name | description |
|------|-------------|
| `busyChange`| Emitted when the `busy` property is changed.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.ProgressBar (indeterminate = true)	| UIActivityIndicatorView
