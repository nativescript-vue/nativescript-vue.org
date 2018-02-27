---
title: Button
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
contributors: [MisterBrownRSA, rigor789, eddyverbruggen]
---

The Button component is used to display a button that can react to a tap event.

The interaction is not limited to the tap event only, [read more about all the available gestures in NativeScript in the official documentation](https://docs.nativescript.org/ui/gestures).

---

```html
<Button text="Button" />
```

[> screenshots for=Button <]

## Props

| name | type | description |
|------|------|-------------|
| `text` | `String` | The text to be shown on the button.
| `textWrap` | `boolean` | Determines whether or not the Button wraps text. Default `false`.

## Events

| name | description |
|------|-------------|
| `tap` | Emitted when the button is pressed.

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.Button | UIButton
