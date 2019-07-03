---
title: Component Lifecycle
contributors: [epfromer]
---

As noted in [Application Architecture](/en/docs/core-concepts/application-architecture.html), Vue apps are composed of components.  {N} Vue components follow the [same lifecycle](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram) as a traditional Vue app.  

![component lifecycle](https://vuejs.org/images/lifecycle.png)

You can see the lifecycle in action in [this Playground example](https://play.nativescript.org/?template=play-vue&id=WBxsfQ).

Start with a component `<FancyButton>` which reports the number of times it is tapped.  Each lifecycle hook prints a statement to the console.

```Vue
<template>
    <Button :text="`Tap me: ${timesTapped} times`" @tap="timesTapped++" />
</template>

<script>
    export default {
        data() {
            return {
                timesTapped: 0
            };
        },
        beforeCreate: function() {
            console.log("beforeCreate: nothing yet set up");
        },
        created: function() {
            console.log("created: data and events are active");
        },
        beforeMount: function() {
            console.log("beforeMount: template & render funcs compiled");
        },
        mounted: function() {
            console.log("mounted: full access to DOM");
        },
        beforeUpdate: function() {
            console.log(`beforeUpdate: timesTapped = ${this.timesTapped}`);
        },
        updated: function() {
            console.log("updated: DOM updated");
        },
        beforeDestroy: function() {
            console.log("beforeDestroy: cleanup is done here");
        },
        destroyed: function() {
            console.log("destroyed: pretty much nothing left");
        }
    };
</script>

<style></style>
```

Then, a parent component that turns this `<FancyButton>` on and off.  That allows us to see the `beforeDestroy` and `destroyed` hooks in action.  

```Vue
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <StackLayout class="home-panel">
            <Button :text="`${showFancyButton ? 'Hide FancyButton' : 'Show FancyButton'}`"
                @tap="showFancyButton = !showFancyButton" />
            <FancyButton v-if="showFancyButton" />
        </StackLayout>
    </Page>
</template>

<script>
    import FancyButton from "./FancyButton";

    export default {
        data() {
            return {
                showFancyButton: false
            };
        },
        components: {
            FancyButton
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>
```

When running the app, tap 'Show FancyButton' and check the console, and you'll see:

```sh
[iPhone]: 'beforeMount: template & render funcs compiled'
[iPhone]: 'beforeCreate: nothing yet set up'
[iPhone]: 'mounted: full access to DOM'
[iPhone]: 'created: data and events are active'
```

Tap on 'Tap me' a few times.  You'll see the button text update with the tap count, and in the console you'll see:

```sh
[iPhone]: 'beforeUpdate: timesTapped = 1'
[iPhone]: 'updated: DOM updated'
[iPhone]: 'beforeUpdate: timesTapped = 2'
[iPhone]: 'updated: DOM updated'
```

Then, tap 'Hide FancyButton' to see:

```sh
[iPhone]: 'beforeDestroy: cleanup is done here'
[iPhone]: 'destroyed: pretty much nothing left'
```

<div>
  <span>← <a href="/en/docs/core-concepts/data-binding.html">Data Binding</a></span>
  <span style="float: right;"><a href="/en/docs/core-concepts/application-lifecycle.html">Application Lifecycle</a> →</span>
</div>