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
| [`Frame`](/en/docs/elements/components/frame) | <Frame> is a UI component used to display <Page> elements. Every app needs at least a single <Frame> element, usually set as the root element.

### Runtimes

The bottom layer provides the device specific [`iOS`](/en/docs/runtime/ios/overview) and [`Android`](/en/docs/runtime/android/overview) runtimes.