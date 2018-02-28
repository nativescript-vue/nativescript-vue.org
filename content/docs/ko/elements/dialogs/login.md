---
title: 로그인창 (LoginDialog)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login
contributors: [qgp9]
---

로그인창(LoginDialog)는 사용자 인증에 사용되는 두개의 인풋을 가집니다.

---

```javascript
const dialogs = require('ui/dialogs')

module.exports = {
  mounted() {
    dialogs.login('Please log in', 'Username', 'Password')
    .then(result => {
      console.log(result)
    })
  }
}
```

[> screenshots for=LoginDialog <]
