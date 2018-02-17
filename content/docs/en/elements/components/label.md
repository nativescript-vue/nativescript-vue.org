---
title: Label
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_label_.label
contributors: [MisterBrownRSA, rigor789, eddyverbruggen]
---

The Label component is used to display read-only text.

**Note**: This `<Label>` is **not** the same as the HTML `<Label>`.

---

```html
<Label text="Label" />
```

[> screenshots for=Label <]

### FormattedString

If you need to style certain parts of the text differently, you can use a combination of a `FormattedString` and `Span` elements.

Example:
```html
<Label textWrap="true">
  <FormattedString>
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</Label>
```

## Props

| name | type | description |
|------|------|-------------|
| `text` | `String` | The text of the label.
| `textWrap` | `boolean` | Determines whether or not the Label wraps text. Default `false`.

## Native Component

| Android | iOS |
|---------|-----|
| android.widget.TextView | UILabel
