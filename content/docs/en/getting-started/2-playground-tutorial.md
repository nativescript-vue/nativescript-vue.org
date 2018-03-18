---
title: Playground Tutorial
contributors: [ikoevska, rigor789]
---

The [NativeScript Playground](https://play.nativescript.org?template=play-vue) is a place in the cloud where you can just play around with NativeScript and Vue.js from your browser until you figure out the basics. Fire the link and start dragging and dropping component code around the place.

You can work in the Playground for as long as you like. You can use it to just get a taste of NativeScript development or to develop your entire project inside. However, when you get to the point where you are ready to put your app out there, you need to jump on the more advanced wagon and [install NativeScript tools locally](/en/docs/getting-started/installation) and then [pick a template to start with](/en/docs/getting-started/templates).

**This page consists of two parts:**
* [Part 1: Getting familiar with the Playground](#part-1-getting-familiar-with-the-playground)
* [Part 2: Building an app](#part-2-building-an-app)

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
* (In progress) Basic functionality
  * Add tasks: Users can add tasks as text
  * (Coming soon) View tasks
      * (Coming soon) Newly added tasks are listed as active and can be tapped
      * (Coming soon) Completed tasks are listed on a separate tab
  * (Coming soon) Complete tasks: Tapping an active task completes it and moves it to the other tab
  * (Coming soon) Delete tasks: Tapping an "X" button removes active or completed tasks
* (Coming soon) Advanced functionality
  * (Coming soon) Schedule tasks: Users can set deadlines for tasks by picking a date from a calendar widget
  * (Coming soon) Manage tasks in bulk

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

```JavaScript
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

| Initial screen | Tab 1 - No tasks | Tab1 - Added tasks |
|-------|-----|-------------|
| ![First tab before changes](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![First tab without any tasks](/screenshots/ns-playground/input-field.jpg) | ![First tab with added tasks](/screenshots/ns-playground/added-tasks.jpg)

### Some NativeScript basics

The layout components let you arrange the various UI widgets of your app. Whenever you need to place more than one UI widget on your app screen, you are likely to use one of the available layout options. The `<StackLayout>` and the `<GridLayout>` are basic but versatile options, letting you position elements vertically or in a table-like layout, respectively. While the 
`<StackLayout>` handles elements in their natural sequence, the `<GridLayout>` lets you choose the exact positions of your elements in the grid.

### Requirement implementation

Use a `<GridLayout>` to arrange a `<TextField>` and a `<Button>` on the page. The latter two form the input functionality of the app.

Use a `<ListView>` to show tasks below the input field.

1. Drag and drop a `<GridLayout>` component within the `<TabViewItem>` block for the first tab.<br/>The default code creates a colorful table that showcases how to position elements and merge grid cells.
1. Configure the `<GridLayout>`.
  * Set the grid to consist of two columns and two rows.
  * Set the width of the grid to 100% so that it takes the entire width of the screen.
  * Remove any additional settings for the grid.
  * Remove all `<Label>` elements within the `<GridLayout>` block.
1. Remove the `<Label>` component for the `<TabViewItem>`. Drag and drop a `<TextField>`, a `<Button>`, and a `<ListView>` component within the `<GridLayout>` block.<br/>The Playground adds JavaScript code to your code for the first time. Note the `data()` and `methods` blocks added above the `template` block. In next implementation steps, you will need to add code to these sections to create some of the app functionality.
1. Configure the positioning of the elements within the grid.
  * Set the `<TextField>` to inhabit the first column and the first row.
  * Set the `<Button>` to inhabit the second column and the first row.
  * Set the `<ListView>` to span across both columns on the second row.
1. Clean up sample code from the `<TextField>` and the `<ListView>`.
1. Log newly added tasks in the console.
1. Push newly added tasks into the array of tasks.
1. Clear the text field after input.
1. List task name and status on the screen.

```JavaScript
new Vue({
  data() {
    return {
      todos: [],
      textFieldValue: "",
    }
  },
  methods: {
    onToDoTap: function (args) {
      console.log('Task with index: ' + args.index + ' tapped'); // Logs tapped tasks in the console for debugging.
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.push({ name: this.textFieldValue, status: "NEW" }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen. 
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
    },
  },


  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Positions an input field, a button, and the list of tasks in a grid. -->
          <GridLayout columns="3*,*" rows="auto,auto" width="100%">
            <TextField row="0" col="0" v-model="textFieldValue" hint="Enter text..." editable="true" @returnPress="onButtonTap" /> <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
            <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            
            <ListView row="1" col="0" colspan="2" for="todo in todos" @todoTap="onToDoTap">
              <v-template>
                <GridLayout columns="3*,*" rows="auto" width="100%">                  
                  <Label row="0" col="0" :text="todo.name" />
                  <Label row="1" col="1" :text="todo.status" />
                </GridLayout>
              </v-template>
            </ListView> 
            
          </GridLayout>
    
        </TabViewItem>
        <TabViewItem title="Completed">
          <Label text="This tab will list completed tasks for tracking." textWrap="true" />
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```