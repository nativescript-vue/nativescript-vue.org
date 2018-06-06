---
title: Using Typescript in Nativescript-Vue Apps
authors: [championswimmer]
toc: true
intro: Many people love to build Vue apps with TypeScript. You can do that in NativeScript-Vue too.
---

NativeScript-Vue uses a modified build of vue. The `nativescript-vue` package **is** that build.
For TypeScript we need type definitions from Vue, so we need to install the original Vue package. 

```shell
$ npm install --save-dev vue
```

Once this is done, we have a problem. Anywhere in our code, if we write 

```js
require('vue')
```

or

```ts
import Vue from 'vue'
```

it will be a huge problem, as we **do not ever** want to _actually_ use the original vue package. 
We just want to have it here for type definitions and autocomplete. 

Webpack comes to the rescue. We will add this to our webpack config, so that all `vue` imports
are resolved to `nativescript-vue`:

```js
alias: { 'vue$': 'nativescript-vue' }
```

**Use Typescript**

This should set up up with Typescript already. Simply rename .js files to .ts or, if using SFC, then

```vue
<template>
  <!-- ... -->
</template>

<script lang="ts">
  // typescript code here
</script>
```

**Use Class-style components**

You can now install vue-class-components

```shell
$ npm install --save-dev vue-class-components
```

And write class-styled component code

```ts
import {Component} from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  count = 1
  increment () { this.count++ }
}
```

That's it! You have TypeScript working in NativeScript-Vue!
