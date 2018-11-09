---
title: Upgrading to NativeScript 5.0
authors: [rigor789]
toc: true
intro: Now that NativeScript 5.0 has been released, you may want to upgrade your Vue app. Let's see how!
---

[NativeScript 5.0 has been released](https://www.nativescript.org/blog/nativescript-5.0-is-hot-out-of-the-oven) and it brings
some exciting new features:

* Hot Module Replacement 🔥
* `tns preview`
* iOS Safe Area support
* Support for different app IDs for iOS and Android 
* Better Vue support for [NativeScript UI](https://www.nativescript.org/ui-for-nativescript) components
* and more...

Let's see how you can upgrade your existing Vue app (scaffolded using the [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)) to 5.0.

First, ensure you have the latest NativeScript CLI installed by running

```shell
$ npm i -g nativescript
```

> It is a good idea to commit your changes before proceeding, in case anything goes wrong.

Open your projects `package.json` and make the following changes:

```diff
...
"nativescript": {
  "id": "<your app id>",
  "tns-ios": {
-    "version": "4.2.0"
+    "version": "5.0.0"
  },
  "tns-android": {
-    "version": "4.2.0"
+    "version": "5.0.0"
  }
},
...
"dependencies": {
  ...
-  "tns-core-modules": "^4.2.0",
+  "tns-core-modules": "^5.0.2"
  ...
}
...
```

Delete `node_modules`, `platforms`, `hooks` and `package-lock.json`

```shell
# Careful with rm -rf as it will delete files and folders!
$ rm -rf node_modules platforms hooks package-lock.json
```

Finally install the dependencies with
```shell
$ npm install
```

That's it, your app should now use NativeScript 5.0 when invoking `tns run android|ios` commands.

If you encounter issues, please let us know on [the #vue channel on Slack](https://developer.telerik.com/wp-login.php?action=slack-invitation).

Happy coding!
