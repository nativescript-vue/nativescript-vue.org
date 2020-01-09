---
title: Guía de Actualización
contributors: [msaelices]
outdated: false
---

> Tiempo estimado para actualización: **10-20 minutos**.

If you scaffolded a NativeScript-Vue app using the 1.3.1 version of the Vue-CLI template, it's time to upgrade to the newest 2.0 version. This guide will help you do that.

## Resumen de la actualización

La nueva template tiene una diferente estructura de carpetas:

![Nueva estructura de carpetas](/screenshots/old-new-folder-structure.png)

El proceso se puede resumir en:

1. Crear un nuevo proyecto con la nueva template.
1. Copiar ficheros de tu antigua app a la nueva.
1. Reordenar y añadir algunos ficheros.

## Paso 1: Crear nueva app

Usa la Vue-CLI template para crear una nueva app. Asegúrate de ejecutar los mismos comandos de instalación que usaste para la antigua versión. Por ejemplo, si instalaste Vuex con el CLI la primera vez, hazlo ahora de nuevo.

Ejecuta el siguiente comando para crear un nuevo proyecto usando la Vue-CLI template.

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ tns preview
$ # or
$ tns run
```

## Paso 2: Reemplazar `App_Resources`

*iOS*: Copia la carpeta `./template/app/App_Resources/iOS` de tu antigua app. Entonces, pégala en la carpeta `app/App_Resources` de tu nueva app. Asegúrate de que estás reemplazando la nueva carpeta `App_Resources/iOS`.

*Android*: Copia todos los contenidos de la carpeta `./template/app/App_Resources/Android` de tu antigua app. Después, pégala en la carpeta `app/App_Resources/Android/src/main/res` de tu nueva app.


## Paso 3: Mezclar las carpetas `src` y `app`

Copia todas las carpetas que hay en `src` de tu antigua app y pégalas en la carpeta `app` de tu nueva app.

Si tienes fuentes de texto personalizadas, mueve los contenidos de la carpeta `src/assets/fonts` a la carpeta `app/fonts`. Esto asegura que NativeScript cargará las fuentes automáticamente.

## Paso 4: Modifica `main.js`

Modifica el bloque de inicialización de Vue en el fichero `main.js` para que se parezca a lo siguiente:

```js
new Vue({
  render: h => h('frame', [h(HelloWorld)]),
}).$start();
```

NativeScript 4.0 nos trae dos importantes mejoras:

* un nuevo elemento `<Frame>`
* una nueva forma de cambiar el elemento raíz de tu aplicación que permite compartir elementos comunes en diferentes páginas (elementos de navegación).

Antes de NativeScript 4.0, el elemento raíz era siempre un `<Frame>` que era implícitamente creado por NativeScript cuando la aplicación empezaba.

Con los últimos cambios, los elementos `<Frame>` y `<Page>` no son automáticamente creados. Así, en NativeScript-Vue 2.0.0 necesitas añadirlos explícitamenet en tu plantilla.

Para mantener el comportamiento previo de tener un único elemento raíz `<Frame>`, tu puedes cambiar la instancia raíz Vue para tener un elemento `<Frame>` y un `<Page>`.

**Ejemplo: Añadiendo `<Frame>` y `<Page>` a la plantilla**

```JavaScript
// in older versions
// this automatically created a Page
new Vue({
  template: `<Label text="Hello world"/>`
}).$start()
```

```JavaScript
// in NativeScript-Vue 2.0.0
// the <Frame> and <Page> must exist in your template
new Vue({
  template: `
    <Frame>
      <Page>
        <Label text="Hello world"/>
      </Page>
    </Frame>
  `
}).$start()
```

Esto te permite usar un elemento compartido en las diferentes páginas.

**Ejemplo: Usando un elemento compartido `<SideDrawer>`**

```js
new Vue({
  template: `
    <RadSideDrawer>
      <StackLayout ~drawerContent>...</StackLayout>
      <Frame ~mainContent>
        <Page>
          <Label text="Hello world"/>
        </Page>
      </Frame>
    </RadSideDrawer>
  `
}).$start()
```

## Paso 5: Cambiar las rutas

Al haber cambiado la estructura de carpetas, necesitas cambiar los paths en tu nueva app que apuntan a los estilos, fuentes e imágenes.

**Ejemplo: Cambiando las referencias a las imágenes**

En tu antigua app, es probable que tengas referencias a imágenes como esta.

```HTML
<Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
```

Para asegurar que NativeScript carga las imágenes, cambia el path al siguiente.

```HTML
<Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png"/>
```

## Paso 6 (Si es necesario): Corrige props para enrutado manual

Si tu app usa enrutado manual, la sintaxis para pasar props ha cambiado. Este cambio puede no ser necesario en todos los proyectos.

Es probable que tu antigua sintaxis sea como esta.

```JavaScript
this.$navigateTo(NewPage, {
                    transition: {},
                    transitioniOS: {},
                    transitionAndroid: {},

                    context: {
                        propsData: {
                            name: this.name,
                            value: this.value
                        }
                    }
                });
```

Para preservar el comportamiento de enrutado en la nueva app, cambia la sintaxis a la siguiente:

```JavaScript
this.$navigateTo(NewPage, {
                    transition: {},
                    transitioniOS: {},
                    transitionAndroid: {},

                    props: {
                        name: this.name,
                        value: this.value
                    }
                });
```

## Paso 7: Corrige el fichero `package.json`

Copia los valores relevantes del fichero `package.json` de tu antigua app al fichero `package.json` de tu nueva app.

Probablemente necesitarás copiar el bloque de `Dependencies:` y, en algunos casos, ajustar la versión y la descripción de la nueva app al comienzo del `package.json`.

## Paso 8: Limpiar y ejecutar

Ejecuta el siguiente comando para limpiar las carpetas de la nueva app y reinstalar todas las dependencias.

```shell
$ cd <project-name>
$ rm -rf platforms
$ npm install
$ tns run
```

## Paso 9 (Opcional): Prueba el HMR

NativeScript ahora ofrece soporte para HMR (Hot Module Replacement). La última versión de  NativeScript-Vue ofrece soporte HMR out-of-the-box pero requiere las NativeScript CLI.

Ejecuta el siguiente comando para obtener soporte HMR instalando la última y mejor versión de NativeScript CLI.

```shell
$ npm install -g nativescript@next
$ cd <project-name>
$ rm -rf platforms
$ tns run
```
