---
title: ActionBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar
contributors: [rigor789, eddyverbruggen]
---

The ActionBar component is a NativeScript abstraction for the Android ActionBar and iOS NavigationBar.

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
| `title` | `String` | The title to be shown in the ActionBar.
| `android.icon` | `String` | The icon to be shown on Android.
| `android.iconVisibility` | `String` | Sets when the icon is visible.
| `flat` | `boolean` | Removes the border and iOS color filter. Default `false`.
