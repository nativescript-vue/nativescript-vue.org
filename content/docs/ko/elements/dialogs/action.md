---
title: 액션다이얼로그 (ActionDialog)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action
contributors: [qgp9]
---

액션 다이얼로그(ActionDialog)로 선택가능한 옵션들의 리스트를 가진  다이얼로그를 만들 수 있습니다. selectable options.

---

```javascript
const dialogs = require('ui/dialogs')

module.exports = {
  mounted() {
    dialogs.action('Choose one!', 'Or cancel...', ['cheese', 'wine'])
    .then(result => {
      console.log(result);
    })
  }
}
```

[> screenshots for=ActionDialog <]
