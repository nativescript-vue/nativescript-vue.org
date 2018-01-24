---
title: TabView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview
contributors: [MisterBrownRSA]
---

The TabView component allows multiple content inputs in a row, which are represented as tabs.

---

```html
<TabView height="300px" :selectedIndex="selectedIndex">
  <TabViewItem title="Tab 1">
    <label text="Label in Tab 1"></label>
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <label text="Label in Tab 2"></label>
  </TabViewItem>
</TabView>
```

**NOTE** Height must be explicitly set on `<TabView>`

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
| android.support.v4.view.ViewPager | UITabBarController