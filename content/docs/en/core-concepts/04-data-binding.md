---
title: Data Binding
contributors: [epfromer]
---

{N} Vue supports one and two-way binding with a few syntax changes from traditional Vue.

### One-Way Binding

#### Text

Interpolation with text uses a different syntax from Vue.  See this code on the [Playground](https://play.nativescript.org/?template=play-vue&id=2I6c1p&v=14).

```Vue
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <StackLayout class="home-panel">
            <Label textWrap="true" text="What is the answer to life, the universe and everything?"
                class="h1 description-label" />
            <Label v-bind:text="`Answer: ${answer}`" />
            <Label :text="`Shorthand Answer: ${answer}`" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                answer: 42
            };
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

Note that the string is delimited by backticks, and the data item is delimited by ${}.  The string is bound to the text attribute using v-bind or its shorthand ':'.

#### JavaScript Expressions

Like Vue, [valid JavaScript expressions](https://vuejs.org/v2/guide/syntax.html#Using-JavaScript-Expressions) may be used in bindings.  See this code on the [Playground](https://play.nativescript.org/?template=play-vue&id=78TQm5&v=3).

```Vue
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <StackLayout class="home-panel">
            <Label textWrap="true" text="What is the third primary pseudoperfect number?"
                class="h1 description-label" />
            <Label :text="`Answer: ${answer + 1}`" />
            <Label :text="`Answer: ${backwardAnswer.split('').reverse().join('')}`" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                answer: 41,
                backwardAnswer: "24"
            };
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

### Two-Way Binding

https://vuejs.org/v2/guide/syntax.html

* interpolations
* two way binding
* directives
* shorthands

<div>
  <span>← <a href="/en/docs/core-concepts/application-architecture.html">Application Architecture</a></span>
  <span style="float: right;"><a href="/en/docs/core-concepts/application-lifecycle.html">Application Lifecycle</a> →</span>
</div>