---
title: Alert
apiRef: https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.alertoptions
contributors: [MisterBrownRSA]
---

The Alert dialog will act as a simple modal notification the requires confirmation input.

---

```javascript
const dialogs = require('ui/dialogs');

module.exports = {
  mounted() {
    dialogs.alert('Hello!')
        .then(function () {
            console.log("Dialog closed");
        })
  }
};
```

[> screenshots for=Alert <]