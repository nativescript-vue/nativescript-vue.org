---
title: Action
apiRef: https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.actionoptions
contributors: [MisterBrownRSA]
---

The Action dialog allows you to create a list of options for input.

---

```javascript
const dialogs = require('ui/dialogs');

module.exports = {
  mounted() {
    dialogs.action('Choose one!', 'Or cancel...', ['cheese', 'wine'])
    .then(function (result) {
        console.log(result);
    });
  }
};
```

[> screenshots for=Action <]