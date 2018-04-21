---
title: PromptDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt
contributors: [alexhiroshi]
---

O PromptDialog permite que você solicite entrada de dados do usuário.

---

```javascript
const dialogs = require('tns-core-modules/ui/dialogs')

module.exports = {
  mounted() {
    dialogs.prompt('How are you?', 'Amazing!')
    .then(result => {
      console.log(`Dialog result: ${result.result}, text: ${result.text}`)
    })
  }
}
```

O PromptDialog está disponível globalmente, ao invés de importa do módulo de dialogs, você pode simplesmente chamar

```javascript
prompt('How are you?', 'Amazing!')
.then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
})
```

em qualquer lugar do seu código.

[> screenshots for=PromptDialog <]