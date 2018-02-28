---
title: PromptDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt
contributors: [qgp9]
---

PromptDialog는 사용자의 인풋을 요구할 수 있게 해줍니다.

---

```javascript
const dialogs = require('ui/dialogs')

module.exports = {
  mounted() {
    dialogs.prompt('How are you?', 'Amazing!')
    .then(result => {
      console.log(`Dialog result: ${result.result}, text: ${result.text}`)
    })
  }
}
```

PromptDialog 는 전역적으로 사용할 수 있기 때문에, 다이얼로그 모듈에서 임포트하는 대신, 다음과 같이 간단히 호출할 수 있습니다.
```javascript
prompt('How are you?', 'Amazing!')
.then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
})
```

여러분의 코드 어디에서라도 말이죠.

[> screenshots for=PromptDialog <]
