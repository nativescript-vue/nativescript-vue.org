---
title: v-view
contributors: [nuochong]
---

 `v-view` 指令允许您将当前元素的 `View` 设置为父属性。

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

### 例： `<RadSideDrawer>`

 `<RadSideDrawer>` 组件是 [Progress NativeScript UI](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/getting-started) 包的一部分。

 `<RadSideDrawer>` 组件需要将 `drawerContent` 和 `mainContent` 属性设置为 `View` 实例。使用 `v-view` 指令，您可以使用几行代码执行此操作：

```HTML
<RadSideDrawer>
  <StackLayout ~drawerContent />
  <StackLayout ~mainContent />
</RadSideDrawer>
```

如果没有该 `v-view` 指令，您需要采用更乏味且容易出错的路线：

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