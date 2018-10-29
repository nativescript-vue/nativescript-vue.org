---
title: ScrollView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors: [eddyverbruggen,ikoevska]
---

`<ScrollView>` is a UI component that shows a scrollable content area. Content can be scrolled vertically or horizontally.

---

```html
<GridLayout rows="auto, *">
    <ScrollView row="0" orientation="horizontal">
        <StackLayout orientation="horizontal">
            <Label text="h1" class="m-10" />
            <Label text="h2" class="m-10" />
            <Label text="h3" class="m-10" />
            <Label text="h4" class="m-10" />
            <Label text="h5" class="m-10" />
            <Label text="h6" class="m-10" />
            <Label text="h7" class="m-10" />
            <Label text="h8" class="m-10" />
            <Label text="h9" class="m-10" />
            <Label text="h10" class="m-10" />
            <Label text="h11" class="m-10" />
            <Label text="h12" class="m-10" />
        </StackLayout>
    </ScrollView>
    <ScrollView row="1" horizontalAlignment="center">
        <StackLayout>
            <Label text="v1" class="m-10" />
            <Label text="v2" class="m-10" />
            <Label text="v3" class="m-10" />
            <Label text="v4" class="m-10" />
            <Label text="v5" class="m-10" />
            <Label text="v6" class="m-10" />
            <Label text="v7" class="m-10" />
            <Label text="v8" class="m-10" />
            <Label text="v9" class="m-10" />
            <Label text="v10" class="m-10" />
            <Label text="v11" class="m-10" />
            <Label text="v12" class="m-10" />
            <Label text="v13" class="m-10" />
            <Label text="v14" class="m-10" />
            <Label text="v15" class="m-10" />
            <Label text="v16" class="m-10" />
            <Label text="v17" class="m-10" />
            <Label text="v18" class="m-10" />
            <Label text="v19" class="m-10" />
            <Label text="v20" class="m-10" />
            <Label text="v21" class="m-10" />
            <Label text="v22" class="m-10" />
        </StackLayout>
    </ScrollView>
</GridLayout>
```

[> screenshots for=ScrollView <]

## Props

| name | type | description |
|------|------|-------------|
| `orientation` | `String` | Gets or sets the direction in which the content can be scrolled: `horizontal` or `vertical`.<br/>Default value: `vertical`.
| `scrollBarIndicatorVisible` | `Boolean` | Specifies if the scrollbar is visible.<br/>Default value: `true`.

## Events

| Name | Description |
|------|-------------|
| `scroll` | Emitted when a scroll event occurs.

## Native component

| Android | iOS |
|---------|-----|
| [`android.view`](https://developer.android.com/reference/android/view/View.html) | [`UIScrollView`](https://developer.apple.com/documentation/uikit/uiscrollview)
