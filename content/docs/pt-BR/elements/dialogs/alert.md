---
title: AlertDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [alexhiroshi]
---

O AlertDialog irá funcionar como um simples modal de notificação que requer confirmação.

---

```javascript
const dialogs = require('tns-core-modules/ui/dialogs')

module.exports = {
  mounted() {
    dialogs.alert('Hello!')
    .then(() => {
      console.log("Dialog closed")
    })
  }
}
```

O AlertDialog está disponível globalmente, ao invés de importa do módulo de dialogs, você pode simplesmente chamar

```javascript
alert('Hello!')
.then(() => {
  console.log("Dialog closed")
})
```

em qualquer lugar do seu código.


[> screenshots for=AlertDialog <]