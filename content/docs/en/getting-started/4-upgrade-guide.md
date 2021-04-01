---
title: Upgrade Guide
contributors: [rigor789, jlooper, ikoevska]
outdated: false
---

> Estimated time for the upgrade: **10-20 minutes**.

If you scaffolded a NativeScript-Vue app using the 1.3.1 version of the Vue-CLI template, it's time to upgrade to the newest 2.0 version. This guide will help you do that.

## Upgrade overview

The new template has a different folder structure:

![New folder structure](/screenshots/old-new-folder-structure.png)

The simplified upgrade process involves:

1. Creating a new project from the updated template.
1. Copying files from your old app into the new one.
1. Rearranging and adding some files.

## Step 1: Create new app

Use the Vue-CLI template to create a new app. Make sure to run the same preinstallation commands that you used for the old version. For example, if you installed Vuex in the CLI the first time, do it again now.

Run the following command to create a new project from the Vue-CLI template.

```shell
$ npm install -g @vue/cli @vue/cli-init
$ ns create <project-name> --vue
$ cd <project-name>
$ npm install
$ tns preview
$ # or
$ tns run
```

## Step 2: Replace `App_Resources`

*iOS*: Copy your old app's `./template/app/App_Resources/iOS` folder. Then, paste it into the new app's `app/App_Resources` folder.  Make sure that you're replacing the new `App_Resources/iOS` folder.

*Android*: Copy all the contents of your old app's `./template/app/App_Resources/Android` folder. Next, paste it into the new app's `app/App_Resources/Android/src/main/res` folder.


## Step 3: Merge the `src` and `app` folders

Copy all the folders in `src` from your old app and paste them into the `app` folder in the new app.

If you have custom fonts, move the contents of the `src/assets/fonts` folder to `app/fonts`. This ensures that NativeScript will load your custom fonts automatically.

## Step 4: Edit `main.js`

Edit `main.js`'s Vue initialization block to resemble:

```js
new Vue({
  render: h => h('frame', [h(HelloWorld)]),
}).$start();
```

NativeScript 4.0 brings two major improvements:

* a new `<Frame>` element
* a new way to change the root element of your app that lets you share common view elements across pages (navigations).

Before NativeScript 4.0, the root element was a `<Frame>` element which was implicitly created by NativeScript when the application started.

With the latest changes, `<Frame>` and `<Page>` elements are no longer automatically created. So, in NativeScript-Vue 2.0.0, you need to explicitly add these elements to your template.

To keep the previous behavior of having a single root `<Frame>`, you can change your root Vue instance to have a `<Frame>` and a `<Page>` element.

**Example: Adding `<Frame>` and `<Page>` to the template**

```JavaScript
// in older versions
// this automatically created a Page
new Vue({
  template: `<Label text="Hello world"/>`
}).$start()
```

```JavaScript
// in NativeScript-Vue 2.0.0
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

This lets you use a shared element across different pages. 

**Example: Using a shared `<SideDrawer>` element**

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

## Step 5: Edit paths

Because the folder structure has changed, you need to edit the paths in your new app to point to your styles, fonts, and images.

**Example: Changing image references**

In your old app, you are likely to have referenced images like this.

```HTML
<Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
```

To ensure that NativeScript loads the images, change the path reference to the following.

```HTML
<Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png"/>
```

## (If needed) Step 6: Fix manual routing props

If your app uses manual routing, the syntax for passing props has changed. Note that this change might not be required in all projects.

Your old syntax is likely to look like this.

```JavaScript
this.$navigateTo(NewPage, {
                    transition: {},
                    transitioniOS: {},
                    transitionAndroid: {},

                    context: {
                        propsData: {
                            name: this.name,
                            value: this.value
                        }
                    }
                });
```

To preserve the manual routing behavior in your new app, change your syntax to the following: 

```JavaScript
this.$navigateTo(NewPage, {
                    transition: {},
                    transitioniOS: {},
                    transitionAndroid: {},

                    props: {
                        name: this.name,
                        value: this.value
                    }
                });
```

## Step 7: Align `package.json`

Copy the relevant values from your old app's root `package.json` file into the new app's root `package.json` file. 

You will likely need to copy the `Dependencies:` block and, in some cases, realign the new app's app version and description at the top of `package.json`.

## Step 8: Clean and run

Run the following command to clean the new app's folders and reinstall any dependencies.

```shell
$ cd <project-name>
$ rm -rf platforms
$ npm install
$ tns run
```

## (Optional) Step 9: Try HMR

NativeScript now provides support for HMR (Hot Module Replacement). The latest version of NativeScript-Vue provides out-of-the-box HMR support as well but requires the NativeScript CLI. 

Run the following command to get HMR support by installing the latest and greatest version of the NativeScript CLI.

```shell
$ npm install -g nativescript@next
$ cd <project-name>
$ rm -rf platforms
$ tns run
```
