---
title: ListView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [MisterBrownRSA]
---

The ListView shows items in a vertically scrolling list. You can set a v-template to specify how each item in the list should be displayed.

---

```javascript
const Vue = require("./nativescript-vue");

new Vue({
  data() {
    return {
      countries: [
        { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
        { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
      ],
    }
  },
  methods: {
    onItemTap: function (args) {
      console.log('Item with index: ' + args.index + ' tapped');
    },
  },
}).$start();

<ListView class="list-group" :items="countries" @itemTap="onItemTap" style="height:1250px">
  <v-template scope="item">
    <flexbox-layout flexDirection="row" class="list-group-item">
      <image :src="item.imageSrc" class="thumb img-circle"></image>
      <label :text="item.name" class="list-group-item-heading" style="width: 60%"></label>
    </flexbox-layout>
  </v-template>
</ListView>
```

[> screenshots for=ListView <]


## Props

| name | type | description |
|------|------|-------------|
| `items` | `Array<string>` | Collection of Strings or Objects to iterate through

## Events

| name | description |
|------|-------------|
| `itemTap`| Emitted when any of the child components are tapped

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.ListView | UITableView