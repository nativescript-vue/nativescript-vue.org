---
title: Manual Routing
contributors: [eddyverbruggen]
---

The easiest way to do routing in NativeScript-Vue is using the convenience functions
`$navigateTo`, `$navigateBack`, and `$showModal`.

### `$navigateTo`
Suppose you have components `Master` and `Detail` and want to navigate from `Master` to `Detail`,
then you have two ways to call `$navigateTo`: in the view, or in a method:

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
