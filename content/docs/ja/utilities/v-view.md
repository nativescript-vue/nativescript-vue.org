---
title: v-view
contributors: [tai-hatake]
---

`v-view`を使用すると、現在の`View`を親要素として設定できます。

---

```HTML
<Child v-view:parentPropertyName />
<!-- same as: -->
<Child ~parentPropertyName />
```

```HTML
<Child v-view:parentArrayPropertyName.array />
<!-- same as: -->
<Child ~parentArrayPropertyName.array />
```

---

### `<RadSideDrawer>`を使った例

`<RadSideDrawer>`コンポーネントは、[Progress NativeScript UI](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/getting-started)パッケージの一つ。

`<RadSideDrawer>` コンポーネントは、`drawerContent`と`mainContent`を`View`インスタンスに設定する必要があります。
`v-view`を使えば、数行のコードで記述できます。

#### `v-view`を使った場合

```HTML
<RadSideDrawer>
  <StackLayout ~drawerContent />
  <StackLayout ~mainContent />
</RadSideDrawer>
```

#### `v-view`を使わなかった場合

`v-view`無しの場合、より冗長でエラーの発生しやすい記述が必要です。

```HTML
<RadSideDrawer ref="drawer">
  <StackLayout ref="drawerContent" />
  <StackLayout ref="mainContent" />
</RadSideDrawer>
```

```JavaScript
{
  mounted() {
    this.$refs.drawer.nativeView.drawerContent = this.$refs.drawerContent.nativeView
    this.$refs.drawer.nativeView.mainContent = this.$refs.mainContent.nativeView
  }
}
```
