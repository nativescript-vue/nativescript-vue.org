---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action 
contributors: [MisterBrownRSA, rigor789, ikoevska]
---

`<ActionDialog>` is a dialog component that lets you show a list of selectable options and a cancel button.

---

## 

## Example: 

```javascript
const Vue = require("nativescript-vue");

const dialogs = require('tns-core-modules/ui/dialogs') //Enables your app to use the dialogs module

new Vue({
  methods: {
    onButtonTap() {
      dialogs.action('Choose one!', 'No, thanks!', ['cheese', 'wine', 'chocolate'])
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

## Parameters

| Parameter | Type | Description |
|------|------|-------------|
| message | `String` | Sets the call-to-action text to display in the dialog. |
| cancelButtonText | `String` | Sets the text of the cancel button. |
| actions | `Array(String)` | Sets the available options to select.