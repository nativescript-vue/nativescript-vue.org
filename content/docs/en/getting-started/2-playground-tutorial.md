---
title: Playground Tutorial
contributors: [ikoevska, rigor789, hines-sharrod]
---

The [NativeScript Playground](https://play.nativescript.org?template=play-vue) is a place in the cloud where you can just play around with NativeScript and Vue.js from your browser until you figure out the basics. Fire the link and start dragging and dropping component code around the place.

You can work in the Playground for as long as you like. You can use it to just get a taste of NativeScript development or to develop your entire project inside. However, when you get to the point where you are ready to put your app out there, you need to jump on the more advanced wagon and [install NativeScript tools locally](/en/docs/getting-started/installation) and then [pick a template to start with](/en/docs/getting-started/templates).

**This page consists of two parts:**
* [Part 1: Getting familiar with the Playground](#part-1-getting-familiar-with-the-playground)
    * [Before you start](#before-you-start)
    * [The lay of the land](#the-lay-of-the-land)
    * [Drag and drop to code](#drag-and-drop-to-code)
    * [Check it out real-time](#check-it-out-real-time)
    * [Configure your code](#configure-your-code)
* [Part 2: Building an app](#part-2-building-an-app)
    * [The bare Vue.js template](#the-bare-vuejs-template)
    * [Basic design](#basic-design)
    * [Basic functionality: Add tasks](#basic-functionality-add-tasks)
    * [Basic functionality: View, complete, and delete tasks from the To Do tab](#basic-functionality-view-complete-and-delete-tasks-from-the-to-do-tab)
    * [Basic functionality: View, return to active tasks, and delete tasks from the Completed tab](#basic-functionality-view-return-to-active-tasks-and-delete-tasks-from-the-completed-tab)
    * [Advanced design: Styled input field and button](#advanced-design-styled-input-field-and-button)
    * [Advanced design: Styled tab navigation](#advanced-design-styled-tab-navigation)
    * [Advanced design: Styled active tasks](#advanced-design-styled-active-tasks)


# Part 1: Getting familiar with the Playground

Firing [this link](https://play.nativescript.org/?template=play-vue) gets you to a simple code editor in the cloud where a very basic NativeScript + Vue.js template is pre-loaded for you.

> **TIP:** Head to [Sample Tasks for the Playground](/en/docs/getting-started/playground-tutorial) for ideas about how to get started in the Playground.

### Before you start

![playground welcome screen](/screenshots/ns-playground/playground-home.png)

If this is your first time here, the Playground prompts you to install a couple of mobile apps&mdash;the NativeScript Playground and the NativeScript Preview. Together they let you see your code changes applied in real time on device. No code building and bundling required.

You can ignore this step but without it, you'll miss most of the fun and excitement of playing around with Vue.js and NativeScript.

Keep the apps running while you're experimenting with the code.

### The lay of the land

![](/screenshots/ns-playground/playground-layout.png)

The left sidebar offers a file explorer and a **Components** panel. Most of your effort on your app will happen in `app.js` and `app.css`, containing the app functionality and taking care of the app styles, respectively. No need to deep dive in any other files for now.

The **Components** panel provides quick access to already pre-configured code for all available NativeScript UI components.

From the top of the page, you can push changes to the preview apps on your device, save, and download your code.

The bottom of the page is your best friend providing real-time error reports and device logs.

### Drag and drop to code

![](/screenshots/ns-playground/playground-drag-and-drop.gif)

Just click a component from the **Components** panel and drag it to the code editor, somewhere inside the `template` block. Releasing the mouse button inserts some pre-written sample code for the respective component. Any methods that go with it (such as what happens on button or item tap) are automatically added at the top of the page before the `template` block. 

> **TIP:** Use the search of the **Components** panel to quickly find the element that you want to use. The search works only with the title of the component and not the actual name used in the code. For example: the search finds *text field* but does not find *textfield*.
>
> ![](/screenshots/ns-playground/playground-component-search.gif)

For most UI components to work, you need to drop them inside the `<Page>` block, preferably inside a layout component. Layouts tell your app how to position the UI components on the screen.

> **NOTE:** Right now, there's nothing stopping you from dropping the code at a place that will cause your app to crash or simply not load. In those cases, check the **Errors** and **Device Logs** tabs for more information.

### Check it out real-time

![](/screenshots/ns-playground/playground-preview.gif)

After you place the code in a valid spot, hit **Preview** (or `Ctrl+S` or `Cmd+S`) and see your app refresh on your device screen in an instant. 

In some cases, when you interact with the app, it will close unexpectedly. Just fire it up again and inspect the crash report. 

If at any point you stop seeing your changes applied on the device, click **QR code** and re-scan the QR code with the *Playground* app.

### Configure your code

So, the component runs and shows on your screen. You're excited but you want to make it your own. Hack away at the default code suggested by the Playground. Fix sizes and labels, remove or add elements.

Go to `app.css` and switch up the styling a bit. Experiment with colors and font sizes. 

# Part 2: Building an app

If you want to explore the [NativeScript Playground](https://play.nativescript.org?template=play-vue), you can start by creating a simple to-do app with the following requirements:

* Basic design
  * Two-tab layout
  * One tab shows active tasks and lets you add new tasks
  * Second tab lists completed tasks
* Basic functionality
  * Add tasks: Users can add tasks as text
  * View tasks: Newly added tasks are listed as active and can be tapped
  * Complete tasks: Tapping an active task shows an action dialog with options
  * Delete tasks: Tapping an active or completed task shows an action dialog with options
* (In progress) Advanced design
  * Input and button for adding tasks are styled
  * Tabs are styled
  * Active tasks are styled
  * (Coming soon) Completed tasks are styled
* (Coming soon) Advanced functionality
  * (Coming soon) Store timestamp data for each task
  * (Coming soon) View task history
  * (Coming soon) Manage tasks in bulk
  * (Coming soon) Schedule tasks: Users can set deadlines for tasks by picking a date from a calendar widget

> **TIP:** All sections of this tutorial contain a *Some NativeScript basics* and *Requirement implementation* sub-sections. You can skip the basics sub-section and jump straight to the implementation for a more hands-on approach.

## The bare Vue.js template

![](/screenshots/ns-playground/playground-home.png)

All development effort for this tutorial happens in `app.js` and `app.css`, containing the app functionality and taking care of the app styles, respectively.

The `app.js` for your newly created Vue.js project consists of a simple `template` declaration without any functionality. As you drag and drop user interface components to the app, the Playground also adds a `methods` block and populates it with code containing actual app functionality.

In `app.js`, you'll be working in the `template` block to design the user interface or in the `methods` block to build the app functionality. The `template` block requires NativeScript-compatible XML. The `methods` block accepts both Vue.js and NativeScript JavaScript code.

## Basic design

### Section progress

Here's how your app will look at the start and at the end of this section.

| Initial screen | Tab 1 | Tab 2 |
|-------|-----|-----|
| ![Bare Vue.js template](/screenshots/ns-playground/two-tabs-start.jpg) | ![First tab](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![Second tab](/screenshots/ns-playground/two-tabs-tab-2.jpg) |

### Some NativeScript basics

The `<Page>` element is the top-level user interface element of every NativeScript+Vue.js app. All other user interface elements are nested within.

The `<ActionBar>` element shows an action bar for the `<Page>`. A `<Page>` cannot contain more than one `<ActionBar>`.

Typically, after the `<ActionBar>`, you will have navigation components (such as a drawer or a tab view) or layout components. These elements control the layout of your app and let you determine how to place other user interface elements inside.

### Requirement implementation

Use the `<TabView>` component to create a two-tab app. 

1. Remove the default `<ScrollView>` block and all its contents that come with the template.<br/>`<ScrollView>` components are top-level layout containers for scrollable content.
1. Drag and drop the `<TabView>` component in its place.<br/>The Playground doesn't apply code formatting and doesn't take care of indentation when inserting new components.
1. Configure the height of the `<TabView>` to fill the screen (set it to 100%).<br/>On an iOS device the default height setting causes the tabs to show somewhere around the middle of the screen.
1. Change the titles of the `<TabViewItem>` elements and their contents to reflect their purpose.<br/>At this point, text content for the tabs is shown in `<Label>` components with no styling and formatting. Apply the `textWrap="true"` property to the respective `<Label>` components to improve the visualization of the text.

At the end of this stage, your code should resemble this sample:

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

## Basic functionality: Add tasks

### Section progress

Here's how your app will look at the start and at the end of this section.

| Initial screen | Tab 1 - No tasks | Tab 1 - Added tasks |
|-------|-----|-------------|
| ![First tab before changes](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![First tab without any tasks](/screenshots/ns-playground/input-field.jpg) | ![First tab with added tasks](/screenshots/ns-playground/added-tasks.jpg)

### Some NativeScript basics

The layout components let you arrange the various UI widgets of your app. Whenever you need to place more than one UI widget on your app screen, you are likely to use one of the available layout options. The `<StackLayout>` and the `<GridLayout>` are basic but versatile options, letting you position elements vertically or in a table-like layout, respectively. While the 
`<StackLayout>` displays elements in their natural sequence, the `<GridLayout>` lets you choose the exact positions of your elements in the grid.

### Requirement implementation

Use a `<GridLayout>` to arrange a `<TextField>` and a `<Button>` on the page. The latter two form the input functionality of the app.

Use a `<ListView>` to show tasks below the input field.

1. Delete the `<Label>` component from the first `<TabViewItem>` block for the first tab.
1. Drag and drop a `<StackLayout>` component within the `<TabViewItem>` block for the first tab.<br/>The default code creates a colorful vertical stack.
1. Delete all `<Label>` components from the `<StackLayout>` block.
1. Drag and drop a `<GridLayout>` component within the `<StackLayout>` block for the first tab.<br/>The default code creates a colorful table that shows how to position elements and merge grid cells.
1. Delete all `<Label>` components from the `<GridLayout>` block.
1. Configure the `<StackLayout>`.
    * Remove background color.
    * Set width and height.
1. Configure the `<GridLayout>`.
    * Set the grid to consist of two columns and one row.
    * Set the width of the grid to 100% so that it takes the entire width of the screen.
    * Remove any additional settings for the grid.
1. Drag and drop a `<TextField>` and a `<Button>` within the `<GridLayout>` block.<br/>The Playground adds JavaScript code to your code for the first time. Note the `data()` and `methods` blocks added above the `template` block. In next implementation steps, you will need to add code to these sections to create some of the app functionality.
1. Drag and drop a `<ListView>` below the grid.<br/>The default code creates a list of countries and country flag icons.
1. Configure the positioning of the elements within the grid.
    * Set the `<TextField>` to inhabit the first column and the first row.
    * Set the `<Button>` to inhabit the second column and the first row.
1. Clean up sample code from the `<TextField>` and the `<ListView>`. Set a height for the `<ListView>`.
1. Log newly added tasks in the console.
1. Add newly added tasks into the array of tasks. Use `unshift` to place new items at the top of the page.
1. Clear the text field after input.
1. List task name on the screen.

At the end of this stage, your code should resemble this sample:

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
    onItemTap(args) {
      console.log('Task with index: ' + args.index + ' tapped'); // Logs tapped tasks in the console for debugging.
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.unshift({ name: this.textFieldValue }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen. 
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
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

## Basic functionality: View, complete, and delete tasks from the To Do tab

### Section progress

Here's how your app will look at the start and at the end of this section.

| Tab 1 - Added tasks | Tab 1 - Item tapped | Tab 2 - Completed tasks
|-----|-------------|-------|
| ![First tab with added tasks](/screenshots/ns-playground/added-tasks.jpg) | ![Action dialog toggled](/screenshots/ns-playground/active-task-dialog.jpg) | ![Second tab with completed tasks](/screenshots/ns-playground/completed-tasks.jpg) |

### Some NativeScript basics

Out-of-the-box, the `<ListView>` component detects a tap gesture for every item and emits an event for it. The event carries information about the index of the tapped array item and the array item itself. To let the user choose the outcome of a tap gesture and expand the functionality of your add, you can tie a dialog to the event.

[`dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_) is a globablly available module that provides several configurable dialog types for apps: alert, action, prompt, login, confirmation. This implementation relies on [`action()`](/en/docs/elements/dialogs/action) to let the user choose if they want to mark a task as completed or delete it from the list of active tasks.

### Requirement implementation

1. In the second `<TabViewItem>` block, drag and drop a `<ListView>` element, clean up its contents and set a height for it.
1. In the newly added `<ListView>` element show items from an array of completed tasks (`dones`).

  ```HTML
  <ListView for="done in dones" @tap="onDoneTap" height="100%"> <!-- Make sure to set a height or your list will not show on iOS. -->
    <v-template>
      <Label :text="done.name" />
    </v-template>
  </ListView>
  ```
1. Modify the `onItemTap` method.
  * Method shows an `action()` dialog.
  * Method logs user selection in the console for debugging.
  * Based on user selection, the method moves elements from the `todos` array to the `dones` array, deletes elements from the `todos` array, or dismisses the dialog. Use `splice()` to avoid leaving holes in the array and `unshift()` to make sure that recently completed tasks are shown on top.

  ```JavaScript
  onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Logs the selected option for debugging.
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Places the tapped active task at the top of the completed tasks.
              this.todos.splice(args.index, 1); // Removes the tapped active task.
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Removes the tapped active task.
              break;
            case 'Cancel' || undefined: // Dismisses the dialog.
              break;
          }
      }) 
    },
  ```

At the end of this stage, your code should resemble this sample:

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
    onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Logs the selected option for debugging.
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Places the tapped active task at the top of the completed tasks.
              this.todos.splice(args.index, 1); // Removes the tapped active task.
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Removes the tapped active task.
              break;
            case 'Cancel' || undefined: // Dismisses the dialog.
              break;
          }
      }) 
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.unshift({ name: this.textFieldValue }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen. 
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
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

## Basic functionality: View, return to active tasks, and delete tasks from the Completed tab

### Section progress

Here's how your app will look at the start and at the end of this section.

| Tab 2 - Completed tasks | Tab 2 - Item tapped | Tab 1 - Active tasks
|-----|-------------|-----|
| ![Second tab with completed tasks](/screenshots/ns-playground/completed-tasks-2.jpg) | ![Action dialog toggled](/screenshots/ns-playground/completed-tasks-dialog.jpg) | ![First tab with active tasks](/screenshots/ns-playground/completed-tasks-moved-to-active.jpg)

### Some NativeScript basics

This implementation step does not require any additional knowledge.

### Requirement implementation

For the second tab, modify the `onDoneTap` method:

* Method shows an `action()` dialog.
* Method logs user selection in the console for debugging.
* Based on user selection, the method moves elements from the `dones` array to the `todos` array, deletes elements from the `dones` array, or dismisses the dialog. Use `splice()` to avoid leaving holes in the array and `unshift()` to make sure that recently completed tasks are shown on top.

  ```JavaScript
  onDoneTap(args) {
    action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
    .then(result => {
      console.log(result); // Logs the selected option for debugging.
      switch (result) {
        case 'Mark to do':
          this.todos.unshift(args.item); // Places the tapped completed task at the top of the to do tasks.
          this.dones.splice(args.index, 1); // Removes the tapped completed task.
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

At the end of this stage, your code should resemble this sample:

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
    onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Logs the selected option for debugging.
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Places the tapped active task at the top of the completed tasks.
              this.todos.splice(args.index, 1); // Removes the tapped active task.
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1);
              break;
            case 'Cancel' || undefined:
              break;
          }
      }) 
    },
    onDoneTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
        .then(result => {
          console.log(result); // Logs the selected option for debugging.
          switch (result) {
            case 'Mark to do':
              this.todos.unshift(args.item); // Places the tapped completed task at the top of the to do tasks.
              this.dones.splice(args.index, 1); // Removes the tapped completed task.
              break;
            case 'Delete forever':
              this.dones.splice(args.index, 1); // Removes the tapped completed task.
              break;
            case 'Cancel'||undefined:
              break;
          }
        })
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.unshift({ name: this.textFieldValue }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen. 
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
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

## Advanced design: Styled input field and button

### Section progress

Here's how your app will look at the start and at the end of this section.

| Tab 1 - No style | Tab 1 - Styled | Tab 1 - Styled |
|-----|-------------|----|
| ![Unstyled input](/screenshots/ns-playground/input-field.jpg) | ![Styled button](/screenshots/ns-playground/styled-button.jpg) | ![Styled input](/screenshots/ns-playground/styled-input.jpg) |

### Some NativeScript basics

When you work with NativeScript and Vue.js, you can use application-wide CSS or inline CSS to style your app. Application-wide CSS is applied first and is handled in `app.css` in the root of your project. See also: [Styling](https://docs.nativescript.org/ui/styling).

With type selectors, you can select a UI component and apply styling to it. To select a type, use the component name as provided in the code. For example, to select the tab view, use `TabView`.

### Requirement implementation

#### Style the input field

In `app.css`, change the font size, the color, and the margins around the `<TextField>`.

```CSS
TextField {
    font-size: 20;
    color: #53ba82;
    margin-top: 10;
    margin-bottom: 10;
    margin-right: 5;
    margin-left: 20;
}
```

#### Style the button

1. In `app.js` on line 63, add an `id` for the button.

  ```HTML
  <Button id="add-task-button" row="0" col="1" text="Add task" @tap="onButtonTap" />
  ```
1. In `app.css`, create a style for the button. Modify the style to create a colorful button with rounded corners.

  ```CSS
  #add-task-button {
    font-size: 20;
    font-weight: bold;
    color: white;
    background-color: #53ba82;
    margin-top: 20;
    margin-bottom: 10;
    margin-right: 20;
    margin-left: 5;
    border-radius: 20px;
  }
  ```

## Advanced design: Styled tab navigation

### Section progress

Here's how your app will look at the start and at the end of this section.

| Tabs - No style | Tabs Styled 
|-----|-------------|
| ![Unstyled tabs](/screenshots/ns-playground/styled-button.jpg) | ![Styled tabs](/screenshots/ns-playground/styled-tabs.jpg) |

### Some NativeScript basics

`<TabView>` provides some styling properties out of the box. You can apply a text transform to each tab titles (`textTransform`) and change the font size and color globally (`tabTextFontSize`, `tabTextColor`, `selectedTabTextColor`). You can also change the background color of your tabs (`tabBackgroundColor`).

> **NOTE:** Currently, `tabTextFontSize` does not work on iOS and you cannot change the font size of tab titles on iOS.

### Requirement implementation

#### Change color and font size of selected tab title

In `app.js`, on line 57, add the `selectedTabTextColor` and `tabTextFontSize` property. If you're testing this on iOS, the font size will not change but should work fine on Android.

```HTML
<TabView height="100%" selectedTabTextColor="#53ba82" tabTextFontSize="20" >
```

#### Transform text

In `app.js`, on lines 58 and 73, apply the `textTransform` property. You can use this property only on the `<TabViewItem>` level.

```HTML
<TabViewItem title="To Do" textTransform="uppercase" >
```

```HTML
<TabViewItem title="Completed" textTransform="uppercase">
```

## Advanced design: Styled active tasks

Here's how your app will look at the start and at the end of this section.

| Active tasks - No style | Active tasks - no separator | Active tasks - styled active tasks |
|-----|-------------|---|
| ![Unstyled active tasks](/screenshots/ns-playground/styled-tabs.jpg) | ![No separator](/screenshots/ns-playground/styled-list-view-no-separator.jpg) | ![Styled list](/screenshots/ns-playground/styled-list-view-added-tasks.jpg) |

### Some NativeScript basics

`<ListView>` and `<Label>` have out of the box style properties that you can use to control elements such as the list separator or the text wrap from `app.js`. To change the font style, color, and positioning of text, you need to use CSS in `app.css`.

To implement a style particularly for the text of active tasks, you can set an `id` for the `<Label>` element.

### Requirement implementation

1. In `app.js`, on line 67, set an `id` for the `<Label>` that represents active tasks and enable text wrapping. Enabling text wrapping ensures that longer text shows properly in your list

  ```HTML
  <Label id="active-task" :text="todo.name" textWrap="true" >
  ```
1. On line 65, add the `separatorColor` property and set it to `transparent`. This way, the separator will no longer appear in your list.

  ```HTML
  <ListView for="todo in todos" @itemTap="onItemTap" height="100%" separatorColor="transparent">
  ```
1. In `app.css`, create the style for active tasks. Set font size, color, and some padding to position the text on the page. Play with margins and paddings until you get a result that works for you.

  ```CSS
  #active-task {
    font-size: 20;
    font-weight: bold;
    color: #53ba82;
    margin-left: 20;
    padding-top: 5;
    padding-bottom: 10;
  }
  ```
