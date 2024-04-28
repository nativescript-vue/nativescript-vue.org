---
title: Manual Routing
contributors: [eddyverbruggen, fartek, rigor789, ikoevska, tralves, sis0k0]
---
# Manual Routing

The easiest way to implement routing in NativeScript-Vue is to use any of the following convenience functions:

* [`$navigateTo`](#navigatetocomponent-options)
* [`$navigateBack`](#navigatebackoptions-backstackentry--null)

For more complex navigation scenarios, you can use multiple `<Frame>` components and a navigation-specific component:

* [`Modal View`](#modal-view-navigation)
* [`BottomNavigation & Tabs`](#bottomnavigation-and-tabs-navigation)
* [`SideDrawer`](#sidedrawer-navigation)

### `$navigateTo(Component, options)`

You can call `$navigateTo` in the view or in a method.

#### In the view

In the `Master` component, use a `data` property to expose the `Detail` component. Invoke `$navigateTo(<propertyName>)` in the view directly.

```Vue
<Button row="2" @tap="$navigateTo(Details)" class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
horizontalAlignment="center">
Go To Details
</Button>
```

#### In a method

Bind a button to a method and use `this.$navigateTo(Detail)` to navigate to the `Detail` component.

```JavaScript

function goToComponent() {
  $navigateTo(Details);
}

```

#### Passing props to the target component

`$navigateTo` accepts a second `options` parameter. You can use the parameter to:

* Set the transition 
* Pass a `props` object to be used when instantiating the target component 

For example:

```JavaScript
this.$navigateTo(Detail, {
  transition: {},
  transitioniOS: {},
  transitionAndroid: {},

  props: {
    foo: 'bar',
  }
});
```

For more information about the options that you can pass, see [`NavigationEntry`](https://docs.nativescript.org/api/interface/NavigationEntry).

#### Specifying a transition

You can use any of the built-in transitions:

- curl (same as curlUp) (iOS only)
- curlUp (iOS only)
- curlDown (iOS only)
- explode (Android Lollipop(21) and up only)
- fade
- flip (same as flipRight)
- flipRight
- flipLeft
- slide (same as slideLeft)
- slideLeft
- slideRight
- slideTop
- slideBottom

For example:

```JavaScript
$navigateTo(Details, {
  transition: {
    name: 'slide',
    duration: 500,
    curve: 'easeIn',
  },
});
```


#### Navigating within a frame

Each [`<Frame>`](/en/docs/elements/components/frame) element has its own navigation stack. If you are using [multiple frames](/en/docs/elements/components/frame#multiple-frames), you may want to specify in which frame the navigation will occur. For example, having a button in the side bar that changes the page in the main area. You can do this by adding the `frame` option:

```JavaScript
this.$navigateTo(SomeComp, {
  frame: '<id, or ref, or instance>'
});
```

The value for the `frame` option can be one of the following:
* the `id` of the `<Frame>` component (for example: `<Frame id="main-frame">`)
* the `ref` for the `<Frame>` (for example: `<Frame ref="mainFrame">`)
* the `<Frame>` instance itself

### `$navigateBack(options, backstackEntry = null)`

In the `Detail` component, add a button that triggers the globally exposed `$navigateBack` function.

```Vue
<Label
  text="Go Back"
  @tap="$navigateBack"
  class="text-center px-4 py-10 text-2xl text-gray-900 font-bold"
/>
```

### Modal View Navigation

Use `$showModal` to show the `Detail` page modally. This function behaves similarly to `$navigateTo`.

To close the modal, call `$modal.close`.

```Vue
const Master = {
  template: `
    <Page>
      <ActionBar title="Master" />
      <StackLayout>
        <Button text="Show Details modally" @tap="showDetailPageModally" />
      </StackLayout>
    </Page>
  `,

  methods: {
    showDetailPageModally() {
      this.$showModal(Detail);
    }
  }
};

const Detail = {
  template: `
    <Frame>
      <Page>
        <ActionBar title="Detail"/>
        <StackLayout>
          <Button @tap="$modal.close" text="Close" />
        </StackLayout>
      </Page>
    </Frame>
  `
};
```

Note: We've wrapped the Detail page in a `<Frame>` element, which allows us to show the `<ActionBar>` as well as navigate further within the modal.

#### Passing props to the modal

`$showModal` accepts a second parameter. You can use the parameter to pass in a `props` object to the target component. For example:

```JavaScript
this.$showModal(Detail, { props: { id: 14 }});
```

You also need to update the `Detail` component to be able to accept the `id` prop. You can do this by defining a `props` option inside the component:

```vue
const Detail = {
  props: ['id'],
  template: `
    <Page>
      <ActionBar title="Detail"/>
      <StackLayout>
        <Label :text="id" />
        <Button @tap="$modal.close" text="Close" />
      </StackLayout>
    </Page>
  `,
};
```

The prop is now accessible throughout the component with `this.id`.

For more information about props, see the [official Vue documentation](https://vuejs.org/v2/guide/components-props.html)

#### Forcing the modal to be fullscreen

This option only takes effect on Android, as iOS modals are always fullscreen.

```JavaScript
this.$showModal(Detail, { fullscreen: true, props: { id: 14 }});
```

#### Returning data from the modal

When calling `$showModal`, a promise is returned which resolves with any data passed to the `$modal.close` function.

In the following example, closing the modal outputs 'Foo' in the console.

```JavaScript
// ... inside Master
this.$showModal(Detail).then(data => console.log(data));
```

```HTML
<!-- inside Detail -->
<Button @tap="$modal.close('Foo')" text="Close" />
```

### SideDrawer Navigation

We've built `<MultiDrawer>` to allow showing multiple drawers on the screen from all sides. Refer to the docs in the project github page: https://github.com/nativescript-vue/nativescript-vue-multi-drawer

Another option is the `<RadSideDrawer>` component. For more information, refer to the [dedicated article](https://v7.docs.nativescript.org/vuejs/ns-ui/SideDrawer/getting-started).

To create a new application with `<RadSideDrawer>` run:

```bash
ns create myDrawerApp --template @nativescript/template-drawer-navigation-vue
```
