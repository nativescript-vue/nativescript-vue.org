---
title: TextView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [MisterBrownRSA, rigor789, TheOriginalJosh, eddyverbruggen]
---

The TextView component represents an editable multi-line box.
The component can also be used to show any content readonly by setting the `editable` property to `false`.

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
| `text` | `String` | The value of the TextView.
| `hint` | `String` | The placeholder text.
| `editable` | `Boolean` | When `true`, the user can edit the value of the TextView.
| `maxLength` | `Number` | Limits input to a certain number of characters.
| `keyboardType` | `KeyboardType` | Shows a custom keyboard for easier text input. Can be one of `datetime`, `phone`, `number`, `url`, or `email`.
| `returnKeyType` | `ReturnKeyType` | The label of the return key. Can be one of `done`, `next`, `go`, `search`, or `send`.

## Events

| name | description |
|------|-------------|
| `textChange`| Emitted when the text changes.
| `returnPress`| Emitted when the return key is pressed.
| `focus`| Emitted when the textview is in focus.
| `blur`| Emitted when the textview leaves focus.

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.EditText | UITextView
