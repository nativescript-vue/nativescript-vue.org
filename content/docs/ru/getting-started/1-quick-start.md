---
title: Быстрый старт
contributors: [sn0wil, lex111, chimit]
---

Если вы хотите просто попробовать NativeScript-Vue, мы рекомендуем сделать это на [NativeScript Playground](/ru/docs/getting-started/playground-tutorial). Это самый простой способ знакомства с NativeScript-Vue.

Если вы [уже подготовили вашу систему для нативной разработки](/ru/docs/getting-started/installation), то можете начать с использования [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template):

**Поддерживаемые возможности**

-   `.vue` однофайловые компоненты
-   Контроль состояния с Vuex (опционально)
-   Темы NativeScript
-   Предустановки приложения (presets)

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ tns run android --bundle
$ # или
$ tns run ios --bundle
```

Эта последовательность команд делает следующее:

1. Устанавливает последнюю версию Vue CLI с поддержкой шаблонов Vue CLI 2.x через `@vue/cli-init` аддон;
2. Создает проект, используя [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template);
3. Переходит в директорию с только что созданным проектом;
4. Устанавливает все необходимые зависимости локально;
5. Собирает и запускает проект на всех подключенных устройствах или установленных эмуляторах для выбранной платформы. Опция `--bundle` инициирует сборку webpack, которая компилирует `.vue` файлы и следит за изменениями.
