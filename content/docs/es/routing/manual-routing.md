---
title: Enrutado Manual
contributors: [ianaya89, msaelices]
---

La manera más simple de usar rutas en NativeScript-Vue es usando cualquiera de estas funciones convencionales:

* [`$navigateTo`](#navigateto)
* [`$navigateBack`](#navigateback)

Para escenarios de navegación más complejos, puedes usar múltiples componentes `<Frame>` y componentes específicos de navegación:

* [`Vista con Modal`](#navegación-mediante-una-vista-modal)
* [`BottomNavigation y Tabs`](#navegación-usando-bottomnavigation-y-tabs)
* [`SideDrawer`](#navegación-con-sidedrawer)

### `$navigateTo`

Puedes llamar a la funcioón `$navigateTo` dentro de la vista o también dentro de un método.

#### Dentro de la vista

En el componente `Master`, usa una propiedad de `data` para exponer el componente `Detail`. Luego invoca la función `$navigateTo(<nombrePropiedad>)` directamente en la vista.

```Vue
import Vue from 'nativescript-vue';

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
* Pasar un objeto `props` que será usado cuando se instancie el componente de destino

Por ejemplo:

```JavaScript
this.$navigateTo(Detail, {
  transition: {},
  transitioniOS: {},
  transitionAndroid: {},

  props: {
    foo: 'bar',
  }
});
```

Para más información  sobre las opciones que puedes utilizar, checa [`NavigationEntry`](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry).

#### Navegando dentro de un Frame

Cada elemento [`<Frame>`](/es/docs/elements/components/frame) tiene su propia pila de navegación. Si estás usando [múltiple frames](/en/docs/elements/components/frame#múltiples-frames), puedes querer especificar en qué frame va a ocurrir la navegación. Por ejemplo, tener un botón en el side bar que cambia la página en el área central. Puedes hacer esto añadiendo la opción `frame`:

```JavaScript
this.$navigateTo(SomeComp, {
  frame: '<id, or ref, or instance>'
});
```

El valor de la opción `frame` puede ser uno de los siguientes:
* el `id` del componente `<Frame>` (por ejemplo: `<Frame id="main-frame">`)
* el `ref` del componente `<Frame>` (por ejemplo: `<Frame ref="mainFrame">`)
* la propia instancia `<Frame>`

### `$navigateBack(options, backstackEntry = null)`

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

### Navegación mediante una vista Modal

Usa la función `$showModal` para mostra el componente `Detail` como si fuese una ventana modal. Esta función se comporta de manera similar a `$navigateTo`.

Puedes llamar a `$showModal` dentro de la vista o dentro de un método. Para cerrar la ventana modal, puedes llamar a la función global `$modal.close`.

#### Dentro de la Vista

En el componente `Master`, usa una propiedad de `data` para exponer el componente `Detail`. Luego invoca la función `$showModal(<nombrePropiedad>)`, directamente dentro de la vista.

```Vue
import Vue from 'nativescript-vue';

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
  render: h => h('frame', [h(Master)])
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

Note: Hemos incluido la página Detail en un elemento `<Frame>`, que nos permite mostrar el `<ActionBar>` y a la vez navegar con el modal.

#### Pasando propiedades a la ventana modal

La función `$showModal` acepta un segundo parametro. Puedes usar este parametro para enviar un objeto `props` al componente de destino. Ejemplo:

```JavaScript
this.$showModal(Detail, { props: { id: 14 }});
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

Para más información sobre propiedades, checa [la documentación oficial de Vue](https://vuejs.org/v2/guide/components-props.html)

#### Retornando data desde la ventana modal

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

### Navegación usando BottomNavigation y Tabs

Los componentes `<BottomNavigation>` y `<Tabs>` permiten al usuario navegar arbitrariamente entre diferentes contenedores UI que están al mismo nivel. Una característica clave de esos componentes es que mantienen el estado de los contenedores que no son visibles. Esto significa que cuando por ejemplo el usuario vuelve a una pestaña anterior, los datos, la posición de scroll y el estado de la navegación debería ser como estaban antes.

Los ejemplos de abajo usan el componente `<BottomNavigation>`. Puedes usar el mismo marcado para el componente `<Tabs>`. Tan sólo reemplaza la etiqueta `<BottomNavigation>` con `<Tabs>`.

La lógica de navegación lateral del contenedor `<BottomNavigation>` se basa en automáticamente proporcionar al usuario pestañas que puede seleccionar. Para configurar un `<BottomNavigation>` necesitas simplemente declarar la UI de cada contenedor (dentro de un `<TabContentItem>`) y el título e icono que quieres mostrar en su pestaña correspondiente (dentro de un `<TabStripItem>`). Cada contenedor UI está representado por un `<TabContentItem>`. Un `<TabContentItem>` puede tener sólo un componente raíz. Como en otros contenedores, puedes habilitar navegación para adelante o para atrás en cada contenedor `<TabContentItem>` incluyendo un elemento `<Frame>` en él.

```Vue
import Vue from 'nativescript-vue';

import Items from './components/Items.vue';
import Browse from './components/Browse.vue';
import Search from './components/Search.vue';

const App = {
  components: {
    Items,
    Browse,
    Search
  },

  template: `
    <BottomNavigation>
      <TabStrip>
        <TabStripItem>
          <Label text="Home"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="Browse"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="Search"></Label>
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <Frame>
          <Items />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame>
          <Browse />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame>
          <Search />
        </Frame>
      </TabContentItem>
    </BottomNavigation>
  `
};

new Vue({
  render: h => h(App)
}).$start();
```

Para crear una nueva aplicación utilizando el componente `<ButtomNavigation>` ejecuta:

```bash
tns create my-app-name --template tns-template-tab-navigation-vue
```

### Navegación con SideDrawer

El componente `<RadSideDrawer>` posibilita al usuario añadir una vista oculta, por ejemplo un menú lateral, conteniendo controles de navegación o de configuración desde los lados de la pantalla. Para más información sobre ello, puedes leer este [artículo](https://docs.nativescript.org/vuejs/ns-ui/SideDrawer/getting-started).

Para crear una aplicación que usa el componente `<RadSideDrawer>`, ejecuta:

```bash
tns create my-app-name --template tns-template-drawer-navigation-vue
```