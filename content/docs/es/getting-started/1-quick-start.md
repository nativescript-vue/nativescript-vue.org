---
title: Guia Rápida
contributors: [ianaya89, msaelices]
---

Si no deseas lidiar con la instalación y configuración antes de poder probar NativeScript-Vue, puedes hechar un vistazo a [NativeScript Playground](/es/docs/getting-started/playground-tutorial), una herramienta *online* que te permite dar tus primeros pasos con el framework.

Para preparar tu ambiente local e instalar todo lo necesario para poder usar NativeScript, puedes seguir las instrucciones de [esta guia](/es/docs/getting-started/installation).

**Funcionalidades soportadas**

-   Soporte para ficheros `.vue`
-   Gestor de estados Vuex (opcional)
-   Temas NativeScript
-   Application presets

> **Note**: Si eliges instalar las DevTools, no podrás usar `tns preview`, ya que la app de Preview no soporta uno de los plugins usados por las DevTools.

Si [ya cuentas con tu ambiente local listo para desarrollo nativo](/es/docs/getting-started/installation), puedes comenzar con la [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template):

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$
$ npm install
$ # or
$ yarn install
$
$ tns preview
$ # or
$ tns run
```

Esta serie de comandos ejecutan las siguientes operaciones en tu ambiente de desarrollo:

1. Instala el [CLI de Vue](https://github.com/vuejs/vue-cli). Esto permite que puedas utilizar ambos CLI en tu sistema (el de Vue y el de NativeScript). Puedes evitar este proceso si ya tienes instalado el CLI.
2. El CLI, Obtiene de GitHub los templates necesarios y luego crea el proyecto de forma local. El template utilizado, [nativescript-vue/vue-cli-template](https://github.com/nativescript-vue/vue-cli-template), esta basado en archivos `.vue` y contiene por defecto, *routing* ([vue-router](https://router.vuejs.org/)) y manejo de estado ([Vuex](https://vuex.vuejs.org/)). En [este](/es/docs/getting-started/templates) link puedes encontrar más información sobre los templates disponibles.
3. Posicionas la terminal en el directorio donde se encuentra el nuevo proyecto (creado anteriormente).
4. Instala todas las dependencias de npm locales.
5. Si ejecutaste `tns preview`, genera un código QR que puede usarse para visualizar la App en el dispositivo.
6. Si ejecutaste `tns run`, construye y ejecuta el proyecto en todos los dispositivos conectados o en emuladores nativos.
