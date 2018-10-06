---
title: Manual Routing
contributors: [nuochong]
---

在NativeScript-Vue中进行路由的最简单方法是使用以下任何便捷功能：

* [`$navigateTo`](#navigateto)
* [`$navigateBack`](#navigateback)
* [`$showModal`](#showmodal)

> 本页面上的所有示例都讨论了如何处理移动应用程序 `Master` 和 `Detail` 组件之间的路由。

### `$navigateTo(Component, options)`

您可以$navigateTo在视图或方法中调用。

#### 在视图中

在 `Master` 组件中，使用 `data` 属性公开 `Detail` 组件。 `$navigateTo(<propertyName>)` 直接在视图中调用。 

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

#### 在一种方法中

将按钮绑定到方法并用于 `this.$navigateTo(Detail)` 导航到 `Detail` 组件。

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

#### 将道具传递给目标组件

`$navigateTo` 接受第二个 `options` 参数。您可以使用该参数：

* 设置过渡
* 传递一个 `context` 带有props 的对象，以便在实例化目标组件时使用

例如：

```JavaScript
this.$navigateTo(Detail, {
  transition: {},
  transitionIOS: {},
  transitionAndroid: {},
  
  props: {
    foo: 'bar',
  }
});
```

有关可以传递的选项的详细信息，请参阅 [`NavigationEntry`](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry)。

### `$navigateBack(options, backstackEntry = null)`

在 `Detail` 组件中，添加一个触发全局公开 `$navigateBack` 功能的按钮。

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

用于 `$showModal` 以 `Detail` 模态方式显示页面。此功能的行为类似于 `$navigateTo`。

您可以 `$showModal` 在视图或方法中调用。要关闭模态，请致电 `$modal.close`。

#### 在视图中

在 `Master` 组件中，使用 `data` 属性公开 `Detail` 组件。 `$showModal(<propertyName>)` 直接在视图中调用。

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

#### 在一种方法中

将按钮绑定到方法并用于 `this.$showModal(Detail)` 导航到 `Detail` 组件。

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

注意：我们将Detail页面包装在一个 `<Frame>` 元素中，这允许我们 `<ActionBar>` 在模态中显示以及进一步导航。

#### 将道具传递给模态

`$showModal` 接受第二个参数。您可以使用该参数传入 `context` 包含 `propsData` 目标组件的对象。例如：

```JavaScript
this.$showModal(Detail, { props: { id: 14 }});
```

您还需要更新 `Detail` 组件才能接受id道具。您可以通过 `id` 道具。您可以通过 `props` 在组件内定义选项来完成此操作：

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

现在可以通过组件访问道具 `this.id`。

有关道具的更多信息，请参阅 [官方Vue文档](https://vuejs.org/v2/guide/components-props.html)

#### 从模态返回数据

调用时 `$showModal`，将返回一个promise，该promise将传递给传递给 `$modal.close` 函数的任何数据。

在以下示例中，关闭控制台中的模态输出“Foo”。

```JavaScript
// ... inside Master
this.$showModal(Detail).then(data => console.log(data));
```

```HTML
<!-- inside Detail -->
<Button @tap="$modal.close('Foo')" text="Close" />    
```
