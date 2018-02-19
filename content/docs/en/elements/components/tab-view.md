---
title: TabView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview
contributors: [MisterBrownRSA, rigor789, eddyverbruggen]
---

The TabView component allows you to display content grouped into tabs.

---

```html
<TabView :selectedIndex="selectedIndex">
  <TabViewItem title="Tab 1">
    <label text="Content for Tab 1"></label>
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <label text="Content for Tab 2"></label>
  </TabViewItem>
</TabView>
```

[> screenshots for=TabView <]

## Props

| name | type | description |
|------|------|-------------|
| `selectedIndex` | `Number` | The currently selected tab. Default is `0`

## Events

| name | description |
|------|-------------|
| `selectedIndexChanged`| Emitted when one of the tab-view-item components are tapped

## Native Component
| Android | iOS |
|---------|-----|
| android.support.v4.view.ViewPager | UITabBarController
