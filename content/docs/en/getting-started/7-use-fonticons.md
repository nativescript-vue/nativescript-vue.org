---
title: Using Fonticons
contributors: [jlooper]
---

## How to use Fonticons

Assuming you are using the Vue-CLI and have scaffolded your app using the standard template, it's quite straightforward to use fonticons. 

### Install the [nativescript-fonticon plugin](https://market.nativescript.org/plugins/nativescript-fonticon)

```shell
$ npm install nativescript-fonticon --save
```

The most recent version of the plugin will be added to your package.json file. You may need to refresh your app by running `npm run clean`.

### Add the CSS

Import your fonticon's font files (normally a .ttf, TrueType Font) into `src/assets/fonts`. FontAwesome, for example, has a font file called fontawesome-webfont.ttf.

Add a line to `styles.scss` to set the fonticon's base class:

```css
.fa {
  font-family: FontAwesome, fontawesome-webfont;
}
```

Finally, add the fonticon's .css file to `src/assets`. This file contains the fonticon's class and its unicode reference, and is downloaded with the fonticon. For FontAwesome, the file contains references like these:

```css
.fa-glass:before {
  content: "\f000";
}
.fa-music:before {
  content: "\f001";
}
```

You can edit this file to only contain the fonticons you need.

### Initialize the plugin

In main.js, add the following snippet:

```js
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true; 
TNSFontIcon.paths = {
  'fa': './font-awesome.css',
  'ion': './ionicons.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);
```

In this example, you would have access to both FontAwesome icons and Ionicons. Use what you need.

### Use the fonticons

In labels and buttons, use the fonticons with the proper css class and a pipe indicating a Vue.filter:

```xml
<StackLayout orientation="horizontal" horizontalAlignment="center" verticalAlignment="top">
    <Label class="fa" :text="'fa-eye' | fonticon" />
    <Label class="fa" :text="'fa-heart' | fonticon" />
    <Label class="fa" :text="'fa-user' | fonticon" />
</StackLayout>
```
If you need to combine an icon and text, use mustache syntax:

```xml
<Label class="fa">{{'fa-search' | fonticon}} Search</Label>
```
