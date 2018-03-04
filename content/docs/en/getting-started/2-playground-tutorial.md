---
title: Sample Tasks for the Playground
contributors: [ikoevska]
---

If you want to explore the [NativeScript Playground](https://play.nativescript.org?template=play-vue), you can start by creating a simple to-do app with the following requirements:

* (Coming soon) Basic design
  * (Coming soon) Two-tab layout
  * (Coming soon) One tab shows active tasks and lets you add new tasks
  * (Coming soon) Second tab lists completed tasks
* (Coming soon) Basic functionality
  * (Coming soon) Add tasks: Users can add tasks as text
  * (Coming soon) View tasks
      * (Coming soon) Newly added tasks are listed as active and are tapable
      * (Coming soon) Completed tasks are listed on a separate tab
  * (Coming soon) Complete tasks: Tapping an active task completes it and moves it to the other tab
  * (Coming soon) Delete tasks: Tapping an "X" button removes active or completed tasks
* (Coming soon) Advanced functionality
  * (Coming soon) Schedule tasks: Users can set deadlines for tasks by picking a date from a calendar widget
  * (Coming soon) Manage tasks in bulk

## The bare Vue.js template

![](/screenshots/ns-playground/playground-home.png)

All development effort for this tutorial happens in `app.js` and `app.css`, containing the app functionality and taking care of the app styles, respectively.

The `app.js` for your newly created Vue.js project consists of a simple `template` declaration without any functionality. As you drag and drop user interface components to the app, the Playground also adds a `methods` block and populates it with code containing actual app functionality.

In `app.js`, you'll be working in the `template` block to design the user interface or in the `methods` block to build the app functionality. The `template` block requires NativeScript-compatible XML. The `methods` block accepts both Vue.js and NativeScript JavaScript code.