---
title: Page
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_page_.page
contributors: [rigor789, ikoevska]
---

`<Page>` is a UI component that represents an application screen. NativeScript apps typically consist of one or more `<Page>` that wrap content such as an [`<ActionBar>`](/en/docs/elements/action-bar/action-bar) and other UI widgets.

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
| `actionBarHidden` | `Boolean` | Shows or hides the `<ActionBar>` for the page.<br/>Default value: `false`.
| `backgroundSpanUnderStatusBar` | `Boolean` | Gets or sets whether the background of the page spans under the status bar.<br/>Default value: `false`.
| `androidStatusBarBackground` | `Color` | (Android-only) Gets or sets the color of the status bar on Android devices.
| `enableSwipeBackNavigation` | `Boolean` | (iOS-only) Gets or sets whether the page can be swiped back on iOS.<br/>Default value: `true`.
| `statusBarStyle` | `String` | Gets or sets the style of the status bar.<br/>Valid values:<br/>`light`,<br/>`dark`.

## Events

| Name | Description |
|------|-------------|
| `navigatedFrom` | Emitted after the app has navigated away from the current page.
| `navigatedTo` | Emitted after the app has navigated to the current page.
| `navigatingFrom` | Emitted before the app has navigated away from the current page.
| `navigatingTo` | Emitted before the app has navigated to the current page.

## Native component

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.GridLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/GridLayout.java) | [`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller)