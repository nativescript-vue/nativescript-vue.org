---
title: Guia Rápida
contributors: [ianaya89]
---

Si no deseas lidiar con la instalación y configuración antes de poder probar NativeScript-Vue, puedes hechar un vistazo a [NativeScript Playground](/es/docs/getting-started/playground-tutorial), una herramienta *online* que te permite dar tus primeros pasos con el framework.

Para preparar tu ambiente local e instalar todo lo necesario para poder usar NativeScript, puedes seguir las instrucciones de [esta guia](https://docs.nativescript.org/angular/start/quick-setup).

Si ya cuentas con tu ambiente local listo para desarrollo nativo, puedes comenzar con este *template*:

```shell
$ npm i -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <nombre-proyecto>
$ cd <nombre-proyecto>
$ npm i
```

Luego, puedes iniciar tu aplicación escribiendo este comando:

```shell
$ npm run watch:<plataforma>
```

> *plataforma* acepta los valores `ios` o `android`.

Esta serie de comandos ejecutan las siguientes operaciones en tu ambiente de desarrollo:


1. Instala el [CLI de Vue](https://github.com/vuejs/vue-cli). Esto permite que puedas utilizar ambos CLI en tu sistema (el de Vue y el de NativeScript). Puedes evitar este proceso si ya tienes instalado el CLI.
1. El CLI, Obtiene de GitHub los templates necesarios y luego crea el proyecto de forma local. El template utilizado, [nativescript-vue/vue-cli-template](https://github.com/nativescript-vue/vue-cli-template), esta basado en archivos `.vue` y contiene por defecto, *routing* ([vue-router](https://router.vuejs.org/)) y manejo de estado ([Vuex](https://vuex.vuejs.org/)). En [este](/es/docs/getting-started/templates) link puedes encontrar más información sobre los templates disponibles.
1. Posicionas la terminal en el directorio donde se encuentra el nuevo proyecto (creado anteriormente).
1. Instala todas las dependencias de npm locales.
1. Compila e inicia el proyecto en cualquier dispositivo (compatible) conectado a tu computadora o en el emulador/simulador de la plataforma seleccionada. La opcion `watch` sirve para detectar cambios en el código y aplicarlos de forma automática.
