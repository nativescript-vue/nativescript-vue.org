---
title: Upgrade Guide
contributors: [rigor789, jlooper]
outdated: false
---

> Estimated time for the upgrade: **10-20 minutes**.

If you scaffolded a NativeScript-Vue app using the 1.3.1 version of the Vue-CLI template, it's time to upgrade to the newest version, 2.0, and this guide will help you do that. The new template has a different folder structure from the older one:

![New folder structure](/screenshots/old-new-folder-structure.png)

**Step 1**

Start by creating a new app using the Vue-CLI template.

> **TIP:** Make sure you use the same preinstallation commands in this new project that you used when creating the older version; for example, if you installed Vuex in the CLI the first time, do it again now.

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

The upgrade process involves copying files from your old app into the new project and then rearranging and adding some files.

**Step 2: Replace App Resources**

Copy your old app's `App_Resources` folder from `./template/app/` and paste it into the new app's `app` folder, replacing its `App_Resources` folder.

**Step 3: Merge `src` and `app` folders**

Copy all the folders in `src` from your old app and paste them into the `app` folder in the new app. If you have custom fonts, move the `src/assets/fonts` folder to `app/fonts` in order to let NativeScript to load them automatically.

**Step 4: Edit `main.js`**

NativeScript 4.0 introduced a new Frame element, and introduced a way to change the root element of our applications, allowing for sharing common view elements across pages (navigations).

Prior to 4.0 the root element was a Frame, which was implicitly created by NativeScript when our application started.

With these changes, we are no longer able to automatically create a Frame and Page elements, so in 2.0.0 you are required to explicitly add these elements to your template.

To keep the previous behavior of having a single root Frame, you can change your root Vue instance to have a `<Frame>` and a `<Page>` element.

**Example**

```js
// in prior versions
// this automatically created a Page
new Vue({
  template: `<Label text="Hello world"/>`
}).$start()
```

```js
// in 2.0.0
// the <Frame> and <Page> must exist in your template
new Vue({
  template: `
    <Frame>
      <Page>
        <Label text="Hello world"/>
      </Page>
    </Frame>
  `
}).$start()
```

This allows us to use a shared SideDrawer across different pages for example:

```js
new Vue({
  template: `
    <RadSideDrawer>
      <StackLayout ~drawerContent>...</StackLayout>
      <Frame ~mainContent>
        <Page>
          <Label text="Hello world"/>
        </Page>
      </Frame>
    </RadSideDrawer>
  `
}).$start()
```

In its simplest form, however, edit `main.js`'s Vue initialization block to resemble:

```js
new Vue({
  render: h => h('frame', [h(HelloWorld)]),
}).$start();
```

**Step 5: Edit paths**

Since the folder structure has changed, you need to edit the paths in your new app to point to your styles, fonts, and images.

In your components, if you have images from your old app referenced like this:

```HTML
<Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
```

Change the path:

```HTML
<Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png"/>
```

**Step 6: Align `package.json`**

Copy the relevant values from your old app's root `package.json` file into the new app's root `package.json` file. This will most likely entail copying the `Dependencies:` block, but you might also need to realign the new app's app version and description at the top of `package.json`.

**Step 7: Clean and run**

At this point, it's a good idea to clean the new app's folders (if you have run it prior) and reinstall any dependencies.

```shell
$ cd <project-name>
$ rm -rf platforms
$ npm install
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

**Step 8 (Optional): Try HMR**

Just recently nativescript received support for HMR (Hot Module Replacement). The latest version of NativeScript-Vue supports it out of the box, however you will need to install the latest (and greatest) version of the NativeScript CLI.

```shell
$ npm install -g nativescript@next
$ cd <project-name>
$ rm -rf platforms
$ tns run android --hmr
$ # or
$ tns run ios --hmr
```
