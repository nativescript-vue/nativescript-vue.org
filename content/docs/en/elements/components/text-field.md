---
title: TextField
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
---

The TextField component creates an editable single-line box.

---

```html
<text-field v-model="textFieldValue" hint="Enter text..."></text-field>
```

```html
<text-field :text="textFieldValue" hint="Enter text..."></text-field>
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

---
contributors: [MisterBrownRSA]
---