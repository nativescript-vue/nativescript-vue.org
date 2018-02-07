---
title: Prompt
apiRef: https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.promptoptions
contributors: [MisterBrownRSA]
---

The Prompt dialog has a simple text message that can be confirmed.

---

```javascript
const dialogs = require('ui/dialogs');

module.exports = {
  mounted() {
    dialogs.prompt('How are you?', 'Amazing!')
        .then(function (result) {
            console.log("Dialog result: " + r.result + ", text: " + r.text);
        });
  }
};
```

[> screenshots for=Prompt <]