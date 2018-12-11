<template>
  <div class="font-sans leading-normal" :class="{'max-h-screen': modalVisible, 'overflow-hidden': modalVisible}">
    <TopStrip/>
    <component :is="layout"></component>
  </div>
</template>
<script>
import TopStrip from './components/TopStrip.vue';
import HomeLayout from "./layouts/HomeLayout.vue";
import DocsLayout from './layouts/DocsLayout.vue';

export default {
  name: 'layout',
  components: { HomeLayout, DocsLayout, TopStrip },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || 'DocsLayout'
    }
  },
};
</script>
<style>
  @import "./styles/styles.css";
</style>