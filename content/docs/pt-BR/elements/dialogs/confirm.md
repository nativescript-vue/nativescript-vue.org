---
title: ConfirmDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm
contributors: [alexhiroshi]
---

O método `confirm()` exibe uma mensagem de confirmação com botões de Cancel e OK.

O método faz parte do [módulo `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Uso básico

O método `confirm()` está disponível globalmente. Você pode chamar de qualquer lugar do seu aplicativo.

```javascript
confirm('Your message')
  .then(result => {
    console.log(result);
  });
```

## Configurar opções

```javascript
confirm({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your OK button text",
  cancelButtonText: "Your Cancel text"
}).then(result => {
  console.log(result);
});
```

[> screenshots for=ConfirmDialog <]