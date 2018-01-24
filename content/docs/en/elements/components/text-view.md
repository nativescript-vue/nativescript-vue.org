---
title: TextView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [MisterBrownRSA]
---

The TextView component represents an editable multi-line box.
The component can also be used show any content by setting the `editable` property to `false`.

---

```html
<TextView editable="false">
   <FormattedString>
       <Span text="This is a text view that uses attributed text. You can use text attributes such as "></Span>
       <Span text="bold, " fontWeight="Bold"></Span>
       <Span text="italic " fontStyle="Italic"></Span>
       <Span text="and "></Span>
       <Span text="underline." textDecoration="Underline"></Span>
   </FormattedString>
</TextView>
```

[> screenshots for=TextField <]

## Props

| name | type | description |
|------|------|-------------|
| `editable` | `Boolean` | Set to `true` if you'd like the user to be able to edit the content

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.EditText | UITextView