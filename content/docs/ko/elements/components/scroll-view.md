---
title: ScrollView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors: [eddyverbruggen]
---

The ScrollView component allows you to show scrollable content.

---

```html
<ScrollView orientation="horizontal">
  <StackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </StackLayout>
</ScrollView>
```

[> screenshots for=ScrollView <]

## Props

| name | type | description |
|------|------|-------------|
| `orientation` | `String` | Either `horizontal` or `vertical`. Default `vertical`.

## Events

| name | description |
|------|-------------|
| `scroll`| Emitted when a scroll event occurs
