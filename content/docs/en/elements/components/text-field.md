---
title: TextField
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [MisterBrownRSA]

---

The TextField component creates an editable single-line box.

---

```html
<TextField v-model="textFieldValue" hint="Enter text..." />
```

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

[> screenshots for=TextField <]

## Props

| name | type | description |
|------|------|-------------|
| `text` | `String` | The text value of the text-field

## Events

| name | description |
|------|-------------|
| `tap`| Emitted when the button is pressed

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.Button | UIButton