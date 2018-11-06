---
title: ActionItem
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem
contributors: [sn0wil]
---

ActionItem - компонент, используемый для добавления дополнительных кнопок действия на ActionBar.

---

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapShare"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" />
  <ActionItem @tap="onTapDelete"
    ios.systemIcon="16" ios.position="right"
    text="delete" android.position="popup" />
</ActionBar>
```

#### Условное отображение элементов действий

Элементы действий могут быть отображены на основе условия с использованием директивы `v-show`.

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapEdit"
    v-show="!isEditing"
    ios.systemIcon="2" ios.position="right"
    android.systemIcon="ic_menu_edit" />
  <ActionItem @tap="onTapSave"
    v-show="isEditing"
    ios.systemIcon="3" ios.position="right"
    android.systemIcon="ic_menu_save" />
  <ActionItem @tap="onTapCancel"
    v-show="isEditing"
    ios.systemIcon="1"
    android.systemIcon="ic_menu_close_clear_cancel" />
</ActionBar>
```

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `ios.systemIcon` | `String` | Устанавливает иконку для iOS.
| `android.systemIcon` | `String` | Устанавливает иконку для Android.
| `ios.position` | `String` | Устанавливает расположение для iOS.<br>Допустимые значения:<br>- `left` (по-уолчанию): Устанавливает элемент с левого края в ActionBar.<br>- `right`: Устанавливает элемент с правого края в ActionBar.
| `android.position` | `String` | Устанавливает расположение для Android.<br>Допустимые значения:<br>- `actionBar` (по-уолчанию): Устанавливает элемент внутри ActionBar.<br>- `popup`: Устанавливает элемент в меню опций. Элемент будет отрисован как текст.<br>- `actionBarIfRoom`: Устанавливает элемент в ActionBar, если для него есть достаточно места. Иначе располагает элемент в меню опций.

## События

| Имя | Описание |
|------|-------------|
| `tap`| Вызывается при нажатии на ActionItem.
