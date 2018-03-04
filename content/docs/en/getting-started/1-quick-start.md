---
title: Quick Start
contributors: [rigor789, eddyverbruggen, damain, ikoevska]
---

If you don't want the hassle of installing and configuring your system before you can have a taste of NativeScript + Vue.js development, the [NativeScript Playground](https://play.nativescript.org?template=play-vue) has you covered.

It's a place in the cloud where you can just play around with NativeScript and Vue.js from your browser until you figure out the basics. Fire the link and start dragging and dropping component code around the place.

## Getting around the Playground

Firing [this link](https://play.nativescript.org/?template=play-vue) gets you to a simple code editor in the cloud where a very basic NativeScript + Vue.js template is pre-loaded for you.

> **TIP:** Head to [Sample Tasks for the Playground](/en/docs/getting-started/playground-tutorial) for ideas about what to do to get started in the Playground.

### Before you start

![](/screenshots/ns-playground/playground-home.png)

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

## Next steps

You can work in the Playground for as long as you like. You can use it to just get a taste of NativeScript development or to develop your entire project inside. However, when you get to the point where you are ready to put your app out there, you need to jump on the more advanced wagon and [install some NativeScript tools locally](/en/docs/getting-started/installation).

If [you already have your system ready for native development](/en/docs/getting-started/installation), you can start by using a template:

```shell
$ $ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
```

and then run your app using:

```shell
$ npm run watch:<platform>
```

where platform is `ios` or `android`.

For more information about the available templates head over to the [templates documentation](/en/docs/getting-started/templates).
