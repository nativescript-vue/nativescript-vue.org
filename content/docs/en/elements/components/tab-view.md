---
title: TabView
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_tab_view_
---

The Button component is used to display a button that can react to a tap event.

---

```html
<tab-view height="300px" :selectedIndex="selectedIndex" >
  <tab-view-item title="Tab 1">
    <label text="Label in Tab 1"></label>
  </tab-view-item>
  <tab-view-item title="Tab 2">
    <label text="Label in Tab 2"></label>
  </tab-view-item>
</tab-view>
```

**NOTE** Height must be explicitly set on `<tab-view>`

[> screenshots for=TabView <]

## Props

| name | type | description |
|------|------|-------------|
| `selectedIndex` | `Number` | The currently selected tab. Default is `0`

## Events

| name | description |
|------|-------------|
| `selectedIndexChange`| Emitted when one of the tab-view-item components are tapped

## Native Component
| Android | iOS |
|---------|-----|
| android.support.v4.view.ViewPager	 | UITabBarController

---
contributors: [MisterBrownRSA]
---