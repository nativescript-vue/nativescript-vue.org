---
title: ActionItem
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem
contributors: [rigor789]
---

The ActionItem component is used to add additional action buttons to the ActionBar.

---

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapShare"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" />
  <ActionItem @tap="onTapDelete"
    ios.systemIcon="16" ios.position="right"
    text="delete" android.position="popup" />
</ActionBar>
```

#### Conditionally showing action items

ActionItems can be displayed based on a condition using the `v-show` directive.

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapEdit"
    v-show="!isEditing"
    ios.systemIcon="2" ios.position="right"
    android.systemIcon="ic_menu_edit" />
  <ActionItem @tap="onTapSave"
    v-show="isEditing"
    ios.systemIcon="3" ios.position="right"
    android.systemIcon="ic_menu_save" />
  <ActionItem @tap="onTapCancel"
    v-show="isEditing"
    ios.systemIcon="1"
    android.systemIcon="ic_menu_close_clear_cancel" />
</ActionBar>
```

## Props

| name | type | description |
|------|------|-------------|
| `ios.systemIcon` | `String` | Sets the icon for iOS.
| `android.systemIcon` | `String` | Sets the icon for Android.
| `ios.position` | `String` | Sets the position for iOS.<br>Possible values:<br>- `left` (default): Puts the item on the left side of the ActionBar.<br>- `right`: Puts the item on the right side of the ActionBar.
| `android.position` | `String` | Sets the position for Android.<br>Possible values:<br>- `actionBar` (default): Puts the item in the ActionBar.<br>- `popup`: Puts the item in the options menu. Items will be rendered as text.<br>- `actionBarIfRoom`: Puts the item in the ActionBar if there is room for it. Otherwise, puts it in the options menu.

## Events

| name | description |
|------|-------------|
| `tap`| Emitted when the ActionItem has been tapped.
