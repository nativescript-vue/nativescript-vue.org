---
title: Modules
contributors: [epfromer]
---

NativeScript is built on a layered modular architecture.

![layered module architecture](https://docs.nativescript.org/img/ns-modules.png)

### Application Framework

The top Application Framework layer consists of modules for [`routing and navigation`](/en/docs/routing/manual-routing) and [`data binding`](/en/docs/core-concepts/data-binding).

### Cross Platform Abstraction

The middle layer provides device independent functionality including user interface element modules ([`primary elements`](/en/docs/core-concepts/modules#primary-elements), [`layouts`](/en/docs/core-concepts/modules#layouts), action bar, components, dialogs), core modules (console logging, images, timers), device modules (device info, file system access, gesture handling), and development tools (elements inspector, network inspector).

### User Interface Elements

#### Primary Elements

| Module | Description |
|------|-------------|
| [`Frame`](/en/docs/elements/components/frame) | Used to display [`Page`](/en/docs/elements/components/page) elements, and is also responsible for navigation the app. Every app needs at least a single [`Frame`](/en/docs/elements/components/frame) element, usually set as the root element.
| [`Page`](/en/docs/elements/components/page) | Represents an application screen. NativeScript apps typically consist of one or more [`Page`](/en/docs/elements/components/page) elements that wrap content such as an `<ActionBar>` and other UI widgets.

#### Layouts

| Module | Description |
|------|-------------|
| [`AbsoluteLayout`](/en/docs/elements/layouts/absolute-layout) | Simplest layout container in NativeScript.  Used to position child elements at absolute coordinates without any constraints or resizing.
| [`StackLayout`](/en/docs/elements/layouts/stack-layout) | Stack the child elements vertically (default) or horizontally.

#### Action Bar

to be specified...

#### Components / Widgets

to be specified...

#### Dialogs

to be specified...

### Core Modules

console logging, images, timers to be specified...

### Device Modules

device info, file system access, gesture handling to be specified...

### Development Tools

elements inspector, network inspector to be specified...

### Runtimes

The base layer provides the device specific [`iOS`](/en/docs/runtime/ios/overview) and [`Android`](/en/docs/runtime/android/overview) runtimes.