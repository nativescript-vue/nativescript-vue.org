---
title: Code-Sharing
contributors: [msaelices]
---

> Esta página está basada en el post del Blog de [Jen Looper](https://twitter.com/jenlooper) titulado [Code Sharing with NativeScript-Vue](https://www.nativescript.org/blog/code-sharing-with-nativescript-vue).

Ya sabes que puedes escribir aplicaciones para la web usando Vue.js. Gracias a NativeScript-Vue, tu también puedes programar aplicaciones para móviles. Un proyecto code-sharing es uno donde mantienes la misma base de código para la web y para el móvil. Aprende cómo puedes conseguirlo usando el plugin `vue-cli-plugin-nativescript-vue`.

## Creando un proyecto code-sharing

Primero, instala el Vue CLI de forma global:

```bash
npm install -g @vue/cli
```

Después, crea un nuevo proyecto de web Vue:

```bash
vue create web-mobile-project
```

Entra dentro del nuevo proyecto y añade el plugin `vue-cli-plugin-nativescript-vue`:

```bash
cd web-mobile-project
vue add vue-cli-plugin-nativescript-vue
```

El plugin te hará algunas preguntas para configurarlo. Los valores por defecto están bien, pero asegúrate de usar tu propio identificador de tu app. Acerca de la pregunta de "Is this a brand new project", añadir este plugin a un proyecto ya existente hará un cambio "no destructivo" a la parte móvil del proyecto. Si estás empezando un nuevo proyecto de app móvil, puedes continuar y mantener ese selector como está.

Una vez que el plugin es instalado, puedes arrancar tanto la web como la app móvil con los scripts `npm run` ofrecidos por el plugin.

Para construir la aplicación web y arrancar el servidor de desarrollo, ejecuta:

```bash
npm run serve:web
```

Para previsualizar la app móvil, ejecuta:

```bash
npm run preview:android
# or
npm run preview:ios
```

## Estructura del proyecto

En la estructura del proyecto por defecto, los ficheros de la web y móvil residen en el mismo directorio. Echa un vistazo, por ejemplo, a los dos ficheros `main.js` y `main.native.js`. Ya que ellos son el punto de entrada para tus apps móvil y web y probablemente incluyan diferentes plugins en cada plataforma, son diferenciados mediante diferentes nombres. Cualquier fichero con nombre ``*.native.*`` será renderizado sólo en la app móvil.

Configura la app web:

**main.js**
```javascript
import Vue from 'vue';
import App from '~/App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

Empieza la app NativeScript-Vue:

**main.native.js**
```javascript
import Vue from 'nativescript-vue';

import App from './App.vue';

Vue.config.silent = false;

new Vue({
  render: h => h('frame', [h(App)]),
}).$start();
```

Ahora echa un vistazo al fichero `App.vue`, el único punto de entrada y el primero componente SFC de Vue con plantillas compartidas:

```vue
<template web>
  <div class="w-page">
    <div class="w-container">
      <img src="~/assets/logo.png" alt="logo" height="20%" width="20%">
      <HelloWorld :msg="msg"/>
    </div>
  </div>
</template>
<template native>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout rows="auto, auto">
      <HelloWorld :msg="msg"/>
    </GridLayout>
  </Page>
</template>
```

Si no tienes mucho marcado XML, puedes fácilmente crear un mismo fichero con las partes diferenciadas por plataforma. Incluso más aún, en este fichero puedes compartir un mismo bloque script entre las platformas; sólo los métodos usados para cada plataforma serán seleccionados:

```javascript
<script>
  import HelloWorld from '~/components/HelloWorld';

  const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env;

  export default {
    components: {
      HelloWorld,
    },
    data() {
      return {
        navbarTitle: `App.vue`,
        msg: `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`,
      };
    },
    methods: {
    }
  };
</script>
```

En este fichero, también, un ejemplo de estilos diferenciados: se importan sólo los estilos relevantes a tu plataforma:

```vue
<style web>
  @import '~styles/style-one';

  .w-page {
    height: 100%;
    width: 100%;
  }
</style>
<style native>
  @import '~styles/style-one';
</style>
```

> Puedes compartir recursos colocándolos en la carpeta assets.

Opcionalmente, puedes separar tus plantillas por plataforma incluso dentro del mundo móvil; un ejemplo de esto se incluye en un componente SFC que se divide para web y nativo (`HelloWorld.vue` and `HelloWorld.native.vue`), y está también la opción de separar las plataformas iOS y Android (con ficheros `HelloWorld.ios.vue` y `HelloWorld.android.vue`).

Dada la flexibilidad inherente y la estructura de código generada, el desarrollador tiene via libre para diferentes estrategias para compartir código, diferenciando ficheros enteros, plantillas, estilos y por tanto, la cantidad de código compartido entre los diferentes componentes de tu aplicación. El plugin te deja realizar las decisiones de arquitectura que deseas basados en las necesidades de tu proyecto, ofreciendo una gran variedad de opciones.

> Y acerca del enrutado? Ya que Vue Router no está soportado para móvil, recomendamos usar Vue Router en la web y usar enrutado manual en el móvil. El equipo está trabajando en una solución más sofisticada para permitir compartir el enrutado en web y móvil, pero por el momento, la sugerencia anterior es nuestra recomendación.

## Aplicación de muestra

Para una aplicación real de code-sharing con NativeScript-Vue, mira el proyecto [mandala-me](https://github.com/jlooper/mandala-me) de [Jen Looper](https://twitter.com/jenlooper).
