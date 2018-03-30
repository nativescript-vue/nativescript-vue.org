---
title: ConfirmDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm
contributors: [alexhiroshi]
---

O ConfirmDialog funciona como um diálogo boleano (Sim/Não).

---

```javascript
const dialogs = require('tns-core-modules/ui/dialogs')

module.exports = {
  mounted() {
    dialogs.confirm('Are you ready?')
    .then(result => {
      console.log(result)
    })
  }
}
```

O ConfirmDialog está disponível globalmente, ao invés de importa do módulo de dialogs, você pode simplesmente chamar

```javascript
confirm('Are you ready?')
.then(result => {
  console.log(result)
})
```

em qualquer lugar do seu código.

[> screenshots for=ConfirmDialog <]