---
title: NavigationButton
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton
contributors: [rigor789]
---

The NavigationButton component is a NativeScript abstraction for the Android navigation button, and the iOS back button.

---

```html
<ActionBar title="My App">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
</ActionBar>
```

## Props

| name | type | description |
|------|------|-------------|
| `text` | `String` | Sets the text to be shown on iOS.
| `android.systemIcon` | `String` | The icon to be shown on Android.

## Events

| name | description |
|------|-------------|
| `tap`| Emitted when the NavigationButton has been tapped.
