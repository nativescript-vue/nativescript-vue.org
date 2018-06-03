---
title: NavigationButton
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton
contributors: [sn0wil]
---

Компонент NavigationButton - абстракция NativeScript для кнопки навигации Android и кнопки назад для iOS.

---

```html
<ActionBar title="My App">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
</ActionBar>
```

## Props

| Имя | Тип | Описание |
|------|------|-------------|
| `text` | `String` | Задает текст, который будет отображен в iOS.
| `android.systemIcon` | `String` | Иконка, которая будет отображена в Android.

*Список иконок для Android можно найти по ссылке: <https://developer.android.com/reference/android/R.drawable.html>, где иконки - это те, которые начинаются с префикса `ic_`.*

## События

| Имя | Описание |
|------|-------------|
| `tap`| Вызывается при нажатии на NavigationButton.
