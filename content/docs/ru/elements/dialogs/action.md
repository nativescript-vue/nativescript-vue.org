---
title: ActionDialog
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action 
contributors: [lex111]
---

Метод `action()` показывает список доступных для выбора опций и кнопку отмены. Используйте его,  чтобы дать возможность пользователю выбрать один из вариантов или отклонить выбор.

Этот метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

---

## Основное использование

Метод `action()` доступен глобально. Вы можете вызывать его в любом месте вашего приложения.

```JavaScript
action("Ваше сообщение", "Текст для кнопки отмены", ["Опция 1", "Опция 2"])
  .then(result => {
    console.log(result);
  });
```

[> screenshots for=ActionDialog <]
