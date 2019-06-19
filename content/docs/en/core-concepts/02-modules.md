---
title: Modules & Components
contributors: [epfromer]
---

NativeScript is built on a layered architecture with collections of components grouped into modules.

<center>
<img src="/modules-en.png" width="400"/>
</center>

### Application Framework

The top Application Framework layer consists of modules for [routing and navigation](/en/docs/routing/manual-routing) and [data binding](/en/docs/core-concepts/data-binding).

### Cross Platform Abstraction

The middle layer provides device independent components including user interface ([primary components](/en/docs/core-concepts/modules#primary-components), [layout components](/en/docs/core-concepts/modules#layout-components), [action bar components](/en/docs/core-concepts/modules#action-bar-components), [common UI components](/en/docs/core-concepts/modules#ui-components), [dialog components](/en/docs/core-concepts/modules#dialog-components)), [core framework components](/en/docs/core-concepts/modules#core-framework-components) (images, timers, console logging, tracing), and [device components](/en/docs/core-concepts/modules#device-components) (device info, file system access, gesture handling).  [NativeScript Plugins](/en/docs/core-concepts/using-plugins) are available to extend functionality of apps. 

### User Interface

#### Primary Components

| Component | Description |
|------|-------------|
| [`<Frame>`](/en/docs/elements/components/frame) | Used to display [`<Page>`](/en/docs/elements/components/page) components, and is also responsible for navigation in the app. Every app needs at least a single [`<Frame>`](/en/docs/elements/components/frame) component, usually set as the root element.
| [`<Page>`](/en/docs/elements/components/page) | Represents an application screen. NativeScript apps typically consist of one or more [`<Page>`](/en/docs/elements/components/page) components that wrap content such as an `<ActionBar>` and other UI components.

#### Layout Components

| Component | Description |
|------|-------------|
| [`<AbsoluteLayout>`](/en/docs/elements/layouts/absolute-layout) | Simplest layout container in NativeScript.  Position child elements at absolute coordinates without any constraints or resizing.
| [`<DockLayout>`](/en/docs/elements/layouts/dock-layout) | Dock child elements to center or edges of layout.
| [`<FlexboxLayout>`](/en/docs/elements/layouts/grid-layout) | Position child elements using CSS Flexbox properties.
| [`<GridLayout>`](/en/docs/elements/layouts/grid-layout) | Arrange child elements in grid using row and column designations.
| [`<StackLayout>`](/en/docs/elements/layouts/stack-layout) | Stack child elements vertically (default) or horizontally.
| [`<WrapLayout>`](/en/docs/elements/layouts/wrap-layout) | Position child elements in rows or columns, based on the orientation property. Elements are wrapped if necessary.

#### Action Bar Components

| Component | Description |
|------|-------------|
| [`<ActionBar>`](/en/docs/elements/action-bar/action-bar) | A tool bar at the top of the [`<Page>`](/en/docs/elements/components/page).
| [`<ActionItem>`](/en/docs/elements/action-bar/action-item) | Buttons for the [`<ActionBar>`](/en/docs/elements/action-bar/action-bar).
| [`<NavigationButton>`](/en/docs/elements/action-bar/navigation-button) | [`<ActionBar>`](/en/docs/elements/action-bar/action-bar) button for navigation (e.g. "back").

#### UI Components

| Component | Description |
|------|-------------|
| [`<ActivityIndicator>`](/en/docs/elements/components/activity-indicator) | Circular progress indicator for long running operation.
| [`<Button>`](/en/docs/elements/components/button) | A typical button.
| [`<DatePicker>`](/en/docs/elements/components/date-picker) | Choose a date from a range.
| [`<HtmlView>`](/en/docs/elements/components/html-view) | Display static HTML content.
| [`<Image>`](/en/docs/elements/components/image) | Show an image.
| [`<Label>`](/en/docs/elements/components/label) | Display simple, read-only text.
| [`<ListPicker>`](/en/docs/elements/components/list-picker) | Select a value from a list.
| [`<ListView>`](/en/docs/elements/components/list-view) | Display a vertically scrolled list.
| [`<Placeholder>`](/en/docs/elements/components/placeholder) | Hold a place for a native element in the UI hierarchy.
| [`<Progress>`](/en/docs/elements/components/progress) | Linear progress indicator for long running operation.
| [`<ScrollView>`](/en/docs/elements/components/scroll-view) | Display content that is scrolled either vertically or horizontally.
| [`<SearchBar>`](/en/docs/elements/components/search-bar) | An input field for entering search strings.
| [`<SegmentedBar>`](/en/docs/elements/components/segmented-bar) | Display a horizontal set of buttons, with one selected.
| [`<Slider>`](/en/docs/elements/components/slider) | Choose a value along a range.
| [`<Switch>`](/en/docs/elements/components/switch) | Choose one of two states, like a light switch.
| [`<TabView>`](/en/docs/elements/components/tab-view) | Select from multiple tabs, recorded in navigation flow.
| [`<TextField>`](/en/docs/elements/components/text-field) | A single-line input field.
| [`<TextView>`](/en/docs/elements/components/text-view) | A multi-line input field, which can also be used for multi-line read-only text.
| [`<TimePicker>`](/en/docs/elements/components/time-picker) | Select a time.
| [`<WebView>`](/en/docs/elements/components/web-view) | Display more complex HTML content, including from a remote URL or local file.

#### Dialog Components

| Component | Description |
|------|-------------|
| [`ActionDialog>`](/en/docs/elements/dialogs/action) | Choose from one of several actions, or cancel.
| [`AlertDialog>`](/en/docs/elements/dialogs/alert) | A simple message and ok button.
| [`ConfirmDialog>`](/en/docs/elements/dialogs/confirm) | Confirm an action with ok or cancel.
| [`LoginDialog>`](/en/docs/elements/dialogs/login) | Provide username and password to sign in.
| [`PromptDialog>`](/en/docs/elements/dialogs/prompt) | A message with a single line input and ok or cancel.

### Core Framework Components

| Component | Description |
|------|-------------|
| [`<Application>`](https://docs.nativescript.org/ns-framework-modules/application) | Check which platform app is running on.  Handle app lifecycle events (launch, resume, suspend and exit) and device events (screen orientation, low battery and low memory).
| [`<Application Settings>`](https://docs.nativescript.org/ns-framework-modules/application-settings) | Store and retrieve strings, booleans and numbers in key / value store (e.g. user login status, preferences).
| [`<Color>`](https://docs.nativescript.org/ns-framework-modules/color) | Create color objects in variety of ways.
| [`<Connectivity>`](https://docs.nativescript.org/ns-framework-modules/connectivity) | Monitor connection type and availability.
| [`<Console>`](https://docs.nativescript.org/ns-framework-modules/console) | Log information to the console.
| [`<Observable>`](https://docs.nativescript.org/ns-framework-modules/observable) | Monitor data changes using Observables.
| [`<ObservableArray>`](https://docs.nativescript.org/ns-framework-modules/observable-array) | Monitor data changes for arrays of objects using Observables.
| [`<VirtualArray>`](https://docs.nativescript.org/ns-framework-modules/virtual-array) | Advanced array object which loads items only when needed.
| [`<Fetch>`](https://docs.nativescript.org/ns-framework-modules/fetch) | Perform HTTP GET and POST requests. Alternative to [`HTTP`](https://docs.nativescript.org/ns-framework-modules/http).
| [`<FPSMeter>`](https://docs.nativescript.org/ns-framework-modules/fps-meter) | Log frames-per-second statistics for the app.
| [`<HTTP>`](https://docs.nativescript.org/ns-framework-modules/http) | Perform HTTP GET and POST requests.  Alternative to [`Fetch`](https://docs.nativescript.org/ns-framework-modules/fetch).
| [`<ImageSource>`](https://docs.nativescript.org/ns-framework-modules/image-source) | Manage images.
| [`<Timer>`](https://docs.nativescript.org/ns-framework-modules/timer) | Create timers to run code at specific intervals.
| [`<Trace>`](https://docs.nativescript.org/ns-framework-modules/trace) | Diagnostic logging.
| [`<XML>`](https://docs.nativescript.org/ns-framework-modules/xml-parser) | Parse data from XML content.

### Device Components

| Component | Description |
|------|-------------|
| [`<FileSystem>`](https://docs.nativescript.org/ns-framework-modules/file-system) | Manage files and folders.
| [`<Gestures>`](https://docs.nativescript.org/ns-framework-modules/gestures) | Respond to gestures (tap, slide, pinch).
| [`<Platform>`](https://docs.nativescript.org/ns-framework-modules/platform) | Get info about device (model, type, OS, version) and screen (scale, width, height).

### Runtimes

The base layer provides the device specific [iOS](/en/docs/runtime/ios/overview) and [Android](/en/docs/runtime/android/overview) runtimes.

<div>
  <span>← <a href="/en/docs/core-concepts/technical-overview.html">Technical Overview</a></span>
  <span style="float: right;"><a href="/en/docs/core-concepts/application-architecture.html">Application Architecture</a> →</span>
</div>