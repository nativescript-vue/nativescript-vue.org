---
title: SegmentedBar
apiRef: http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html
contributors: [MisterBrownRSA, rigor789, eddyverbruggen]
---

The SegementedBar component gives you a simple way to display a collection of tabbed views for discrete selection.

---

```html
<SegmentedBar :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="onSelectedIndexChange" />
```

**Note**: This component supports two-way data binding using `v-model`:

```html
<SegmentedBar :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=SegmentedBar <]

## Props

| name | type | description |
|------|------|-------------|
| `items` | `Array<SegmentedBarItem>` | A list of items to be displayed in the segmented bar.
| `selectedIndex` | `Number` | The index of the selected item.
| `selectedBackgroundColor` | `Color` | Set the background color of the selected item. To set the background color of the entire bar, use `backgroundColor`.

## Events

| name | description |
|------|-------------|
| `selectedIndexChange`| Emitted when the an item on the segmented bar is tapped

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.TabHost | UISegmentedControl
