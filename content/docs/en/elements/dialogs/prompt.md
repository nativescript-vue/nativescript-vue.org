---
title: PromptDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt
contributors: [MisterBrownRSA, rigor789]
---

The PromptDialog allows you to prompt the user for input.

---

```javascript
const dialogs = require('ui/dialogs')

module.exports = {
  mounted() {
    dialogs.prompt('How are you?', 'Amazing!')
    .then(result => {
      console.log(`Dialog result: ${result.result}, text: ${result.text}`)
    })
  }
}
```

The PromptDialog is also available globally, so instead of importing it from the dialogs module, you can simply call

```javascript
prompt('How are you?', 'Amazing!')
.then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
})
```

anywhere in your code.

[> screenshots for=PromptDialog <]