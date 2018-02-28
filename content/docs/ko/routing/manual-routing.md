---
title: 수동 라우팅
contributors: [qgp9]
---

NativeScript-Vue 에서 라우팅을 하는 가장 쉬운 방법은 `$navigateTo`, `$navigateBack`, `$showModal` 과 같은 편리한 함수를 사용하는 것입니다.

### `$navigateTo`
`Master` 와 `Detail` 이라는 컴포넌트들이 있다고 가정하고, `Master` 에서 `Detail` 로 이동하기를 원할때 `$navigateTo` 를 호출하기 위한 두가지 방법이 있습니다: 뷰(view)에서 혹은 메소드에서:

#### 뷰(view) 에서
`Master` 컴포넌트의 `data` 프로퍼티를 통해 `Detail` 컴포넌트를 노출시키고 view 에서 바로 `$navigateTo(<프로퍼티 이름>)` 을 호출합니다.

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

#### 메소드에서
버튼을 메소드에 연결하고 이 메소드에서 `this.$navigateTo(Detail)` 을 사용하여 `Detail` 컴포넌트로 이동합니다.

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
`Detail` 에 전역적으로 노출된 `$navigateBack` 함수를 호출하는 버튼을 추가합니다.

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
`Detail` 페이지를 모달 페이지로 보여주고 싶다면, 간단히 `$navigateTo` 를 `$showModal`로 바꾸면 됩니다.
앞에서 처럼 이 메소드는 view 나 함수에서 호출

모달을 닫으려면 `$modal.close` 을 호출하면 됩니다.

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
