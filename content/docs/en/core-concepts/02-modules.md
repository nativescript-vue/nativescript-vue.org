---
title: Modules
contributors: [epfromer]
---

NativeScript is built on a layered modular architecture.

![layered module architecture](https://docs.nativescript.org/img/ns-modules.png)

### Application Framework

The top Application Framework layer consists of modules for [`routing and navigation`](/en/docs/routing/manual-routing) and [`data binding`](/en/docs/core-concepts/data-binding).

### Cross Platform Abstraction

The middle layer provides device independent functionality including user interface element modules ([`primary components`](/en/docs/core-concepts/modules#primary-components), [`layouts`](/en/docs/core-concepts/modules#layouts), [`action bar`](/en/docs/core-concepts/modules#action-bar), [`components / widgets`](/en/docs/core-concepts/modules#components--widgets), dialogs), core modules (console logging, images, timers), device modules (device info, file system access, gesture handling), and development tools (elements inspector, network inspector).

### User Interface Elements

#### Primary Components

| Module | Description |
|------|-------------|
| [`Frame`](/en/docs/elements/components/frame) | Used to display [`Page`](/en/docs/elements/components/page) elements, and is also responsible for navigation the app. Every app needs at least a single [`Frame`](/en/docs/elements/components/frame) element, usually set as the root element.
| [`Page`](/en/docs/elements/components/page) | Represents an application screen. NativeScript apps typically consist of one or more [`Page`](/en/docs/elements/components/page) elements that wrap content such as an `<ActionBar>` and other UI widgets.

#### Layouts

| Module | Description |
|------|-------------|
| [`AbsoluteLayout`](/en/docs/elements/layouts/absolute-layout) | Simplest layout container in NativeScript.  Position child elements at absolute coordinates without any constraints or resizing.
| [`DockLayout`](/en/docs/elements/layouts/dock-layout) | Dock child elements to center or edges of layout.
| [`FlexboxLayout`](/en/docs/elements/layouts/grid-layout) | Position child elements using CSS Flexbox properties.
| [`GridLayout`](/en/docs/elements/layouts/grid-layout) | Arrange child elements in grid using row and column designations.
| [`StackLayout`](/en/docs/elements/layouts/stack-layout) | Stack child elements vertically (default) or horizontally.
| [`WrapLayout`](/en/docs/elements/layouts/wrap-layout) | Position child elements in rows or columns, based on the orientation property. Elements are wrapped if necessary.

#### Action Bar

| Module | Description |
|------|-------------|
| [`ActionBar`](/en/docs/elements/action-bar/action-bar) | A tool bar at the top of the [`Page`](/en/docs/elements/components/page).
| [`ActionItem`](/en/docs/elements/action-bar/action-item) | Buttons for the [`ActionBar`](/en/docs/elements/action-bar/action-bar).
| [`NavigationButton`](/en/docs/elements/action-bar/navigation-button) | [`ActionBar`](/en/docs/elements/action-bar/action-bar) button for navigation (e.g. "back").

#### Components / Widgets

| Module | Description |
|------|-------------|
| [`ActivityIndicator`](/en/docs/elements/components/activity-indicator) | Progress indicator for long running operation.

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