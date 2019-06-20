---
title: Data Binding
contributors: [epfromer]
---

{N} Vue implements binding using the v-bind directive and its shorthand ':'.  

### Binding Text and Attributes

One way text binding uses a slightly different syntax from Vue.  In this example we bind a data item to the text attribute of [`<Label>`](/en/docs/elements/components/label).  The string is delimited by backticks, and the data item is delimited by ${}.

Try it on the [Playground](https://play.nativescript.org/?template=play-vue&id=2I6c1p).

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

The string is updated whenever the data object's `answer` property changes.  

### JavaScript Expressions

Like Vue, [valid JavaScript expressions](https://vuejs.org/v2/guide/syntax.html#Using-JavaScript-Expressions) may be used in bindings.  

See this code on the [Playground](https://play.nativescript.org/?template=play-vue&id=78TQm5).

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

### Class Binding

Class binding works the same way as attribute binding described above.  In this example, the button tap will add the highlight class to the [`<Label>`](/en/docs/elements/components/label).  

Try it on the [Playground](https://play.nativescript.org/?template=play-vue&id=Clbu17).

```Vue
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <StackLayout class="home-panel">
            <Label textWrap="true" text="What is the sum of the first 6 positive even numbers?"
                class="h1 description-label" />
            <Label :text="`Answer: ${answer}`" :class="highlighted ? 'highlight' : ''" />
            <Button text="Highlight Answer" @tap="onButtonTap" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        methods: {
            onButtonTap() {
                this.highlighted = true;
            }
        },

        data() {
            return {
                highlighted: false,
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

    .highlight {
        background-color: #FFFF00;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>
```

### Two-Way Binding

https://vuejs.org/v2/guide/syntax.html

* two way binding
* directives

<div>
  <span>← <a href="/en/docs/core-concepts/application-architecture.html">Application Architecture</a></span>
  <span style="float: right;"><a href="/en/docs/core-concepts/application-lifecycle.html">Application Lifecycle</a> →</span>
</div>