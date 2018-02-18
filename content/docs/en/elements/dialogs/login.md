---
title: LoginDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login
contributors: [MisterBrownRSA, rigor789]
---

The LoginDialog has two inputs that are used for prompting the user for credentials.

---

```javascript
const dialogs = require('ui/dialogs')

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