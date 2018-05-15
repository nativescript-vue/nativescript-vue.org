---
title: PromptDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt
contributors: [alexhiroshi]
---

O método `prompt()` exibe um diálogo com um campo de uma linha para o usuário digitar.

O método faz parte do [módulo `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Uso básico

O método `prompt()` está disponível globalmente. Você pode chamar de qualquer lugar do seu aplicativo.

```JavaScript
prompt('Your message to the user', 'Suggested user input')
.then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
})
```

## Configurar opções

```JavaScript
prompt({
  title: "Your dialog title",
  message: "Your message",
  okButtonText: "Your OK button text",
  cancelButtonText: "Your Cancel button text",
  defaultText: "Suggested user input",
}).then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
});
```

## Configurar tipo do campo

Você também pode configurar o tipo do input usando `inputType`. É possível escolher entre texto simples (`text`), campo de e-mail (`email`), e campo de senha (`password`).

```JavaScript
inputType: dialogs.inputType.text
inputType: dialogs.inputType.email
inputType: dialogs.inputType.password
```

**NOTA:** Essa opção não está disponível globalmente e você precisa adicionar o módulo `dialogs`, com require, em seu aplicativo antes de usar `inputType`.

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')
```

### Exemplo

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')

prompt({
  title: "Email Prompt",
  message: "Provide your email address:",
  okButtonText: "OK",
  cancelButtonText: "Cancel",
  defaultText: "name@domain.com",
  inputType: dialogs.inputType.email
}).then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
});
```

[> screenshots for=PromptDialog <]