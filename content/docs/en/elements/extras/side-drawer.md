---
title: SideDrawer
apiRef: https://docs.telerik.com/devtools/nativescript-ui/Controls/Vue/SideDrawer/overview
contributors: [sombriks]
---

`<RadSideDrawer>` is not available with the core NativeScript installation. You need to add it as a plugin to your project.

## Installing the side drawer

```shell
tns plugin add nativescript-ui-sidedrawer
```

After that, you need to register it as a vue component:

```javascript
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);
```

You can do that inside a `.vue` file or inside the `app.js` which bootstraps your NativeScript-Vue application.

## Basic use

You can now use the component in your `.vue` file.

```html
<Page>
  <ActionBar title="Hello side drawer!">
    <ActionItem text="Open" @tap="$refs.drawer.nativeView.showDrawer()" />
  </ActionBar>
  <GridLayout rows="*">
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent>
        <StackLayout height="56" style="text-align: center; vertical-align: center;">
          <label text="Navigation Menu" />
        </StackLayout>
        <StackLayout>
          <button text="Friends" @tap="$navigateTo('Friends')" /> <button text="Posts" @tap="$navigateTo('Posts')" />
        </StackLayout>
      </StackLayout>
      <StackLayout ~mainContent>
        <label text="This is the main content for the current Page!" textWrap="true" fontSize="13" padding="10" />
      </StackLayout>
    </RadSideDrawer>
  </GridLayout>
</Page>
```

[> screenshots for=SideDrawer <]

## Props

| Name            | Type   | Description                                                               |
| --------------- | ------ | ------------------------------------------------------------------------- |
| `drawerContent` | `View` | The visual elements displayed in the side drawer.                         |
| `mainContent`   | `View` | The visual elements displayed in the host view where the drawer is shown. |

## Events

| Name            | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| `drawerOpening` | Fires before the drawer opens.                                      |
| `drawerOpened`  | Fires after the drawer opens.                                       |
| `drawerClosing` | Fires before the drawer closes.                                     |
| `drawerClosed`  | Fires after the drawer closes.                                      |
| `drawerPan`     | Fires when the drawer is opening or closing due to a swipe gesture. |
