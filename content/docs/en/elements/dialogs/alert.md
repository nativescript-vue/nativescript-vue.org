---
title: AlertDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [MisterBrownRSA, rigor789, ikoevska]
---

The `alert()` method shows a message and an OK button. Use it to show information and notifications that do not require an action from the user.

The method is part of the [`dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_) module. See also: [Dialogs](https://docs.nativescript.org/ui/dialogs).

---

## Basic use

The `alert()` method is available globally. You can call it anywhere in your app.

```javascript
alert('Your message')
.then(() => {
  console.log("Alert dialog closed.")
})
```

## Example: Button shows alert

```JavaScript
onst Vue = require("nativescript-vue");

new Vue({
  methods: {
    onButtonTap() {
      alert('Your message')
        .then(() => {
          console.log("Aler dialog closed.")
        })
    },
  },


  template: `
    <Page class="page">
      <Button text="Show Alert Dialog" @tap="onButtonTap" />
    </Page>
  `,

}).$start();
```
[> screenshots for=AlertDialog <]