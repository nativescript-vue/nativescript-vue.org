<template>
  <div class="font-sans leading-normal">
    <TopStrip/>
    <Nav/>
    <component :is="layout"></component>
  </div>
</template>
<script>
import TopStrip from "./components/TopStrip.vue";
import Nav from "./components/Nav.vue";
import HomeLayout from "./layouts/HomeLayout.vue";
import DocsLayout from "./layouts/DocsLayout.vue";

export default {
  name: "layout",
  components: { HomeLayout, DocsLayout, TopStrip, Nav },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "DocsLayout";
    }
  },
  data() {
    return {
      modalVisible: false,
      modalLoaded: false,
      isMobile: false
    };
  },
  created() {
    this._resizeListener = () => {
      this.isMobile =
        Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ) <= 768;
    };
    window.addEventListener("resize", this._resizeListener);
    this._resizeListener();
  },
  destroyed() {
    window.removeEventListener("resize", this._resizeListener);
  },
  methods: {},
  directives: {
    nav(el) {
      el.addEventListener("change", e => {
        window.location.href = e.target.value;
      });
    }
  }
};
</script>
