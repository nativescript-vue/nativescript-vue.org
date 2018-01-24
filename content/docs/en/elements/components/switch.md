---
title: Switch
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [MisterBrownRSA]
---

The Switch component allows the user to toggle between two states. 
The default state is `false` or "off".

---

```html
<Switch checked="true"></Switch>
```

[> screenshots for=Switch <]

## Props

| name | type | description |
|------|------|-------------|
| `checked` | `Boolean` | Sets the active state of the component

## Events

| name | description |
|------|-------------|
| `checkedChange`| Emitted when switch checked value changes

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.Switch | UISwitch