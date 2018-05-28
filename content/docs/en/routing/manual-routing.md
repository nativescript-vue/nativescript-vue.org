---
title: Manual Routing
contributors: [eddyverbruggen, fartek, rigor789, ikoevska]
---

The easiest way to do routing in NativeScript-Vue is by using any of the following convenience functions:

* [`$navigateTo`](#navigateto)
* [`$navigateBack`](#navigateback)
* [`$showModal`](#showmodal)

> All examples on this page discuss how to handle routing between the `Master` and `Detail` components of a mobile app.

### `$navigateTo`

You have two ways to call `$navigateTo`: in the view or in a method.

#### In the view

In the `Master` component, use a `data` property to expose the `Detail` component. Invoke `$navigateTo(<propertyName>)` in the view directly. 

```Vue
const Vue = require('nativescript-vue');

const Master = {
  template: `
    <Page>
      <ActionBar title="Master" />
      <StackLayout>
        <Button text="To Details directly" @tap="$navigateTo(detailPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      detailPage: Detail
    }
  }
};

const Detail = {
  template: `
    <Page>
      <ActionBar title="Detail"/>
      <StackLayout>
        <Label text="Details.." />
      </StackLayout>
    </Page>
  `
};

new Vue({
  render: h => h(Master)
}).$start()
```

#### In a method

Bind a button to a method and use `this.$navigateTo(Detail)` to navigate to the `Detail` component.

```Vue
const Master = {
  template: `
    <Page>
      <ActionBar title="Master" />
      <StackLayout>
        <Button text="To Details via method" @tap="goToDetailPage" />
      </StackLayout>
    </Page>
  `,

  methods: {
    goToDetailPage() {
      this.$navigateTo(Detail);
    }
  }
};

const Detail = {
  template: `
    <Page>
      <ActionBar title="Detail"/>
      <StackLayout>
        <Label text="Details.." />
      </StackLayout>
    </Page>
  `
};
```

#### Passing props to the target component

`$navigateTo` accepts a second `options` parameter. You can use the parameter to:

* set the transition 
* pass in a `context` object to be used when instantiating the target component 

You can use the `options` parameter to pass props to the target component. For example: 

```JavaScript
this.$navigateTo(Detail, {
  transition: {},
  transitionIOS: {},
  transitionAndroid: {},
  
  context: {
    propsData: {
      foo: 'bar',
    }
  }
});
```

For more information about the options that you can pass, see [the documentation for `NavigationEntry`](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry).

### `$navigateBack`

In the `Detail` component, add a button that triggers the globally exposed `$navigateBack` function.

```Vue
const Detail = {
  template: `
    <Page>
      <ActionBar title="Detail"/>
      <StackLayout>
        <Button text="Back to Master" @tap="$navigateBack" />
      </StackLayout>
    </Page>
  `
};
```

### `$showModal`

If you want to show the `Detail` page modally, use `$showModal` instead of `$navigateTo`.

Similarly to `$navigateTo`, you can call this method in the view or in a function.

To close the modal, call `$modal.close`.

#### In the view

In the `Master` component, use a `data` property to expose the `Detail` component. Invoke `$showModal(<propertyName>)` in the view directly. 

```Vue
const Vue = require('nativescript-vue');

const Master = {
  template: `
    <Page>
      <ActionBar title="Master" />
      <StackLayout>
        <Button text="To Details directly" @tap="$showModal(detailPage)" />
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      detailPage: Detail
    }
  }
};

const Detail = {
  template: `
    <Page>
      <ActionBar title="Detail"/>
      <StackLayout>
        <Button @tap="$modal.close" text="Close" />                    
      </StackLayout>
    </Page>
  `
};

new Vue({
  render: h => h(Master)
}).$start()
```

#### In a method

Bind a button to a method and use `this.$showModal(Detail)` to navigate to the `Detail` component.

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
    <Page>
      <ActionBar title="Detail"/>
      <StackLayout>
        <Button @tap="$modal.close" text="Close" />                    
      </StackLayout>
    </Page>
  `
};
```

#### Passing props to the modal

`$showModal` accepts a second parameter. You can use the parameter to pass in a `context` object containing `propsData` to the target component. For example:

```JavaScript
this.$showModal(Detail, { context: { propsData: { id: 14 }}});
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

#### Returning data from the modal

When calling `$showModal`, a promise is returned which resolves with any data passed to the `$modal.close` function.

For example:

```js
// ... inside Master
this.$showModal(Detail).then(data => console.log(data)); // Will output 'Foo'
```

```html
// ... inside Detail
<Button @tap="$modal.close('Foo')" text="Close" />    
```
