---
title: Login
apiRef: https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.loginoptions
contributors: [MisterBrownRSA]
---

The Login dialog has two inputs that are used for login functionalities.

---

```javascript
const dialogs = require('ui/dialogs');

module.exports = {
  mounted() {
    dialogs.login('Please log in', 'Username', 'Password')
        .then(function (result) {
            console.log(result);
        });
  }
};
```

[> screenshots for=Login <]