---
contributors: [vallemar]
---

# Template Refs

To access the elements or views of the template in Vue we have `template refs` available.

In NativeScript-Vue it is exactly the same as Vue but with one change to take into account, to access the native view we must access `.nativeView` of the reactive reference. Example.

```vue
<script lang="ts" setup>
import { ref, onMounted } from "nativescript-vue"
import { type Label } from "@nativescript/core"

const el = ref();

onMounted(() => {
  const labelView = el.value.nativeView as Label;
  labelView.text= "Change Text";
})
</script>

<template>
  <Label ref="el" text="Template Refs" />
</template>
```