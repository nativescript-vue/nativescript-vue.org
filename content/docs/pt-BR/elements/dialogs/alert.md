---
title: AlertDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [alexhiroshi]
---

O método `alert()` exibe uma mensagem e um botão de OK. Use-o para mostrar informações e notificações que não precisam de uma ação do usuário.

O método faz parte do [módulo `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Uso básico

O método `alert()` está disponível globalmente. Você pode chamar de qualquer lugar do seu aplicativo.

```javascript
alert('Your message')
  .then(() => {
    console.log("Alert dialog closed.");
  });
```

## Configurar opções

```JavaScript
alert({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your OK button text"
}).then(() => {
  console.log("Alert dialog closed");
});
```

[> screenshots for=AlertDialog <]