---
title: Modules
contributors: [epfromer]
---

NativeScript is built on a layered modular architecture.

![layered module architecture](https://docs.nativescript.org/img/ns-modules.png)

### Application Framework

The top Application Framework layer consists of modules for [`routing and navigation`](/en/docs/routing/manual-routing) and [`data binding`](/en/docs/core-concepts/data-binding).

### Cross Platform Abstraction

The middle layer provides device independent functionality including user interface element modules ([`primary components`](/en/docs/core-concepts/modules#primary-components), [`layouts`](/en/docs/core-concepts/modules#layouts), [`action bar`](/en/docs/core-concepts/modules#action-bar), [`components / widgets`](/en/docs/core-concepts/modules#components--widgets), [`dialogs`](/en/docs/core-concepts/modules#dialogs)), core modules (console logging, images, timers), device modules (device info, file system access, gesture handling), and development tools (elements inspector, network inspector).

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
| [`ActivityIndicator`](/en/docs/elements/components/activity-indicator) | Circular progress indicator for long running operation.
| [`Button`](/en/docs/elements/components/button) | A typical button.
| [`DatePicker`](/en/docs/elements/components/date-picker) | Choose a date from a range.
| [`HtmlView`](/en/docs/elements/components/html-view) | Display static HTML content.
| [`Image`](/en/docs/elements/components/image) | Show an image.
| [`Label`](/en/docs/elements/components/label) | Display simple, read-only text.
| [`ListPicker`](/en/docs/elements/components/list-picker) | Select a value from a list.
| [`ListView`](/en/docs/elements/components/list-view) | Display a vertically scrolled list.
| [`Placeholder`](/en/docs/elements/components/placeholder) | Hold a place for a native element in the UI hierarchy.
| [`Progress`](/en/docs/elements/components/progress) | Linear progress indicator for long running operation.
| [`ScrollView`](/en/docs/elements/components/scroll-view) | Display content that is scrolled either vertically or horizontally.
| [`SearchBar`](/en/docs/elements/components/search-bar) | An input field for entering search strings.
| [`SegmentedBar`](/en/docs/elements/components/segmented-bar) | Display a horizontal set of buttons, with one selected.
| [`Slider`](/en/docs/elements/components/slider) | Choose a value along a range.
| [`Switch`](/en/docs/elements/components/switch) | Choose one of two states, like a light switch.
| [`TabView`](/en/docs/elements/components/tab-view) | Select from multiple tabs, recorded in navigation flow.
| [`TextField`](/en/docs/elements/components/text-field) | A single-line input field.
| [`TextView`](/en/docs/elements/components/text-view) | A multi-line input field, which can also be used for multi-line read-only text.
| [`TimePicker`](/en/docs/elements/components/time-picker) | Select a time.
| [`WebView`](/en/docs/elements/components/web-view) | Display more complex HTML content, including from a remote URL or local file.

#### Dialogs

| Module | Description |
|------|-------------|
| [`ActionDialog`](/en/docs/elements/dialogs/action) | Choose from one of several actions, or cancel.
| [`AlertDialog`](/en/docs/elements/dialogs/alert) | A simple message and ok button.
| [`ConfirmDialog`](/en/docs/elements/dialogs/confirm) | Confirm an action with ok or cancel.
| [`LoginDialog`](/en/docs/elements/dialogs/login) | Provide username and password to sign in.
| [`PromptDialog`](/en/docs/elements/dialogs/prompt) | A message with a single line input and ok or cancel.

### Core Modules

| Module | Description |
|------|-------------|

console logging, images, timers to be specified...

### Device Modules

device info, file system access, gesture handling to be specified...

### Development Tools

elements inspector, network inspector to be specified...

### Runtimes

The base layer provides the device specific [`iOS`](/en/docs/runtime/ios/overview) and [`Android`](/en/docs/runtime/android/overview) runtimes.