---
title: Ruteo Manual
contributors: [ianaya89]
---

La manera mas simple de usar rutas en NativeScript-Vue es usando cualquiera de estas funciones convencionales:

* [`$navigateTo`](#navigateto)
* [`$navigateBack`](#navigateback)
* [`$showModal`](#showmodal)

> Todos los ejemplos de esta sección tratan sobre como manejar las rutas entre los componentes `Master` y `Detail` de la aplicación móvil.

### `$navigateTo`

Puedes llamar a la funcioón `$navigateTo` dentro de la vista o también dentro de un método.

#### Dentro de la vista

En el componente `Master`, usa una propiedad de `data` para exponer el componente `Detail`. Luego invoca la función `$navigateTo(<nombrePropiedad>)` directamente en la vista.

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

#### Dentro de un método

Enlaza un botón (`<button>`) a un método del *view model* y escribe dentro de este, una llamada a la función `this.$navigateTo(Detail)` para navegar al componente `Detail`

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

#### Pasando propiedades al componente de destino

La función `$navigateTo` acepta un segundo parametro llamado `options`. Puedes usar este parametro para:

* Configurar un transición.
* Pasar un objeto `context` con propiedades que seran usadas cuando se instancie el componente de destino

Por ejemplo:

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

Para mas información  sobre las opciones que puedes utilizar, checa [`NavigationEntry`](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry).

### `$navigateBack`

En el componente `Detail`, agrega un buton para que dispare la funcion global `$navigateBack`.

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

Usa la función `$showModal` para mostra el componente `Detail` como si fuese una ventana modal. Esta función se comporta de manera similar a `$navigateTo`.

Puedes llamar a `$showModal` dentro de la vista o dentro de un método. Para cerrar la ventana modal, puedes llamar a la función global `$modal.close`.

#### Dentro de la Vista
En el componente `Master`, usa una propiedad de `data` para exponer el componente `Detail`. Luego invoca la función `$showModal(<nombrePropiedad>)`, directamente dentro de la vista.

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

#### Dentro de un método

Enlaza un botón (`<button>`) a un método del *view model* y escribe dentro de este, una llamada a la función `this.$showModal(Detail)` para navegar al componente `Detail`

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

#### Pasando propiedades a la ventana modal

La función `$showModal` acepta un segundo parametro. Puedes usar este parametro para enviar un objeto `context` al componente de destino. Dentro de este objeto debes enviar la información en una propiedad llamada `propsData`. Ejemplo:

```JavaScript
this.$showModal(Detail, { context: { propsData: { id: 14 }}});
```

También necesitas actualizar el componente `Detail` para que acepte recibir una propiedad llamada `id`. Simplemente debes definirla dentro del objeto `props` del componente.

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

La propiedad `id` esta ahora disponible en el componente a través de `this.id`

Para mas información sobre propiedades, checa [la documentación oficial de Vue](https://vuejs.org/v2/guide/components-props.html)

####  Retornando data desde la ventana modal

Cuando llamas a la función `$showModal`, una promesa es retornada. Dicha promesa, resuelve cualquier tipo de dato que se la pasa a la función `$modal.close`.

En el siguiente ejemplo, al cerrar la ventana modal, podemos mostrar por consola el valor `'Foo'`.

```JavaScript
// Componente Master
this.$showModal(Detail).then(data => console.log(data));
```

```HTML
<!-- Componente Detail -->
<Button @tap="$modal.close('Foo')" text="Close" />
```
