---
title: Page
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_page_.page
contributors: [Tardigrada777]
---

`<Page>` - визуальный компонент, представляющий экран приложения. NativeScript приложения
обычно состоят из одного или нескольких `<Page>` компонентов, которые содержат внутри себя
другие UI-виджеты, например [`<ActionBar>`](/ru/docs/elements/action-bar/action-bar).

---

#### Одна страница

```html
<Page>
  <ActionBar title="My App" />
  <GridLayout>
    <Label text="My Content"/>
  </GridLayout>
</Page>
```

#### Использование события `loaded` для выполнения кастомных действий с UI

Типичный сценарий - изменение пользовательского интерфейса сразу после загрузки страницы. Для этого рекомендуется подписываться на событие `loaded`, генерируемое NativeScript после того, как страница полностью загружена:

```html
<Page @loaded="greet">
  <ActionBar title="My App" />
  <GridLayout>
    <Label text="My Content"/>
  </GridLayout>
</Page>
```

```js
export default {
  methods: {
    greet() {
      alert('Hello!').then(() => {
        console.log('Dialog closed')
      })
    }
  }
}
```

> **ЗАМЕЧАНИЕ** Разработчики, пришедшие из `web`, обычно пытаются добиться того же результата с помощью хука жизненного цикла Vue - `mounted`. Однако, некоторые элементы NativeScript приложения могут быть еще не загружены к моменту, когда сработает хук `mounted`, например, оповещения (`alerts`), диалоги (`dialogs`), навигация и проч. Внутри хука `mounted` нет доступа к этим действиям. Это ограничение можно обойти, подписываясь на событие `loaded`, которое срабатывает только после того, как приложение полностью загружено и готово. В нашем примере мы используем событие `loaded` для компонента [`<Page>`](/en/docs/elements/components/page), но подписаться на него может любой NativeScript элемент.


## Props

| Имя | Тип | Описание |
|------|------|-------------|
| `actionBarHidden` | `Boolean` | Показывать или скрывать `<ActionBar>` для текущей страницы.<br/>По умолчанию: `false`.
| `backgroundSpanUnderStatusBar` | `Boolean` |  Получает или устанавливает должен ли фон страницы распространяться под статус бар.<br/>По умолчанию: `false`.
| `androidStatusBarBackground` | `Color` | (Только для Android) Получает или устанавливает цвет статус бара для устройств на базе Android.
| `enableSwipeBackNavigation` | `Boolean` | (Только для iOS) Получает или устанавливает может ли страница обрабатывать навигацию назад по свайпу на iOS.<br/>По умолчанию: `true`.
| `statusBarStyle` | `String` | Получает или устанавливает стиль статус бара.<br/>Корректные значения:<br/>`light`,<br/>`dark`.


## Events

| Имя | Описание |
|------|-------------|
| `loaded` | Срабатывает сразу после загрузки страницы.
| `navigatedFrom` | Срабатывает после того, как завершится переход с текущей страницы на другую.
| `navigatedTo` | Срабатывает после того, как завершится переход с другой страницы на текущую.
| `navigatingFrom` | Срабатывает до того, как завершится переход на другую страницу с текущей.
| `navigatingTo` | Срабатывает до того, как завершится переход с другой страницы на текущую.

## Нативный компонент

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.GridLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/GridLayout.java) | [`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller)
