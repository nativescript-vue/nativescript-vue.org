---
title: TextField
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [MisterBrownRSA, rigor789, TheOriginalJosh, eddyverbruggen]

---

The TextField component creates an editable single-line box.

---

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

**Note**: This component supports two-way data binding using `v-model`:

```html
<TextField v-model="textFieldValue" />
```

[> screenshots for=TextField <]

## Props

| name | type | description |
|------|------|-------------|
| `text` | `String` | The value of the TextField.
| `hint` | `String` | The placeholder text.
| `editable` | `Boolean` | When `true`, the user can edit the value of the TextField.
| `maxLength` | `Number` | Limits input to a certain number of characters.
| `secure` | `Boolean` | Hides the entered text when `true`. Default `false`.
| `keyboardType` | `KeyboardType` | Shows a custom keyboard for easier text input. Can be one of `datetime`, `phone`, `number`, `url`, or `email`.
| `returnKeyType` | `ReturnKeyType` | The label of the return key. Can be one of `done`, `next`, `go`, `search`, or `send`.

## Events

| name | description |
|------|-------------|
| `textChange`| Emitted when the text changes.
| `returnPress`| Emitted when the return key is pressed.
| `focus`| Emitted when the textfield is in focus.
| `blur`| Emitted when the textfield loses focus.

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.EditText | UITextField
