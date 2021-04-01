---
title: Upgrade Guide
contributors: [rigor789, jlooper, ikoevska]
outdated: false
---

> Estimated time for the upgrade: **10-20 minutes**.

To upgrade to NativeScript 8.0, start with a clean branch.

Install latest NativeScript CLI:

```bash
$ npm install -g nativescript
```

Verify you are on the latest version by running `ns -v`.

In your project run

```bash
$ ns migrate
```

This should get your project up-to-date with the latest dependencies. Some other things you may need to change:

If you still have imports from `tns-core-modules`, you will have to update them to use `@nativescript/core`, see the import reference guid in the NativeScript blog: https://blog.nativescript.org/nativescript-7-import-reference/index.html/

In your css, if you have imports that start with `~` you need to remove the tildes:

```css
@import "~@nativescript/theme/..."

/* becomes */

@import "@nativescript/theme/..."
```
