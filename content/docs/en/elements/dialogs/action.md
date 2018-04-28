---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action 
contributors: [MisterBrownRSA, rigor789, ikoevska]
---

`<ActionDialog>` is a dialog component that lets you show a list of selectable options and a cancellation button.

---

## Basic use

```JavaScript
const dialogs = require('tns-core-modules/ui/dialogs')

module.exports = {
  mounted() {
    dialogs.action("Your message", "Cancel button text", ["Option1", "Option2"]))
    .then(result => {
      console.log(result);
    })
  }
}
```

## Example: Button shows dialog

```JavaScript
const Vue = require("nativescript-vue");

const dialogs = require('tns-core-modules/ui/dialogs') //Enables the dialogs module

new Vue({
  methods: {
    onButtonTap() {
      dialogs.action('Choose one!', 'No, thanks!', ['Cheese', 'Wine', 'Chocolate'])
        .then(result => {
          console.log(result);
        })
    },
  },


  template: `
    <Page class="page">
      <Button text="Click Me!" @tap="onButtonTap" />
    </Page>
  `,

}).$start();
```

[> screenshots for=ActionDialog <]