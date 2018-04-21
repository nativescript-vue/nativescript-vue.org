---
title: Manual Routing
contributors: [alexhiroshi]
---

A maneira mais fácil de fazer roteamento no NativeScript-Vue, é usando as funções `$navigateTo`, `$navigateBack` e `$showModal`.

### `$navigateTo`
Suponha que você tenha componentes `Master` e `Detail` e queira navegar de `Master` para `Detail`,
você tem duas maneiras de chamar `$navigateTo`: na view ou em um método.

#### Na view
Exponha o componente `Detail` através da propriedade `data` no componente `Master` e chame `$navigateTo(<nomeDaPropriedade>)` diretamente na view.

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

#### Em um método
Vincule um botão em um método e use `this.$navigateTo(Detail)` para navegar para o componente `Detail`.

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
Adicione um botão no componente `Detail` que simplesmente aciona a função global `$navigateBack`.

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
Se você quer mostrar a página `Detail` em um modal, troque `$navigateTo` por `$showModal`.
Como antes, você pode chamar esse método na view ou em uma função.

Para fechar o modal, chame `$modal.close`.

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
