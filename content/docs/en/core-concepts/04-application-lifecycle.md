---
title: Application Lifecycle
contributors: [epfromer]
---

You might need to perform specific tasks to deal with low memory, launch, resume, suspend and exit, or to handle changes to screen orientation.  The {N} [application module](https://docs.nativescript.org/ns-framework-modules/application) provides a platform independent way to handle these types of system events.  

Check out [this Playground example](https://play.nativescript.org/?template=play-vue&id=ADoDVE).

In the app/app.js file we have:

```vue
import Vue from 'nativescript-vue';
import * as application from 'tns-core-modules/application'
import HelloWorld from './components/HelloWorld';

if (application.android) {
    console.log("We are running on Android device!");
} else if (application.ios) {
    console.log("We are running on iOS device");
}

application.on(application.launchEvent, (args) => {
    console.log("app launched");
});
application.on(application.suspendEvent, (args) => {
    console.log("app suspended");
});
application.on(application.resumeEvent, (args) => {
    console.log("app resumed");
});
application.on(application.lowMemoryEvent, (args) => {
    console.log("low memory");
});

new Vue({
    template: `
        <Frame>
            <HelloWorld />
        </Frame>
        `,
    components: {
        HelloWorld
    }
}).$start();
```

Running this code on an iOS device, you'll see this in the console:

```sh
[iPhone]: 'We are running on iOS device'
[iPhone]: 'app launched'
[iPhone]: 'app resumed'
```

You can add these hooks to Vue components as well.  Consider the HelloWorld component.

```vue
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <Label :text="msg" class="home-panel" />
    </Page>
</template>

<script>
    import * as app from "tns-core-modules/application";

    export default {
        created() {
            app.on(app.orientationChangedEvent, args => {
                this.msg = "orientation is " + args.newValue;
            });
        },
        data() {
            return {
                msg: ""
            };
        },
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        horizontal-align: center;
        font-size: 20;
        margin: 15;
    }
</style>
```

We use the Vue component lifecycle hook to set an event handler to detect orientation changes.  When this app runs, it will display the orientation.  Change the orientation to see an updated message.

<div>
  <span>← <a href="/en/docs/core-concepts/component-lifecycle.html">Component Lifecycle</a></span>
</div>