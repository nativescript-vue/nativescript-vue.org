---
title: Quick Start
contributors: [ianaya89]
---
Si no quieres lidiar con la instalacion y configuracion antes de poder proabar NativeScript-Vue, puedes hechar un vistazo a [NativeScript Playground](/en/docs/getting-started/playground-tutorial).

Pero si ya cuentas con tu ambiente de desarrollo listo para desarrollo nativo, puedes comnenzar con este *template*:

```shell
$ npm i -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <nombre-proyecto>
$ cd <nombre-proyecto>
$ npm i
```

Luego, puedes iniciar tu aplicacion con este comando:

```shell
$ npm run watch:<plataforma>
```

> *platforma* puede ser `ios` o `android`.

Esta serie de comandos ejecutan las siguientes operaciones en tu ambiente de desarrollo:


1. Instala el [CLI de Vue]() y su funcionalidad de *add-on*. Esto permite que puedas utilizar ambos CLI en tu sistema (el de Vue y el de NativeScript). Puedes evitar este proceso si ya tienes instalado el CLI.
2. Obtiene  de GitHub los templates necesarios y crea el proyecto de forma local. Este template se basa en los componentes `.vue` y contiene por defecto, routing ([vue-router]()) y manejo de estado ([Vuex]()). En [este]((/es/docs/getting-started/templates)) link podes econtrar mas información sobre los templates disponibles.
3. Cambia al directorio donde se encuentra el nuevo proyecto (creado anteriormente).
4. Instala todas las dependenciasde npm locales.
5. Compila e inicia el proyecto en cualquier dispositivo (compatible) conectado a tu computadora o en el emulador/simulador de la plataforma seleccionada. La opcion `watch` sirve para detectar cambios en el código y aplicarlos de forma automática.
