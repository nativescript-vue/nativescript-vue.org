---
title:  Руководство по Playground
contributors: [sn0wil, lex111]
---

[NativeScript Playground](https://play.nativescript.org?template=play-vue) - это площадка в облаке, на которой вы можете попробовать NativeScript и Vue.js в вашем браузере, пока не разберётесь с основами. Перейдите по ссылке и начните с перетаскивания компонента в ваш код. 

Вы можете работать в Playground столько, сколько хотите. Вы можете использовать её, чтобы получить представление о разработке с NativeScript или даже разработать свой собственный проект. Однако, когда вы поймёте, что готовы разместить своё приложение, вам необходимо перейти на более продвинутый уровень и [установить инструменты для с NativeScript локально](/ru/docs/getting-started/installation), а затем [выбрать шаблон для начала работы](/ru/docs/getting-started/templates).

**Эта страница состоит из двух частей:**
* [Часть 1: Знакомство с площадкой Playground](#part-1-getting-familiar-with-the-playground)
* [Часть 2: Сборка приложения](#part-2-building-an-app)

# Часть 1: Знакомство с площадкой Playground

Перейдя по [этой ссылке](https://play.nativescript.org/?template=play-vue) вы увидите перед собой простой редактор кода в облаке с предварительно загруженным простейшим шаблоном NativeScript + Vue.js.

> **Совет:** Руководствуйтесь [примерами задач для Playground](/ru/docs/getting-started/playground-tutorial) чтобы узнать, как начать работу в Playground.

### До того, как вы начнете

![playground welcome screen](/screenshots/ns-playground/playground-home.png)

Если вы впервые здесь, Playground предложит установить пару мобильных приложений &mdash; NativeScript Playground и NativeScript Preview. Вместе они позволят вам просматривать изменения вашего кода в режиме реального времени на устройстве. Сборка проекта и объединение (bundling) приложения в данном случае не требуется.

Вы можете пропустить этот шаг, но без этого вы упустите большую часть удовольствия и впечатлений от игры с Vue.js и NativeScript.

Оставляйте приложения запущенными во время экспериментирования с кодом.

### Расположение основных частей интерфейса

![](/screenshots/ns-playground/playground-layout.png)

На левой боковой панели есть файловый менеджер и панель **Components** (компоненты). Большинство вашей работы в приложении будет происходить в `app.js` и `app.css`, содержащих функциональность приложения и стили. На данный момент нет необходимости глубоко погружаться в другие файлы.

Панель **Components** обеспечивает быстрый доступ к заранее настроенному коду всех доступных компонентов NativeScript UI.

В верхней части страницы вы можете отправить изменения для предпросмотра приложения на вашем устройстве, сохранить изменения и скачать файлы с кодом.

Нижняя часть страницы - ваш лучший друг, предоставляющий отчёты об ошибках в режиме реального времени и логи устройства.

### Перетащите в код

![](/screenshots/ns-playground/playground-drag-and-drop.gif)

Просто кликните на компонент в панели **Components** (компоненты) и перетащите его в редактор кода в любое место внутри блока `template`. При отпускании кнопки мыши вставится заранее написанный код соответствующего компонента. Любые методы, которые соответствуют компоненту (например, что происходит при нажатии кнопки или элемента), автоматически добавятся в верхней части страницы перед блоком `template`.

> **Совет:** Используйте поиск в панели **Components** для быстрого поиска нужного элемента. Поиск работает только с названиями компонентов, а не с фактическим именем, используемым в коде. Например, поиск найдет *text field* (текстовое поле), но не найдет *textfield* (название в коде).
>
> ![](/screenshots/ns-playground/playground-component-search.gif)

Для работы большинства компонентов необходимо размещать их внутри блока `<Page>`, предпочтительно в слое (layout) компонента. Слои сообщают вашему приложению, как размещать компоненты на экране.

> **Примечание:** Прямо сейчас ничего не мешает вам отказаться от верного расположения компонентов в коде, которое приведёт к сбою приложения или оно просто не запустится. В таких случаях проверяйте вкладки **Errors** и **Device Logs** для получения дополнительной информации.

### Проверяйте в режиме реального времени

![](/screenshots/ns-playground/playground-preview.gif)

После размещения кода в допустимом месте, нажмите **Preview** (или `Ctrl+S` / `Cmd+S`) и смотрите, как приложение мгновенно обновится на экране вашего устройства.

В некоторых случаях, когда вы взаимодействуете с приложением, оно может неожиданно закрыться. Просто запустите его снова и проверьте отчёт о сбое.

Если в какой-то момент вы перестанете видеть применяемые на устройстве изменения, нажмите **QR code** и пересканируйте QR-код в приложении *Playground*.

### Измените код

Таким образом, компонент запускается и отображается на экране вашего устройства. Вы в восторге, но хотите сделать его по-своему. Попробуйте изменить код, предложенный Playground по умолчанию. Измените размеры, тексты, удалите или добавьте элементы.

Перейдите в `app.css` и измените стили. Поэкспериментируйте с цветами и размерами шрифтов.

# Часть 2: Сборка приложения

Если вы хотите изучить [NativeScript Playground](https://play.nativescript.org?template=play-vue), то вы можете начать с  создания простого приложения списка дел (to-do) со следующими требованиями:

* Основной дизайн
  * Слой с двумя вкладками
  * Первая вкладка показывает активные задачи и дает возможность добавить новые задачи
  * Вторая вкладка содержит список завершённых задач
* Основная функциональность
  * Добавление задачи: Пользователь может добавить задачи в виде текста
  * Просмотр задач: Недавно добавленные задачи рассматриваются как активные и могут быть нажаты
  * Завершение задач: Нажатие на активную задачу показывает диалог с вариантами действий
  * Удаление задач: Нажатие на активную или завершённую задачу показывает диалог с вариантами действий
* (В процессе) Расширенный дизайн
  * Поле ввода и кнопка для добавления задач стилизованы
  * (Скоро) Активные задачи стилизованы
  * (Скоро) Завершённые задачи стилизованы
* (Скоро) Расширенная функциональность
  * (Скоро) Хранить временную метку данных для каждой задачи
  * (Скоро) Просмотр истории задач
  * (Скоро) Управление задачами в куче
  * (Скоро) Планирование задач: Пользователи могут устанавливать крайние сроки (deadlines) для задач, выбирая дату из виджета календаря

> **Совет:** Все разделы этого руководства содержат *Некоторые основы NativeScript* и *Выполнение требований* подразделов. Вы можете пропустить подраздел с основами и перейти непосредственно к реализации для большей практичности.

## Чистый шаблон Vue.js

![](/screenshots/ns-playground/playground-home.png)

Все действия этого руководства будут проводиться в `app.js` и `app.css`, которые содержат функционал приложения и его стили.

`app.js` для вашего недавно нового приложения состоит из простого объявления `template` (шаблон) без какой-либо функциональности. Как только вы перетащите компоненты пользовательского интерфейса из **Components** в редактор кода, платформа Playground добавит блок `methods` и заполнит его кодом, содержащим фактическую функциональность.

В `app.js` вы будете работать в блоке `template` для проектирования пользовательского интерфейса или в блоке `methods` для разработки функциональности приложения. Блок `template` требует XML, совместимый с NativeScript. Блок `methods` может принимать как код Vue.js, так и NativeScript JavaScript.

## Основной дизайн

### Прогресс

Вот как будет выглядеть ваше приложение в начале и в конце данного раздела.

| Стартовый экран | Вкладка 1 | Вкладка 2 |
|-------|-----|-----|
| ![Bare Vue.js template](/screenshots/ns-playground/two-tabs-start.jpg) | ![First tab](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![Second tab](/screenshots/ns-playground/two-tabs-tab-2.jpg) |

### Некоторые основы NativeScript

Элемент `<Page>` - элемент пользовательского интерфейса верхнего уровня для каждого приложения NativeScript+Vue.js. Все другие элементы интерфейса вложены внутри него.

Элемент `<ActionBar>` показывает панель действий для `<Page>`. `<Page>` не может содержать более одного `<ActionBar>`.

Как правило, после `<ActionBar>` вы будете располагать компоненты навигации (например, выдвигающееся боковое меню или вкладки) или компоненты макета. Эти элементы управляют макетом вашего приложения и позволяют определять, как располагать другие элементы интерфейса внутри. 

### Требуемая реализация

Используйте компонент `<TabView>` для создания приложения с вкладками.

1. Удалите блок `<ScrollView>` и весь его контент, который был размещен по умолчанию.<br/>Компоненты `<ScrollView>` - контейнеры макета высшего уровня для прокручиваемого контента.
1. Перетащите в редактор кода компонент `<TabView>` на его место.<br/>Площадка Playground не применяет форматирование кода и не соблюдает отступы при вставке новых компонентов.
1. Настройте высоту `<TabView>` для заполнения на весь экран (установите значение 100%).<br/>На устройстве iOS значение высоты по умолчанию приводит к тому, что вкладки отображаются где-то посередине экрана.
1. Измените заголовки элементов `<TabViewItem>` и их содержимого для отражения их целей.<br/>На этом этапе текстовое содержимое для вкладок отображается в компонентах `<Label>` без стилизации и форматирования. Примените свойство `textWrap ="true"` к соответствующим компонентам `<Label>`, чтобы улучшить визуализацию текста.

В конце этого этапа ваш код должен напоминать этот образец:

```JavaScript
const Vue = require("nativescript-vue");

new Vue({

  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do">
          <Label text="This tab will list active tasks and will let users add new tasks." textWrap="true" />
        </TabViewItem>
        <TabViewItem title="Completed">
          <Label text="This tab will list completed tasks for tracking." textWrap="true" />
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```

## Базовая функциональность: Добавление задач

### Прогресс

Вот как будет выглядеть ваше приложение в начале и в конце данного раздела.

| Стартовый экран | Вкладка 1 - Нет задач | Вкладка 1 - Добавленные задачи |
|-------|-----|-------------|
| ![First tab before changes](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![First tab without any tasks](/screenshots/ns-playground/input-field.jpg) | ![First tab with added tasks](/screenshots/ns-playground/added-tasks.jpg)

### Некоторые основы NativeScript

Компоненты макета позволяют вам упорядочивать различные виджеты пользовательского интерфейса вашего приложения. Всякий раз, когда вам нужно разместить более одного виджета пользовательского интерфейса на экране приложения, вы, вероятно, будете использовать один из доступных вариантов макета.`<StackLayout>` и `<GridLayout>` являются базовыми, но универсальными, позволяющими позиционировать элементы вертикально или в виде таблицы, соответственно. В то время как`<StackLayout>` отображает элементы в их естественной последовательности, `<GridLayout>` позволяет вам выбирать точные позиции ваших элементов в сетке.

### Требуемая реализация

Используйте `<GridLayout>` для размещения `<TextField>` и `<Button>` на странице. Последние два образуют основную функциональность приложения для ввода данных.

Используйте `<ListView>` для отображения задач под полем ввода.

1. Удалите компонент `<Label>` из первого блока <TabViewItem> `для первой вкладки.
1. Перетащите элемент `<StackLayout>` в блок `<TabViewItem>` для первой вкладки. <br/> Код по умолчанию создаёт красочный вертикальный стек.
1. Удалите все компоненты <Label> `из блока` <StackLayout>.
1. Перетащите элемент `<GridLayout>` в блок `<StackLayout>` для первой вкладки. <br/> Код по умолчанию создаёт красочную таблицу, которая показывает, как размещать элементы и объединять ячейки сетки.
1. Удалите все компоненты <Label> `из блока` <GridLayout>.
1. Настройте `<StackLayout>`.
    * Удалить цвет фона.
    * Установите ширину и высоту.
1. Настройте `<GridLayout>`.
    * Установите сетку в виде двух столбцов и одной строки.
    * Установите ширину сетки на 100%, чтобы она занимала всю ширину экрана.
    * Удалите все дополнительные настройки для сетки.
1. Перетащите `<TextField>` и `<Button>` в блок `<GridLayout>`. <br/> Площадка Playground добавит код JavaScript в первый раз. Обратите внимание на блоки `data ()` и `methods`, добавленные над блоком `template`. На следующих этапах реализации вам нужно будет добавить код в эти разделы, чтобы создать некоторые функциональные возможности приложения.
1. Перетащите `<ListView>` под сеткой. <br/> Код по умолчанию создает список стран и значков флагов стран.
1. Настройте расположение элементов в сетке.
    * Установите `<TextField>`, чтобы засечь первый столбец и первую строку.
    * Установите `<Button>`, чтобы расположить во втором столбце и в первой строке.
1. Очистите код образца из `<TextField>` и `<ListView>`. Задайте высоту для `<ListView>`.
1. Залогируте недавно добавленные задачи в консоль.
1. Добавьте новые задачи в массив задач. Используйте `unshift` для размещения новых элементов в верхней части страницы.
1. Очистите текстовое поле после ввода.
1. Введите имя задачи на экране.

В конце этого этапа ваш код должен напоминать этот образец:

```JavaScript
const Vue = require("nativescript-vue");

new Vue({
  data() {
    return {
      todos: [],
      textFieldValue: "",
    }
  },
  methods: {
    onItemTap: function (args) {
      console.log('Task with index: ' + args.index + ' tapped'); // Логирование нажатых задач в консоли для дебага
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Логирование новый добавленной задачи
      this.todos.unshift({ name: this.textFieldValue }); // Добавление задач в ToDo массив. Вновь добавленные задачи немедленно покажутся на экране 
      this.textFieldValue = ""; // Очистка текстового поля, чтобы пользователь мог снова добавить задачу
    },
  },


  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Positions an input field, a button, and the list of tasks in a grid. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
              <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%"> <!-- Make sure to set a height or your list will not show on iOS. -->
              <v-template>
                <Label :text="todo.name" />
              </v-template>
            </ListView>
          </StackLayout> 
        </TabViewItem>

        <TabViewItem title="Completed">
          <Label text="This tab will list completed tasks for tracking." textWrap="true" />
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```

## Основная функциональность: Просмотр, завершение и удаление задач из вкладки списка дел

### Прогресс

Вот как будет выглядеть ваше приложение в начале и в конце данного раздела.

| Вкладка 1 - Добавленные задачи | Вкладка 1 - Элемент нажат | Вкладка 2 - Завершенные задачи
|-----|-------------|-------|
| ![First tab with added tasks](/screenshots/ns-playground/added-tasks.jpg) | ![Action dialog toggled](/screenshots/ns-playground/active-task-dialog.jpg) | ![Second tab with completed tasks](/screenshots/ns-playground/completed-tasks.jpg) |

### Некоторые основы NativeScript

Встроенный компонент `<ListView>` обнаруживает действие нажатия на каждый элемент и вызывает событие для этого. Событие хранит в себе информацию о индексе элемента массива, на который нажали и сам массив элементов. Чтобы пользователь мог выбрать результат нажатия и расширить функциональность вашего добавления, вы можете связать диалог с событием.

[`dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_) - это глобально доступный модуль, который предоставляет доступ несколько настраиваемых типов диалогов: предупреждение, действие, ввод ответа (prompt), логин и подтверждение. Наша реализация использует [`action()`](/en/docs/elements/dialogs/action), чтобы позволить пользователю пометить задачу как выполненную или удалить её из списка активных задач.

### Требуемая реализация

1. В блок второй вкладки `<TabViewItem>, перетащите элемент `<ListView>`, удалите его контент и установите высоту. 
1. Добавленный элемент `<ListView>` будет показывать завершенные задачи.

  ```HTML
  <ListView for="done in dones" @tap="onDoneTap" height="100%"> <!-- Убедимся, что высота в порядке, иначе спиок не будет показываться на iOS. -->
    <v-template>
      <Label :text="done.name" />
    </v-template>
  </ListView>
  ```
1. Измените метод `onItemTap`.
  * Метод показывает диалог `action()`.
  * Метод логирует выбор пользователя в консоль.
  * Основываясь на выборе пользователя метод перемещает элементы из массива `todos` в массив `dones`, удаляя элементы из массива `todos` или отменяет диалог. Используйте `splice()`, чтобы избежать пустых элементов и `unshift()`, чтобы убедиться, что недавно выполненные задачи будут показаны сверху.

  ```JavaScript
  onItemTap: function (args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Лог в консоли выбранного ответа диалога
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Размещение нажатой активной задачи в топ выполненных задач
              this.todos.splice(args.index, 1); // Удаление нажатой задачи из активных
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Удаление нажатой задачи из активных
              break;
            case 'Cancel' || undefined: // Отмена действия
              break;
          }
      }) 
    },
  ```

В конце этого этапа ваш код должен напоминать этот образец:

```JavaScript
const Vue = require("nativescript-vue");

new Vue({
  data() {
    return {
      todos: [],
      dones: [],
      textFieldValue: "",
    }
  },
  methods: {
    onItemTap: function (args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); //  Лог в консоли выбранного ответа диалога
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Размещение нажатой активной задачи в топ выполненных задач
              this.todos.splice(args.index, 1); // Удаление нажатой задачи из активных
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Удаление нажатой задачи из активных
              break;
            case 'Cancel' || undefined: // Отмена действия
              break;
          }
      }) 
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Логирование новый добавленной задачи
      this.todos.unshift({ name: this.textFieldValue }); // Добавление задач в ToDo массив. Вновь добавленные задачи немедленно покажутся на экране 
      this.textFieldValue = ""; // Очистка текстового поля, чтобы пользователь мог снова добавить задачу
    },
  },

  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Positions an input field, a button, and the list of tasks in a grid. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
              <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%"> <!-- Make sure to set a height or your list will not show on iOS. -->
              <v-template>
                <Label :text="todo.name" />
              </v-template>
            </ListView>
          </StackLayout> 
        </TabViewItem>

        <TabViewItem title="Completed">
          <ListView for="done in dones" @tap="onDoneTap" height="100%"> <!-- Make sure to set a height or your list will not show on iOS. -->
              <v-template>
                <Label :text="done.name" />
              </v-template>
            </ListView>
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```

## Основная функциональность: Просмотр, возврат в активные задачи, удаление задач из вкладки Completed

### Прогресс

Вот как будет выглядеть ваше приложение в начале и в конце данного раздела.

| Вкладка 2 - Завершенные задачи | Вкладка 2 - Элемент нажат | Вкладка 1 - Активные задачи
|-----|-------------|-----|
| ![Second tab with completed tasks](/screenshots/ns-playground/completed-tasks-2.jpg) | ![Action dialog toggled](/screenshots/ns-playground/completed-tasks-dialog.jpg) | ![First tab with active tasks](/screenshots/ns-playground/completed-tasks-moved-to-active.jpg)

### Некоторые основы NativeScript

Эта реализация не требует дополнительных знаний.

### Требуемая реализация

Во второй вкладке измените метод `onDoneTap`:

* Метод показывает диалог `action()`.
* Метод логирует в консоль выбор пользователя.
* Основываясь на выборе пользователя, метод перемещает элементы из `dones` в `todos`, удаляет элементы из `dones` или отменяет действие.
Используйте `splice()` , чтобы избежать пустых элементов и `unshift()`, чтобы убедиться, что недавно выполненные задачи будут показаны сверху.

  ```JavaScript
  onDoneTap: function (args) {
    action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
    .then(result => {
      console.log(result); // Лог в консоли выбранного ответа диалога
      switch (result) {
        case 'Mark to do':
          this.todos.unshift(args.item); // Размещение нажатой активной задачи в топ выполняющихся
          this.dones.splice(args.index, 1); // Удаление нажатой задачи из завершенных
          break;
        case 'Delete forever':
          this.dones.splice(args.index, 1);
          break;
        case 'Cancel'||undefined:
          break;
      }
    })
  },
  ```

В конце этого этапа ваш код должен напоминать этот образец:

```JavaScript
const Vue = require("nativescript-vue");

new Vue({
  data() {
    return {
      todos: [],
      dones: [],
      textFieldValue: "",
    }
  },
  methods: {
    onItemTap: function (args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Лог в консоли выбранного ответа диалога
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Размещение нажатой активной задачи в топ выполненных задач
              this.todos.splice(args.index, 1); //Удаление нажатой задачи из завершенных
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1);
              break;
            case 'Cancel' || undefined:
              break;
          }
      }) 
    },
    onDoneTap: function (args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
        .then(result => {
          console.log(result); // Logs the selected option for debugging.
          switch (result) {
            case 'Mark to do':
              this.todos.unshift(args.item); // Размещение нажатой активной задачи в топ ToDo
              this.dones.splice(args.index, 1); // Удаление нажатой задачи из завершенных
              break;
            case 'Delete forever':
              this.dones.splice(args.index, 1); //Удаление нажатой задачи из завершенных
              break;
            case 'Cancel'||undefined:
              break;
          }
        })
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Логирование новый добавленной задачи
      this.todos.unshift({ name: this.textFieldValue }); // Добавление задач в ToDo массив. Вновь добавленные задачи немедленно покажутся на экране 
      this.textFieldValue = ""; // Очистка текстового поля, чтобы пользователь мог снова добавить задачу
    }
  },

  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Positions an input field, a button, and the list of tasks in a grid. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
              <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%" > <!-- Make sure to set a height or your list will not show on iOS. -->
              <v-template>
                <Label :text="todo.name" />
              </v-template>
            </ListView>
          </StackLayout> 
        </TabViewItem>

        <TabViewItem title="Completed">
          <ListView for="done in dones" @itemTap="onDoneTap" height="100%" > <!-- Make sure to set a height or your list will not show on iOS. -->
              <v-template>
                <Label :text="done.name" />
              </v-template>
            </ListView>
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start()
```

## Расширенный дизайн: стилизованное поле ввода и кнопка

### Прогресс

Вот как будет выглядеть ваше приложение в начале и в конце данного раздела.

| Tab 1 - No style | Tab 1 - Styled | Tab 1 - Styled |
|-----|-------------|----|
| ![Unstyled input](/screenshots/ns-playground/input-field.jpg) | ![Styled button](/screenshots/ns-playground/styled-button.jpg) | ![Styled input](/screenshots/ns-playground/styled-input.jpg) |

### Некоторые основы NativeScript

Когда вы работаете с NativeScript и Vue.js, вы можете использовать общий CSS для всего приложения или inline-стили CSS. Сначала применяется общий CSS, который обрабатывается в `app.css` в корне вашего проекта. Смотрите также: [Styling](https://docs.nativescript.org/ui/styling).

С помощью селекторов типов вы можете выбрать компонент пользовательского интерфейса и применить к нему стиль. Чтобы выбрать тип, используйте имя компонента, как указано в коде. Например, чтобы выбрать представление вкладки, используйте `TabView`.

### Требуемая реализация

#### Поле ввода

В `app.css` измените размер шрифта, цвет и отступы вокруг `<TextField>`.

```CSS
TextField{
    font-size: 20;
    color: #53ba82;
    margin-top: 10;
    margin-bottom: 10;
    margin-right: 5;
    margin-left: 10;
}
```

#### Копка

1. В `app.js` на строке 63 добавьте `id` для кнопки.

  ```HTML
  <Button id="add-task-button" row="0" col="1" text="Add task" @tap="onButtonTap" />
  ```
1. В `app.css` создайте стиль для кнопки. Измените стиль для создания цветной кнопки с закругленными углами.

  ```CSS
  #add-task-button{
    font-size: 20;
    font-weight: bold;
    color: white;
    background-color: #53ba82;
    margin-top: 10;
    margin-bottom: 10;
    margin-right: 10;
    margin-left: 5;
    border-radius: 20px;
  }
  ```
