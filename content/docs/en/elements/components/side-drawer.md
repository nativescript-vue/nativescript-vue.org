---
title: SideDrawer
apiRef: https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/overview
contributors: [MisterBrownRSA, rigor789, eddyverbruggen, ikoevska, sombriks]
---

`<RadSideDrawer>` is a UI side drawer component which plays a navigation role on application structure.

## Installing the side drawer

```shell
$ tns plugin add nativescript-ui-sidedrawer
```

After that, you need to register it as a vue component:

```javascript
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);
```

You can now use the component on your `.vue` file.
## Basic use
```html
<Page>
  <ActionBar title="Hello side drawer!">
    <ActionItem text="Open" @tap="$refs.drawer.nativeView.showDrawer()"/>
  </ActionBar>
  <GridLayout rows="*">
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent>
        <StackLayout height="56" style="text-align: center; vertical-align: center;">
          <Label text="Navigation Menu"/>
        </StackLayout>
        <StackLayout>
          <Button text="Friends" @tap="$navigateTo('Friends')"/>
          <Button text="Posts" @tap="$navigateTo('Posts')"/>
        </StackLayout>
      </StackLayout>
      <StackLayout ~mainContent>
        <Label text="This is the main content for the current Page!"
          textWrap="true" fontSize="13" padding="10"/>
      </StackLayout>
    </RadSideDrawer>
  </GridLayout>
</Page>
```

## Props

| Name          | Type | Description                                              |
| ------------- | ---- | -------------------------------------------------------- |
| `drawerContent` | `View` | The visual elements displayed in the side drawer. |
| `mainContent`   | `View` | The visual elements displayed in the host view where the drawer is shown. |
