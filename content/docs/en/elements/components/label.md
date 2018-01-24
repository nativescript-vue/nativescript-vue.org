---
title: Label
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_label_.label
contributors: [MisterBrownRSA]
---

The Label component is used to display read-only text.

**Note**: This `<Label>` is not the same as `<Label>` of HTML.

---

```html
<Label text="Label" />
```

[> screenshots for=Label <]

## Props

| name | type | description |
|------|------|-------------|
| `text` | `String` | The text of the label

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.TextView | UILabel

## FormattedString

If you need to style certain parts of the text differently, you can use a combination of a FormattedString and Span elements.

Example:
```html
<Label>
    <FormattedString>
        <Span text="This text has a"/>
        <Span text="red " style="color: red;"/>
        <Span text="piece of text."/>
    </FormattedString>
</Label>
```