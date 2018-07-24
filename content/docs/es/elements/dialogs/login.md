---
title: LoginDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login
contributors: [ianaya89]
---

El método `login()` muestra en pantalla, un diálogo donde el usuario puede ingresar credenciales para iniciar sesión.

El método es parte del [módulo de `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Uso básico

El método `login()` esta disponible de forma global. Puedes llamar a este método en cualquier lugar de tu aplicación.

```javascript
login('Your message', 'Username field value', 'Password field value')
  .then(result => {
   console.log(`Dialog result: ${result.result}, user: ${result.userName}, pwd: ${result.password}`);
});
```

## Configurar las opciones del diálogo

```JavaScript
login({
  title: 'Your login title',
  message: 'Your login message',
  okButtonText: 'Your OK button text',
  cancelButtonText: 'Your Cancel button text',
  userName: 'Username field value',
  password: 'Password field value'
}).then(result => {
  console.log(`Dialog result: ${result.result}, user: ${result.userName}, pwd: ${result.password}`);
});
```

[> screenshots for=LoginDialog <]
