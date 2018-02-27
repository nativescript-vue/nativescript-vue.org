---
title: ConfirmDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm
contributors: [MisterBrownRSA, rigor789]
---

The ConfirmDialog acts as a boolean (Yes/No) input dialog.

---

```javascript
const dialogs = require('ui/dialogs')

module.exports = {
  mounted() {
    dialogs.confirm('Are you ready?')
    .then(result => {
      console.log(result)
    })
  }
}
```

The ConfirmDialog is also available globally, so instead of importing it from the dialogs module, you can simply call

```javascript
confirm('Are you ready?')
.then(result => {
  console.log(result)
})
```

anywhere in your code.

[> screenshots for=ConfirmDialog <]