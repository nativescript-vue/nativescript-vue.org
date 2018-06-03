---
title: Frame Routing
contributors: [eddyverbruggen, fartek, rigor789, misterbrownza]
---

The easiest way to do routing in NativeScript-Vue is using the convenience functions
`$navigateTo`, `$navigateBack`, and `$showModal`.

### `$navigateTo`

Suppose you have components `Master` and `Detail` and want to navigate from `Master` to `Detail`,
then you have two ways to call `$navigateTo`: in the view, or in a method:

The `$navigateTo` accepts a second `options` parameter, which allows you to specify the transition as well as pass in a `context` object which will be used when instantiating the target component. This is useful when you want to pass props to the target component. For example: 

```js
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

To read more about the options you can pass [head over to the documentation for NavigationEntry](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry).

#### In the view

Expose the `Detail` component through a `data` property in the `Master` component and invoke `$navigateTo(<propertyName>)` in the view directly. 

```vue
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

Bind a button to a method and use `this.$navigateTo(Detail)` to navigate to the `Detail` component in that method,

```vue
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

### `$navigateBack`

Add a button to the `Detail` component, which simply triggers the globally exposed `$navigateBack` function.

```vue
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

If you want to show the `Detail` page modally, simply replace `$navigateTo` by `$showModal`.
As before, you can call this method either from the view or a function.

To close the modal, call `$modal.close`.

```vue
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

Properties can be passed to the modal by including `propsData` inside a `context` object passed as an option when calling `$showModal`.

If we were to pass an `id` prop to the Detail component from the previous Master/Detail example, we would show the modal using:

```js
this.$showModal(Detail, { context: { propsData: { id: 14 }}});
```

The Detail component also has to be updated to be able to accept the `id` prop. This is done by defining a `props` option inside the component:

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

[Read more about props in the official Vue documentation](https://vuejs.org/v2/guide/components-props.html)

The prop is now accessible throughout the component with `this.id`.

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
