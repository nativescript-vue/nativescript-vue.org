---
title: 경고창 (AlertDialog)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert
contributors: [qgp9]
---

경고창(AlertDialog)는 확인을 요청하는 간단한 모달 알림창으로 작동합니다.

---

```javascript
const dialogs = require('ui/dialogs')

module.exports = {
  mounted() {
    dialogs.alert('Hello!')
    .then(() => {
      console.log("Dialog closed")
    })
  }
}
```

AlertDialog는 전역적으로 사용할 수 있기 때문에, 다이얼로그 모듈에서 임포트하는 대신, 다음과 같이 간단히 호출할 수 있습니다.

```javascript
alert('Hello!')
.then(() => {
  console.log("Dialog closed")
})
```

여러분의 코드 어디에서라도 말이죠.


[> screenshots for=AlertDialog <]
