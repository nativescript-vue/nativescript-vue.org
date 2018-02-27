---
title: v-view directive
contributors: [rigor789, eddyverbruggen]
---

The `v-view` directive is used to set the current elements `View` as a parent property.

### Usage

```html
<Child v-view:parentPropertyName />
<!-- same as: -->
<Child ~parentPropertyName />
```

```html
<Child v-view:parentArrayPropertyName.array />
<!-- same as: -->
<Child ~parentArrayPropertyName.array />
```

---

There are many `NativeScript` components that require setting a property to a valid `View` instance, which is not possible using a template. Using this directive saves time by not having to register new directives / references to parent elements, and setting the parent properties manually.

To better illustrate what this directive does, let's take a look at the `RadSideDrawer` component from the [Progress NativeScript UI](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/getting-started) package:

The `RadSideDrawer` component expects the `drawerContent` and `mainContent` properties to be set to `View` instances,
using the `v-view` directive it would look like this:

```html
<RadSideDrawer>
  <StackLayout ~drawerContent />
  <StackLayout ~mainContent />
</RadSideDrawer>
```

Without this directive you would have to do something like:

```html
<RadSideDrawer ref="drawer">
  <StackLayout ref="drawerContent" />
  <StackLayout ref="mainContent" />
</RadSideDrawer>
```

```javascript
{
  mounted() {
    this.$refs.drawer.drawerContent = this.$refs.drawerContent.nativeView
    this.$refs.drawer.mainContent = this.$refs.mainContent.nativeView
  }
}
```

Which can get tedious and is very error prone.
