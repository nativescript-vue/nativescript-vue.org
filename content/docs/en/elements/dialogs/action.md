---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action 
contributors: [MisterBrownRSA, rigor789, ikoevska]
---

The `action()` method shows a list of selectable options and a cancellation button. Use it to let the user choose between options or dismiss the selection.

The method is part of the [`dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_) module. See also: [Dialogs](https://docs.nativescript.org/ui/dialogs).
---

## Basic use

The `action()` method is available globally. You can call it anywhere in your app.

```JavaScript
action("Your message", "Cancel button text", ["Option1", "Option2"]))
.then(result => {
  console.log(result);
  })
```

## Example: Button shows dialog

```JavaScript
const Vue = require("nativescript-vue");

new Vue({
  methods: {
    onButtonTap() {
      action('Your message', 'Cancel Button', ['Option 1', 'Option 2', 'Option 3'])
        .then(result => {
          console.log(result);
        })
    },
  },


  template: `
    <Page class="page">
      <Button text="Show Action Dialog" @tap="onButtonTap" />
    </Page>
  `,

}).$start();
```

[> screenshots for=ActionDialog <]