---
title: Modules
contributors: [epfromer]
---

NativeScript is built on a layered modular architecture.

![layered module architecture](https://docs.nativescript.org/img/ns-modules.png)

### Application Framework

The top Application Framework layer consists of modules for [`routing and navigation`](/en/docs/routing/manual-routing) and [`data binding`](/en/docs/core-concepts/data-binding).

### Cross Platform Abstraction

The middle layer provides device independent functionality including user interface element modules ([`layouts`](/en/docs/core-concepts/modules#layouts), action bar, components, dialogs), core modules (console logging, images, timers), device modules (device info, file system access, gesture handling), and development tools (elements inspector, network inspector).

### User Interface Elements

#### Layouts

| Module | Description |
|------|-------------|
| [`Frame`](/en/docs/elements/components/frame) | [`Frame`](/en/docs/elements/components/frame) is used to display [`Page`](/en/docs/elements/components/page) elements, and is also responsible for navigation the app. Every app needs at least a single [`Frame`](/en/docs/elements/components/frame) element, usually set as the root element.
| [`Page`](/en/docs/elements/components/page) | [`Page`](/en/docs/elements/components/page) represents an application screen. NativeScript apps typically consist of one or more [`Page`](/en/docs/elements/components/page) elements that wrap content such as an `<ActionBar>` and other UI widgets.

### Runtimes

The base layer provides the device specific [`iOS`](/en/docs/runtime/ios/overview) and [`Android`](/en/docs/runtime/android/overview) runtimes.