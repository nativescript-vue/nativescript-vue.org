---
title: Technical Overview
contributors: [epfromer]
---

NativeScript is composed of several parts: Runtimes, Core Modules, a CLI, and can be extended with Plugins.

<center>
<img src="/architecture-en.png" width="500"/>
</center>

### Runtimes

Two runtimes provide platform specific APIs to your apps via JavaScript Virtual Machines.  The [Android Runtime](https://docs.nativescript.org/core-concepts/android-runtime/overview) utilizes Google's V8 JVM, and WebKit's JavaScriptCore implements the [iOS Runtime](https://docs.nativescript.org/core-concepts/ios-runtime/Overview).

### Modules

[Modules](/en/docs/core-concepts/modules) provide abstractions on the platform specific runtimes and enable developers to create device independent apps in Angular, Vue, TypeScript and JavaScript.

### NativeScript CLI

Use the [NativeScript CLI](https://github.com/NativeScript/nativescript-cli) to create, build and deploy apps on Windows, MacOS and Linux, and then run and debug those apps on iOS and Android emulators or physical devices.

### NativeScript Plugins

A large collection of [NativeScript Plugins](/en/docs/core-concepts/using-plugins) are available to extend functionality of apps.  You can also develop plugins and contribute to the NativeScript community.

<div class="guide-links">      
  <span style="float: right;"><a href="/en/docs/core-concepts/modules.html">Modules & Components</a> →</span>
</div>