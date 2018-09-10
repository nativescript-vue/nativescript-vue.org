---
title: Page
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_page_.page
contributors: [rigor789]
---

`<Page>` is a UI component used to wrap content and optionally show an [`<ActionBar>`](/en/docs/elements/action-bar/action-bar).

---

```html
<Page>
  <ActionBar title="My App" />
  <GridLayout>
    <Label text="My Content"/>
  </GridLayout>
</Page>
```

## Props

| Name | Type | Description |
|------|------|-------------|
| `actionBarHidden` | `Boolean` | Shows or hides the ActionBar.<br/>Default value: `false`
| `backgroundSpanUnderStatusBar` | `Boolean` | Gets or sets whether the background of the page spans under the status bar.<br/>Default value: `false`.
| `androidStatusBarBackground` | `Color` | Gets or sets the color of the status bar on android.
| `enableSwipeBackNavigation` | `Boolean` | Gets or sets whether the page can be swiped back on ios.<br/>Default value: `true`
| `statusBarStyle` | `String` | Gets or sets the style of the status bar.<br/>Valid values:<br/>`"light"`,<br/>`"dark"`


## Events

| Name | Description |
|------|-------------|
| `tap` | Emitted when the button is tapped.

## Native component

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.GridLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/GridLayout.java) | [`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller)
