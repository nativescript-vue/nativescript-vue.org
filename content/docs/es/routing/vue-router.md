---
title: Vue Router
contributors: [ianaya89]
---

> Currently, integration with Vue Router is **unsupported**. Until the team resolves the issue, please use [manual routing](/en/docs/routing/manual-routing).

<!--

Actualmente, la integración con **vue-router** esta en modo experimental. Si quieres utilizar una estrategia **no experimental** puedes checar [*manual routing*](/en/docs/routing/manual-routing).

Con el *router* puedes elegir entre direccionamiento [basado en componentes](https://router.vuejs.org/api/#router-view) o direccionamiento basado en páginas. En general, cuando se trabaja con aplicaciones móviles, se suele utilizar la estrategia basada en páginas.

## Instalar y registrar el plugin

Debes abrir la terminal e ingresar el siguiente comando (recuerda estar posicionado en el directorio del proyecto):

```shell
$ npm install --save vue-router
```

En el archivo principal de la aplicacióm (generalmente, `app.js` o `main.js`), debes importar Vue y *vue-router y luego enlazarlos.

```JavaScript
const Vue = require('nativescript-vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);
```

## Uso básico

Esta sección recorre un poco un ejemplo completo basdo en direccionamiento por páginas, separando el proceso en pequeños pasos y con detalladas aclaraciones.

---
Define una página `Mater` con el *router* como título (`$route.path`).

Crea un botón con el evento siguiente evento: `@tap="$router.push('/detail')"`. Cada vez que se presione este botón, una nueva página `Detail` será apilada en la pila de navegación.

Crea un segundo botón con el mismo evento pero agrega un parametro de tipo *query* llamado `user` a la ruta. Cuando se presione este botón, le enviara información adicional a la página `Detail`.

```HTML
const Master = {
  template: `
    <Page>
      <ActionBar :title="$route.path" />
      <StackLayout>
        <Button text="To Details" @tap="$router.push('/detail')" />
        <Button text="To Details (with query param)" @tap="$router.push('/detail?user=John+Appleseed')"></Button>
      </StackLayout>
    </Page>
  `
};
```

---
Define la página `Detail` con un `NavigationButton`. Recuerda que en iOS, este botón te direcciona a la página anterior (de la pila de navegación). En cambio en Android necesitas agregar manualmente un evento `tap` para conseguir el mismo comportamiento: `@tap="$router.back()"`

Dentro de `Detail`, puedes utilizar el parametro de tipo *query* llamado `user` que definiste en la página `Master`. Por ejemplo, se puede visualizar ese valor como texto dentro de un componente `Label`: `<Label :text="$route.query.user">`.

Crea otro botón con el siguiente evento: `@tap="$router.go(<número-de-páginas>)`. Esto permitirá que cuando se presione ese botón, puedes navegar hacia atras una determinada cantidad de páginas.

```HTML
const Detail = {
  template: `
    <Page>
      <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
      </ActionBar>
      <StackLayout>
        <Label :text="$route.query.user" v-if="$route.query.user" />
        <Button text="Back to Master" @tap="$router.go(-1)" />
      </StackLayout>
    </Page>
  `
};
```

---
Crea una instancia de *router*, habilita el direccionamiento a través de páginas y define todas las rutas de tu aplicación.

```JavaScript
const router = new VueRouter({
  pageRouting: true,
  routes: [
    {path: '/master', component: Master},
    {path: '/detail', component: Detail},
    {path: '*', redirect: '/master'}
  ]
});
```

---
Carga la ruta por defecto (*master*) cuando la aplicación se inicializa.

```JavaScript
router.replace('/master');
```

---
Enlza a la instancia de `Vue` con la instancia del *router* creada anteriormente.

```JavaScript
new Vue({
  router
}).$start();
```

## Puedes ver también

*vue-router* tiene más trucos debajo de la manga, para conocerlos mejor puedes visitar [la documentación oficial]((https://router.vuejs.org/en/).

También puedes encontrar varios [ejemplos de NativeScript-Vue](https://github.com/nativescript-vue/nativescript-vue/tree/master/samples):

* [app-with-page-routing](https://github.com/nativescript-vue/nativescript-vue/tree/master/samples/app/app-with-page-routing.js)
* [app-with-router](https://github.com/nativescript-vue/nativescript-vue/tree/master/samples/app/app-with-router.js)
* [app-with-router-pages](https://github.com/nativescript-vue/nativescript-vue/tree/master/samples/app/app-with-router-pages.js)

-->
