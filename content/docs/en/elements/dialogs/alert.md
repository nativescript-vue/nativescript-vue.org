---
title: AlertDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [MisterBrownRSA, rigor789]
---

The AlertDialog will act as a simple modal notification that requires confirmation.

---

```javascript
const dialogs = require('ui/dialogs')

module.exports = {
  mounted() {
    dialogs.alert('Hello!')
    .then(() => {
      console.log("Dialog closed")
    })
  }
}
```

The AlertDialog is also available globally, so instead of importing it from the dialogs module, you can simply call

```javascript
alert('Hello!')
.then(() => {
  console.log("Dialog closed")
})
```

anywhere in your code.


[> screenshots for=AlertDialog <]