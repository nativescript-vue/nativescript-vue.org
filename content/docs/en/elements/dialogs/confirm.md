---
title: Confirm
apiRef: https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.confirmoptions
contributors: [MisterBrownRSA]
---

The Confirm dialog acts as a boolean (Yes/No) input dialog.

---

```javascript
const dialogs = require('ui/dialogs');

module.exports = {
  mounted() {
    dialogs.confirm('Are you ready?')
        .then(function (result) {
            console.log(result);
        });
  }
};
```

[> screenshots for=Confirm <]