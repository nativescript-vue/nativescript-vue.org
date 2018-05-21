---
title: ActionBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar
contributors: [sn0wil]
---

Компонент ActionBar - это абстракция NativeScript для Android ActionBar и iOS NavigationBar.

---

#### Использование заголовка (title)

```html
<ActionBar title="MyApp" />
```

#### Использование пользовательского представления для заголовка (title)

```html
<ActionBar>
  <StackLayout orientation="horizontal">
    <Image src="res://icon" width="40" height="40" verticalAlignment="center" />
    <Label text="ativeScript" fontSize="24" verticalAlignment="center" />
  </StackLayout>
</ActionBar>
```

#### Настройка иконки приложения для Android

```html
<ActionBar title="My App" android.icon="res://icon" android.iconVisibility="always" />
```

#### Удаление границ
  На iOS и Android внизу ActionBar рисуется маленькая рамка.
  Кроме того, цвет фона ActionBar на iOS немного отличается от того, что вы указываете,
  потому что iOS применяет фильтр. Чтобы удалить этот фильтр и границу, установите свойство `flat` в значение `true`.
```html
<ActionBar title="My App" flat="true" />
```

## Свойства

| Название | Тип | Описание |
|------|------|-------------|
| `title` | `String` | Заголовок, показываемы в ActionBar.
| `android.icon` | `String` | Иконка, показываемая на Android.
| `android.iconVisibility` | `String` | Устанавливается, когда иконка вилима.
| `flat` | `boolean` | Удаляет границу и цвета фильтра на iOS. Значение по умолчанию - `false`.
