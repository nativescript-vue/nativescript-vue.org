<template>
  <div>
    <TopStrip/>
    <Content/>
  </div>
</template>
<script>
import TopStrip from "../components/TopStrip.vue";

export default {
  name: 'DocsLayout',
  components: { TopStrip },

};
</script>
<style lang="stylus">
@import '../styles/theme.styl';
</style>