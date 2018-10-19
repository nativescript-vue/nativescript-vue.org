---
title: ActionBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar
contributors: [rigor789, eddyverbruggen, ikoevska]
---

`<ActionBar>` is a UI component that provides a toolbar at the top of the activity window. This is the NativeScript abstraction for the Android [app bar](https://developer.android.com/training/appbar/) and the iOS [navigation bar](https://developer.apple.com/design/human-interface-guidelines/ios/bars/navigation-bars/).

---

#### Using a title

```html
<ActionBar title="MyApp" />
```

#### Using a custom title view

```html
<ActionBar>
  <StackLayout orientation="horizontal">
    <Image src="res://icon" width="40" height="40" verticalAlignment="center" />
    <Label text="ativeScript" fontSize="24" verticalAlignment="center" />
  </StackLayout>
</ActionBar>
```

#### Setting an App Icon for Android

```html
<ActionBar title="My App" android.icon="res://icon" android.iconVisibility="always" />
```

#### Removing the border
On iOS and Android a little border is drawn at the bottom of the ActionBar.
Furthermore, the background color of the ActionBar on iOS is slightly different to what you specify
because iOS applies a filter. To remove this filter and the border, set `flat` to `true`.

```html
<ActionBar title="My App" flat="true" />
```

## Props

| name | type | description |
|------|------|-------------|
| `title` | `String` | Gets or sets the title shown in the bar.
| `android.icon` | `String` | Gets or sets the icon to be shown on Android devices.
| `android.iconVisibility` | `String` | Gets or sets icon visibility on Android devices.
| `flat` | `boolean` | Removes the border on Android and the translucency on iOS. Default value is `false`.

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html)	| [`UINavigationBar`](https://developer.apple.com/documentation/uikit/uinavigationbar)