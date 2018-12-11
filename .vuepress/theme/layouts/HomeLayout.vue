<template>
    <HomeBlock/>
</template>
<script>
import HomeBlock from "../components/HomeBlock.vue";

export default {
  name: 'HomeLayout',
  components: { HomeBlock },
};
</script>
<style lang="stylus">
@import '../styles/theme.styl';
</style>