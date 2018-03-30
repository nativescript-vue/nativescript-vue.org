---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action
contributors: [alexhiroshi]
---

O ActionDialog permite você criar um diálogo com uma lista de opções selecionáveis.

---

```javascript
const dialogs = require('tns-core-modules/ui/dialogs')

module.exports = {
  mounted() {
    dialogs.action('Choose one!', 'Or cancel...', ['cheese', 'wine'])
    .then(result => {
      console.log(result);
    })
  }
}
```

[> screenshots for=ActionDialog <]