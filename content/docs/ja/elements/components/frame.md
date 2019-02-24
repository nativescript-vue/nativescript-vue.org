---
title: Frame
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_frame_.frame
contributors: [Spice-Z]
---

`<Frame>`は[`<Page>`](/en/docs/elements/components/page)エレメントを表示するためのUIコンポーネントです。全てのアプリは少なくとも１つの`<Frame>`エレメントが必要で、通常であればルートエレメントとして設定されます。

---

#### 単一のルートフレーム

もしnativescriptのバージョン3.xからアプリを統合してその挙動を保存したいなら、エントリーファイルに以下のスニペットを追加すれば、ルートのFrameを生成してデフォルトページを描写することができます。

```js
new Vue({
  render: h => h('Frame', [ h(HomePageComponent) ])
})
```

#### 複数のフレーム

複数のフレームを生成する場合、レイアウトでラップすることで可能になります。例えば２つのフレームを隣同士で配置したい場合はこのようになります

```html
<GridLayout columns="*, *">
  <Frame col="0"/>
  <Frame col="1"/>
</GridLayout>
```

#### デフォルトページをもったフレーム

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

##### 他のファイルからのコンポーネントをデフォルトページに持つフレーム

```html
<Frame>
  <Page>
    <Home />
  </Page>
</Frame>
```

```js
import Home from './Home'

export default {
  components: {
    Home
  }
}
```

## Native component

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.ContentLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/ContentLayout.java) | [`UINavigationController`](https://developer.apple.com/documentation/uikit/uinavigationcontroller)
