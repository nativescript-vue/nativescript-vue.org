---
title: LoginDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login
contributors: [MisterBrownRSA, rigor789, ikoevska]
---

The `login()` method shows a dialog where the user can provide login credentials.

The method is part of the [`dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_) module. See also: [Dialogs](https://docs.nativescript.org/ui/dialogs).

---

## Basic use

The `login()` method is available globally. You can call it anywhere in your app.

```javascript
login("Your message", "Username field value", "Password field value").then(function (r) {
    console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```

## Configure dialog options

```JavaScript
login({
    title: "Your login title",
    message: "Your login message",
    okButtonText: "Your OK button text",
    cancelButtonText: "Your Cancel button text",
    userName: "Username field value",
    password: "Password field value"
}).then(function (r) {
    console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```

[> screenshots for=LoginDialog <]