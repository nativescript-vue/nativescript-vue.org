---
title: Switch
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [MisterBrownRSA, rigor789]
---

The Switch component allows the user to toggle between two states. 
The default state is `false` or "off".

---

```html
<Switch checked="true" />
```

**Note**: This component supports two-way data binding using `v-model`:

```html
<Switch v-model="itemEnabled" />
```

[> screenshots for=Switch <]

## Props

| name | type | description |
|------|------|-------------|
| `checked` | `Boolean` | A boolean value representing the state of the switch.

## Events

| name | description |
|------|-------------|
| `checkedChange`| Emitted when switch checked value changes.

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.Switch | UISwitch
