---
title: Application Architecture
contributors: [epfromer]
---

### Booting the Vue Instance

Like a [web-based Vue application](https://vuejs.org/v2/guide/instance.html), a {N} Vue app starts with the creation of a new Vue instance.  With an app created by the [{N} CLI](https://github.com/NativeScript/nativescript-cli) or the [{N} Playground](https://play.nativescript.org?template=play-vue), this is done within app/app.js.

```Vue
import Vue from "nativescript-vue";

import HelloWorld from "./components/HelloWorld";

new Vue({

    template: `
        <Frame>
            <HelloWorld />
        </Frame>`,

    components: {
        HelloWorld
    }
}).$start();
```

The template contains a [`<Frame>`](/en/docs/elements/components/frame) component, which is a UI component used to display [`<Page>`](/en/docs/elements/components/page) components, and is also responsible for navigation the app.  Every app needs at least a single [`<Frame>`](/en/docs/elements/components/frame) component, usually set as the root element.

### Components

[Components](https://vuejs.org/v2/guide/components.html) are the main building block of Vue apps.  Both the [{N} CLI](https://github.com/NativeScript/nativescript-cli) and [{N} Playground](https://play.nativescript.org?template=play-vue) create a Vue [single file component](https://vuejs.org/v2/guide/single-file-components.html) in the app/components folder.

```Vue
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->
                <Label textWrap="true" text="Play with NativeScript!" class="h2 description-label" />
                <Label textWrap="true" text="Write code in the editor or drag and drop components to build a NativeScript mobile application." class="h2 description-label" />
                <Label textWrap="true" text="Scan the QR code with your mobile device and watch the changes sync live while you play with the code." class="h2 description-label" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    data () {
        return {
        };
    },
}
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

[`Page`](/en/docs/elements/components/page) is a UI compnent that represents a screen and wraps other components such as an [`ActionBar`](/en/docs/elements/action-bar/action-bar).
