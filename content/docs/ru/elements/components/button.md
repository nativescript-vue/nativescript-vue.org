---
title: Button
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
contributors: [MisterBrownRSA, rigor789, eddyverbruggen, ikoevska]
---

`<Button>` is a UI component that displays a button which reacts to a user gesture.

For more information about the available gestures, see [Gestures in the official NativeScript documentation](https://docs.nativescript.org/ui/gestures).

---

```html
<Button text="Button" @tap="onButtonTap" />
```

[> screenshots for=Button <]

## Props

| Name | Type | Description |
|------|------|-------------|
| `text` | `String` | Sets the label of the button.
| `textWrap` | `Boolean` | Gets or sets whether the widget wraps the text of the label. Useful for longer labels. Default value is `false`.

## Events

| Name | Description |
|------|-------------|
| `tap` | Emitted when the button is tapped.

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.Button`](https://developer.android.com/reference/android/widget/Button.html) | [`UIButton`](https://developer.apple.com/documentation/uikit/uibutton)
