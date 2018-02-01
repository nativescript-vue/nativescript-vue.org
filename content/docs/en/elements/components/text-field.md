---
title: TextField
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [MisterBrownRSA, rigor789, TheOriginalJosh]

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

## Events

| name | description |
|------|-------------|
| `textChange`| Emitted when the text changes.
| `focus`| Emitted when the text field is in focus.
| `blur`| Emitted when the text field leaves focus.

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.Button | UIButton
