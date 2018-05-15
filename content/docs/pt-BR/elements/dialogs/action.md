---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action
contributors: [alexhiroshi]
---

O método `action()` exibe uma lista de opções selecionáveis e um botão para cancelar. Use-o para que o usuário escolha entre opções ou descarte a seleção.

O método faz parte do [módulo `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Uso básico

O método `action()` está disponível globalmente. Você pode chamar de qualquer lugar do seu aplicativo.

```JavaScript
action("Your message", "Cancel button text", ["Option1", "Option2"])
  .then(result => {
    console.log(result);
  });
```

[> screenshots for=ActionDialog <]