---
title: SegmentedBar
apiRef: http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html
contributors: [MisterBrownRSA]
---

Using a SegementedBar gives you a simple way to define a collection of tabbed views for discrete selection. 

---

```html
<SegmentedBar :items="segmentedBarItems" v-model="selectedBarIndex" @selectedIndex="onSelectedIndexChange" />
```

[> screenshots for=SegmentedBar <]

## Props

| name | type | description |
|------|------|-------------|
| `items` | `Array<SegmentedBarItem>` | Adds an item to the segmented
| `selectedBarIndex` | `Number` | The default index for the selected option

## Events

| name | description |
|------|-------------|
| `selectedIndexChange`| Emitted when the an item on the segmented bar is tapped

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.TabHost | UISegmentedControl