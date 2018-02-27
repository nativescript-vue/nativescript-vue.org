---
title: Progress
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress
contributors: [MisterBrownRSA, rigor789, eddyverbruggen]
---

The Progress component is a bar for visually indicating progress.

---

```html
<Progress :value="currentProgress" />
```

[> screenshots for=Progress <]

## Props

| name | type | description |
|------|------|-------------|
| `value` | `Number` | The current value of progress out of max.
| `maxValue` | `Number` | The maximum value of the progress. Default `100`.

## Events

| name | description |
|------|-------------|
| `valueChange` | Emitted when the value property changes.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.ProgressBar (indeterminate = false) | UIProgressView
