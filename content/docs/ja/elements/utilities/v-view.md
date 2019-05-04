---
title: v-view
contributors: [Spice-Z]
---

`v-view`ディレクティブは現在のエレメントの`View`を親プロパティとして設定します。

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

### 例: `<RadSideDrawer>`

`<RadSideDrawer>`コンポーネントは[Progress NativeScript UI](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/getting-started)パッケージの一部です。

`<RadSideDrawer>`コンポーネントは`View`インスタンスに設定するための`drawerContent`と`mainContent`プロパティを要求します。`v-view`ディレクティブを使うことで、これを数行で実現できます:

```HTML
<RadSideDrawer>
  <StackLayout ~drawerContent />
  <StackLayout ~mainContent />
</RadSideDrawer>
```

`v-view`を使わない場合、エラーを引き起こしがちなうんざりする手順を踏まなければなりません:

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