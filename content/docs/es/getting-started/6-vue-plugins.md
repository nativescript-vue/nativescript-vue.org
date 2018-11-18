---
title: Usando Plugins de Vue
contributors: [ianaya89]
---

Esta sección provee un resumen de los plugins de Vue que funcionan con NativeScript-Vue.

* [Vue Router](#vue-router)
* [Vuex](#vuex)

## Vue Router

> Actualmente, la integración con Vue Router esta en modo **experimental**. Para más información puedes ver [la sección Vue Router](/es/docs/routing/vue-router/).

### Instalar y registrar el plugin

Para una información detallada de como instalar el plugin y disponerlo en tu aplicación NativeScript-Vue, lee [la sección Vue Router](/es/docs/routing/vue-router/)

### Notas de uso

La estrategia de *routing*  para móviles es diferente a la estrategia utilizada en el navegador y el formato estandard de las rutas de Vue no funciona con NativeScript-Vue

En su lugar, lo que necesitas para **cambiar a una nueva ruta es método `route.push`**. El siguiente ejemplo muestra como usar el evento `tap` para cambiar de ruta:

```HTML
<Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
```

## Vuex

Vuex es una libreria que se encarga de resolver el patrón de manejo de estado, que básicamente sirve como un almacenamiento centralizado para todo los componentes de nuestra aplicación e implementa reglas para asegurarse que el estado (la información) se modifique de una manera predecible.


### Instalar el plugin


Intala Vuex de la misma forma que lo harias en cualquier aplicación de Vue.js usando npm:

```shell
$ npm install --save vuex
```

### Importar el plugin

Abre el archivo principal de tu aplicación (*entry file*, comunmente llamado `app.js` o `main.js`) y luego agrega las siguientes lineas al comienzo del archivo:

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```

Una vez que hayas hecho esto, vas a poder disponer de Vuex para manejar el estado de tu aplicación móvil de forma muy similar a la implementada en tus aplicaciones web basadas en Vue.

### Uso: Crear el *store*

Necesitas crear una nueva constante que representa al estado e invoca las llamadas a la API de Vuex. Puedes hacer esto en el archivo de entrada de tu aplicación (luego de la declaración de la instancia de Vue) o en un nuevo directorio (generalmente llamado `/store`).

En el siguiente ejemplo, la constante `store`, incluye el estado de un contador y registra sus mutaciones:

```js
const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
})
```

### Uso: Usar el *store*

Ahora puedes manejar el estado de la aplicación, llamando al *store* que acabas de crear. En el siguiente ejemplo, la app registra los cambios de la propiedad `count` a medida que presionamos los botons `+` o `-`. Ten en cuenta que no esta cambiando el estado de forma directa, sino con llamadas a las *mutations* que permiten incrementar/decrementar el valor de `count`.

```javascript
new Vue({
  computed: {
    count(){
      return store.state.count
    }
  },

  template: `
    <Page>
      <ScrollView>
        <StackLayout>
          <Button @tap="increment" text="+" />
          <Button @tap="decrement" text="-" />
          <Label :text="count" />
        </StackLayout>
      </ScrollView>
    </Page>
  `,

  methods: {
    increment() {
      store.commit('increment')
    },
    decrement() {
      store.commit('decrement')
    }
  }
}).$start()
```

Para más información sobre el funcionamiento de Vue, puedes ver la [documentación oficial](https://vuex.vuejs.org).

Para más información sobre como manejar elementos de Vuex, explora [el directorio `/store`](https://github.com/tralves/groceries-ns-vue/tree/master/src/store/) de la aplicación de ejemplo *NativeScript-Vue Groceries*.
