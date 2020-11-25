---
title: Ручной роутинг
contributors: [sn0wil]
---

Самый простой способ сделать роутинг в NativeScript-Vue - это использовать удобные функции
`$navigateTo`, `$navigateBack`, и `$showModal`.

### `$navigateTo`

Предположим, что у вас есть компоненты `Master` и` Detail`, и вы хотите перейти от `Master` к `Detail`.
В этом случае у вас есть два способа вызова `$navigateTo`: в представлении или в методе:

`$navigateTo` принимает второй параметр `options`, который позволяет вам указать переход, а также передать объект `context`, который будет использоваться при создании экземпляра целевого компонента. Это полезно, если вы хотите передать свойства целевому компоненту. Например:

```js
this.$navigateTo(Detail, {
  transition: {},
  transitioniOS: {},
  transitionAndroid: {},
  
  context: {
    propsData: {
      foo: 'bar',
    }
  }
});
```

Для получения более подробной информации вы можете перейти к [документации по NavigationEntry](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry).

#### В представлении

Выделите компонент `Detail` через свойство `data` в компоненте `Master` и вызовите `$navigateTo (<propertyName>)` в представлении напрямую.

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

#### В методе

Cвяжите кнопку с методом и используйте `this.$navigateTo(Detail)`, чтобы перейти к компоненту `Detail` в этом методе,

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

Добавьте кнопку в компонент `Detail`, который просто запускает глобально открытую функцию` $navigateBack`.

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

Если вы хотите отобразить страницу `Detail` модально, просто замените `$navigateTo` на` $showModal`.
Как и раньше, этот метод можно вызвать либо из представления, либо из функции.

Чтобы закрыть модальное предствление, вызовите `$modal.close`.

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

#### Передача параметров в модальное представление

Свойства могут быть переданы в модальное представление с помощью `propsData` внутри объекта `context`, переданного как опция при вызове `$showModal`.

Если нам необходимо передать свйоство `id` в компонент `Detail` из предыдущего примера с `Master/Detail`, мы могли бы отобразить модальное представление, используя:

```js
this.$showModal(Detail, { context: { propsData: { id: 14 }}});
```

Компонент `Detail` также должен быть обновлен, чтобы иметь воможность использовать свойство `id`. Это делается путем определения параметра `props` внутри компонента:

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

[Подробнее о параметрах читайте в официальной документации Vue](https://ru.vuejs.org/v2/guide/components-props.html)

Теперь свойство доступно всему компоненту с помощью `this.id`.

#### Возвращение данныхз из модального представления

При вызове `$showModal` возвращается promise, который разрешается(resolve) с любыми данными, переданными функции `$modal.close`.

Например:

```js
// ... внутри Master
this.$showModal(Detail).then(data => console.log(data)); // Будет выведено 'Foo'
```

```html
// ... внутри Detail
<Button @tap="$modal.close('Foo')" text="Close" />    
```
