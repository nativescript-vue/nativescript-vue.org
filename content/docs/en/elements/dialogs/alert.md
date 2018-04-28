---
title: AlertDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [MisterBrownRSA, rigor789, ikoevska]
---

`dialogs.alert()` shows a message and an OK button. Use it to show information and notifications that do not require an action from the user.

---

**TIP:** The `alert()` method is available globally. You can call it anywhere in your app without importing it from the `dialogs` module first.

```javascript
alert('Hello!')
.then(() => {
  console.log("Dialog closed")
})
```

## Basic usage

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')

module.exports = {
  mounted() {
    dialogs.alert('Your message')
    .then(() => {
      console.log("Dialog closed")
    })
  }
}
```

## Example: Button shows alert

```JavaScript
onst Vue = require("nativescript-vue");

new Vue({
  methods: {
    onButtonTap() {
      alert('Hello!')
        .then(() => {
          console.log("Dialog closed.")
        })
    },
  },


  template: `
    <Page class="page">
      <Button text="Show Alert" @tap="onButtonTap" />
    </Page>
  `,

}).$start();
```
[> screenshots for=AlertDialog <]