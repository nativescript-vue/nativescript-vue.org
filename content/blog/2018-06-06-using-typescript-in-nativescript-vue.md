---
title: Using Typescript in Nativescript-Vue Apps
authors: [championswimmer]
toc: true
intro: Many people love to build Vue apps with Typescript. You can do that in Nativescript-Vue too.
---

## Install Vue
Nativescript-Vue uses a modified build of vue. The `nativescript-vue` package **is* that build.
But for Typescript, we need Typedefinitions from Vue, so we need to install the original Vue package. 

```
npm install -D vue
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
We just want to have it here for typedefs and autocomplete. 

Webpack comes to our rescue. We will add this to our webpack config, so that all `vue` imports
are resolved to `nativescript-vue`.

```js
alias: { 'vue$': 'nativescript-vue' }
```

## Use Typescript

This should set up up with Typescript already. Simply rename .js files to .ts or, if using SFC, then

```vue
<template>
...
</template>

<script lang="ts">
... // typescript code here
</script>

## Use Class-style components

You can now install vue-class-components

```
npm install vue-class-components
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
