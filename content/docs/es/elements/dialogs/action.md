---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action
contributors: [ianaya89]
---

El método `action()`, muestra una lista de opciones seleccionables y un boton de cancelación. Utiliza este elemento para permitir que el usuario elija entre varias opciones o que cancele la selección.

El método es para del [módulo de `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Uso básico

El método `action()` esta disponible de forma global. Puedes llamarlo en cualquier lugar dentro de tu aplicacioón.

```JavaScript
action('Your message', 'Cancel button text', ['Option1', 'Option2'])
  .then(result => {
    console.log(result);
  });
```

[> screenshots for=ActionDialog <]
