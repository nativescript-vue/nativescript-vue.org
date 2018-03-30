---
title: LoginDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login
contributors: [alexhiroshi]
---

O LoginDialog tem dois campos que são usados para pedir as credenciais para o usuário.

---

```javascript
const dialogs = require('tns-core-modules/ui/dialogs')

module.exports = {
  mounted() {
    dialogs.login('Please log in', 'Username', 'Password')
    .then(result => {
      console.log(result)
    })
  }
}
```

[> screenshots for=LoginDialog <]