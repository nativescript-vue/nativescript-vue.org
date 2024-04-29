---
contributors: [eddyverbruggen, fartek, rigor789, ikoevska, tralves, sis0k0, vallemar]
---

# Manual Routing


The easiest way to implement routing in NativeScript-Vue is to use any of the following convenience functions:

* [`$navigateTo`](#view-navigation)
* [`$navigateBack`](#navigateback-options-backstackentry-null)

For more complex navigation scenarios, you can use multiple `<Frame>` components and a navigation-specific component:

* [`Modal View`](#modal-view-navigation)

## View Navigation

Use `$navigateTo` in the view or in a method.

### In the view

In the `Master` component, use a `data` property to expose the `Detail` component. Invoke `$navigateTo(<propertyName>)` in the view directly.

```vue
// Master.vue
<script lang="ts" setup>
import Detail from "./Detail.vue"
</script>

<template>
  <Frame>
    <Page>
        <ActionBar title="Master" />
        <StackLayout>
            <Button text="To Detail directly" @tap="$navigateTo(Detail)" />
        </StackLayout>
    </Page>
  </Frame>
</template>
```

### In a method

Bind a button to a method and use `$navigateTo(Detail)` to navigate to the `Detail` component.

```vue
// Master.vue
<script lang="ts" setup>
import { $navigateTo } from "nativescript-vue"
import Detail from "./Detail.vue"

function goToDetailPage(){
  $navigateTo(Detail);
}
</script>

<template>
  <Frame>
    <Page>
        <ActionBar title="Master" />
        <StackLayout>
            <Button text="To Detail directly" @tap="goToDetailPage" />
        </StackLayout>
    </Page>
  </Frame>
</template>
```

### Passing props to the target component

Pass a `props` object to be used when instantiating the target component.

```JavaScript
$navigateTo(Detail, {
  props: {
    foo: 'bar',
  }
});
```

### Listen emit from te target component

Pass listener properties prefixed with `on` to listen to your `emit` events from the target.

```JavaScript
// Master.vue
$navigateTo(Detail, {
  props: {
    onChange(data){
      // logic here
    },
  }
});
```

```vue
// Detail.vue
<script lang="ts" setup>
const emit = defineEmits(["change"])

function goToDetailPage(){
  emit("change", { foo: "bar" })
}
</script>
```

For more information about the options that you can pass, see [`NavigationEntry`](https://docs.nativescript.org/api/interface/NavigationEntry).

### Specifying a transition

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
$navigateTo(Detail, {
  transition: {
    name: "slideLeft",
    duration: 300,
    curve: "easeIn"
  },
  transitioniOS: {},
  transitionAndroid: {},
});
```


### Navigating within a frame

Each [`<Frame>`]([/en/docs/elements/components/frame](https://docs.nativescript.org/ui/frame)) element has its own navigation stack. If you are using [multiple frames](https://docs.nativescript.org/ui/frame#multiple-root-frames), you may want to specify in which frame the navigation will occur. For example, having a button in the side bar that changes the page in the main area. You can do this by adding the `frame` option:

```JavaScript
$navigateTo(SomeComp, {
  frame: '<id, or ref, or instance>'
});
```

The value for the `frame` option can be one of the following:
* the `id` of the `<Frame>` component (for example: `<Frame id="main-frame">`)
* the `ref` for the `<Frame>` (for example: `<Frame ref="mainFrame">`)
* the `<Frame>` instance itself

### `$navigateBack(options, backstackEntry = null)`

In the `Detail` component, add a button that triggers the globally exposed `$navigateBack` function.

```vue
//Detail.vue
<template>
    <Page>
        <ActionBar title="Detail" />
        <StackLayout>
          <Button text="Back to Master" @tap="$navigateBack" />
        </StackLayout>
    </Page>
</template>
```

## Modal View Navigation

Use `$showModal` to show the `Detail` page modally. This function behaves similarly to `$navigateTo`.

To close the modal, call `$modal.close`.


```vue
//Master.vue
<script lang="ts" setup>
import { $showModal } from "nativescript-vue"
import Detail from "./Detail.vue"

function showDetailPageModally(){
  $showModal(Detail);
}
</script>

<template>
  <Frame>
    <Page>
        <ActionBar title="Master" />
        <StackLayout>
            <Button text="Show Detail modally" @tap="showDetailPageModally" />
        </StackLayout>
    </Page>
  </Frame>
</template>
```

```vue
// Detail.vue
<template>
  <Frame>
    <Page>
        <ActionBar title="Detail" />
        <StackLayout>
            <Button @tap="$modal.close" text="Close" />
        </StackLayout>
    </Page>
  </Frame>
</template>
```


Note: We've wrapped the Detail page in a `<Frame>` element, which allows us to show the `<ActionBar>` as well as navigate further within the modal.

### Passing props to the modal

`$showModal` accepts a second parameter. You can use the parameter to pass in a `props` object to the target component. For example:

```JavaScript
$showModal(Detail, { props: { id: 14 }});
```

### Forcing the modal to be fullscreen

This option only takes effect on Android, as iOS modals are always fullscreen.

```JavaScript
$showModal(Detail, { fullscreen: true, props: { id: 14 }});
```

### Returning data from the modal

When calling `$showModal`, a promise is returned which resolves with any data passed to the `$modal.close` function.

In the following example, closing the modal outputs 'Foo' in the console.

```JavaScript
// ... inside Master
$showModal(Detail, { 
 closeCallback(data, ...args) {
    // data type is any
    // args type is any[]
  }
});
```

```HTML
<!-- inside Detail -->
<Button @tap="$modal.close('Foo')" text="Close" />
```


