---
title: Navigation
contributors: [rigor789]
---

Most apps are made of multiple screens the users can interact with. In order to present these different screens to the user, we need a way to navigate between them. NativeScript-Vue provides the following methods to achieve this: 
* [`$navigateTo`](#)
* [`$navigateBack`](#)
* [`$showModal`](#)

In NativeScript-Vue different screens are denoted by the [`<Page>`](#) tag.

// todo: emphasize early on that `<Page>` tags are mandatory

## A basic scenario: navigating to a different `<Page>`
 
Let's say the user is presented with the default `<Page>` in our `Home.vue` component and we would like to navigate to a component we defined in `Settings.vue`:
```vue
<template>
  <Page>
    <ActionBar title="Settings" />
    <StackLayout>
      <!-- page content goes here -->
    </StackLayout>
  </Page>
</template>
```

In our Home component, we first need to import the `<Settings>` component. Most navigation is triggered by the user, in this case we will attach a `@tap` handler to a `<Button>` and call our navigation in the handler.
```vue
<template>
  <Page>
    <ActionBar title="Home" />
    <StackLayout>
      <Button text="Go to Settings" @tap="onSettingsTap" />
      <!-- page content goes here -->
    </StackLayout>
  </Page>
</template>

<script>
import Settings from './Settings'

export default {
  methods: {
    onSettingsTap() {
      this.$navigateTo(Settings)
    }
  }
}
</script>
```

[You can try this example in the Playground](https://play.nativescript.org/?template=play-vue&id=Gsxbge)

// todo: incorporate $navigateBack into the basic guide

## A basic scenario: showing a modal `<Page>`

Often times, we need to present the user with data that doesn't fit in the navigation flow. In these cases we can show a `<Page>` in a modal, completely independent of the current navigation history. 

// todo: create example and walkthrough

# Troubleshooting

// todo

```js
this.$navigateTo(Component).catch(error => console.log(error))
```

