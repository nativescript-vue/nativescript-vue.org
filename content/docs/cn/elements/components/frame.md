---
title: Frame
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_frame_.frame
contributors: [nuochong]
---

`<Frame>` 是用于显示 [`<Page>`](/en/docs/elements/components/page) 元素的UI组件。每个应用程序至少需要一个 `<Frame>`  元素，通常设置为根元素。

---

#### 单一的根框架

如果要从nativescript 3.x进行迁移并希望保留旧行为，则条目文件中的以下代码段将创建根框架并呈现您的默认页面。

```js
new Vue({
  render: h => h('Frame', [ h(HomePageComponent) ])
})
```

#### 多个框架

如果您需要创建多个框架，可以通过将它们包装在布局中来实现，例如，如果您想要并排放置2个框架

```html
<GridLayout columns="*, *">
  <Frame col="0"/>
  <Frame col="1"/>
</GridLayout>
```

#### 具有默认页面的框架

```html
<Frame>
  <Page>
    <ActionBar title="Default Page Title" />
    <GridLayout>
      <Label text="Default Page Content" />
    </GridLayout>
  </Page>
</Frame>
```


## 原生组件

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.ContentLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/ContentLayout.java) | [`UINavigationController`](https://developer.apple.com/documentation/uikit/uinavigationcontroller)
