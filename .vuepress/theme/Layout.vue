<template>
  <div>
    <TopStrip/>
    <Home/>
    <Content/>
  </div>
</template>
<script>
import TopStrip from "./components/TopStrip.vue";
import Home from "./components/Home.vue";

export default {
  components: { TopStrip, Home }
};
</script>
<style lang="stylus">
@import './styles/theme.styl';
</style>