---
title: TabView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview
contributors: [MisterBrownRSA, rigor789, eddyverbruggen, ikoevska, kharysharpe, ramsesmoreno]
---

`<TabView>` is a navigation component that shows content grouped into tabs and lets users switch between tabs.

---

```html
<TabView :selectedIndex="selectedIndex">
  <TabViewItem title="Tab 1">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```

**NOTE:** Currently, `TabViewItem` expects a single child element. In most cases, you might want to wrap your content in a layout.

[> screenshots for=TabView <]

#### Adding icons to tabs

```html
<TabView :selectedIndex="selectedIndex" iosIconRenderingMode="alwaysOriginal">
  <TabViewItem title="Tab 1" iconSource="~/images/icon.png">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2" iconSource="~/images/icon.png">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```
**NOTE:** You can use images for tab icons instead of icon fonts. For more information about how to control the size of icons, see [Working with image from resource folders](https://docs.nativescript.org/ui/image-resources).

## Props

| Name | Type | Description |
|------|------|-------------|
| `selectedIndex` | `Number` | Gets or sets the currently selected tab. Default is `0`.
| `tabTextColor` | `Color` | (Style property) Gets or sets the text color of the tabs titles.
| `tabBackgroundColor` | `Color` | (Style property) Gets or sets the background color of the tabs.
| `selectedTabTextColor` | `Color` | (Style property) Gets or sets the text color of the selected tab title.
| `androidTabsPosition` | `String` | Sets the position of the TabView in Android platform<br/>Valid values: `top` or `bottom`.

## Events

| Name | Description |
|------|-------------|
| `selectedIndexChange` | Emits an event object containing a `value` property with the index of the tapped `<TabViewItem>`.

## Native component

| Android | iOS |
|---------|-----|
| [`android.support.v4.view.ViewPager`](https://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller)
