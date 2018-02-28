---
title: 확인창 (ConfirmDialog)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm
contributors: [qgp9]
---

확인창(ConfirmDialog) 는 부울값(예/아니오, Yes/No) 를 입력하는 다이얼로그입니다.

---

```javascript
const dialogs = require('ui/dialogs')

module.exports = {
  mounted() {
    dialogs.confirm('Are you ready?')
    .then(result => {
      console.log(result)
    })
  }
}
```

ConfirmDialog는 전역적으로 사용할 수 있기 때문에, 다이얼로그 모듈에서 임포트하는 대신, 다음과 같이 간단히 호출할 수 있습니다.


```javascript
confirm('Are you ready?')
.then(result => {
  console.log(result)
})
```

여러분의 코드 어디에서라도 말이죠.

[> screenshots for=ConfirmDialog <]
