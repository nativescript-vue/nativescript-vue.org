---
title: AlertDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [ianaya89]
---

El método `alert()` muestra un mensaje con un botón de OK. Puedes usarlo cuando tengas que mostrar información o notificaciones que no requieran de una acción por parte del usuario.

Este método forma parte del [módulo de `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Uso básico

El método `alert()` esta disponible de forma global. Puedes llamarlo en cualquier lugar dentro de tu aplicacioón.

```javascript
alert('Your message')
  .then(() => {
    console.log('Alert dialog closed.');
  });
```

## Configurar las opciones del diálogo

```JavaScript
alert({
  title: 'Your title',
  message: 'Your message',
  okButtonText: 'Your OK button text'
}).then(() => {
  console.log('Alert dialog closed');
});
```

[> screenshots for=AlertDialog <]
