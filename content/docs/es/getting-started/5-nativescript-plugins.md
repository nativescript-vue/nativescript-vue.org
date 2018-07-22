---
title: Usando Plusings de NativeScript
contributors: [ianaya89]
---

Los plugins funcionan igual que en [cualquier otra aplicación de NativeScript]((https://docs.nativescript.org/plugins/plugins), pero seguramente te preguntas como los plugins de UI funcionan con Vue.

Los plugins de UI funcionan prácticamente igual a la forma en que usarías un plugin de UI en una aplicación con Angular.

## Uso de Ejemplo: nativescript-gradient

Revisemos como puedes usar [nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient). También puedes checar su uso en el [ejemplo de listview](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js).


### Instalar el plugin usando NativeScript CLI

Luego de haber configurado [tu ambiente de desarrollo local](/es/docs/getting-started/installation), debes ejecutar el siguiente comando:

```shell
$ npm install --save nativescript-gradient
```

> **NOTA:** Si estas usando [vue-cli-template](/en/docs/getting-started/templates/#nativescript-vuevue-cli-template), debes correr este comando

```shell
$ npm run clean
```

### Registrar el plugin en la aplicación

Abre el archivo principal de tu aplicacion (*entry file*, comunmente llamado `app.js` o `main.js`) y luego agrega la siguiente linea al comienzo del archivo:

```JavaScript
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

Esta línea de código require y registra el plugin en tu instancia de `Vue`. La funcioón `registerElement` recibe el nombre de `<Elemento>` como primer argumento y una función que retorna el plugin como segundo argument. Asegurate de proveer el nombre del elemento, exactamente igual a la forma en la que vas a llamarlo en el coódigo y de proveer el nombre del plugin exactamente igual al nombre del paquete de npm.

### Usar el plugin en la aplicación

```HTML
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
