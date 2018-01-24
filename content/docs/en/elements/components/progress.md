---
title: Progress
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress
---

The Progress widget is a visual bar indicator of a progress in a operation. It shows a bar representing the current progress of the operation.

---

```html
<progress :value="{{ someProperty }}" />
```
[> screenshots for=Progress <]

## Props

| name | type | description |
|------|------|-------------|
| `value` | `Integer` | The current level of progress out of max
| `max` | `Integer` | The maximum value that progress will use

## Events

| name | description |
|------|-------------|
| `valueChange` | Emitted when the value property changes

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.ProgressBar (indeterminate = false) | UIProgressView

---
contributors: [MisterBrownRSA]
---