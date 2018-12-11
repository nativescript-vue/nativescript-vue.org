<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>
<script>
import HomeLayout from "./layouts/HomeLayout.vue";
import DocsLayout from './layouts/DocsLayout.vue';

export default {
  name: 'layout',
  components: { HomeLayout, DocsLayout },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || 'home'
    }
  },
};
</script>
<style lang="stylus">
@import './styles/theme.styl';
</style>