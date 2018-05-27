---
title: TabView/Представление вкладками
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview
contributors: [MisterBrownRSA, rigor789, eddyverbruggen, ikoevska, kharysharpe]
---

`<TabView>` - навигационный компонент, отображающий контент, сгруппированный по вкладкам и позволяющий пользователю переключиться между ними.

---

```html
<TabView :selectedIndex="selectedIndex">
  <TabViewItem title="Tab 1">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```

**Примечание:** В данный момент `TabViewItem` ожидает один дочерний элемент. В большинстве случаев вы можете обернуть ваш контент в макет.

[> screenshots for=TabView <]

#### Добавление иконок во вкладки

```html
<TabView :selectedIndex="selectedIndex" iosIconRenderingMode="alwaysOriginal">
  <TabViewItem title="Tab 1" iconSource="~/images/icon.png">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2" iconSource="~/images/icon.png">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```
<<<<<<< HEAD
**Примечание:** шрифты иконок могут работать в некоторых случаях, но в основном рекомендуется использовать изображения в качестве иконок для вкладок.
=======
**NOTE:** Use images for tab icons instead of icon fonts.
>>>>>>> 2065838ec35e93d89ec64b0c5a4b8f910d3670e6

## Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `selectedIndex` | `Number` | Получает или задает выбранную вкладку. Значение по умолчанию `0`.
| `tabTextColor` | `Color` | (Свойство стиля)Получает или задает значение цвета текста заголовков вкладок.
| `tabBackgroundColor` | `Color` | (Свойство стиля)Получает или задает значение цвета фона для вкладок.
| `selectedTabTextColor` | `Color` | (Свойство стиля)Получает или задает значение цвета текста закголовка выбранной вкладки.

## События

| Имя | Описание |
|------|-------------|
| `tabChange` | Срабатывает при нажатии на один из компонентов `<TabViewItem>`.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.support.v4.view.ViewPager`](https://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller)
