<template>
  <div>
    <TopStrip/>
    <HomeBlock/>
  </div>
</template>
<script>
import TopStrip from "../components/TopStrip.vue";
import HomeBlock from "../components/HomeBlock.vue";

export default {
  name: 'HomeLayout',
  components: { TopStrip, HomeBlock },
};
</script>
<style lang="stylus">
@import '../styles/theme.styl';
</style>