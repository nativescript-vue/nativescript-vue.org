---
title: ScrollView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors:
  - eddyverbruggen
  - ikoevska
---
`<ScrollView>` is a UI component that shows a scrollable content area. Content can be scrolled vertically or horizontally.

* * *

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

| name                        | type      | description                                                                                                               |
| --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| `orientation`               | `String`  | Gets or sets the direction in which the content can be scrolled: `horizontal` or `vertical`.  
Default value: `vertical`. |
| `scrollBarIndicatorVisible` | `Boolean` | Specifies if the scrollbar is visible.  
Default value: `true`.                                                           |

## Events

| Name     | Description                         |
| -------- | ----------------------------------- |
| `scroll` | Emitted when a scroll event occurs. |

## Native component

| Android                                                                          | iOS                                                                            |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`android.view`](https://developer.android.com/reference/android/view/View.html) | [`UIScrollView`](https://developer.apple.com/documentation/uikit/uiscrollview) |