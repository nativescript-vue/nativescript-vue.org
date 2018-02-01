---
title: TextView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [MisterBrownRSA, rigor789, TheOriginalJosh]
---

The TextView component represents an editable multi-line box.
The component can also be used show any content by setting the `editable` property to `false`.

---

```html
<TextView text="Multi\nLine\nText" />
```

**Note**: This component supports two-way data binding using `v-model`:

```html
<TextView v-model="textViewValue" />
```

### Displaying multi-line text with different styling

```html
<TextView editable="false">
  <FormattedString>
    <Span text="You can use text attributes such as " />
    <Span text="bold, " fontWeight="Bold" />
    <Span text="italic " fontStyle="Italic" />
    <Span text="and " />
    <Span text="underline." textDecoration="Underline" />
  </FormattedString>
</TextView>
```

[> screenshots for=TextField <]

## Props

| name | type | description |
|------|------|-------------|
| `editable` | `Boolean` | Wen `true`, the user can edit the value of the TextView.
| `text` | `String` | The value of the TextView.
| `hint` | `String` | The placeholder text.

## Events

| name | description |
|------|-------------|
| `textChange`| Emitted when the text changes.
| `focus`| Emitted when the text view is in focus.
| `blur`| Emitted when the text view leaves focus.

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.EditText | UITextView
