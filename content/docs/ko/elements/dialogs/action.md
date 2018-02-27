---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action 
contributors: [MisterBrownRSA, rigor789]
---

The ActionDialog allows you to create a dialog with a list of selectable options.

---

```javascript
const dialogs = require('ui/dialogs')

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