---
title: Usando las Vue DevTools
contributors: [msaelices]
outdated: false
---

Puedes depurar aplicaciones NativeScript-Vue usando la versión estándar de las Vue DevTools.

Para simplificar la integración, puede usar el plugin [`nativescript-vue-devtools`](https://github.com/nativescript-vue/nativescript-vue-devtools) que se ocupa de conectar tu app con las Vue DevTools.

## Paso 1: Instalar dependencias

Ejecuta el comando siguiente:

```shell
$ cd <project-folder>
$ npm install --save @vue/devtools nativescript-toasty nativescript-socketio nativescript-vue-devtools
```

## Paso 2 (Opcional): Instalar Vue DevTools de forma global

Para acceder fácilmente a las Vue DevTools, puedes instalar el paquete de forma global.

Ejecuta el comando siguiente:

```shell
$ npm install -g @vue/devtools
```

Después de completar la instalación, puedes ejecutar el comando `vue-devtools` desde cualquier directorio en tu máquina de desarrollo.

## Paso 3: Instalar el plugin `nativescript-vue-devtools` en tu app

Para conectar tu aplicación a las Vue DevTools, necesitas modificar el fichero `main.js` (o `main.ts`).

En tu código, importa las `nativescript-vue-devtools` y configúralas en NativeScript-Vue usando `Vue.use()`.

```JavaScript
import VueDevtools from 'nativescript-vue-devtools'
import Vue from 'nativescript-vue'

Vue.use(VueDevtools)
```
> Asegúrate importar las devtools antes que Vue, ya que en caso contrario puede no funcionar como esperas.

Si estás usando un dispositivo real en lugar de un emulador, establece la opción de configuración `host` para apuntar a la IP de tu máquina de desarrollo. En caso contrario, tu dispositivo no podrá conectarse a tu máquina host.

```JavaScript
Vue.use(VueDevtools, { host: '192.168.1.42' })
```

## Paso 4: Ejecuta las Vue DevTools

Ejecuta el comando siguiente para lanzar las Vue DevTools:

```shell
$ # if installed globally
$ vue-devtools
$ # or
$ npx vue-devtools
```

## Paso 5: Reconstruye y ejecuta tu app

Ejecuta el comando siguiente:

```shell
$ rm -rf platforms
$ tns run android
$ # or
$ tns run ios
```

Si tu máquina y app están bien configuradas, deberías ver unos pocos componentes en el árbol de componentes de las Vue DevTools.
