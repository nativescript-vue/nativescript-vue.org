---
title: PromptDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt
contributors: [ianaya89]
---

El método `prompt()` muestra en pantalla un dialogo que permite al usuario ingresar información en un campo de texto.

El método forma parte del [módulo de `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Uso básico

El método  `prompt()` esta disponible de forma global. Puedes llamar a este método en cualquier lugar de tu aplicación.

```JavaScript
prompt('Your message to the user', 'Suggested user input')
.then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
})
```

## Configurar las opciones del diálogo

```JavaScript
prompt({
  title: 'Your dialog title',
  message: 'Your message',
  okButtonText: 'Your OK button text',
  cancelButtonText: 'Your Cancel button text',
  defaultText: 'Suggested user input',
}).then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
});
```

## Configurar el tipo de campo

También puedes configurar que tipo de campo deseas mostrar usando la propiedad `inputType`. Puedes optar entre los valores `text` (valor por defecto), `email` y `password`

```JavaScript
inputType: dialogs.inputType.text
inputType: dialogs.inputType.email
inputType: dialogs.inputType.password
```

**NOTE:** Esta opción no esta disponible de forma global, por lo tanto debes importar el módulo `dialogs` antes de poder usar `inputType`.

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')
```

### Ejemplo

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')

prompt({
  title: 'Email Prompt',
  message: 'Provide your email address:',
  okButtonText: 'OK',
  cancelButtonText: 'Cancel',
  defaultText: 'name@domain.com',
  inputType: dialogs.inputType.email
})
.then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
});
```

[> screenshots for=PromptDialog <]
